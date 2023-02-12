import React, { useState } from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: rgb(77, 133, 255);
  border-style: none;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;
const Input=styled.input`
  display: block;
  width: 80%;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: .375rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <Input
        required="required"
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button type="button" onClick={() => props.handleSaveClick(value)}>
        Save
      </Button>
    </>
  );
};

export default EditBudget;
