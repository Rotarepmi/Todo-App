import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Task from './Task';

const List = styled.ul`
  list-style: none;
  border-left: solid 5px #cee4e5;
  margin: 15px 25px 15px 75px;
  padding: 25px;
`;

const TaskList = ({ taskList }) => (
  <List>
    {taskList.map((task, index) => <Task key={task} index={index} task={task} />)}
  </List>
);

TaskList.propTypes = {
  taskList: PropTypes.shape(PropTypes.string)
}

TaskList.defaultProps = {
  taskList: []
}

export default TaskList;