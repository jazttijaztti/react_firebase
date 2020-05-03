import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/reset.css';
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

import App from './component/App';
import * as serviceWorker from './serviceWorker';

//reducerの機構をProviderでstoreの中にいれて全コンポーネントで使えるようにする
const store = createStore(reducer , applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
