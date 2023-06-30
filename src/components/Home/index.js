import RegisterContext from '../../context/context'

import Header from '../Header'

import {
  BgContainer,
  MeetupCard,
  Heading,
  Paragraph,
  LinkEl,
  Button,
  RegisterImage,
} from './componentStyle'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {userName, displayValue, isRegistered} = value
      const addHeadingContent = isRegistered
        ? `Hello ${userName}`
        : 'Welcome to Meetup'
      const addParagraphContent = isRegistered
        ? `Welcome to ${displayValue}`
        : 'Please Register for the topic'

      return (
        <BgContainer>
          <Header />
          <MeetupCard>
            <Heading isRegistered={isRegistered}>{addHeadingContent}</Heading>
            <Paragraph isRegistered={isRegistered}>
              {addParagraphContent}
            </Paragraph>
            {isRegistered === false && (
              <LinkEl to="/register">
                <Button type="button">Register</Button>
              </LinkEl>
            )}
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </MeetupCard>
        </BgContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
