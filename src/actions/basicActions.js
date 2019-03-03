import { createTableReducerActions } from './createAction';
import actionTypes from './actionTypes';

const windowDefaults = {
  canvasIndex: 0,
  collectionIndex: 0,
  manifestId: null,
  rangeId: null,
  companionIds: [],
  thumbnailNavigationPosition: 'bottom',
  xywh: [0, 0, 400, 400],
  rotation: null,
  view: 'single',
}

export const {
  createWindow, updateWindow,
  deleteWindow, setWindowOrder
} = createTableReducerActions(actionTypes.window, 'window', windowDefaults);

export const {
  createManifest, updateManifest,
  deleteManifest, setManifestOrder
} = createTableReducerActions(actionTypes.manifest, 'manifest');

export const {
  createCompanion, updateCompanion,
  deleteCompanion, setCompanionOrder
} = createTableReducerActions(actionTypes.companion, 'companion');
