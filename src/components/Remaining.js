import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components'
const RemainingDiv=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.44rem;
background-color:rgb(179, 228, 180); 
border-radius: 5px;
color:rgb(0, 76, 0);
`

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<RemainingDiv className={`${alertType}`}>
			<span>Remaining: £{budget - totalExpenses}</span>
		</RemainingDiv>
	);
};

export default RemainingBudget;
