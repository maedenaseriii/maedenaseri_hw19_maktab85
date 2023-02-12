import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
const Button = styled.button`
  padding: 20px;
  color: blue;

  background-color: rgb(192, 192, 245);
  border-color: blue;
`;

const Modal = ({ children, onClose }) => {
  return (
    <ModalDiv>
      <div>
        {children}
        <Button onClick={onClose}>do you want to delete this item?</Button>
      </div>
    </ModalDiv>
  );
};

export default Modal;
