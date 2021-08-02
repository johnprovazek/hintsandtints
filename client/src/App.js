import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import Console from "./components/Console"
// import Form from "./components/Form";
// import TodoList from "./components/TodoList";
// import firebase from "./util/firebase";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            body: "SplashPrints",
            print: ""
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log("clicked!")
    //     firebase.auth().signInAnonymously()
    //     .then(() => {
    //         // Signed in..
    //     })
    //     .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorCode)
    //         console.log(errorMessage)
    //         // ...
    //     });
    // }

    componentDidMount() {
        // console.log("hello")
        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         // User is signed in, see docs for a list of available properties
        //         // https://firebase.google.com/docs/reference/js/firebase.User
        //         var uid = user.uid;
        //         console.log(uid)
        //         // ...
        //         } else {
        //         // User is signed out
        //         // ...
        //     }
        // });
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