import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  background-color: transparent;
  margin: 10px;
  padding: 5px 10px;
  border: solid 2px #cee4e5;
  color: #7e8282;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s;
  
  &:hover {
    background-color: ${props => {
      switch(props.actionType) {
        case 'add':
          return '#42d9f4';
        case 'remove':
          return '#f4af41';
        case 'clear':
          return '#f44941';
        default:
          break;
      }
    }}; 
    border-color: ${props => {
      switch(props.actionType) {
        case 'add':
          return '#42d9f4';
        case 'remove':
          return '#f4af41';
        case 'clear':
          return '#f44941';
        default:
          break;
      }
    }};
    color: #ffffff;
  }
`;

const ActionButton = ({ text, actionType, action }) => (
  <Button 
    type="button" 
    actionType={actionType}
    onClick={action}
  >
    {text}
  </Button>
);

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ActionButton;