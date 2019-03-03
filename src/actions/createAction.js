import uuid from 'uuid/v4'

export function createTableReducerActions(actionTypes, idPrefix, defaultProps) {

  function createItem(payload, id) {
    id = id || `${idPrefix}-${uuid()}`;
    return {
      type: actionTypes.create,
      id: id,
      payload: { ...defaultProps, ...payload },
    };
  }

  function updateItem(id, payload) {
    return { type: actionTypes.update, id, payload };
  }

  function deleteItem(id) {
    return { type: actionTypes.delete, id };
  }

  function setItemOrder(payload) {
    return { type: actionTypes.order, payload };
  }

  return {
    [toCamelCase(actionTypes.create)]: createItem,
    [toCamelCase(actionTypes.update)]: updateItem,
    [toCamelCase(actionTypes.delete)]: deleteItem,
    [toCamelCase(actionTypes.order)]: setItemOrder,
  }
}

export function createSingeltonReducerActions(actionTypes) {

  function updateItem(payload) {
    return { type: actionTypes.update, payload };
  }

  return {
    [toCamelCase(actionTypes.update)]: updateItem,
  }
}

function toCamelCase(string) {
  return string
    .split('_')
    .map(word => word.toLowerCase())
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}
