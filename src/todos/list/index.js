import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from "./components/ListItem";
import { toggleTodoStatus, deleteTodo } from "./list.actions";

class List extends React.Component {
    render() {
        const { todoArray, deleteTodo, toggleTodoStatus } = this.props;
        return (
            <ul className="list-unstyled">
                {todoArray.map(todoProperties => TodoItem({ todoProperties, deleteTodo, toggleTodoStatus}))}
            </ul>
        )
    }
}

List.propTypes = {
    todoArray: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodoStatus: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        todoArray: _.values(state.todoList.toJS()),
    };
}

const mapDispatchToProps =  {
    deleteTodo,
    toggleTodoStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(List)