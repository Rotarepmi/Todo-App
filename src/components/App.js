import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import { 
  loadLocalState, 
  addTask,
  taskStateChange,
  closeModal,
  handleOnInput 
} from '../actions/listActions';

import { loginStateChanged } from '../actions/userActions';

import Login from './Login';
import ActionButtons from './ActionButtons';
import Header from './Header';
import TaskList from './taskList/TaskList';
import ModalComp from './modal/Modal';

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

  // close modal only on wrapper or button click
  closeModal = (e) => {
    if(e.target.id === "ModalWrapper" || e.target.id === "CloseModalBtn") this.props.closeModal();
  }

  // save inputs value
  handleOnInput = (e) => {
    this.props.handleOnInput(e.target.value);
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
        </main>
        {
          this.props.modalVisible && 
          <ModalComp 
            closeModal={this.closeModal}
            handleSubmit={this.props.addTask}
            handleOnInput={this.handleOnInput}
            inputValue={this.props.inputValue}
          />
        }
        <button onClick={() => this.signOut()}>Logout</button>
      </div>
    );
  }
}

App.propTypes = {
  addTask: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleOnInput: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loadLocalState: PropTypes.func.isRequired,
  loginStateChanged: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  taskStateChange: PropTypes.func.isRequired, 
  inputValue: PropTypes.string,
  taskList: PropTypes.arrayOf(PropTypes.shape({
    complete: PropTypes.bool,
    task: PropTypes.string,
    id: PropTypes.number
  })),
}

App.defaultProps = {
  taskList: [],
  inputValue: ''
}

const mapStateToProps = state => ({
  taskList: state.list.taskList,
  modalVisible: state.list.modalVisible,
  inputValue: state.list.inputValue,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  addTask,
  loadLocalState,
  loginStateChanged,
  taskStateChange,
  closeModal,
  handleOnInput
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
