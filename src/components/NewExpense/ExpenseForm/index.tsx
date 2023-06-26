import { useState } from "react";
import { ExpenseAttributes } from "../NewExpense/interfaces";
import { ExpenseFormProps } from "./interfaces";

export default function ExpenseForm(props: ExpenseFormProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle("");
    setAmount("");
    setDate("");
    const expenseData: ExpenseAttributes = {
      amount: +amount,
      title: title,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div>
          <label htmlFor="title" className="font-bold mb-2 block">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            className="p-2 rounded-md border border-solid border-[#ccc] w-[20rem] max-w-[100%]"
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="amount" className="font-bold mb-2 block">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={amount}
            className="p-2 rounded-md border border-solid border-[#ccc] w-[20rem] max-w-[100%]"
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="date" className="font-bold mb-2 block">
            Date
          </label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2024-12-31"
            value={date}
            className="p-2 rounded-md border border-solid border-[#ccc] w-[20rem] max-w-[100%]"
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#40005d] border border-[#40005d] border-solid cursor-pointer py-4 px-8 text-white rounded-xl mr-4 hover:bg-[#510674] hover:border-[#510674] active:border-[#510674] active:bg-[#510674]"
          >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}
