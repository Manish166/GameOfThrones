/**
 * Created by Manish on 8/3/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import HomePage from '../components/HomePage'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'
import initialState from '../redux/initialState'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory();
let store =  configureStore(initialState);

ReactDOM.render(
    <Provider store = {store}>
        <Router history={customHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
