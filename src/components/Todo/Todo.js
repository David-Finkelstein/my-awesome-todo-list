import React from 'react'
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
    static propTypes = {
        todoProperties: PropTypes.shape({
                text: PropTypes.string.isRequired,
                finished: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired
        }).isRequired,
        onDelete: PropTypes.func.isRequired,
        onStatusChanged: PropTypes.func.isRequired,
    };

    render() {
        const { todoProperties, onDelete, onStatusChanged } = this.props;
        return (
            <li className="ui-state-default">
                <div className={todoProperties.finished ? "checked" : "unchecked"}>
                    <label onClick={onStatusChanged.bind(null,todoProperties.id)}>{todoProperties.text}</label>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={onDelete.bind(null,todoProperties.id)}
                    >
                        Delete
                    </button>
                </div>
            </li>
        )
    }
}