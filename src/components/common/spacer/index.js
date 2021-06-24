import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Spacer = ({spacing = 3}) => {
  const classes = useStyles({ spacing })
  return (
    <div className={classes.root}/>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    height: props => `${props.spacing * 8}px`,
  },
}))

export default Spacer