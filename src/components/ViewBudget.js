import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: rgb(77, 133, 255);
  border-style: none;
  padding: 0.2rem 0.8rem;
  border-radius: 5px;
`;
const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <Button type="button" onClick={props.handleEditClick}>
        Edit
      </Button>
    </>
  );
};

export default ViewBudget;
