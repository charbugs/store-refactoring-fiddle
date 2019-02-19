import uuid from 'uuid/v4';

export const types = {
  ADD_WINDOW: 'ADD_WINDOW',
  UPDATE_WINDOW: 'UPDATE_WINDOW',
  REMOVE_WINDOW: 'REMOVE_WINDOW',
  ADD_COMPANION: 'ADD_COMPANION',
  REMOVE_COMPANION: 'REMOVE_COMPANION'
}

/******** WINDOWS ********/

export function addWindow(payload) {
  return { type: types.ADD_WINDOW, id: `window-${uuid()}`, payload }
}

export function updateWindow(id, payload) {
  return { type: types.UPDATE_WINDOW, id, payload };
}

export function removeWindow(id) {
  return { type: types.REMOVE_WINDOW, id };
}

/******** COMPANION ********/

export function addCompanion(payload) {
  return { type: types.ADD_COMPANION, id: `companion-${uuid()}`, payload };
}

export function removeCompanion(id) {
  return { type: types.REMOVE_COMPANION, id };
}

/********* MIXED ***********/

export function createWindowCompanion(windowId, companionPayload) {
  return function(dispatch) {
    const companionId = dispatch(addCompanion(companionPayload)).id;
    dispatch(updateWindow(windowId, { companionId }));
  }
}

export const closeWindow = windowId => {
  return (dispatch, getState) => {
    const { companionId } = getState().windows[windowId];
    dispatch(removeCompanion(companionId));
    dispatch(removeWindow(windowId));
  }
}

// fetch manifest
// set canvas index
