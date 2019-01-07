const FEATURE = "[WIZARD]";

export const ADD_TODO = `${FEATURE} ADD_TODO`;
export const addTodo = payload => ({
    type: ADD_TODO,
    payload,
});
