import { TEXT_AREA_CHANGED } from "../wizard/wizard.actions";

const defaultState = '';

export default (state = defaultState, action) => {
    const {payload, type} = action;

    switch (type) {
        case TEXT_AREA_CHANGED:
            return payload;
        default:
            return state;
    }
};
