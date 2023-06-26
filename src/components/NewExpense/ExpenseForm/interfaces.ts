import React from "react";
import { ExpenseAttributes } from "../NewExpense/interfaces";

export type NewExpensePropData = {
  onSaveExpenseData: (expense: ExpenseAttributes) => void;
};

export interface ExpenseFormProps extends NewExpensePropData {
  children?: React.ReactNode;
}
