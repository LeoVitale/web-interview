import { combineReducers } from 'redux'
import appointments from './appointments'
import family from './family-members'

const rootReducer = combineReducers({
  appointments,
  family,
})

export default rootReducer
