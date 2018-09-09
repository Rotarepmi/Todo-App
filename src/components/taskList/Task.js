import React from 'react';
import styled, { keyframes } from 'styled-components';
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

const TaskText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: ${colors.shadeDark};
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

const TaskSlideIn = keyframes`
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(0px);
  }
`;

const TaskTextWrapper = styled.div`
  background: ${colors.white};
  animation: ${TaskSlideIn} .2s;
`;

const Task = ({ index, task }) => (
  <TaskElement>
    <TaskButton id={task.id} complete={task.complete} />
    <TaskTextWrapper>
      <TaskText complete={task.complete}>{task.task}</TaskText>
      <TaskNumber>Task number {index+1}</TaskNumber>
    </TaskTextWrapper>
  </TaskElement>
);

Task.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.shape({
    complete: PropTypes.bool,
    task: PropTypes.string,
    id: PropTypes.number
  }),
}

Task.defaultProps = {
  task: ''
}

export default Task;