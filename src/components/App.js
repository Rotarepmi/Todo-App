import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

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
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [
        'Lorem ipsum dolor sit amet malerum di sertio esterntie cullo prismo des caluis farratus',
        'Test 2',
        'Test 3'
      ]
    }
  }

  render() {
    return (
      <div>
        <header>
          <User />
          <Header name="TODO App" />
        </header>
        <main>
          <ButtonsWrapper>
            <ActionButton text="Add" actionType="add" action={this.addTask} />
            <ActionButton text="Remove" actionType="remove" action={this.removeTask} />
            <ActionButton text="Clear" actionType="clear" action={this.clearTaskList} />
          </ButtonsWrapper>
          <TaskList taskList={this.state.taskList} />
        </main>
      </div>
    );
  }
}

export default App;
