import React from "react";
import { useDispatch} from "react-redux";
import {onChanging} from "../../../redux/todoSlice"
export default function InputBox(props) {
   
    const dispatch = useDispatch();
    return (
      <div>
        <input type="text" onChange={(e) => dispatch(onChanging(e.target.value))} />
      </div>
    );
    
}