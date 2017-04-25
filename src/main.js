import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style/style.css';
// import store from './state/store';
import todoApp from './state/reducers';
import App from './components/app';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
