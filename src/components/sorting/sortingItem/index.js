import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const sortIcon = (sortKey, sortConfig) => {
  return sortConfig.key === sortKey
    ? sortConfig.direction === 'ascending'
      ? <ArrowUpwardIcon fontSize={'small'} />
      : <ArrowDownwardIcon fontSize={'small'} />
    : undefined;
}

const SortingItem = ({ sortKey, handleSortChange, sortConfig }) => {
  return (
    <Grid item onClick={() => handleSortChange(sortKey)}>
      <Typography component={'span'}>{sortKey}</Typography>
      {sortConfig && sortIcon(sortKey, sortConfig)}
    </Grid>
  )
}

export default SortingItem