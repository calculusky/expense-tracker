import { ExpenseDateProps } from "./interfaces";
export * from "./interfaces";

export default function ExpenseDate(props: ExpenseDateProps): JSX.Element {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col w-[5.5rem] h-[5.5rem] bg-[#2a2a2a] justify-center items-center text-white border border-solid border-[#ececec] rounded-xl">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-2xl font-bold">{day}</div>
    </div>
  );
}
