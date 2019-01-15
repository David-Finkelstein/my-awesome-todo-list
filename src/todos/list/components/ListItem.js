import React from 'react'
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '@guestyci/atomic-design/dist/components';
import { Link } from 'react-router-dom'


class TodoItem extends React.Component {
    constructor(props){
        super(props);

        this.onTodoDelete = this.onTodoDelete.bind(this);
        this.onToggleTodoStatus = this.onToggleTodoStatus.bind(this);
    }

    onTodoDelete() {
        const { todoProperties: { id }, deleteTodo} = this.props;
        deleteTodo(id);
    }

    onToggleTodoStatus() {
        const { todoProperties: { id }, toggleTodoStatus} = this.props;
        toggleTodoStatus(id);
    }

    render(){
        const { todoProperties: { id ,finished, text }} = this.props;

        return (
            <li className="ui-state-default bg-white border-0 border-bottom-1 pt-3 pr-0" key={id}>
                <div className={cn({"checked": finished})}>
                    <label onClick={this.onToggleTodoStatus}>{text}</label>
                    <Link to={`/todos/${id}`}>
                        <Button className="btn btn-sm ml-5" color="success">Edit</Button>
                    </Link>
                    <Button className="btn btn-sm ml-5" onClick={this.onTodoDelete} color="danger">Delete</Button>
                </div>
            </li>
        );
    }
}

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
