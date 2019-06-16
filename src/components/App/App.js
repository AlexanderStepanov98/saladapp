import React, { Component } from "react";
import { connect } from "react-redux";
import Salad from "../Salad/Salad";
import Preloader from "../Preloader/Preloader";
import styles from "./App.css";
import { fetchSalad } from "../../actions/saladActions";

class App extends Component {
    generateSalad() {
        this.props.fetchSalad("saladOfTheDay");
    }

    render() {
        const {isFetching, saladRequested, salad} = this.props;
        const {container, defaultButton} = styles;

        return (
            <div className={container}>
                <button 
                    onClick={this.generateSalad.bind(this)}
                    className={defaultButton}>
                    Generate salad of the day
                </button>
                {saladRequested
                    ? (isFetching ? <Preloader/> : <Salad data={salad}/>)
                    : <p>Click on “Generate salad of the day” button to load data</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        saladRequested: state.saladRequested,
        salad: state.salad
    }
}

export default connect(mapStateToProps, { fetchSalad })(App)