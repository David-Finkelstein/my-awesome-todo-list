import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'reactstrap';

import {onAddTodo} from "./addTodoWizard.actions";

class AddTodo extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            textAreaValue: '',
        };

        this.onTextAreaChanged = this.onTextAreaChanged.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onEnterClicked = this.onEnterClicked.bind(this);
    }

    onTextAreaChanged(event) {
        const value = event.target.value.replace(/(?:\r\n|\n|\r)/g, '').replace(/^\s+|\s+$|\s+(?=\s)/g, '');
        this.setState({ textAreaValue: value !== '' ? value : '' });
    }

    onAddTodo() {
        const { textAreaValue } = this.state;
        const { onAddTodo } = this.props;

        onAddTodo(textAreaValue);
        this.setState({ textAreaValue: '' });
    }

    onEnterClicked(key) {
        const { textAreaValue } = this.state;
        const { onAddTodo } = this.props;

        if(key === 'Enter' && textAreaValue.length > 0 ){
            onAddTodo(textAreaValue);
            this.setState({ textAreaValue: '' });
            this.props.history.push('/')
        }
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
                onKeyPress={e => this.onEnterClicked(e.key)}
            />
                <Link to="/">
                    <Button
                        className="btn btn-outline-success add-todo"
                        onClick={this.onAddTodo}
                        disabled={!textAreaValue}
                    >
                        Add Todo
                    </Button>
                    <Button className="btn btn-outline-success add-todo float-right">
                        Back to - Todo List
                    </Button>
                </Link>
            </div>

        );
    }
}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: text => dispatch(onAddTodo(text)),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(AddTodo));
