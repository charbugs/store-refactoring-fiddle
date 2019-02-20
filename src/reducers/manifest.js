import { removeIn, setIn, updateIn, merge } from 'immutable';
import types from '../actions/types'

function manifestReducer(state = {}, action) {
  switch (action.type) {

    case types.ADD_MANIFEST:
      return setIn(state, [action.id], action.payload)

    case types.UPDATE_MANIFEST:
      return updateIn(state, [action.id], orig => merge(orig, action.payload))

    case types.REMOVE_MANIFEST:
      return removeIn(state, [action.id])

    default:
      return state
  }
}

export default manifestReducer
