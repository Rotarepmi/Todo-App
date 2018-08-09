import React from 'react';
import styled, { keyframes }from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';

const showModalBg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .5;
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
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .5;
    background-color: ${colors.shadeLight};
    animation: ${showModalBg} .3s;
  }
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
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  max-width: 650px;
  width: 85%;
  background-color: ${colors.white};
  padding: 30px;
  padding-top: 100px;
  border-radius: 3px;
  overflow: hidden;
  top: 0;
  right: 0;
  box-shadow: 0 1px 15px ${colors.shadeMedium};
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
  align-items: center;
  justify-content: center;

  & input {
    width: 100%;
    font-size: 20px;
    border: solid 1px ${colors.shadeDark};
    border-radius: 5px;
    padding: 10px 15px;
    box-sizing: border-box;
  }

  & > div {
    margin: 10px 0 20px 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

`;

const SubmitButton = styled.button`
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
      <Form>
        <input type="text" placeholder="What is your task?" value={inputValue} onChange={handleOnInput} />
        <div>
          <label>Day: <input type="date" defaultValue="2018-07-30" /></label>
          <label>Hour: <input type="time" defaultValue="12:00" /></label>
        </div>
        <SubmitButton type="button" onClick={handleSubmit}>Add</SubmitButton>
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