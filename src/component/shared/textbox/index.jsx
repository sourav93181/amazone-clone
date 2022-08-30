import React from "react";
import { useSelector } from "react-redux";
export default function TextBox(props) {
  const count = useSelector((store) => store.counter);
  return <div>{count.value}</div>;
}
