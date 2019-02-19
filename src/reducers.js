import { removeIn} from 'immutable';
import merge from 'deepmerge';
import { combineReducers } from 'redux';
import { types } from './actions';

function windowReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_WINDOW:
      return { ...state, [action.id]: action.payload };
    case types.UPDATE_WINDOW:
      return { ...state, [action.id]: merge(action.payload, state[action.id] )}
    case types.REMOVE_WINDOW:
      return removeIn(state, [action.id]);
    default:
      return state;
  }
}

function companionReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_COMPANION:
      return { ...state, [action.id]: action.payload };
    case types.REMOVE_COMPANION:
      return removeIn(state, [action.id]);
    default:
      return state;
  }
}

export default combineReducers({
  windows: windowReducer,
  companion: companionReducer
});
