import ExpenseForm from "../ExpenseForm";
import { ExpenseAttributes, NewExpenseProps } from "./interfaces";

export default function NewExpense(props: NewExpenseProps): JSX.Element {
  const saveExpenseDataHandler = (expense: ExpenseAttributes) => {
    props.onAddExpense(expense);
  };
  return (
    <div className="bg-[#a892ee] p-4 my-8 mx-auto w-[50rem] max-w-[95%] rounded-xl text-center shadow-custom1">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
