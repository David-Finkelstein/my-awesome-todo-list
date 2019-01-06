import { connect } from 'react-redux';
import _ from 'lodash';

import { createOnChangeTodoStatusAction, createOnDeleteTodoAction } from "../../action-creators/app";
import App from "../../App";

function mapStateToProps(state) {
    return {
        todoArray: _.values(state.app.toJS()),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteTodo: id => dispatch(createOnDeleteTodoAction(id)),
        onChangeTodoStatus: id => dispatch(createOnChangeTodoStatusAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
