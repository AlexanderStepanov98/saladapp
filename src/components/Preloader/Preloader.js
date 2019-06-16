import React, { Component } from "react";
import styles from "./Preloader.css";

const Preloader = () => (
    <div className={styles.container}>
        <div className={styles.loader}></div> 
        <p>Loading...</p>
    </div>
)

export default Preloader