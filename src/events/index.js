
export function newWindowOpened(manifestUrl) {
  return { type: 'EVENT_NEW_WINDOW_OPENED', manifestUrl }
}

export function canvasIndexIncremented(manifestUrl, canvasIndex) {
  return { type: 'CANVAS_INDEX_INCREMENTED', manifestUrl, canvasIndex }
}
