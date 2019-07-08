import React from "react";
import { connect } from "react-redux";
import { fetchSalad } from "../actions/saladActions";
import Button from "../components/Button";

const mapStateToProps = () => ({
   text: "Generate Salad Of The Day"
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(fetchSalad("saladOfTheDay"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);