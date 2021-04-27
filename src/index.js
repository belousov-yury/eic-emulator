import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import './i18n'
import './assets/css/index.css';
import './assets/css/colors.css'
import App from "./components/App";


const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
))

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App/>
      </Suspense>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
