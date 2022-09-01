import React, { useEffect, useState } from 'react';
import { Card, SearchBar, ApiCard } from '../../component';
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublicApi, fetchPublicPopData } from "../../redux/publicDataSlice";
import { MakeRequest } from '../../utils';


export default function MainScreen(props) {
    const data = useSelector((store) => store.publicData).data;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchPublicApi());
      dispatch(
        fetchPublicPopData({ drilldowns: "Nation", measures: "Population" })
      );
    }, []);
   

    
    const count = useSelector((store) => store.counter);
   
    return (
        <div>
            <SearchBar />
            <div className="MainScreen-Card-Container">
                {(count.search.length === 0
                    ? count.listOfObject
                    : count.listOfObject.filter((item) =>
                        item.title.includes(count.search)
                    )
                ).map((item) => (
                    <Card productid={item.id} />
                ))}
            </div>
            <div>Facts:</div>
            <div className="MainScreen-Card-Container">
                {data.map((item) => {

                    return (<ApiCard title={item.API} descrip={item.Description} />);
                })}
            </div>
        </div>
    );
}