import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import colors from '../constants/colors';
import User from './user/User';
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
  constructor() {
    super();
    this.state = {
      taskList: [
        { 
          task: 'Lorem ipsum dolor sit amet malerum di sertio esterntie cullo prismo des caluis farratus',
          taskState: false
        },
        {
          task: 'Lorem ipsum dolor sit',
          taskState: true
        },
        {
          task: 'Test 3',
          taskState: false
        }        
      ]
    }
  }

  taskStateChange = (index) => {
    let newState = Object.assign({}, this.state);
    newState.taskList[index].taskState = !newState.taskList[index].taskState;
    this.setState(newState);
  }

  addTask = () => {

  }

  removeTask = () => {

  }

  clearTaskList = () => {

  }

  render() {
    return (
      <div>
        <Header name="ToDo List" />
        {/* <User /> */}
        <main>
          <ButtonsWrapper>
            <ActionButton text="Add" actionType="add" action={this.addTask} />
            <ActionButton text="Remove" actionType="remove" action={this.removeTask} />
            <ActionButton text="Clear" actionType="clear" action={this.clearTaskList} />
          </ButtonsWrapper>
          <TaskList taskList={this.state.taskList} taskStateChange={this.taskStateChange} />
        </main>
      </div>
    );
  }
}

export default App;
