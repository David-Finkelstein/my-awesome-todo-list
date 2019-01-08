import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoWizard from '../todos/wizard'
import { addTodo, editTodo } from "../todos/wizard/wizard.actions";

const wizardWrapper = (props) => {
    const { match: { params: { id } }, editTodo, addTodo } = props;
    return id ?
        <TodoWizard callback={editTodo} title="Edit todo text" btnText="Save"/> :
        <TodoWizard callback={addTodo} title="New todo" btnText="Add"/>
};

wizardWrapper.propTypes = {
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    addTodo,
    editTodo,
};

export default connect(null, mapDispatchToProps)(wizardWrapper)