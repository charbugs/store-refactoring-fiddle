import { combineReducers } from 'redux'
import createReducer from './createReducer'
// import windowReducer from './window'
// import companionReducer from './companion'
// import manifestReducer from './manifest'

export default combineReducers({
  manifest: createReducer('MANIFEST'),
  windows: createReducer('WINDOW'),
  companions: createReducer('COMPANION')
})
