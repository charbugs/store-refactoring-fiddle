import fetch from 'node-fetch';
import * as basics from '../reducers/basicActions';
import * as events from '../events'


export const updateConfig = payload => dispatch => {
  dispatch(basics.updateConfig(payload));
}

export const fetchManifest = manifestUrl => dispatch => {
  const { id } = dispatch(basics.createManifest({ manifestUrl, isFetching: true }));
  return fetch(manifestUrl)
    .then(response => response.json())
    .then(json => dispatch(basics.updateManifest(id, { manifestation: json, isFetching: false })))
    .catch(error => dispatch(basics.updateManifest(id, { error, isFetching: false })))
}

export const openNewWindow = manifestId => (dispatch, getState) => {
  const result = dispatch(basics.createWindow({ manifestId }))
  const { manifestUrl } = getState().manifests[manifestId]
  // fire event
  dispatch(events.newWindowOpened(manifestUrl))
  // to cache the windowId
  return result
  }

export const incrementCanvasIndex = windowId => (dispatch, getState) => {
  const newIndex = getState().windows[windowId].canvasIndex + 1
  dispatch(basics.updateWindow(windowId, { canvasIndex: newIndex }))
}

export const popoutCompanionWindow = (windowId, companionPayload) => (dispatch, getState) => {
  const companionId = dispatch(basics.createCompanion(companionPayload)).id
  const oldCompanionIds = getState().windows[windowId].companionIds || []
  const newCompanionIds = [ ...oldCompanionIds, companionId ];
  dispatch(basics.updateWindow(windowId, { companionIds: newCompanionIds }))
}

export const closeWindow = windowId => (dispatch, getState) => {
  const { companionIds } = getState().windows[windowId];
  companionIds.forEach(id => dispatch(basics.deleteCompanion(id)))
  dispatch(basics.deleteWindow(windowId))
}
