import React from "react";
import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";
import styled from "styled-components";

const Totaldiv = styled.div`
  padding: 1rem 4rem;
`;
const MainDiv=styled.div`
margin-top: 3px;
display: flex;
justify-content: space-between;
gap: 1.2rem;
width:100%
`;
const FirstDiv=styled.div`
width: 100%;
`;
const Myh3=styled.h3`
margin-top: 12px;
`
const Addh3=styled.h3`
margin-top: 20px;
`


const App = () => {

  return (
    <AppProvider>
      <Totaldiv>
        <h1>My Budget Planner</h1>
        <MainDiv >
          <FirstDiv>
            <Budget/>
          </FirstDiv>
          <FirstDiv>
            <RemainingBudget />
          </FirstDiv>
          <FirstDiv>
            <ExpenseTotal />
          </FirstDiv>
        </MainDiv>
        <Myh3>Expenses</Myh3>
        <div>
          <div>
            <ExpenseList />
          </div>
        </div>
        <Addh3>Add Expense</Addh3>
        <div >
          <div>
            <AddExpenseForm />
          </div>
        </div>
      </Totaldiv>
    </AppProvider>
  );
};

export default App;
