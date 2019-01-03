import React from 'react';
import _ from 'lodash';

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import './App.css';

class App extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            todoArray: [
                {
                    text: 'Clean house',
                    finished: true,
                    id: 12464535
                },
                {
                    text: 'Fix window',
                    finished: false,
                    id: 245643453
                },
            ],
        };

        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onStatusChanged = this.onStatusChanged.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onDeleteTodo(id) {
        const { todoArray } = this.state;
        this.setState({ todoArray: _.remove(todoArray, todo => todo.id !== id)});
    }

    itemsLeft() {
        const { todoArray } = this.state;
        return todoArray.reduce((accumulator, current) => {
            return accumulator + !current.finished;
        }, 0);
    }

    onStatusChanged(id) {
        let { todoArray } = this.state;
        let objIndex = todoArray.findIndex(obj => obj.id === id);

        todoArray[objIndex].finished = !todoArray[objIndex].finished;
        this.setState({ todoArray });
    }

    onAddTodo(newTodo) {
        const { todoArray } = this.state;
        this.setState({ todoArray: [...todoArray, newTodo] });
    }

    render() {
        const { todoArray } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8">
                        <div className="todolist not-done">
                            <div>
                                <h1>Todos</h1>
                                <hr/>
                                <AddTodo onAddTodo={this.onAddTodo}/>
                                <TodoList
                                    todoArray={todoArray}
                                    onDelete={this.onDeleteTodo}
                                    onStatusChanged={this.onStatusChanged}
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
