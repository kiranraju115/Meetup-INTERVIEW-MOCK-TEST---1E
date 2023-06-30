import {
  NotFoundCard,
  NotFoundFoundImage,
  NotFoundHeading,
} from './componentStyle'

const NotFound = () => (
  <NotFoundCard>
    <NotFoundFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundHeading as="p" yes>
      We are sorry, the page you requested could not be found.
    </NotFoundHeading>
  </NotFoundCard>
)

export default NotFound
