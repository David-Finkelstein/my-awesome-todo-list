import React from 'react';
import { mount } from "enzyme";
import immutable from "immutable";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { mountToJson } from "enzyme-to-json";
import { createBrowserHistory } from 'history';
import { createStore, combineReducers } from 'redux';

import TodoWizard from './index';

const history = createBrowserHistory();
const reducer = combineReducers({ todoList: () => { return immutable.fromJS({}) } });
const store = createStore(reducer, undefined, undefined);
const mockFn = jest.fn();
const mockProps = {
    callback: mockFn,
    title: '',
    btnText: '',
};

describe('<TodoWizard />', () => {
    it('checks the functionality of delete/edit item according to the callback function that passed', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Router history={history}>
                    <TodoWizard {...mockProps}/>
                </Router>
            </Provider>
        );

        const deleteOrEditBtn = wrapper.find('Button').at(0);
        expect(mockProps.callback.mock.calls.length).toBe(0);
        deleteOrEditBtn.props().onClick();
        expect(mockProps.callback.mock.calls.length).toBe(1);

    });

    it('takes a snapshot of the component and check if the prev snapshot equals to the current', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Router history={history}>
                    <TodoWizard {...mockProps}/>
                </Router>
            </Provider>);
        expect(mountToJson(wrapper.debug())).toMatchSnapshot();
    });
});