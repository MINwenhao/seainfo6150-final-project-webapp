import React, { useEffect, useState } from 'react'
import { isEmpty } from "lodash";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";

const Detail = (props) => {
    const [fetchedData, setFetchedData] = useState();
    const [count, setCount] = useState(0);

    const id = (props.id)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://demo5771648.mockable.io/messages ");
            const responseJson = await response.json();
            setFetchedData(responseJson);

        };
        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);
    if (fetchedData) {
        console.log(fetchedData[id]);
    }

    function next() {
        if (count < fetchedData[id].pictures.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    }

    function previous() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(fetchedData[id].pictures.length - 1)
        }
    }



    return isEmpty(fetchedData) ? null : (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <div className={styles.pictures}>

                    <div className={styles.top}>
                        <button className={styles.button} onClick={previous}> 《 </button>
                        <div className={styles.img}>
                            <img className={styles.img} src={fetchedData[id].pictures[count]} alt="pic of the source" />
                        </div>
                        <button className={styles.button} onClick={next}> 》 </button>
                    </div>

                </div>
                <div className={styles.ApartmentAmenities}>
                    <span>Apartment Amenities</span>
                    <ul>
                        {fetchedData[id].ApartmentAmenities.map((amenity) => (
                            <li key={amenity}>{amenity} </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.CommunityAmenities}>
                    <span>Community Amenities</span>
                    <ul>
                        {fetchedData[id].CommunityAmenities.map((amenity) => (
                            <li key={amenity}>{amenity} </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.rightSide}>
                <p>price: {fetchedData[id].price} pre {fetchedData[id].unit}</p>
                <img src={fetchedData[id].owner.portrait}
                    alt="portrait of the owner" className={styles.portrait} />
                <p>landlord: {fetchedData[id].owner.name}</p>
                <p>connect: {fetchedData[id].owner.connect}</p>

                <Link to="/ThankYou">Order Now</Link>
            </div>

        </div>
    )
}

export default Detail
