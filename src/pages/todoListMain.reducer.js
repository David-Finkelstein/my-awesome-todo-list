import { FILTER_TODOS } from "./todoListMain.actions";

const defaultState = '';

export default (state = defaultState, action) => {
    const {payload, type} = action;

    switch (type) {
        case FILTER_TODOS:
            return payload;
        default:
            return state;
    }
};
