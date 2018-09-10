import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import ActionButton from './../ActionButton';
import colors from '../../constants/colors';
import avatar from '../../assets/default-avatar.png';

const UserMenu = styled.div`
  position: absolute;
  overflow: hidden;
  padding: 0;
  border: solid 3px ${colors.shadeLight};
  color: ${colors.black};
  border-radius: 5px;
  background: ${colors.white};
  width: 230px;
  bottom: 0;
  right: 50%;
  opacity: 0;
  visibility: hidden;
  transition: all .2s;
  z-index: 5;

  & > p {
    font-weight: 700;
    margin: 0;
    padding: 10px 20px 10px 10px;
    border-bottom: solid 3px ${colors.shadeLight};
  }
`;

const UserWrapper = styled.div`
  position: absolute;
  bottom: 15px;
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

const User = ({ isLoggedIn, uname }) => (
  <UserWrapper>
    <Image src={avatar} />
    <UserMenu>
      <p>{ uname }</p>
      {
        isLoggedIn 
        ? <ActionButton text="Logout" color="danger" action={() => firebase.auth().signOut()} icon="&#215;" />
        : <Link style={{ textDecoration: 'none' }} to="/login"><ActionButton text="Log in" color="primary" icon="&#10003;" /></Link>
      }
    </UserMenu>
  </UserWrapper>
);

User.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  uname: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  uname: state.user.uname
});

export default connect(mapStateToProps)(User);