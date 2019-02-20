import { combineReducers } from 'redux'
import windowReducer from './window'
import companionReducer from './companion'
import manifestReducer from './manifest'

export default combineReducers({
  manifest: manifestReducer,
  windows: windowReducer,
  companions: companionReducer
})
