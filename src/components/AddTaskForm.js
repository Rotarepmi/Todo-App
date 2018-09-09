import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

import { 
  handleOnInput, 
  saveTask
} from '../actions/listActions';

const TaskElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  border-bottom: solid 3px ${colors.shadeLight};
  transition: all .2s;
`;

const TaskInput = styled.input`
  font-size: 1.05rem;
  letter-spacing: 1;
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

const AddTaskForm = ({ index, inputValue, handleOnInput, saveTask }) => (
  <TaskElement>
    <form onSubmit={saveTask}>
      <TaskInput type="text" autoFocus onInput={(e) => handleOnInput(e.target.value)} value={inputValue} />
    </form>
    <TaskNumber>Task number {index+1}</TaskNumber>
  </TaskElement>
);

AddTaskForm.propTypes = {
  handleOnInput: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
  saveTask: PropTypes.func.isRequired
}  

const mapStateToProps = state => ({
  inputValue: state.list.inputValue
});

const mapDispatchToProps = {
  handleOnInput,
  saveTask
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);