import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import cn from 'classnames';

const TodoItem = (props) => {
    const { todoProperties: { id ,finished, text }, deleteTodo, toggleTodoStatus } = props;
    return (
        <li className="ui-state-default bg-white border-0 border-bottom-1 pt-3 pr-0" key={id}>
            <div className={cn({"checked": finished})}>
                <label onClick={toggleTodoStatus.bind(null, id)}>{text}</label>
                <Link to={`/todos/${id}`}>
                    <Button className="btn btn-sm btn-outline-success ml-5">Edit</Button>
                </Link>
                <Button className="btn btn-sm btn-outline-danger ml-5" onClick={deleteTodo.bind(null, id)}>Delete</Button>
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
