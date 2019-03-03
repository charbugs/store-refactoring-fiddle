import { combineReducers } from 'redux'
import actionTypes from './actionTypes';
import { createTableReducer, createSingeltonReducer } from './createReducers'


export default combineReducers({
  manifests: createTableReducer(actionTypes.manifest),
  windows: createTableReducer(actionTypes.window),
  companions: createTableReducer(actionTypes.companion),
  config: createSingeltonReducer(actionTypes.config),
})
