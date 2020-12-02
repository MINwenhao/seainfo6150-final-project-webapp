import React, { useEffect, useState } from 'react'
import { isEmpty } from "lodash";
import styles from "./Detail.module.css";

const Detail = (props) => {
    const [fetchedData, setFetchedData] = useState();

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



    return isEmpty(fetchedData) ? null : (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <div className={styles.pictures}>
                    <img src={fetchedData[id].pictures[0]}
                        alt="first pic of the source" className={styles.img} />
                    <img src={fetchedData[id].pictures[1]}
                        alt="first pic of the source" className={styles.img} />
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

                <a href="/ThankYou">Order Now</a>
            </div>

        </div>
    )
}

export default Detail
