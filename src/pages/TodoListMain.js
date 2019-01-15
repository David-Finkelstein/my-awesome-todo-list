import React from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { Button, Search } from '@guestyci/atomic-design/dist/components';

import List from "../todos/list/";
import { filterTodos } from "./todoListMain.actions";

class TodoListMain extends React.Component {
    constructor(props){
        super(props);

        this.onSearchChanged = this.onSearchChanged.bind(this);
    }
    itemsLeft() {
        const { todoArray } = this.props;
        return todoArray.reduce((accumulator, current) => {
            return accumulator + !current.finished;
        }, 0);
    }

    onSearchChanged(value) {
        this.props.filterTodos(value);
    }

    render() {
        const { todoArray } = this.props;
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

const mapDispatchToProps = {
    filterTodos,
};

function mapStateToProps(state) {
    return {
        todoArray: (_.values(state.list.toJS())).filter(todo => todo.text.toLowerCase().includes(state.todoListMain)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListMain)
