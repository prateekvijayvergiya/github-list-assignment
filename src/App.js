import { Fragment, useCallback, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { getUser, selectIsLoading } from './app/store/reducers/userReducer'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Users from './components/users'
import Spacer from './components/common/spacer'
import useSortItems from "./components/common/hooks/useSortItems"
import SortingMethods from './components/sorting'

const App = () => {
  const [username, setUsername] = useState('')
  const isLoading = useSelector(selectIsLoading)
  const { handleSortChange, sortConfig } = useSortItems()
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    setUsername(event.target.value)
  }

  const onAddClickHandler = useCallback(() => {
    dispatch(getUser(username))
    setUsername('')
  },[dispatch, username])
  
  return (
    <Fragment>
      <TextField onChange={handleInputChange} value={username} placeholder={'Enter github username'} />
      <Button variant="contained" color="primary" onClick={onAddClickHandler} disabled={username === ''}>
        Add
      </Button>
      <Spacer />
      <SortingMethods {...{ handleSortChange, sortConfig }} />
      {isLoading ? <CircularProgress /> : <Users />}
    </Fragment>
  )
}

export default App;
