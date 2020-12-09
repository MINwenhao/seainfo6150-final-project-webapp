import React from 'react'
import Recommend from "../Recommend/Recommend.jsx";
//import styles from "./Main.module.css";
import styles from "./Main.module.css";

const Main = (props) => {
    let recommend;
    let famousRealEstate;
    let popularChoice;

    recommend = (props.fetchedData || []).filter(message => message.recommend > 4);
    famousRealEstate = (props.fetchedData || []).filter(message => message.owner.type === "real estate");
    popularChoice = (props.fetchedData || []).filter(message => message.rate > 4);

    if (props.status === "main") {
        return (
            <div>
                <div className="recommend">
                    <div className={styles.divider}><span></span><span>Recommend</span><span></span></div>
                    <div >
                        <Recommend recommend={recommend} />
                    </div>
                </div>
                <div className="famous real estate">
                    <div className={styles.divider}><span></span><span>Famous Real Estate</span><span></span></div>

                    <Recommend recommend={famousRealEstate} />
                </div>
                <div className="popular choice">
                    <div className={styles.divider}><span></span><span>Popular Choice</span><span></span></div>

                    <Recommend recommend={popularChoice} />
                </div>
            </div>
        )
    } else if (props.status === "category") {
        return (
            <div className="category result">

                <Recommend recommend={props.category} />
            </div>
        )
    } else {
        return

    }
}

export default Main;