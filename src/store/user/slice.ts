import { createSlice, type PayloadAction } from '@reduxjs/toolkit' 
import { UserCredential } from 'firebase/auth'

export type UserId = string 

export interface User {
  displayName: string
  email: string
  photoUrl: string
}

export interface UserWithId extends User{
  id: UserId
}

const initialState : UserWithId = {
  id: '',
  displayName: '',
  email: '',
  photoUrl: '',
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserWithId>) => {
      state = action.payload
      return state;
    }, 
    logout : (state, action: PayloadAction<UserWithId>) => {
      state = initialState
      return state;
    }
  },
})

export default userSlice.reducer; 

export const { login, logout } =  userSlice.actions;