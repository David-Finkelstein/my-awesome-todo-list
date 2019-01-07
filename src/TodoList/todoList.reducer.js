import Immutable from 'immutable';
import { ON_CHANGE_TODO_STATUS, ON_DELETE_TODO } from "./todoList.actions";
import {ON_ADD_TODO} from "../AddTodoWizard/addTodoWizard.actions";

const defaultState = Immutable.fromJS({
    12464535: {
        text: 'Clean house',
        finished: true,
        id: 12464535
    },
    245643453: {
        text: 'Fix window',
        finished: false,
        id: 245643453
    },
});

export default (state = defaultState, action) => {
    const {payload, type} = action;

    switch (type) {
        case ON_ADD_TODO: {
            const id = new Date().getTime();
            const newTodo = Immutable.fromJS({
                text: payload,
                finished: false,
                id,
            });
            return state.set(id.toString(), newTodo);
        }
        case ON_DELETE_TODO:
            return state.delete(payload.toString());
        case ON_CHANGE_TODO_STATUS:
            return state.updateIn([payload.toString(), 'finished'], val => !val);
        default:
            return state;
    }
};
