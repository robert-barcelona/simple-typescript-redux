import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

