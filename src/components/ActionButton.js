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
  color: ${props => `${colors[props.color]}`};
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
  background: ${props => `${colors[props.color]}`};
  border-radius: 50%;
`;

const Text = styled.p`
  display: none;

  @media (min-width: 375px) {
    display: block;
  }
`;

const ActionButton = ({ text, color, action, icon }) => (
  <Button 
    type="button" 
    color={color}
    onClick={action}
  > 
    <ButtonIcon
      color={color}
    >
      <span>{icon}</span>
    </ButtonIcon>
    <Text>{text}</Text>
  </Button>
);

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ActionButton;