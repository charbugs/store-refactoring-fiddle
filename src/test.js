
export async function test(store, actions) {
  let result

  store.dispatch(actions.updateConfig({
    theme: 'light',
    languages: {
      de: 'Deutsch',
      en: 'English',
    }
  }));

  store.dispatch(actions.updateConfig({
    languages: {
      fr: 'Francais',
    },
  }));

  /*
  * fetch new manifest
  */
  const manifestUrl = 'https://iiif.harvardartmuseums.org/manifests/object/299843'
  result = await store.dispatch(actions.fetchManifest(manifestUrl))
  const manifestId = result.id

  /*
  * open a new window and set manifest
  */
  result = store.dispatch(actions.openNewWindow(manifestId))
  const windowId = result.id

  /*
  * increment canvas index in window
  */
  store.dispatch(actions.incrementCanvasIndex(windowId))

  /*
  * create companion window for window
  * triggers window reducer AND compantion reducer
  */
  store.dispatch(actions.popoutCompanionWindow(windowId, {
    content: 'info', position: 'right'
  }))

  /*
  * close window (remove window and corresponding companion windows)
  */
  store.dispatch(actions.closeWindow(windowId))
}
