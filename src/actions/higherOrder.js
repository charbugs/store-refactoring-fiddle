import { addWindow, updateWindow, removeWindow } from './window'
import { addCompanion, updateCompanion, removeCompanion } from './companion'
import { addManifest, updateManifest, removeManifest } from './manifest'
import fetch from 'node-fetch';


export function fetchManifest(manifestUrl) {
  return function (dispatch) {
    const { id } = dispatch(addManifest({ manifestUrl, isFetching: true }));

    return fetch(manifestUrl)
      .then(response => response.json())
      .then(json => dispatch(updateManifest(id, { manifestation: json, isFetching: false })))
      .catch(error => dispatch(updateManifest(id, { error, isFetching: false })))
  }
}

export function incrementCanvasIndex(windowId) {
  return function (dispatch, getState) {
    const newIndex = getState().windows[windowId].canvasIndex + 1
    dispatch(updateWindow(windowId, { canvasIndex: newIndex }))
  }
}

export function createWindowCompanion(windowId, companionPayload) {
  return function (dispatch, getState) {
    const companionId = dispatch(addCompanion(companionPayload)).id

    const oldCompanionIds = getState().windows[windowId].companionIds || []
    const newCompanionIds = [ ...oldCompanionIds, companionId ];
    dispatch(updateWindow(windowId, { companionIds: newCompanionIds }))
  }
}

export function closeWindow (windowId) {
  return function (dispatch, getState) {
    const { companionIds } = getState().windows[windowId];
    if (companionIds) {
      companionIds.forEach(id => dispatch(removeCompanion(id)))
    }
    dispatch(removeWindow(windowId))
  }
}
