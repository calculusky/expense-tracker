import React from "react";
import { CardProps } from "./interfaces";
export * from "./interfaces";

export default function Card(props: CardProps): JSX.Element {
  return (
    <div className={`rounded-xl shadow-custom1 ${props.className}`}>
      {props.children}
    </div>
  );
}
