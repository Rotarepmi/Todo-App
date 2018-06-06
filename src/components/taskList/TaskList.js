import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Task from './Task';

const List = styled.ul`
  list-style: none;
  transition: all .2s ease;
  margin: 0;
  padding: 0;
`;

const TaskList = ({ taskList=[], taskStateChange }) => (
  <List>
    {taskList.map((task, index) => (
      <Task 
        key={task.id} 
        index={index} 
        task={task}
        taskStateChange={taskStateChange}
       />
    ))}
  </List>
);

TaskList.propTypes = {
  taskStateChange: PropTypes.func.isRequired,
  taskList: PropTypes.arrayOf(PropTypes.shape({
    complete: PropTypes.bool,
    task: PropTypes.string,
    id: PropTypes.number
  })),
}

TaskList.defaultProps = {
  taskList: []
}

export default TaskList;