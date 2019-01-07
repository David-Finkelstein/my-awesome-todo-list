import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from "./components/TodoItem/index";
import { toggleTodoStatus, deleteTodo } from "./todoList.actions";

class TodoList extends React.Component {
    render() {
        const { todoArray, deleteTodo, toggleTodoStatus } = this.props;
        return (
            <ul className="list-unstyled">
                {todoArray.map(todoProperties =>
                    TodoItem({ todoProperties, deleteTodo, toggleTodoStatus})
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todoArray: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodoStatus: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        todoArray: _.values(state.todoList.toJS()),
    };
}

const mapDispatchToProps =  {
    deleteTodo,
    toggleTodoStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)