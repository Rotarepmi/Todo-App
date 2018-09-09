import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

import { 
  closeTaskEditor,
  handleOnInput, 
  saveTask
} from '../actions/listActions';

const SlideIn = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 100%;
  }
`;

const TaskElement = styled.li`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  border-bottom: solid 3px ${colors.shadeLight};
  transition: all .2s;
  animation: ${SlideIn} .5s;
`;

const TaskInput = styled.input`
  font-size: 1.05rem;
  letter-spacing: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: 600;
  border: none;
  outline: none;
  border-bottom: solid 2px ${colors.shadeDark};
  color: ${colors.shadeDark};
  transition: all .2s ease-in-out;

  &:focus,
  &:active {
    border-bottom: solid 2px ${colors.primary};
  }
`;

const TaskNumber = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-size: .9rem;
  text-align: justify;
  color: ${props => props.complete ? `${colors.shadeMedium}` : `${colors.black}`};
  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
`;

const AddTaskForm = ({ index, inputValue, handleOnInput, saveTask, closeTaskEditor }) => (
  <TaskElement>
    <form style={{ width: '100%' }} onSubmit={saveTask}>
      <TaskInput type="text" autoFocus onBlur={() => closeTaskEditor()} onInput={(e) => handleOnInput(e.target.value)} value={inputValue} />
    </form>
    <TaskNumber>Task number {index+1}</TaskNumber>
  </TaskElement>
);

AddTaskForm.propTypes = {
  closeTaskEditor: PropTypes.func.isRequired,
  handleOnInput: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
  saveTask: PropTypes.func.isRequired
}  

const mapStateToProps = state => ({
  inputValue: state.list.inputValue
});

const mapDispatchToProps = {
  closeTaskEditor,
  handleOnInput,
  saveTask
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);