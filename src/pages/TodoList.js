import React from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { Button, Search } from '@guestyci/atomic-design/dist/components';

import List from "../todos/list/";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoArray: [],
            filterBy: '',
        };

        this.onSearchChanged = this.onSearchChanged.bind(this);
    }
    itemsLeft() {
        const { todoArray } = this.state;
        return todoArray.reduce((accumulator, current) => {
            return accumulator + !current.finished;
        }, 0);
    }

    onSearchChanged(value) {
        this.setState({filterBy: value})
    }

    static getDerivedStateFromProps(props, state) {
        const { todoArray } = props;
        const { filterBy } = state;
        let newState = null;

        if (state.filterBy !== ''){
            const filteredArray = todoArray.filter(todo => todo.text.toLowerCase().includes(filterBy));
            newState = { todoArray: filteredArray };
        } else {
            newState = { todoArray: todoArray };
        }

        return newState;
    }

    static shouldComponentUpdate(nextProps, nextState) {
        return _.isEqual(nextState,this.state);
    }

    render() {
        const { todoArray } =this.state;
        return (
            <div>
                <h1 className="m-0 pb-4 text-center">Todos</h1>
                <hr/>
                <Link to="/new">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <Button className="btn center-block" color="primary">Add Todo</Button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Search placeholder="Enter text to filter the todo list" isOpen={true} onChange={this.onSearchChanged}/>
                <List todoArray={todoArray}/>
                <div className="border-top-1 mx-n20 mb-n10 bg-light pt-10 pr-20">
                    <strong>
                        <span className="count-todos">{`Items Left to do: ${this.itemsLeft()}`}</span>
                    </strong>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoArray: _.values(state.todoList.toJS()),
    };
}

export default connect(mapStateToProps)(TodoList)
