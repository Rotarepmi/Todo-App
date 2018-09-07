import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import { 
  loadLocalState,
  taskStateChange
} from '../actions/listActions';

import { loginStateChanged } from '../actions/userActions';

import Login from './Login';
import ActionButtons from './ActionButtons';
import Header from './Header';
import TaskList from './taskList/TaskList';
import AddTaskForm from './AddTaskForm';

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

class App extends Component {
  // load taskList saved in localStorage
  componentDidMount() {
    this.loadLocalState();

    firebase.auth()
      .onAuthStateChanged(user => this.props.loginStateChanged(!!user));
  }

  // when component rerenders save the list to localStorage
  componentDidUpdate() {
    this.saveStateLocaly(this.props.taskList);
  }
  
  // stringify the array and save
  saveStateLocaly = (taskList) => localStorage.setItem('taskList', JSON.stringify(taskList));

  // rebuild array from string
  // send to redux
  loadLocalState = () => {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    this.props.loadLocalState(taskList);
  }

  taskStateChange = (id) => {
    this.props.taskStateChange(id);
  }

  signOut = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div>
        <Header name="ToDo List" />
        { (!this.props.isLoggedIn) && <Login /> }
        <main>
          <ActionButtons />
          <TaskList taskStateChange={this.taskStateChange} />
          {
            this.props.addTask &&
            <AddTaskForm />
          }
        </main>
        <button onClick={() => this.signOut()}>Logout</button>
      </div>
    );
  }
}

App.propTypes = {
  addTask: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loadLocalState: PropTypes.func.isRequired,
  loginStateChanged: PropTypes.func.isRequired,
  taskStateChange: PropTypes.func.isRequired,
  taskList: PropTypes.arrayOf(PropTypes.shape({
    complete: PropTypes.bool,
    task: PropTypes.string,
    id: PropTypes.number
  })),
}

App.defaultProps = {
  taskList: []
}

const mapStateToProps = state => ({
  addTask: state.list.addTask,
  taskList: state.list.taskList,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  loadLocalState,
  loginStateChanged,
  taskStateChange
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
