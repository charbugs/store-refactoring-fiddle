import uuid from 'uuid/v4'
import types from './types'

const defaultProps = {

};

export function addCompanion(payload) {
  return {
    type: types.ADD_COMPANION,
    id: `companion-${uuid()}`,
    payload: { ...defaultProps, ...payload  }
  }
}

export function updateCompanion(id, payload) {
  return { type: types.UPDATE_COMPANION, id, payload };
}

export function removeCompanion(id) {
  return { type: types.REMOVE_COMPANION, id };
}
