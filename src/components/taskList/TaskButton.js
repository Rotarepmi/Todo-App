import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  background-color: ${props => props.actionType === 'complete' ? '#42f47d' : '#f44941'};
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const TaskButton = ({ actionType }) => (
  <Button 
    type="button" 
    actionType={actionType}
  >
    {actionType === "complete" ? <span>&#10003;</span> : <span>&#10005;</span>}
  </Button>
);

TaskButton.propTypes = {
  actionType: PropTypes.string.isRequired,
}

export default TaskButton;