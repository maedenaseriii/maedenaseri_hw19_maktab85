import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components'
const ExpenseDiv=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.44rem;
background-color: lightblue; 
border-radius: 5px;
color: rgb(0, 0, 83);
`
const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<ExpenseDiv>
			<span>Spent so far: £{total}</span>
		</ExpenseDiv>
	);
};

export default ExpenseTotal;
