import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.h1`
  text-align: center;
`;

const Header = ({ name }) => (
  <StyledHeader>
    {name}
  </StyledHeader>
);

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header;