import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import avatar from '../../assets/default-avatar.jpg';

const UserWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  margin: 0;
`;

const userMenu = styled.div`
  
`;

const User = ({ }) => (
  <UserWrapper>
    <Image src={avatar} />

  </UserWrapper>
);

User.propTypes = {
}

User.defaultProps = {
}

export default User;