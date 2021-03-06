import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import colors from '../constants/colors';
import background from '../assets/background.svg';
import User from './user/User';

const StyledHeader = styled.header`
  position: relative;
  height: 250px;
  background: url(${background});
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${colors.white};
  padding: 25px;

  & > h1 {
    font-size: 2.2rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 1441px) {
    height: 300px;
  }
`;

const Header = ({ name }) => (
  <StyledHeader>
    <h1><Link style={{ textDecoration: 'none', color: colors.white }} to="/">{name}</Link></h1>
    <User />
  </StyledHeader>
);

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header;