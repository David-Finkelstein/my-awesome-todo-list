import { createStore, combineReducers } from 'redux';
import todoList from './todos/list/list.reducer'

const reducer = combineReducers({ todoList });
const store = createStore(reducer, undefined, undefined);

export default store;
