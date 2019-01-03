import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

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
        const todo = {
            text: textAreaValue,
            finished: false,
            id: new Date().getTime()
        };

        onAddTodo(todo);
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
                <button
                    className="btn btn-outline-success add-todo"
                    onClick={this.onAddTodo}
                    disabled={!textAreaValue}
                >
                    Add Todo
                </button>
            </div>
        );
    }
}

export default AddTodo;

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};