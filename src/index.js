import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import * as actions from './actions';

const logState = () => console.log(store.getState());

const windowId = store.dispatch(actions.addWindow({x: 3, y: 5})).id;
store.dispatch(actions.createWindowCompanion(windowId, { content: 'info' }));
logState();
store.dispatch(actions.closeWindow(windowId));
logState();

ReactDOM.render(<App />, document.getElementById('root'));
