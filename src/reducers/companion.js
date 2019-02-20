import { removeIn, setIn, updateIn, merge } from 'immutable';
import types from '../actions/types'

function companionReducer(state = {}, action) {
  switch (action.type) {

    case types.ADD_COMPANION:
      return setIn(state, [action.id], action.payload)

    case types.UPDATE_COMPANION:
      return updateIn(state, [action.id], orig => merge(orig, action.payload))

    case types.REMOVE_COMPANION:
      return removeIn(state, [action.id])

    default:
      return state
  }
}

export default companionReducer
