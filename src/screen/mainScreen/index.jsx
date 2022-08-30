import React from 'react';
import { Card, SearchBar } from '../../component';
import "./style.css";
import { useSelector } from "react-redux";
export default function MainScreen(props) {
    const count = useSelector((store) => store.counter);

    return (
      <div>
        <SearchBar />
        <div className='MainScreen-Card-Container'>
          {(count.search.length === 0
                ? count.listOfObject
                : count.listOfObject.filter((item) => item.title.includes(count.search))
              ).map((item) => (
            <Card productid={item.id} />
          ))}
        </div>
      </div>
    );
}