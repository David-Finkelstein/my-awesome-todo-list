import { createStore, combineReducers } from 'redux';
import list from './todos/list/list.reducer'
import wizard from './todos/wizard/wizard.reducer'
import todoListMain from './pages/todoListMain.reducer'

const reducer = combineReducers({ list, todoListMain, wizard });
const store = createStore(reducer, undefined, undefined);

export default store;
