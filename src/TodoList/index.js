import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from "./components/TodoItem/index";
import { onChangeTodoStatus, onDeleteTodo } from "./todoList.actions";

class TodoList extends React.Component {
    render() {
        const { todoArray, onDeleteTodo, onChangeTodoStatus } = this.props;
        return (
            <ul className="list-unstyled">
                {todoArray.map(todoProperties =>
                    TodoItem({ todoProperties, onDeleteTodo, onChangeTodoStatus})
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todoArray: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onChangeTodoStatus: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        todoArray: _.values(state.todoList.toJS()),
    };
}

const mapDispatchToProps =  {
    onDeleteTodo,
    onChangeTodoStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)