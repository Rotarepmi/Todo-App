import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { 
  loadLocalState, 
  addTask, 
  removeTask, 
  clearTasks, 
  taskStateChange, 
  openModal,
  closeModal,
  handleOnInput 
} from '../actions/listActions';

import colors from '../constants/colors';
import Header from './Header';
import ActionButton from './ActionButton';
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
  // load taskList saved in localStorage
  componentDidMount() {
    this.loadLocalState();
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

  render() {
    return (
      <div>
        <Header name="ToDo List" />
        <main>
          <ButtonsWrapper>
            <ActionButton text="Add" actionType="add" action={this.props.openModal} />
            <ActionButton text="Remove" actionType="remove" action={this.props.removeTask} />
            <ActionButton text="Clear" actionType="clear" action={this.props.clearTasks} />
          </ButtonsWrapper>
          <TaskList taskStateChange={this.taskStateChange} />
        </main>
        {
          this.props.modalVisible && <ModalComp 
            closeModal={this.closeModal}
            handleSubmit={this.props.addTask}
            handleOnInput={this.handleOnInput}
            inputValue={this.props.inputValue}
          />
        }
      </div>
    );
  }
}

App.propTypes = {
  addTask: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleOnInput: PropTypes.func.isRequired,
  loadLocalState: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
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
  inputValue: state.list.inputValue
})

const mapDispatchToProps = {
  addTask,
  clearTasks,
  loadLocalState,
  removeTask,
  taskStateChange,
  openModal,
  closeModal,
  handleOnInput
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
