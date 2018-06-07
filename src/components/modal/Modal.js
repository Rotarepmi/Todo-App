import React from 'react';
import styled, { keyframes }from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';

const showModalBg = keyframes`
  from {
    background-color: ${colors.shadeLight};
    opacity: 0;
  }
  to {
    background-color: ${colors.shadeLight};
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(230, 230, 230, .5);
  z-index: 100;
  animation: ${showModalBg} .3s;
`;

const showModalContent = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  max-width: 650px;
  width: 85%;
  margin: 30px auto;
  background-color: ${colors.white};
  padding: 30px;
  padding-top: 100px;
  border-radius: 7px;
  overflow: hidden;
  top: 20%;
  animation: ${showModalContent} .3s;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 5px;
  right: 5px;
  background-color: ${colors.primary};
  border-radius: 5px;
  border: solid 2px ${colors.primary};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
  cursor: pointer;
  font-size: 40px;
  line-height: 1;
  color: ${colors.white};
  z-index: 10;

  &:hover {
    border: solid 2px ${colors.white};
  }
`;

const ModalTitle = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 60px;
  background: ${colors.primary};
  z-index: 1;
  display: flex;
  align-items: center;
  padding-left: 25px;
  font-size: 30px;
  color: ${colors.white};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > input {
    width: 100%;
    font-size: 20px;
    border: solid 1px ${colors.shadeDark};
    border-radius: 5px;
    padding: 10px 15px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  background: ${colors.primary};
  border: solid 2px ${colors.shadeLight};
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    opacity: .8;
  }
`;

const Modal = ({ closeModal, handleSubmit, handleOnInput, inputValue }) => (
  <ModalWrapper onClick={closeModal} id="ModalWrapper">
    <ModalContainer>
      <CloseModalBtn closeModal={closeModal} id="CloseModalBtn">
        &#10005;
      </CloseModalBtn>
      <ModalTitle>Add task</ModalTitle>
      <Form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleOnInput} />
        <SubmitButton type="submit">Add</SubmitButton>
      </Form>
    </ModalContainer>
  </ModalWrapper>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleOnInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string
}

Modal.defaultProps = {
  inputValue: ''
}

export default Modal;