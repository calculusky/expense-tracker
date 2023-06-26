import { Optional } from "../../../utilities";
import Card from "../../UI/Card";
import ExpenseDate from "../ExpenseDate";
import { ExpenseItemData } from "./interfaces";
export * from "./interfaces";

export default function ExpenseItem(
  props: Optional<ExpenseItemData, "id">
): JSX.Element {
  return (
    <Card className="flex justify-between items-center shadow-custom1 p-2 my-4 mx-0 rounded-xl bg-lightBlack">
      <ExpenseDate date={props.date} />
      <div className="flex flex-col-reverse gap-4 items-end justify-center flex-1 sm:flex-row sm:items-center sm:justify-start sm:flex-1">
        <h2 className="text-[#fff] flex-1 text-base my-0 mx-4 sm:text-xl">
          {props.title}
        </h2>
        <div className="text-base text-white font-bold bg-[#40005d] p-2 rounded-xl border border-solid border-white sm:text-xl sm:py-2 sm:px-6">
          ${props.amount}
        </div>
      </div>
    </Card>
  );
}
