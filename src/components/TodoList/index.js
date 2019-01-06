import React from 'react'
import PropTypes from 'prop-types';
import TodoItem from "./components/TodoItem";

class TodoList extends React.Component {
    render() {
        const { todoArray, onDelete, onStatusChanged } = this.props;
        return (
            <ul className="list-unstyled">
                {todoArray.map(todoProperties =>
                    TodoItem({ todoProperties, onDelete, onStatusChanged})
                )}
            </ul>
        )
    }
}

export default TodoList;

TodoList.propTypes = {
    todoArray: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onStatusChanged: PropTypes.func.isRequired,
};
