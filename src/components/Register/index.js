import RegisterContext from '../../context/context'

import Header from '../Header'

import {
  RegisterContainer,
  RegisterBody,
  RegisterImage,
  RegisterForm,
  RegisterHeading,
  Label,
  UserInput,
  Option,
  RegisterButton,
  Error,
} from './componentStyle'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        userName,
        topicId,
        errorMsg,
        onChangeOfUserName,
        onChangeOfTopic,
        onRegisterNow,
      } = value
      const onSubmitForm = event => {
        onRegisterNow(event, props)
      }
      return (
        <RegisterContainer>
          <Header />
          <RegisterBody>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterForm onSubmit={onSubmitForm}>
              <RegisterHeading>Let us Join</RegisterHeading>
              <Label htmlFor="name-id">NAME</Label>
              <UserInput
                type="text"
                id="name-id"
                value={userName}
                onChange={onChangeOfUserName}
              />
              <Label htmlFor="topic-id">TOPICS</Label>
              <UserInput
                as="select"
                id="topic-id"
                value={topicId}
                onChange={onChangeOfTopic}
              >
                {topicsList.map(eachTopic => (
                  <Option key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </Option>
                ))}
              </UserInput>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {errorMsg !== '' && <Error>{errorMsg}</Error>}
            </RegisterForm>
          </RegisterBody>
        </RegisterContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
