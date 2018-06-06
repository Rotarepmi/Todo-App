import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import TaskButton from './TaskButton';

const TaskElement = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: solid 3px ${colors.shadeLight};
  transition: all .2s;
`;

const TaskNumber = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: ${colors.shadeDark};
`;

const TaskText = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-size: .9rem;
  text-align: justify;
  color: ${props => props.taskState ? `${colors.shadeMedium}` : `${colors.black}`};
  text-decoration: ${props => props.taskState ? 'line-through' : 'none'};
`;

const Task = ({ index, task, taskState, taskStateChange }) => (
  <TaskElement>
    <TaskButton index={index} taskState={taskState} taskStateChange={taskStateChange} />
    <div>
      <TaskNumber>Task number {index+1}</TaskNumber>
      <TaskText taskState={taskState}>{task}</TaskText>
    </div>
  </TaskElement>
);

Task.propTypes = {
  index: PropTypes.number.isRequired,
  taskState: PropTypes.bool.isRequired,
  taskStateChange: PropTypes.func.isRequired,
  task: PropTypes.string
}

Task.defaultProps = {
  task: ''
}

export default Task;