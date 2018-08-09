import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

import { 
  clearTasks,
  removeTask, 
  openModal
} from '../actions/listActions';

import ActionButton from './ActionButton';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid 3px ${colors.shadeLight}; 
`;

const ActionButtons = ({ clearTasks, removeTask, openModal }) => (
  <ButtonsWrapper>
    <ActionButton text="Add" actionType="add" action={openModal} />
    <ActionButton text="Remove" actionType="remove" action={removeTask} />
    <ActionButton text="Clear" actionType="clear" action={clearTasks} />
  </ButtonsWrapper>
);

ActionButtons.propTypes = {
  clearTasks: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  taskList: state.list.taskList,
  modalVisible: state.list.modalVisible,
  inputValue: state.list.inputValue
})

const mapDispatchToProps = {
  clearTasks,
  removeTask,
  openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);