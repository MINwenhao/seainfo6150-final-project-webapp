import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import styles from "./Recommend.module.css";
import Source from "../Source/Source.jsx";

const Recommend = (props) => {

    let [displayContent, setContent] = useState();
    useEffect(() => {

        if (typeof (props.recommend) != "undefined") {
            setContent(
                <div className={styles.recommend}>
                    {props.recommend.map((source) => (
                        <div className={source}>
                            <Source source={source} key={source.uuid} />
                        </div>
                    ))}
                </div>
            );
        } else {
            setContent();
        }
    }, [props])

    return (
        <div>
            {displayContent}

        </div>
    );
};


export default Recommend;