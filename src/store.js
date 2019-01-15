import { createStore, combineReducers } from 'redux';
import list from './todos/list/list.reducer'
import wizard from './todos/wizard/wizard.reducer'

const reducer = combineReducers({ list, wizard });
const store = createStore(reducer, undefined, undefined);

export default store;
