import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import UserCard from '../common/card'
import NoResults from '../common/noResult'

import { selectUsers } from '../../app/store/reducers/userReducer'

const Users = () => {
  const users = useSelector(selectUsers)
  return (
    <Grid container spacing={2}>
      {Object.keys(users).length === 0 ? <NoResults /> : (
        Object.keys(users).map((item) => {
          const user = users[item]
          return <Grid item key={user.id}>
            <UserCard {...user} />
          </Grid>
        })
      )}
    </Grid>
  )
}

export default Users