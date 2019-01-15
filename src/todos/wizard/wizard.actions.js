const FEATURE = "[WIZARD]";

export const ADD_TODO = `${FEATURE} ADD_TODO`;
export const EDIT_TODO_TEXT = `${FEATURE} EDIT_TODO_TEXT`;
export const TEXT_AREA_CHANGED = `${FEATURE} TEXT_AREA_CHANGED`;

export const addTodo = payload => ({
    type: ADD_TODO,
    payload,
});

export const editTodo = (text,todoId) => ({
    type: EDIT_TODO_TEXT,
    payload: { text, todoId },
});

export const textAreaChanged = payload => ({
    type: TEXT_AREA_CHANGED,
    payload,
});
