import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setUser, selectUsers } from '../../../app/store/reducers/userReducer'

const useSortItems = () => {
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  const [sortConfig, setSortConfig] = useState(null)

  const sortedItems = useMemo(() => {
    const sortableItems = Object.keys(users)
    const sortedUsers = {}
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const firstObjectTocompare = users[a]
        const secondObjectToCompare = users[b]
        if (firstObjectTocompare[sortConfig.key] < secondObjectToCompare[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (firstObjectTocompare[sortConfig.key] > secondObjectToCompare[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
      .forEach((key) => {
        sortedUsers[key] = users[key]
      })
    }
    return sortedUsers
  }, [sortConfig])

  useEffect(() => dispatch(setUser(sortedItems)),[sortedItems, dispatch])

  const handleSortChange = useCallback( (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  },[sortConfig])

  return { handleSortChange, sortConfig };
}

export default useSortItems