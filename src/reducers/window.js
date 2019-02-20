import { removeIn, setIn, updateIn, merge } from 'immutable';
import types from '../actions/types';

function windowReducer(state = {}, action) {
  switch (action.type) {

    case types.ADD_WINDOW:
      return setIn(state, [action.id], action.payload)

    case types.UPDATE_WINDOW:
      return updateIn(state, [action.id], orig => merge(orig, action.payload))

    case types.REMOVE_WINDOW:
      return removeIn(state, [action.id])

    default:
      return state
  }
}

export default windowReducer
