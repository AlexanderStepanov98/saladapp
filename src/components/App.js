import React, { Component } from "react";

export default class App extends Component {
    okButtonHandler() {
        alert("Ok button clicked");
    }

    render() {
        return (
            <div>
                <h1>This is App.js</h1>
                <p>It will be used for testing Babel and Webpack</p>
                <p>Also, it will be used to see how to work with GitHub while developing React application</p>
                <p>Press this button if you have read the above text</p>
                <button onClick={() => this.okButtonHandler()}>OK</button>
            </div>
        )
    }
}