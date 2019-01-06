import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import store from './store/store'
import AppContainer from "./containers/AppContainer/AppContainer";
import AddTodoContainer from "./containers/AddTodoContainer/AddTodoContainer";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"/>
                        <div className="col-md-8">
                            <div className="todolist not-done">
                                <Route exact path="/" component={AppContainer}/>
                                <Route path="/new" component={AddTodoContainer}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
