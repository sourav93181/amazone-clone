import React, { useEffect, useState } from 'react';
import { Card, SearchBar, ApiCard } from '../../component';
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublicApi } from "../../redux/publicDataSlice";
import { MakeRequest } from '../../utils';


export default function MainScreen(props) {
    const data1 = useSelector((store) => store.publicData).data1;
    const dispatch = useDispatch();

    useEffect(() => console.log(data1), [data1]);

    useEffect(() => {
        dispatch(fetchPublicApi());
    }, []);
    const count = useSelector((store) => store.counter);
    const [data, setdata] = useState("");
    async function updateNewData() {
        let res = await MakeRequest("https://catfact.ninja/fact").get();
        console.log(res);
        setdata(res.fact);

    }
    useEffect(() => {
        updateNewData();
    }, [])
    const [only100, setonly100] = useState(0)
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
            <div>Facts: {data}</div>
            <div className="MainScreen-Card-Container">
                {data1.map((item) => {

                    return (<ApiCard title={item.API} descrip={item.Description} />);
                })}
            </div>
        </div>
    );
}