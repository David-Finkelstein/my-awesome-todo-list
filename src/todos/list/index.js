import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import TodoItem from "./components/ListItem";
import { toggleTodoStatus, deleteTodo } from "./list.actions";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            todoIdToDelete: '',
        };

        this.toggle = this.toggle.bind(this);
        this.onDeleteConfirmed = this.onDeleteConfirmed.bind(this);
    }

    toggle(id) {
        const { modal } = this.state;
        this.setState({ modal: !modal, todoIdToDelete: id });
    }

    onDeleteConfirmed() {
        const { deleteTodo } = this.props;
        const { modal, todoIdToDelete } = this.state;

        this.setState({ modal: !modal });
        deleteTodo(todoIdToDelete);
    }

    render() {
        const { todoArray, toggleTodoStatus } = this.props;
        const { modal } = this.state;
        return (
            <ul className="list-unstyled">
                {modal ?
                    <Modal isOpen={modal}>
                        <ModalHeader>Delete</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this todo?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.onDeleteConfirmed}>Yes</Button>
                            <Button color="secondary" onClick={this.toggle}>No</Button>
                        </ModalFooter>
                </Modal> : null}
                {todoArray.map(todoProperties => TodoItem({ todoProperties,
                    deleteTodo: this.toggle.bind(this,todoProperties.id), toggleTodoStatus}))}
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