import React from 'react';
import { mount } from "enzyme";
import immutable from "immutable";
import { Provider } from "react-redux";
import { mountToJson } from "enzyme-to-json";
import {combineReducers, createStore} from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from './index'

const reducer = combineReducers({ todoList: () => { return immutable.fromJS({}) } });
const store = createStore(reducer, undefined, undefined);

describe('<List />', () => {
    it('takes a snapshot of the component and check if the prev snapshot equals to the current', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Router>
                    <Route exact path="/" render={() => <List todoArray={[]}/>}/>
                </Router>
            </Provider>
        );

        expect(mountToJson(wrapper)).toMatchSnapshot();
    });
});