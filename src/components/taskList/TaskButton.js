import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px 15px 5px 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: ${colors.white};
  border: solid 2px  ${props => props.complete ? `${colors.success}` : `${colors.shadeDark}`};
  background: ${props => props.complete ? `${colors.success}` : `${colors.white}`};
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const TaskButton = ({ id, complete, taskStateChange }) => (
  <Button 
    type="button" 
    complete={complete}
    onClick={() => taskStateChange(id)}
  >
    &#10003;
  </Button>
);

TaskButton.propTypes = {
  complete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  taskStateChange: PropTypes.func.isRequired,
}

export default TaskButton;