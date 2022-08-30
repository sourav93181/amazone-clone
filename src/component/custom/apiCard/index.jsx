import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

export default function ApiCard(props) {
 

  const { title,descrip,productid } = props;
  return (
    <div className="card-container">
      <span className="card-title">
        {title}
      </span>
      <span className="card-price">
        {descrip}
      </span>
    </div>
  );
}
