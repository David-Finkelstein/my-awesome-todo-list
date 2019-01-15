const FEATURE = "[TODO_LIST]";

export const FILTER_TODOS = `${FEATURE} FILTER_TODOS`;

export const filterTodos = value => ({
    type: FILTER_TODOS,
    payload: value,
});