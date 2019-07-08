import React from "react";
import styles from "./App/App.css";

const Button = ({onClick, text}) => {
    const {defaultButton} = styles;

    return (
        <button
            onClick={onClick}
            className={defaultButton}>
            {text}
        </button>
    )
};

export default Button