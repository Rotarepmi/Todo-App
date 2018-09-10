import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { loadLocalState } from '../actions/listActions';
import { loginStateChanged } from '../actions/userActions';

import MainView from './MainView';
import Login from './Login';
import Header from './Header';

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
      .onAuthStateChanged(user => {
        const uid = !!user ? user.uid : null;
        const uname = !!user ? user.displayName : null;
        this.props.loginStateChanged(!!user, uid, uname)
      });
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

  render() {
    return (
      <Router>
        <div>
          <Header name="ToDo List" />
          <main>
            <Route exact path="/" component={MainView} />
            <Route path="/login" component={Login} />
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  loadLocalState: PropTypes.func.isRequired,
  loginStateChanged: PropTypes.func.isRequired,
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
  taskList: state.list.taskList
});

const mapDispatchToProps = {
  loadLocalState,
  loginStateChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
