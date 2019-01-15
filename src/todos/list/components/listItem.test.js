import React from 'react';
import { mount, shallow } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ListItem from './ListItem'

const mockProps = {
    deleteTodo: jest.fn(),
    toggleTodoStatus: jest.fn(),
    todoProperties: {
        text: 'Clean house',
        finished: true,
        id: 12464535
    }
};

describe('<ListItem />', () => {
    it('checks rendering with new props', () => {
        const newTodoProperties = {
            text: 'Clean house',
            finished: true,
            id: 12464535
        };
        const wrapper = mount(
            <Router>
                <Route render={() => <ListItem {...mockProps}/>}/>
            </Router>
        );

        expect(wrapper.find('label')).toBeDefined();
        expect(wrapper.find('label').text()).toBe(mockProps.todoProperties.text);

        wrapper.setProps({todoProperties: newTodoProperties});
        expect(wrapper.find('label').text()).toBe(newTodoProperties.text);
    });

    it('checks the functionality of delete item', () => {
        const wrapper = shallow(<ListItem {...mockProps}/>);
        const deleteBtn = wrapper.find('.btn').at(1);

        expect(mockProps.deleteTodo.mock.calls.length).toBe(0);
        deleteBtn.props().onClick();
        expect(mockProps.deleteTodo.mock.calls.length).toBe(1);
    });

    it('checks the functionality of toggle', () => {
        const wrapper = shallow(<ListItem {...mockProps}/>);
        const toogleText = wrapper.find('label');

        expect(mockProps.toggleTodoStatus.mock.calls.length).toBe(0);
        toogleText.props().onClick();
        expect(mockProps.toggleTodoStatus.mock.calls.length).toBe(1);
    });

    it('takes a snapshot of the component and check if the prev snapshot equals to the current', () => {
        const wrapper = shallow(<ListItem {...mockProps}/>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
    });
});
