import React, { Component } from 'react';
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
  padding: 0;
  border: none;
  color: ${colors.black};
  border-radius: 5px;
  background: ${colors.white};
  width: 230px;
  bottom: 0;
  right: 60px;
  opacity: ${props => props.isOpen ? 0 : 1};
  visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
  transition: all .2s;
  z-index: 5;

  & > p {
    font-weight: 700;
    margin: 0;
    padding: 10px 20px 10px 10px;
    border-bottom: solid 3px ${colors.shadeLight};
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 12px solid transaprent;
    border-right: 12px solid ${colors.white};
    border-bottom: 12px solid transparent;
    transform: rotate(45deg);
    bottom: 15px;
    right: -6px;
  }
`;

const UserWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const UserButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all .4s ease-in-out;
  outline: none;

  &:hover {
    border: solid 2px ${colors.shadeDark};
  }
  
  &:focus {
    box-shadow: 2px 2px 20px ${colors.shadeMedium}
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  z-index: 10;
`;

class User extends Component {
  constructor(props) {
    super();
    this.state = {
      isPopperOpen: false
    }
  }

  togglePopover = () => {
    this.setState(prevState => ({ isPopperOpen: !prevState.isPopperOpen }));
  }

  render() {
    const { isLoggedIn, uname } = this.props;

    return (
      <UserWrapper>
        <UserButton onClick={this.togglePopover}>
          <Image src={avatar} />
        </UserButton>
        <UserMenu isOpen={this.state.isPopperOpen}>
          <p>{ uname }</p>
          {
            isLoggedIn 
            ? <ActionButton text="Logout" color="danger" action={() => firebase.auth().signOut()} icon="&#215;" />
            : <Link style={{ textDecoration: 'none' }} to="/login"><ActionButton text="Log in" color="primary" icon="&#10003;" /></Link>
          }
        </UserMenu>
      </UserWrapper>
    );
  }
}

User.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  uname: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  uname: state.user.uname
});

export default connect(mapStateToProps)(User);