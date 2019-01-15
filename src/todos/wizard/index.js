import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Button, Textarea } from '@guestyci/atomic-design/dist/components';
import { textAreaChanged } from "./wizard.actions";

class TodoWizard extends React.Component {
    constructor(Props) {
        super(Props);

        this.onTextAreaChanged = this.onTextAreaChanged.bind(this);
        this.onEnterClicked = this.onEnterClicked.bind(this);
        this.onButtonSaveOrAddClicked = this.onButtonSaveOrAddClicked.bind(this);
    }

    onTextAreaChanged(event) {
        const value = event.target.value.replace(/(?:\r\n|\n|\r)/g, '').replace(/^\s+|\s+$|\s+(?=\s)/g, '');
        this.props.textAreaChanged(value);
    }

    onEnterClicked(key) {
        const { callback, history, textAreaValue, textAreaChanged } = this.props;

        if(key === 'Enter' && textAreaValue.length > 0 ){
            callback(textAreaValue);
            history.push('/');
            textAreaChanged('');
        }
    }

    onButtonSaveOrAddClicked(){
        const { match: { params: { id } }, history, callback, textAreaValue, textAreaChanged } = this.props;

        callback(textAreaValue,id);
        history.push('/');
        textAreaChanged('')
    }

    render() {
        const { title, btnText, textAreaValue } = this.props;
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
    textAreaValue: PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapDispatchToProps = {
    textAreaChanged,
};

function mapStateToProps(state) {
    return {
        textAreaValue: state.wizard
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TodoWizard));
