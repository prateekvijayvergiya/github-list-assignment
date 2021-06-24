import Grid from '@material-ui/core/Grid'
import SortingItem from './sortingItem'

const SortingMethods = ({handleSortChange, sortConfig}) => {
  return (
    <Grid container spacing={3} alignItems={'center'}>
      <Grid item>
        Sort By:
      </Grid>
      <SortingItem {...{sortKey: 'name', handleSortChange, sortConfig}}/>
      <SortingItem {...{sortKey: 'followers', handleSortChange, sortConfig}}/>
      <SortingItem {...{sortKey: 'location', handleSortChange, sortConfig}}/>
    </Grid>
  )
}

export default SortingMethods