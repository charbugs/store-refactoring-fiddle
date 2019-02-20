import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import * as actions from './actions';


async function test() {
  let result

  /* fetch new manifest */
  const manifestUrl = 'https://iiif.harvardartmuseums.org/manifests/object/299843'
  result = await store.dispatch(actions.fetchManifest(manifestUrl))
  const manifestId = result.id

  /* create new window */
  result = store.dispatch(actions.addWindow({
    canvasIndex: 0, collectionIndex: 0, manifestId: null
  }))
  const windowId = result.id

  /* set reference to manifest in window */
  store.dispatch(actions.updateWindow(windowId, { manifestId }))

  /* increment canvas index in window */
  store.dispatch(actions.incrementCanvasIndex(windowId))

  /* create companion window for window
     triggers window reducer AND compantion reducer */
  store.dispatch(actions.createWindowCompanion(windowId, {
    content: 'info', position: 'right'
  }))

  /* close window (remove window and corresponding companion windows) */
  store.dispatch(actions.closeWindow(windowId))
}


ReactDOM.render(<App />, document.getElementById('root'));
test();
