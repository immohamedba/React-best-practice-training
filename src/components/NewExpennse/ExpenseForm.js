import React, { useState } from 'react'

import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [entredTitle, setEntredTitle] = useState('');
    const [entredAmount, setEntredAmount] = useState('');
    const [entredDate, setEntredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEntredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEntredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEntredDate(event.target.value);
    }

    const submitHnadler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            title: entredTitle,
            amount: entredAmount,
            date: new Date(entredDate)
        }
        props.onSaveExpenseData(ExpenseData);
        setEntredTitle('');
        setEntredDate('');
        setEntredAmount('');
    }

    return (
        <div >
            <form onSubmit={submitHnadler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler}  value={entredTitle} ></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input name="amount" type="number" min="0.01" step="0.01" value={entredAmount} onChange={amountChangeHandler} ></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input name="date" type="date" min="2019-01-01" max="2022-12-31" value={entredDate} onChange={dateChangeHandler} ></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit"> Add Expenses </button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm;