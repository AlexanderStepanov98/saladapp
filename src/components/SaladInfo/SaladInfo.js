import React from "react";
import styles from "./SaladInfo.css";

const SaladInfo = ({name, vegetables, meat}) => {
    return (
        <div className={styles.container}>
            <p>Name: {name}</p>
            <p>Vegetables: {vegetables.reduce((result, item) => result += ", " + item)}</p>
            <p>Meat: {meat.reduce((result, item) => result += ", " + item)}</p>   
        </div>
    )
}

export default SaladInfo