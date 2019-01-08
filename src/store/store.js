import { createStore, combineReducers } from 'redux';
import todoList from '../TodoList/todoList.reducer'

const reducer = combineReducers({ todoList });
const store = createStore(reducer, undefined, undefined);

export default store;
