import React from 'react';
import _ from 'lodash';

import TodoList from "./components/TodoList";

import './App.css';

const defaultState = {
    todos: [
        {
            text: "Clean house",
            finished: true,
            id: 12464535
        },
        {
            text: "Fix window",
            finished: false,
            id: 245643453
        },
    ]
};

export default class App extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            ...defaultState,
            textAreaValue: undefined,
        };
        this.textArea = React.createRef();


        this._onDeleteTodo = this._onDeleteTodo.bind(this);
        this._onStatusChanged = this._onStatusChanged.bind(this);
        this._onTextAreaChanged = this._onTextAreaChanged.bind(this);
        this._onAddTodo = this._onAddTodo.bind(this);
    }

    render() {
        const { todos, textAreaValue } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <div className="todolist not-done">
                            <div>
                                <h1>Todos</h1>
                                <div>
                                    <textarea
                                        className="form-control"
                                        placeholder="New todo" rows="3"
                                        onChange={this._onTextAreaChanged}
                                        ref={this.textArea}
                                    />
                                    <button
                                        className="btn btn-outline-success add-todo"
                                        onClick={this._onAddTodo} disabled={!textAreaValue}
                                    >
                                        Add Todo
                                    </button>
                                </div>
                                <hr/>
                                <TodoList todos={todos} onDelete={this._onDeleteTodo} onStatusChanged={this._onStatusChanged} />
                                <div className="todo-footer">
                                    <strong>
                                        <span className="count-todos">{`Items Left to do: ${this._itemsLeft()}`}</span></strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _onDeleteTodo(id) {
        const { todos } = this.state;
        this.setState({ todos: _.remove(todos, todo => todo.id !== id)
        })
    }

     _itemsLeft() {
        const { todos } = this.state;
        return todos.reduce((accumulator, current) => {
            return accumulator + !current.finished;
        }, 0);
    }

    _onStatusChanged(id) {
        let { todos } = this.state;
        let objIndex = todos.findIndex(obj => obj.id === id);
        todos[objIndex].finished = !todos[objIndex].finished;

        this.setState({ todos });

    }

    _onTextAreaChanged(event) {
        const value = event.target.value;
        this.setState({ textAreaValue : value !== "" ? value : undefined })
    }

    _onAddTodo() {
        const { textAreaValue, todos } = this.state;
        const todo = {
            text: textAreaValue,
            finished: false,
            id: new Date().getTime()
        };

        if (this.textArea) {
            this.textArea.current.value = "";
        }

        this.setState({ todos: [...todos, todo], textAreaValue: undefined })
    }

}
