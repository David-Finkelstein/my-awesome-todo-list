import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const TodoItem = (props) => {
    const { todoProperties, deleteTodo, toggleTodoStatus } = props;
    return (
        <li className="ui-state-default" key={todoProperties.id}>
            <div className={todoProperties.finished ? "checked" : "unchecked"}>
                <label onClick={toggleTodoStatus.bind(null, todoProperties.id)}>{todoProperties.text}</label>
                <Button
                    className="btn btn-sm btn-outline-danger"
                    onClick={deleteTodo.bind(null, todoProperties.id)}
                >
                    Delete
                </Button>
            </div>
        </li>
    )
};

TodoItem.propTypes = {
    todoProperties: PropTypes.shape({
        text: PropTypes.string.isRequired,
        finished: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodoStatus: PropTypes.func.isRequired,
};

export default TodoItem;
