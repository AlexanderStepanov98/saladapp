import React from "react";
import styles from "./SaladInfo.css";

const SaladInfo = ({name, vegetables, meat}) => {

    const vegetablesList = vegetables.reduce((result, item) => result += ", " + item);
    const meatList = meat.reduce((result, item) => result += ", " + item);

    return (
        <div className={styles.container}>
            <p>Name: {name}</p>
            <p>Vegetables: {vegetablesList}</p>
            <p>Meat: {meatList}</p>
        </div>
    )
};

export default SaladInfo