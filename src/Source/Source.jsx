import React from 'react';
import styles from "./Source.module.css";
import { Link } from "react-router-dom";

const Source = (prop) => {
    let url = '/detail/' + (prop.source.uuid)
    return (
        <div >
            <Link to={url}>
                <img src={prop.source.pictures[0]}
                    alt="first pic of the source" className={styles.img} /></Link>
            <p>{prop.source.location}</p>
        </div>

    )

}

export default Source
