import React from 'react';

import AddTodo from "./components/AddTodo";
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
        const { todoArray, onAddTodo, onDeleteTodo, onChangeTodoStatus } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8">
                        <div className="todolist not-done">
                            <div>
                                <h1>Todos</h1>
                                <hr/>
                                <AddTodo onAddTodo={onAddTodo}/>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
