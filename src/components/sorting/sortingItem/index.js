import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { makeStyles } from '@material-ui/core/styles'

const sortIcon = (sortKey, sortConfig) => {
  return sortConfig.key === sortKey
    ? sortConfig.direction === 'ascending'
      ? <ArrowUpwardIcon fontSize={'small'} />
      : <ArrowDownwardIcon fontSize={'small'} />
    : undefined;
}

const SortingItem = ({ sortKey, handleSortChange, sortConfig }) => {
  const classes = useStyles()
  return (
    <Grid item onClick={() => handleSortChange(sortKey)} className={classes.container}>
      <Typography component={'span'}>{sortKey}</Typography>
      {sortConfig && sortIcon(sortKey, sortConfig)}
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    cursor: 'pointer'
  }
}))

export default SortingItem