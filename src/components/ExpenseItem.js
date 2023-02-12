import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import ReactDOM from 'react-dom';
import Modal from "./Modal";
const Totaldiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MyLi = styled.li`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y)
    var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid
    var(--bs-list-group-border-color);
`;
const Span = styled.span`
  margin-right: 20px;
  background-color: rgb(77, 133, 255);
  padding: 0 0.5rem;
  border-radius: 5px;
`;

const ExpenseItem = (props) => {
  const [stateModal, setStateModal] = useState(false);
  const { dispatch } = useContext(AppContext);

  const openModal = () => setStateModal(true);
  const closeModal = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
    setStateModal(false);
  };

  return (
    // <Totaldiv>
    <>
      <MyLi>
        {props.name}
        <div>
          <Span>£{props.cost}</Span>
          <TiDelete size="1.5em" onClick={openModal} />
        </div>
      </MyLi>
      {stateModal &&
        ReactDOM.createPortal(
          <Modal onClose={closeModal} />,
          document.getElementById("modals")
        )}
    </>
    // </Totaldiv>
  );
};

export default ExpenseItem;
