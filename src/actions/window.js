import uuid from 'uuid/v4'
import types from './types'


const defaultProps = {
  canvasIndex: 0,
  collectionIndex: 0,
  manifestId: null,
  rangeId: null,
  thumbnailNavigationPosition: 'bottom',
  xywh: [0, 0, 400, 400],
  rotation: null,
  view: 'single',
};

export function addWindow(payload) {
  return {
    type: types.ADD_WINDOW,
    id: `window-${uuid()}`,
    payload: { ...defaultProps, ...payload  }
  }
}

export function updateWindow(id, payload) {
  return { type: types.UPDATE_WINDOW, id, payload };
}

export function removeWindow(id) {
  return { type: types.REMOVE_WINDOW, id };
}
