import uuid from 'uuid/v4'


export function createCreateAction(type, prefix, defaults) {
  return (payload) => ({
    type: type,
    id: `${prefix}-${uuid()}`,
    payload: { ...defaults, ...payload  }
  })
}

export function createUpdateAction(type) {
  return (id, payload) => ({ type, id, payload })
};

export function createRemoveAction(type) {
  return (id) => ({ type, id })
}
