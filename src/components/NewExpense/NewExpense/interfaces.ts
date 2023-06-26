import React from "react";

export type NewExpensePropData = {
  onAddExpense: (expense: ExpenseAttributes) => void;
};

export interface NewExpenseProps extends NewExpensePropData {
  children?: React.ReactNode;
}

export interface ExpenseAttributes {
  title: string;
  date: Date;
  amount: number;
}
