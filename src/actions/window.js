import uuid from 'uuid/v4'
import types from './types'


export function addWindow(payload) {
  return { type: types.ADD_WINDOW, id: `window-${uuid()}`, payload }
}

export function updateWindow(id, payload) {
  return { type: types.UPDATE_WINDOW, id, payload };
}

export function removeWindow(id) {
  return { type: types.REMOVE_WINDOW, id };
}
