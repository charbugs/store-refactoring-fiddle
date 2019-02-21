import { createCreateAction, createUpdateAction, createRemoveAction } from './createAction'

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

export const createWindow = createCreateAction('CREATE_WINDOW', 'window', windowDefaults)
export const updateWindow = createUpdateAction('UPDATE_WINDOW')
export const removeWindow = createRemoveAction('REMOVE_WINDOW')

const manifestDefaults = {

};

export const createManifest = createCreateAction('CREATE_MANIFEST', 'manifest', manifestDefaults)
export const updateManifest = createUpdateAction('UPDATE_MANIFEST')
export const removeManifest = createRemoveAction('REMOVE_MANIFEST')

const companionDefaults = {

}

export const createCompanion = createCreateAction('CREATE_COMPANION', 'companion', companionDefaults)
export const updateCompanion = createUpdateAction('UPDATE_COMPANION')
export const removeCompanion = createRemoveAction('REMOVE_COMPANION')
