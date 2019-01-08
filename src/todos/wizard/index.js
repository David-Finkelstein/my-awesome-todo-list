import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'reactstrap';

class TodoWizard extends React.Component {
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
        const { callback } = this.props;

        callback(textAreaValue);
        this.setState({ textAreaValue: '' });
    }

    onEnterClicked(key) {
        const { textAreaValue } = this.state;
        const { callback, history } = this.props;

        if(key === 'Enter' && textAreaValue.length > 0 ){
            callback(textAreaValue);
            history.push('/');
            this.setState({ textAreaValue: '' });
        }
    }

    render() {
        const { textAreaValue } = this.state;
        const { match: { params: { id } }, title, callback, btnText } = this.props;
        return (
            <div>
            <textarea
                className="form-control"
                placeholder={title}
                rows="3"
                onChange={this.onTextAreaChanged}
                value={textAreaValue}
                onKeyPress={e => this.onEnterClicked(e.key)}
            />
                <Link to="/">
                    <Button
                        className="btn btn-outline-success add-todo"
                        onClick={callback.bind(null,textAreaValue,id)}
                        disabled={!textAreaValue}>
                        {btnText}
                    </Button>
                    <Button className="btn btn-outline-success add-todo float-right">
                        Back to - Todo List
                    </Button>
                </Link>
            </div>

        );
    }
}

TodoWizard.propTypes = {
    callback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect()(withRouter(TodoWizard));
