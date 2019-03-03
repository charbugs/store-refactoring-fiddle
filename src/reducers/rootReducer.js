import { combineReducers } from 'redux'
import actionTypes from '../actions/actionTypes';
import { createTableReducer, createSingeltonReducer } from './createReducer'


export default combineReducers({
  manifests: createTableReducer(actionTypes.manifest),
  windows: createTableReducer(actionTypes.window),
  companions: createTableReducer(actionTypes.companion),
  config: createSingeltonReducer(actionTypes.config),
})
