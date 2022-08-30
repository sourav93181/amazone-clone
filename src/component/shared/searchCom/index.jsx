import React from 'react';
import "./style.css";
import { useDispatch } from "react-redux";
import { onSearchChanging } from "../../../redux/todoSlice";
export default function SearchBar(props) {
  
  const dispatch = useDispatch();
    return (
      <div className="seachbar-container">
        <input
          type="text"
          placeholder="Search Product"
          className="NavBar-search"
          onChange={(e) => dispatch(onSearchChanging(e.target.value))}
        />
      </div>
    );
    
}