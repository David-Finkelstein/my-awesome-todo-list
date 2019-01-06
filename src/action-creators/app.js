import {AppActionTypes} from "../action-types/app";

export const createOnAddTodoAction = text => ({
    type: AppActionTypes.ON_ADD_TODO,
    payload: { text },
});

export const createOnDeleteTodoAction = id => ({
    type: AppActionTypes.ON_DELETE_TODO,
    payload: { id },
});

export const createOnChangeTodoStatusAction = id => ({
    type: AppActionTypes.ON_CHANGE_TODO_STATUS,
    payload: { id },
});
