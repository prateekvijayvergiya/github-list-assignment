import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'https://api.github.com/users'
const initialState = {
  users: {},
  isLoading: false,
}

export const getUser = createAsyncThunk('posts/search', async (username) => {
  const user = await axios
    .get(`${BASE_URL}/${username}`)
    .then(({ data }) => {
      return data
    })

  return user
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeUser: (state, action) => {
      delete state.users[action.payload]
    },

    setUser: (state, action) => {
      state.users = {...action.payload}
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        const objectToAdd = {[action.payload.login]: action.payload}
        state.users = {...state.users, ...objectToAdd}
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { removeUser, setUser } = usersSlice.actions

export const selectUsers = (state) => state.userReducer.users
export const selectIsLoading = (state) => state.userReducer.isLoading

export default usersSlice.reducer;
