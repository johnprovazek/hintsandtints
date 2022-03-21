import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import Console from "./components/Console"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            body: "SplashPrints",
            print: ""
        };
    }
    render() {
        return (
            <div className="App">
                <div className="grid-container">
                    <div id="GBT" ></div>
                    <div id="GBL" ></div>
                    <div id="GBR" ></div>
                    <div id="GBB" ></div>
                    <Board id="BRD"></Board>
                    <Console id="CON"></Console>
                </div>
            </div>
        );
    }
}
export default App;