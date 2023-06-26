import React from "react";

export type CardProps<T = {}> = {
  children: React.ReactNode;
  className: string;
} & T;
