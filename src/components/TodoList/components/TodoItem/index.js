import React from 'react'
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const { todoProperties, onDelete, onStatusChanged } = props;
    return (
        <li className="ui-state-default">
            <div className={todoProperties.finished ? "checked" : "unchecked"}>
                <label onClick={onStatusChanged.bind(null, todoProperties.id)}>{todoProperties.text}</label>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={onDelete.bind(null, todoProperties.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
};

export default TodoItem;

TodoItem.propTypes = {
    todoProperties: PropTypes.shape({
        text: PropTypes.string.isRequired,
        finished: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onStatusChanged: PropTypes.func.isRequired,
};
