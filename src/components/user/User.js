import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ActionButton from '../ActionButton';
import avatar from '../../assets/default-avatar.jpg';

const UserMenu = styled.div`
  position: absolute;
  overflow: hidden;
  padding: 0;
  border: solid 1px #cee4e5;
  border-radius: 5px;
  background: #ffffff;
  width: 230px;
  top: 0;
  right: 50%;
  opacity: 0;
  visibility: hidden;
  transition: all .2s;
  z-index: 5;

  & > p {
    font-weight: 700;
    margin: 0;
    padding: 10px 20px 10px 10px;
    border-bottom: solid 3px #41acf4;
  }
`;

const UserWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;

  &:hover ${UserMenu} {
    visibility: visible;
    opacity: 1;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  z-index: 10;
`;

const User = ({ }) => (
  <UserWrapper>
    <Image src={avatar} />
    <UserMenu>
      <p>Jakub</p>
      <ActionButton text="Wyloguj" actionType="add" />
    </UserMenu>
  </UserWrapper>
);

User.propTypes = {
}

User.defaultProps = {
}

export default User;