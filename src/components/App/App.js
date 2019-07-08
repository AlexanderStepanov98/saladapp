import React from "react";
import { connect } from "react-redux";
import styles from "./App.css";
import Preloader from "../Preloader/Preloader";
import GenerateSaladContainer from "../../containers/GenerateSaladContainer";
import SaladContainer from "../../containers/SaladContainer";

const App = ({isFetching, saladRequested}) => {
    const {container} = styles;

    return (
        <div className={container}>
            <GenerateSaladContainer/>
            {saladRequested
                ? (isFetching ? <Preloader/> : <SaladContainer/>)
                : <p>Click on “Generate salad of the day” button to load data</p>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    saladRequested: state.saladRequested
});

export default connect(mapStateToProps)(App)