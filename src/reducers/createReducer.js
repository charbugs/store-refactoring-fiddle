import { removeIn, setIn, updateIn, merge } from 'immutable';

function createReducer(actionConstant) {
  return function(state = {}, action) {
    switch (action.type) {

      case `ADD_${actionConstant}`:
        return setIn(state, [action.id], action.payload)

      case `UPDATE_${actionConstant}`:
        return updateIn(state, [action.id], orig => merge(orig, action.payload))

      case `REMOVE_${actionConstant}`:
        return removeIn(state, [action.id])

      default:
        return state
    }
  }
}

export default createReducer;
