import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseAttributes } from "./components/NewExpense/NewExpense/interfaces";
import { expenseItemData } from "./expenseItemsData";

function App() {
  const [expenseItems, setExpenseItems] = useState(expenseItemData);

  const addExpenseHandler = (expense: ExpenseAttributes) => {
    const addedExpense = {
      id: `i${Math.random()}`,
      amount: expense.amount,
      date: expense.date,
      title: expense.title,
    };
    setExpenseItems((prev) => {
      return [addedExpense, ...prev];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
