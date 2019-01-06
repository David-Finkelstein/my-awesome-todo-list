import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button } from 'reactstrap';

class AddTodo extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            textAreaValue: '',
        };

        this.onTextAreaChanged = this.onTextAreaChanged.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onTextAreaChanged(event) {
        const value = _.trim(event.target.value, ' ');
        this.setState({ textAreaValue: value !== '' ? value : '' });
    }

    onAddTodo() {
        const { textAreaValue } = this.state;
        const { onAddTodo } = this.props;

        onAddTodo(textAreaValue);
        this.setState({ textAreaValue: '' });
    }

    render() {
        const { textAreaValue } = this.state;
        return (
            <div>
                <textarea
                    className="form-control"
                    placeholder="New todo" rows="3"
                    onChange={this.onTextAreaChanged}
                    value={textAreaValue}
                />
                <Button
                    className="btn btn-outline-success add-todo"
                    onClick={this.onAddTodo}
                    disabled={!textAreaValue}
                >
                    Add Todo
                </Button>
            </div>
        );
    }
}

export default AddTodo;

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};