import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import RegisterContext from './context/context'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    userName: '',
    topicId: topicsList[0].id,
    displayValue: topicsList[0].displayText,
    isRegistered: false,
    errorMsg: '',
  }

  onChangeOfUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeOfTopic = event => {
    this.setState({topicId: event.target.value})
  }

  onRegisterNow = (event, props) => {
    event.preventDefault()
    const {userName, topicId} = this.state
    const filterDisplayTextValue = topicsList.filter(
      eachTopic => eachTopic.id === topicId,
    )
    const {history} = props
    if (userName !== '' && topicId !== '') {
      this.setState(prevState => ({
        displayValue: filterDisplayTextValue[0].displayText,
        isRegistered: !prevState.isRegistered,
      }))

      history.replace('/')
    } else {
      this.setState({errorMsg: 'Please enter your name'})
    }
  }

  render() {
    const {userName, topicId, displayValue, errorMsg, isRegistered} = this.state

    return (
      <RegisterContext.Provider
        value={{
          userName,
          topicId,
          displayValue,
          isRegistered,
          errorMsg,
          onChangeOfUserName: this.onChangeOfUserName,
          onChangeOfTopic: this.onChangeOfTopic,
          onRegisterNow: this.onRegisterNow,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
