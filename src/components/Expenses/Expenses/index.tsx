import { useState } from "react";
import Card from "../../UI/Card";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseItem from "../ExpenseItem";
import { ExpenseProps } from "./interfaces";

export default function Expenses(props: ExpenseProps): JSX.Element {
  const [filteredYear, setFilteredYear] = useState("2019");
  const [isFilter, setIsFilter] = useState(false);
  const filteredYearHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
    setIsFilter(true);
  };
  return (
    <Card className="p-4 my-8 mx-auto bg-[#1f1f1f] w-[50rem] max-w-[95%]">
      <ExpenseFilter
        selected={filteredYear}
        filterChangeHandler={filteredYearHandler}
      />
      {isFilter
        ? props.items
            .filter((item) => item.date.getFullYear() === +filteredYear)
            .map((item, idx) => (
              <ExpenseItem
                amount={item.amount}
                date={item.date}
                title={item.title}
                id={item.id}
                key={idx}
              />
            ))
        : props.items.map((item, idx) => (
            <ExpenseItem
              amount={item.amount}
              date={item.date}
              title={item.title}
              id={item.id}
              key={idx}
            />
          ))}
    </Card>
  );
}
