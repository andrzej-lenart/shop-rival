import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {getAllProducts, getProductCategories} from './actions/productActions';

import './styles/rival';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const store = configureStore();
store.dispatch(getAllProducts());
store.dispatch(getProductCategories());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    ,
    document.getElementById('app')
);