import React from 'react';
import "./style.css"
export default function CountNum(props) {
    const { count, setcount} = props;
    return (
        <div className="container">
        <span
          className="decrement-button"
          onClick={() => {
            setcount(count - 1);
          }}
        >
          -
        </span>
        <span className="conatainer-val">{count}</span>
        <span className="increment-button" onClick={() => setcount(count + 1)}>
          +
        </span>
      </div>
    );
}