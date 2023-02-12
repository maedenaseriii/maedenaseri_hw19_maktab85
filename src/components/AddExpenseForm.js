import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 70%;
`;
const InputDiv = styled.div`
  width: 100%;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const BtnDiv = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Button = styled.button`
  background-color: rgb(77, 133, 255);
  border-style: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
`;

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <FormDiv>
        <InputDiv>
          <label htmlFor="name">Name</label>
          <Input
            required="required"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="cost">Cost</label>
          <Input
            required="required"
            type="number"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </InputDiv>
      </FormDiv>
      <BtnDiv>
        <div>
          <Button type="submit">Save</Button>
        </div>
      </BtnDiv>
    </form>
  );
};

export default AddExpenseForm;
