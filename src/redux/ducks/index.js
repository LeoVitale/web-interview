import { combineReducers } from 'redux'
import appointments from './appointments'
import family from './family'
import app from './app'

const rootReducer = combineReducers({
  appointments,
  family,
  app,
})

export default rootReducer
