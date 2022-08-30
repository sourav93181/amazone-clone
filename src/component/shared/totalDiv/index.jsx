import React from "react";


export default function totalDiv(props) {
    const { count } = props;
    function divcont(val) {
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(i);
      }
      return arr;
    }
    return (<div className="containers-count">
        {divcont(count).map((item) => {
            return <div className="Card-Container"></div>;
        })}
    </div>);
    
}