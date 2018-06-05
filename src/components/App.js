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

const Container = styled.div`
  padding: 25px 15px;
  margin: 25px auto;
  box-shadow: -5px 5px 25px #cee4e5;
  box-sizing: border-box;
  border-radius: 5px;
  transition: all .2s ease;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
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
      <Container>
        <header>
          <User />
          <Header name="ToDo List" />
        </header>
        <main>
          <ButtonsWrapper>
            <ActionButton text="Add" actionType="add" action={this.addTask} />
            <ActionButton text="Remove" actionType="remove" action={this.removeTask} />
            <ActionButton text="Clear" actionType="clear" action={this.clearTaskList} />
          </ButtonsWrapper>
          <TaskList taskList={this.state.taskList} />
        </main>
      </Container>
    );
  }
}

export default App;
