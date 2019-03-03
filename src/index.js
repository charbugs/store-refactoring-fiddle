import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import * as actions from './actions';
import { test } from './test';

ReactDOM.render(<App />, document.getElementById('root'));

test(store, actions);
