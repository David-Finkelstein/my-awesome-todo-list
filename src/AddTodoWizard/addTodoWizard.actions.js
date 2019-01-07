const FEATURE = "[WIZARD]";

export const ON_ADD_TODO = `${FEATURE} ON_ADD_TODO`;
export const onAddTodo = payload => ({
    type: ON_ADD_TODO,
    payload,
});
