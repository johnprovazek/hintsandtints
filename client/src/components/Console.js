import React, { Component } from "react";
// import firebase from "../util/firebase";

class Console extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: "HomeConsole",
            currentPlay: "PlaySetup",
            currentColorClue: null,
        };
    }

    RewardPoints(center, value){
        var centerLetter = center.slice(0,1);
        var valueLetter = value.slice(0,1);
        var centerNumber = center.slice(1,3);
        var valueNumber = value.slice(1,3);
        var numberDiff = Math.abs(centerLetter.charCodeAt()  - valueLetter.charCodeAt())
        var letterDiff = Math.abs(centerNumber - valueNumber)

        if(numberDiff <= 2 && letterDiff <= 2 ){
            if(numberDiff <= 1 && letterDiff <= 1 ){
                if(numberDiff === 0 && letterDiff === 0 ){
                    console.log("3 points")
                }
                else{
                    console.log("2 points")
                }
            }
            else{
                console.log("1 point")
            }
        }
        else{
            console.log("no points")
        }
    }

    ColorClueSelect(id) {
        this.setState({currentColorClue: id});
    }

    ChangePage(pageName) {
        this.setState({currentPage: pageName});
    }

    ChangePlay(playName) {
        this.setState({currentPlay: playName});
    }

    PlaySetup() {
        return(
            <div id="PLY">
                <div className="play-setup-container">
                    <div id="PB1"></div>
                    <div className="text-centered two-unit-button" id="REA" onClick={() => this.ChangePlay("PlayClue")}>
                        <span>Click When Ready</span>
                    </div>
                    <div id="PB2"></div>
                    <div className="text-centered two-unit-button" id="SHR" onClick={() => this.ChangePlay("PlayGuess")}>
                        <span>Copy Game Link</span>
                    </div>
                    <div id="PB3"></div>
                    <div className="text-centered two-unit-button" id="RUL" onClick={() => this.ChangePlay("PlayResults")}>
                        <span>Rules</span>
                    </div>
                    <div id="PB4"></div>
                    <a className="text-centered two-unit-button" id="BEE" href="https://www.buymeacoffee.com/johnprovazek" target="_blank" rel="noreferrer">
                        <span>Buy Me A Beer</span>
                    </a>
                </div>
            </div>
        )
    }

    PlayClue() {
        return(
            <div id="PLY">
                <div className="play-clue-container">
                    <div className="text-centered" id="PI1">
                        <span>Pick Color and Clue:</span>
                    </div>
                    <div className={`text-centered  ${this.state.currentColorClue === "GC1" ? "color-selected" : ""}`} id="GC1" onClick={() => this.ColorClueSelect("GC1")}> 
                        <span className="color-clue-code" >F10</span>
                    </div>
                    <div className={`text-centered  ${this.state.currentColorClue === "GC2" ? "color-selected" : ""}`} id="GC2" onClick={() => this.ColorClueSelect("GC2")}>
                        <span className="color-clue-code" >O18</span>
                    </div>
                    <div className={`text-centered  ${this.state.currentColorClue === "GC3" ? "color-selected" : ""}`} id="GC3" onClick={() => this.ColorClueSelect("GC3")}>
                        <span className="color-clue-code" >B7</span>
                    </div>
                    <div className={`text-centered  ${this.state.currentColorClue === "GC4" ? "color-selected" : ""}`} id="GC4" onClick={() => this.ColorClueSelect("GC4")}>
                        <span className="color-clue-code" >L14</span>
                    </div>
                    <div id="PBC"></div>
                    <div id="PB1"></div>
                    <div id="PB2"></div>
                    <div id="PB3"></div>
                    <div id="PB4"></div>
                    <div className="text-centered" id="CIN">
                        <input className="join-input" type="text" maxLength="10" autoComplete="off" placeholder="One Word Clue"></input>
                    </div>
                    <div className="text-centered two-unit-button" id="CSU" >
                        <span>Submit</span>
                    </div>
                </div>
            </div>
        )
    }

    PlayGuess() {
        return(
            <div id="PLY">
                <div className="play-guess-container">
                    <div className="text-centered" id="MGI">
                        <span>Select Color for Clue:</span>
                    </div>
                    <div className="text-centered" id="MGC">
                        <span>Berry</span>
                    </div>
                </div>
            </div>
        )
    }

    PlayWait() {
        return(
            <div id="PLY">
                <div className="play-wait-container">
                    <div className="text-centered" id="WAI">
                        <span>I'll add a fun game in here later</span>
                    </div>
                </div>
            </div>
        )
    }

    PlayResults() {
        return(
            <div id="PLY">
                <div className="play-results-container">
                    <div className="text-centered" id="RES">
                        <span>+3pts!</span>
                    </div>
                </div>
            </div>
        )
    }

    Game() {
        console.log("Game")
        return(
            <div className="game-container">
                <div id="X01">
                    <span class="player-dot" style={{backgroundColor: "yellow"}}></span>
                    <span class="artist">Da Vinci</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X02">
                    <span class="player-dot" style={{backgroundColor: "seagreen"}}></span>
                    <span class="artist" style={{color: "seagreen"}}>Van Gogh</span>
                    <span style={{color: "seagreen"}} class="ready-status">Sleeping</span>
                </div>
                <div id="X03">
                    <span class="player-dot" style={{backgroundColor: "coral"}}></span>
                    <span class="artist">Monet</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X04">
                    <span class="player-dot" style={{backgroundColor: "darkviolet"}}></span>
                    <span class="artist">Picasso</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X05">
                    <span class="player-dot" style={{backgroundColor: "tomato"}}></span>
                    <span class="artist">Cézanne</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X06">
                    <span class="player-dot" style={{backgroundColor: "dodgerblue"}}></span>
                    <span class="artist">Pollock</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X07">
                    <span class="player-dot" style={{backgroundColor: "hotpink"}}></span>
                    <span class="artist">Dalí</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X08">
                    <span class="player-dot" style={{backgroundColor: "grey"}}></span>
                    <span class="artist">Kahlo</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X09">
                    <span class="player-dot" style={{backgroundColor: "white"}}></span>
                    <span class="artist">Matisee</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                <div id="X10">
                    <span class="player-dot" style={{backgroundColor: "black"}}></span>
                    <span class="artist">Raphael</span>
                    <span class="ready-status">Sleeping</span>
                </div>
                {this.state.currentPlay === "PlaySetup" && this.PlaySetup()}
                {this.state.currentPlay === "PlayClue" && this.PlayClue()}
                {this.state.currentPlay === "PlayGuess" && this.PlayGuess()}
                {this.state.currentPlay === "PlayWait" && this.PlayWait()}
                {this.state.currentPlay === "PlayResults" && this.PlayResults()}
                <div className="text-picture-frame" id="PIC">
                    <span style={{color: "seagreen"}}>Van Gogh</span>
                </div>
                <div id="CBB"></div>
                <div id="CBL"></div>
                <div id="CBR"></div>
            </div>
        );
    }
    JoinGame() {
        console.log("JoinGame")
        return(
            <div className="join-container">
                <div id="CBT"></div>
                <div id="CBL"></div>
                <div className="text-centered" id="JIN">
                    <input className="join-input" type="text" maxLength="10" autoComplete="off" placeholder="Enter Game Code"></input>
                </div>
                <div id="CB1"></div>
                <div className="text-centered two-unit-button" id="JSU" onClick={() => this.ChangePage("Game") }>
                    <span>Submit</span>
                </div>
                <div id="CB2"></div>
                <a className="text-centered two-unit-button" id="BEE" href="https://www.buymeacoffee.com/johnprovazek" target="_blank" rel="noreferrer">
                    <span>Buy Me A Beer</span>
                </a>
                <div id="CBB"></div>
                <div id="CBR"></div>
            </div>
        );
    }
    HomeConsole() {
        console.log("HomeConsole")
        return(
            <div className="console-container">
                <div id="CBL"></div>
                <div id="CBT"></div>
                <div className="text-centered two-unit-button" id="CGA" onClick={() => this.ChangePage("Game") }>
                    <span>Create Game</span>
                </div>
                <div id="CB1"></div>
                <div className="text-centered two-unit-button" id="JGA" onClick={() => this.ChangePage("JoinGame") }>
                    <span>Join Game</span>
                </div>
                <div id="CB2"></div>
                <a className="text-centered two-unit-button"id="BEE" href="https://www.buymeacoffee.com/johnprovazek" target="_blank" rel="noreferrer">
                    <span>Buy Me A Beer</span>
                </a>
                <div id="CBB"></div>
                <div id="CBR"></div>
            </div>
        );
    }
    render() {
        return(
            <div>
                {this.state.currentPage === "HomeConsole" && this.HomeConsole()}
                {this.state.currentPage === "Game" && this.Game()}
                {this.state.currentPage === "JoinGame" && this.JoinGame()}
            </div>
        );
    }
}
export default Console;


// Get React Pages Working with unique codes connected to firebase