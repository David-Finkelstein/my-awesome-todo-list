import React from 'react';
import _ from "lodash";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Button } from 'reactstrap';

import List from "../todos/list/";

class TodoList extends React.Component {
    itemsLeft() {
        const { todoArray } = this.props;
        return todoArray.reduce((accumulator, current) => {
            return accumulator + !current.finished;
        }, 0);
    }

    render() {
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
                <List/>
                <div className="todo-footer">
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
