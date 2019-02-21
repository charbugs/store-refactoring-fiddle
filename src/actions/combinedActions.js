import fetch from 'node-fetch';
import {
  createManifest, updateManifest, updateWindow,
  createCompanion, removeCompanion, removeWindow,
  createWindow,
} from '.'
import * as events from '../events'


export function fetchManifest(manifestUrl) {
  return function (dispatch) {

    const { id } = dispatch(createManifest({ manifestUrl, isFetching: true }));
    return fetch(manifestUrl)
      .then(response => response.json())
      .then(json => dispatch(updateManifest(id, { manifestation: json, isFetching: false })))
      .catch(error => dispatch(updateManifest(id, { error, isFetching: false })))
  }
}

export function openNewWindow(manifestId) {
  return function (dispatch, getState) {

    const result = dispatch(createWindow({ manifestId }))
    const { manifestUrl } = getState().manifests[manifestId]
    // fire event
    dispatch(events.newWindowOpened(manifestUrl))
    // to cache the windowId
    return result
  }
}

export function incrementCanvasIndex(windowId) {
  return function (dispatch, getState) {

    const newIndex = getState().windows[windowId].canvasIndex + 1
    dispatch(updateWindow(windowId, { canvasIndex: newIndex }))
  }
}

export function popoutCompanionWindow(windowId, companionPayload) {
  return function (dispatch, getState) {

    const companionId = dispatch(createCompanion(companionPayload)).id
    const oldCompanionIds = getState().windows[windowId].companionIds || []
    const newCompanionIds = [ ...oldCompanionIds, companionId ];
    dispatch(updateWindow(windowId, { companionIds: newCompanionIds }))
  }
}

export function closeWindow (windowId) {
  return function (dispatch, getState) {

    const { companionIds } = getState().windows[windowId];
    companionIds.forEach(id => dispatch(removeCompanion(id)))
    dispatch(removeWindow(windowId))
  }
}
