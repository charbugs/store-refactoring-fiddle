import deepmerge from 'deepmerge';

export function createTableReducer(actionTypes) {
  return function(state = { order: [] }, action) {
    switch (action.type) {

      case actionTypes.create:
        return { ...state, [action.id]: action.payload }

      case actionTypes.update:
        return { ...state, [action.id]: deepmerge(state[action.id], action.payload) }

      case actionTypes.delete:
        return Object.keys(state).reduce((object, key) => {
          if (key !== action.id) {
            object[key] = state[key]; // eslint-disable-line no-param-reassign
          }
          return object;
        }, {});

      case actionTypes.order:
        return { ...state, order: action.payload }

      default:
        return state
    }
  }
}

export function createSingeltonReducer(actionTypes) {
  return function(state = {}, action) {
    switch (action.type) {
      case actionTypes.update:
        return deepmerge(state, action.payload);
      default:
        return state;
    }
  }
}
