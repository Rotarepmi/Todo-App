import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from './Task';
import AddTaskForm from './../AddTaskForm';

const List = styled.ul`
  list-style: none;
  transition: all .2s ease;
  margin: 0;
  padding: 0;
`;

const TaskList = ({ addTask, taskList }) => (
  <List>
    {
      taskList.map((task, index) => (
        <Task 
          key={task.id} 
          index={index} 
          task={task}
        />
      ))
    }
    {
      addTask && <AddTaskForm index={taskList.length}/>
    }
  </List>
);

TaskList.propTypes = {
  addTask: PropTypes.bool.isRequired,
  taskList: PropTypes.arrayOf(PropTypes.shape({
    complete: PropTypes.bool,
    task: PropTypes.string,
    id: PropTypes.number
  })),
}

TaskList.defaultProps = {
  taskList: []
}

const mapStateToProps = state => ({
  addTask: state.list.addTask,
  taskList: state.list.taskList
});

export default connect(mapStateToProps)(TaskList);