import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTask, removeTask, clearTasks, taskStateChange } from '../actions/listActions';

import colors from '../constants/colors';
import Header from './Header';
import ActionButton from './ActionButton';
import TaskList from './taskList/TaskList';

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid 3px ${colors.shadeLight}; 

  @media (min-width: 375px) {
    flex-direction: row;
  }
`;

class App extends Component {
  taskStateChange = (id) => {
    this.props.taskStateChange(id);
  }

  addTask = () => {
    this.props.addTask();
  }

  removeTask = () => {
    this.props.removeTask();
  }

  clearTaskList = () => {
    this.props.clearTasks();
  }

  render() {
    return (
      <div>
        <Header name="ToDo List" />
        <main>
          <ButtonsWrapper>
            <ActionButton text="Add" actionType="add" action={this.addTask} />
            <ActionButton text="Remove" actionType="remove" action={this.removeTask} />
            <ActionButton text="Clear" actionType="clear" action={this.clearTaskList} />
          </ButtonsWrapper>
          <TaskList taskList={this.props.taskList} taskStateChange={this.taskStateChange} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  addTask: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  taskStateChange: PropTypes.func.isRequired, 
  taskList: PropTypes.arrayOf(PropTypes.shape({
    complete: PropTypes.bool,
    id: PropTypes.number,
    task: PropTypes.string,
  })),
}

App.defaultProps = {
  taskList: []
}

const mapStateToProps = state => ({
  taskList: state.list.taskList
});

const mapDispatchToProps = {
  addTask,
  removeTask,
  clearTasks,
  taskStateChange
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
