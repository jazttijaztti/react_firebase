import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/reset.css';
import { createStore , applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import fbConfig from './config/firebase'
//import thunk from 'redux-thunk'
//import { reduxFirestore, getFirestore } from 'redux-firestore'
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import App from './component/App';
import * as serviceWorker from './serviceWorker';
import HtmlWebpackPlugin from 'html-webpack-plugin'

//reducerの機能をProviderでstoreの中にいれて全コンポーネントで使えるようにする
//thunkを使ってfirebasestoreをstoreに入れなくても今の所動く
const store = createStore(reducer ,
  /*compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )*/
);
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
