import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { createOnAddTodoAction } from "../../action-creators/app";
import AddTodo from "../../components/AddTodo";

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: text => dispatch(createOnAddTodoAction(text)),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(AddTodo));
