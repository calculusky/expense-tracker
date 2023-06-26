import { BaseProps } from "../../interfaces";
import { ExpenseFilterProps } from "./interfaces";

function ExpenseFilter(props: BaseProps<ExpenseFilterProps>) {
  const selectYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.filterChangeHandler(event.target.value);
  };
  return (
    <div className="text-white px-4 py-0">
      <div className="flex justify-between my-4 mx-0 items-center w-[100%]">
        <label htmlFor="" className="mb-2 font-bold">
          Filter by Year
        </label>
        <select
          name="filterByYear"
          value={props.selected}
          className="py-2 px-12 font-bold rounded-md"
          onChange={selectYearHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
