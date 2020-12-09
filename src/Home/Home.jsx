import React, { useEffect, useState } from 'react'
import { isEmpty } from "lodash";
import styles from "./Home.module.css";
import Main from "../Main/Main.jsx";


const Home = () => {
    const [fetchedData, setFetchedData] = useState();
    const [status, setStatus] = useState("main");
    let [category, setCategory] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://demo5771648.mockable.io/messages ");
            const responseJson = await response.json();
            setFetchedData(Object.values(responseJson));
        };
        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);


    return isEmpty(fetchedData) ? null : (
        <div className={styles.upDown}>

            <div className={styles.CategoryRow}>
                <label>Category</label>
                <button onClick={() => {
                    setCategory((fetchedData || []).filter(message => message.category === "house"));
                    setStatus('category');
                }} className={styles.button}>House</button>
                <button onClick={() => {
                    setCategory((fetchedData || []).filter(message => message.category === "apartment"));
                    setStatus('category');
                }} className={styles.button}>Apartment</button>
                <button onClick={() => {
                    setCategory((fetchedData || []).filter(message => message.category === "room"));
                    setStatus('category');
                }} className={styles.button}>Single Room</button>
            </div>
            <div className={styles.leftRight}>
                <div className={styles.CategoryColumn}>
                    <button onClick={() => {
                        setCategory((fetchedData || []).filter(message => message.rentTime === "long-term"));
                        setStatus('category');
                    }} className={styles.button}>Long Term</button>
                    <button onClick={() => {
                        setCategory((fetchedData || []).filter(message => message.rentTime === "short-term"));
                        setStatus('category');
                    }} className={styles.button}>Short Term</button>
                    <button onClick={() => {
                        setCategory((fetchedData || []).filter(message => message.owner.type === "private"));
                        setStatus('category');
                    }} className={styles.button}>Personal</button>
                    <button onClick={() => {
                        setCategory((fetchedData || []).filter(message => message.owner.type === "real estate"));
                        setStatus('category');
                    }} className={styles.button}>Real estate company</button>
                </div>
                <div>
                    <Main status={status} fetchedData={fetchedData} category={category} />
                </div>
            </div>

        </div>
    )
}

export default Home
