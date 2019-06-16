import React, { Component } from "react";
import SaladInfo from "../SaladInfo/SaladInfo";
import styles from "./Salad.css";

const Salad = data => {

    const {imgUrl, name, vegetables, meat} = data.data;
 
    return (
        <div>
            <img src={imgUrl} className={styles.saladImg} alt={"salad image"}></img>
            <SaladInfo
                name={name}
                vegetables={vegetables}
                meat={meat}
            />
        </div>
    )
}

export default Salad