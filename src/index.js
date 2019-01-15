import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store'
import TodoList from './pages/TodoList'
import * as serviceWorker from './serviceWorker';
import wizardWrapper from "./pages/wizardWrapper";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={TodoList}/>
                <Route path="/new" component={wizardWrapper}/>
                <Route path={"/todos/:id"} component={wizardWrapper}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
