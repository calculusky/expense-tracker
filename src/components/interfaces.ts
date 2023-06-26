import React from "react";

export type BaseProps<T> = {
  children?: React.ReactNode;
} & T;
