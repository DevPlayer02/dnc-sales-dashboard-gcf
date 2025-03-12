import { configureStore } from '@reduxjs/toolkit'
import createProfileReducer from './slices/createProfile'

const store = configureStore({
  reducer: {
    createProfile: createProfileReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch

export default store
