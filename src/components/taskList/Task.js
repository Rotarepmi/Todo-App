import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TaskButton from './TaskButton';

const ButtonsWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  transition: all .2s ease .2s;
`;

const TaskElement = styled.li`
  position: relative;
  width: 100%;
  padding-top: 35px;
  margin: 15px 0;
  transition: all .2s ease;

  &:hover {
    transform: scale(1.05)
  }

  &:hover ${ButtonsWrapper} {
    opacity: 1;
    left: calc(100% - 120px);

    @media (min-width: 576px) {
      left: 100%;
    }
  }
`;

const TaskNumber = styled.div`
  position: absolute;
  background-color: #41acf4;
  color: #ffffff;
  font-size: 1.1rem;
  width: calc(100% - 20px);
  padding: 5px 10px;
  margin: 0;
  border-radius: 5px;
  top: 0;
  left: 0;
  cursor: default;

  @media (min-width: 576px) {
    width: auto;
    padding: 5px 10px 5px 25px;
    border-radius: 15px;
    left: -40px;
  }
`;

const TaskText = styled.p`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 10px;
  font-size: 1.3rem;
  cursor: default;
`;

const Task = ({ index, task }) => (
  <TaskElement>
    <TaskNumber>
      Task number {index+1}
      <ButtonsWrapper>
        <TaskButton actionType="delete" />
        <TaskButton actionType="complete" />
      </ButtonsWrapper>
    </TaskNumber>
    <TaskText>{task}</TaskText>
  </TaskElement>
);

Task.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.string
}

Task.defaultProps = {
  task: ''
}

export default Task;