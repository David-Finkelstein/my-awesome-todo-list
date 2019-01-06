import React from 'react';
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap';
import TodoList from "./components/TodoList";
import './App.css';

class App extends React.Component {
    itemsLeft() {
        const { todoArray } = this.props;
        return todoArray.reduce((accumulator, current) => {
            return accumulator + !current.finished;
        }, 0);
    }

    render() {
        const { todoArray, onDeleteTodo, onChangeTodoStatus } = this.props;
        return (
            <div>
                <h1>Todos</h1>
                <hr/>
                <Link to="/new">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <Button className="btn btn-primary center-block">Add Todo</Button>
                            </div>
                        </div>
                    </div>
                </Link>
                <TodoList
                    todoArray={todoArray}
                    onDelete={onDeleteTodo}
                    onStatusChanged={onChangeTodoStatus}
                />
                <div className="todo-footer">
                    <strong>
                        <span className="count-todos">{`Items Left to do: ${this.itemsLeft()}`}</span>
                    </strong>
                </div>
            </div>
        );
    }
}

export default App;
