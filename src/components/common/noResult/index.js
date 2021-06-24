import noUserLogo from '../../../assets/nouser.jpg'

const NoResults = () => {
  return (
    <figure>
      <img alt='no user' src={noUserLogo} />
      <figcaption>
        No Users Found
      </figcaption>
    </figure>
  )
}

export default NoResults