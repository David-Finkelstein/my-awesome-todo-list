import { connect } from 'react-redux';
import _ from 'lodash';

import App from "../../App";
import {
    createOnAddTodoAction,
    createOnChangeTodoStatusAction,
    createOnDeleteTodoAction
} from "../../action-creators/app";

function mapStateToProps(state) {
    return {
        todoArray: _.values(state.app.toJS()),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: text => dispatch(createOnAddTodoAction(text)),
        onDeleteTodo: id => dispatch(createOnDeleteTodoAction(id)),
        onChangeTodoStatus: id => dispatch(createOnChangeTodoStatusAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);