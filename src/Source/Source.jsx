import React from 'react';
import styles from "./Source.module.css";


const Source = (prop) => {
    let url = '/detail/' + (prop.source.uuid)
    return (
        <div >
            <a href={url}>
                <img src={prop.source.pictures[0]}
                    alt="first pic of the source" className={styles.img} /></a>
            <p>{prop.source.location}</p>
        </div>

    )

}

export default Source
