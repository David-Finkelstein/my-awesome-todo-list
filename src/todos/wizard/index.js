import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Button, Textarea } from '@guestyci/atomic-design/dist/components';

class TodoWizard extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            textAreaValue: '',
        };

        this.onTextAreaChanged = this.onTextAreaChanged.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onEnterClicked = this.onEnterClicked.bind(this);
        this.onButtonSaveOrAddClicked = this.onButtonSaveOrAddClicked.bind(this);
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

    onButtonSaveOrAddClicked(){
        const { textAreaValue } = this.state;
        const { id, history, callback } = this.props;

        callback(textAreaValue,id);
        history.push('/');
    }

    render() {
        const { textAreaValue } = this.state;
        const { title, btnText } = this.props;
        return (
            <div>
                <Textarea
                    className="form-control"
                    placeholder={title}
                    rows="3"
                    onChange={this.onTextAreaChanged}
                    value={textAreaValue}
                    onKeyPress={e => this.onEnterClicked(e.key)}
                />
                <Button
                    id="AddOrEditBtn"
                    className="btn mt-2"
                    onClick={this.onButtonSaveOrAddClicked}
                    disabled={!textAreaValue}
                    color="success"
                >
                    {btnText}
                </Button>
                <Link to="/">
                    <Button className="btn mt-2 float-right" color="success">
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
