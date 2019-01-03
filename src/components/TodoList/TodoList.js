import React from 'react'
import PropTypes from 'prop-types';

import Todo from "../Todo";

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
        onStatusChanged: PropTypes.func.isRequired,
    };

    render() {
        const { todos, onDelete, onStatusChanged } = this.props;
        return (
            <ul className="list-unstyled">
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        todoProperties={todo}
                        onDelete={onDelete}
                        onStatusChanged={onStatusChanged}
                    />
                )}
            </ul>
        )
    }
}
