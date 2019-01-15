import Immutable from 'immutable';
import { TOGGLE_TODO_STATUS, DELETE_TODO, FILTER_TODOS } from "./list.actions";
import { ADD_TODO, EDIT_TODO_TEXT } from "../wizard/wizard.actions";

const defaultState = Immutable.fromJS({
    todoList: {
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
    },
    filterBy: '',
});

export default (state = defaultState, action) => {
    const {payload, type} = action;

    switch (type) {
        case ADD_TODO: {
            const id = new Date().getTime();
            const newTodo = Immutable.fromJS({
                text: payload,
                finished: false,
                id,
            });
            return state.setIn(['todoList', id.toString()], newTodo);
        }
        case DELETE_TODO:
            return state.deleteIn(['todoList', payload.toString()]);
        case TOGGLE_TODO_STATUS:
            return state.updateIn(['todoList', payload.toString(), 'finished'], val => !val);
        case EDIT_TODO_TEXT:
            return state.updateIn(['todoList', payload.todoId, 'text'], () => payload.text)
                .updateIn([payload.todoId, 'finished'], () => false);
        case FILTER_TODOS:
            return state.setIn(['filterBy'], payload);
        default:
            return state;
    }
};
