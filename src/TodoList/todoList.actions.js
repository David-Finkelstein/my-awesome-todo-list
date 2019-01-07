const FEATURE = "[TODO_LIST]";

export const ON_DELETE_TODO = `${FEATURE} ON_DELETE_TODO`;
export const ON_CHANGE_TODO_STATUS = `${FEATURE} ON_CHANGE_TODO_STATUS`;

export const onDeleteTodo = todoId => ({
    type: ON_DELETE_TODO,
    payload: todoId,
});

export const onChangeTodoStatus = todoId => ({
    type: ON_CHANGE_TODO_STATUS,
    payload: todoId,
});
