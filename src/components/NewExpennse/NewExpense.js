import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {

  const saveExpenseDataHnadler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expenses'>
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHnadler} />
      </div>
    </div>
  )
}
export default NewExpense;
