import uuid from 'uuid/v4'
import types from './types'


const defaultProps = {

};

export function addManifest(payload) {
  return {
    type: types.ADD_MANIFEST,
    id: `manifest-${uuid()}`,
    payload: { ...defaultProps, ...payload  }
  }
}

export function updateManifest(id, payload) {
  return { type: types.UPDATE_MANIFEST, id, payload };
}

export function removeManifest(id) {
  return { type: types.REMOVE_MANIFEST, id };
}
