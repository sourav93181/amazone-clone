import React from 'react';
import "./style.css";
import { useSelector } from "react-redux";


export default function Card(props) {
    const count = useSelector((store) => store.counter);
    

    const { productid } = props;
    return (
      <div className="card-container">
        <span className="card-title">
          {count.listOfObject.find((item) => item.id === productid).title}
        </span>
        <span className="card-price">
         { count.listOfObject.find((item)=> item.id === productid).price}
        </span>
      </div>
    );
};