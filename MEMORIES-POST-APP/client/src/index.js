import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import App from "./App";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// // import { reducers } from './reducers';
// import rootReducer from "./reducers/rootReducer"
// import App from './App';
// import './index.css';

// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );
