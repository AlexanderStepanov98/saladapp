import React from "react";
import { connect } from "react-redux";
import Salad from "../components/Salad/Salad";

const mapStateToProps = state => ({
   data: state.salad
});

export default connect(mapStateToProps)(Salad);

