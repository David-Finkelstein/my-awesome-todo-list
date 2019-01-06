import Immutable from 'immutable';
import {AppActionTypes} from "../../action-types/app";

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
    const { payload } = action;
    let newState = state;

    switch (action.type) {
        case AppActionTypes.ON_ADD_TODO:
            const id =  new Date().getTime();
            const newTodo = Immutable.fromJS({
                text: payload.text,
                finished: false,
                id,
            });
            newState = newState.set(id.toString(), newTodo);
            break;
        case AppActionTypes.ON_DELETE_TODO:
            newState = newState.delete(payload.id.toString());
            break;
        case AppActionTypes.ON_CHANGE_TODO_STATUS:
            newState = newState.updateIn([payload.id.toString(),'finished'], val => !val);
            break;
        default:
            return newState;
    }
    return newState;
};