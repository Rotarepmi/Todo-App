import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

const Button = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => {
    switch(props.actionType) {
      case 'add':
        return `${colors.primary}`;
      case 'remove':
        return `${colors.warning}`;
      case 'clear':
        return `${colors.danger}`;
      default:
        break;
    }
  }};
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonIcon = styled.div`
  width: 32px;
  height: 32px;
  margin: 5px 15px 5px 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: ${colors.white};
  border: none;
  background: ${props => {
    switch(props.actionType) {
      case 'add':
        return `${colors.primary}`;
      case 'remove':
        return `${colors.warning}`;
      case 'clear':
        return `${colors.danger}`;
      default:
        break;
    }
  }};
  border-radius: 50%;
`;

const ActionButton = ({ text, actionType, action }) => (
  <Button 
    type="button" 
    actionType={actionType}
    onClick={action}
  >
    <ButtonIcon
      actionType={actionType}
    >
      {actionType === "add" && <span>&#43;</span>}
      {actionType === "remove" && <span>&#8722;</span>}
      {actionType === "clear" && <span>&#215;</span>}
    </ButtonIcon>
    <p>{text}</p>
  </Button>
);

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ActionButton;