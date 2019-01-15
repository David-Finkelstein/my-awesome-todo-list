const FEATURE = "[LIST]";

export const DELETE_TODO = `${FEATURE} DELETE_TODO`;
export const TOGGLE_TODO_STATUS = `${FEATURE} TOGGLE_TODO_STATUS`;
export const FILTER_TODOS = `${FEATURE} FILTER_TODOS`;

export const filterTodos = value => ({
    type: FILTER_TODOS,
    payload: value,
});

export const deleteTodo = todoId => ({
    type: DELETE_TODO,
    payload: todoId,
});

export const toggleTodoStatus = todoId => ({
    type: TOGGLE_TODO_STATUS,
    payload: todoId,
});
