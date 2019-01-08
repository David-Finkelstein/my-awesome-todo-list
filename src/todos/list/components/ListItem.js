import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const TodoItem = (props) => {
    const { todoProperties: { id ,finished, text }, deleteTodo, toggleTodoStatus } = props;
    return (
        <li className="ui-state-default" key={id}>
            <div className={finished ? "checked" : "unchecked"}>
                <label onClick={toggleTodoStatus.bind(null, id)}>{text}</label>
                <Link to={`/todos/${id}`}>
                    <Button className="btn btn-sm btn-outline-success">Edit</Button>
                </Link>
                <Button className="btn btn-sm btn-outline-danger" onClick={deleteTodo.bind(null, id)}>Delete</Button>
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
