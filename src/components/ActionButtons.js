import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

import { 
  addTask,
  clearTasks,
  removeTask
} from '../actions/listActions';

import ActionButton from './ActionButton';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid 3px ${colors.shadeLight}; 
`;

const ActionButtons = ({ addTask, clearTasks, removeTask }) => (
  <ButtonsWrapper>
    <ActionButton text="Add" color="primary" action={addTask} icon="&#43;" />
    <ActionButton text="Remove" color="warning" action={removeTask} icon="&#8722;" />
    <ActionButton text="Clear all" color="danger" action={clearTasks} icon="&#215;" />
  </ButtonsWrapper>
);

ActionButtons.propTypes = {
  addTask: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  addTask,
  clearTasks,
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);