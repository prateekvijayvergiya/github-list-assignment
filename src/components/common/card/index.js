
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'

import { removeUser } from '../../../app/store/reducers/userReducer'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'
import { useCallback } from 'react'

const UserCard = ({ avatar_url, name, location, followers, html_url, login, bio }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const closeIconClickHandler = useCallback((event) => {
    event.stopPropagation()
    dispatch(removeUser(login))
  },[dispatch, login])

  const cardClickHandler = () => {
    window.location.href = html_url
  }
  return (
    <Tooltip title={bio ?? 'No Bio'}>
      <Card className={classes.cardContainer} onClick={cardClickHandler}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            component="img"
            alt="user image"
            height="200"
            image={avatar_url}
          />
          <CloseIcon className={classes.closeIcon} onClick={closeIconClickHandler} />
        </CardActionArea>
        <CardContent>
          <Typography>{name}</Typography>
          <Typography className={classes.truncated}>{`Location: ${location}`}</Typography>
          <Typography>{`Followers: ${followers}`}</Typography>
        </CardContent>
      </Card>
    </Tooltip>
  )
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    width: 200,
    cursor: 'pointer',
  },
  truncated: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  actionArea: {
    position: 'relative'
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  }
}))

export default UserCard