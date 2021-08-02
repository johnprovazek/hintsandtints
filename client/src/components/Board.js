import React, { Component } from "react";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreTracker: {
                "DaVinci": 4,
                "VanGogh": 4,
                "Monet": 2,
                "Picasso": 3,
                "Cezanne": 3,
                "Pollock": 3,
                "Dali": 4,
                "Kahlo": 7,
                "Matisee": 7,
                "Raphael": 8,
            },
            dotList: {},
            currentPlayer: "Pollock",
        };
    }

    currentPlayerColor = {
        "DaVinci": "yellow",
        "VanGogh": "seagreen",
        "Monet": "coral",
        "Picasso": "darkviolet",
        "Cezanne": "tomato",
        "Pollock": "dodgerblue",
        "Dali": "hotpink",
        "Kahlo": "grey",
        "Matisee": "white",
        "Raphael": "black"
    }

    DotSelectedCheck(index){
        if(this.state.dotList[index]){
            return true
        }
        else{
            return false
        }
    }

    ResetSquares(){
        this.setState({dotList: {}});
    }

    Right(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "min(0.36vw, 0.6vh) 0 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    Left(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "max(-0.36vw, -0.6vh) 0 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    Top(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "0 max(-0.36vw, -0.6vh) 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    Bottom(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "0 min(0.36vw, 0.6vh) 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    TopLeft(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "max(-0.36vw, -0.6vh) 0 0 0 white, 0 max(-0.36vw, -0.6vh) 0 0 white, max(-0.36vw, -0.6vh) max(-0.36vw, -0.6vh) 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    TopRight(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "min(0.36vw, 0.6vh) 0 0 0 white, 0 max(-0.36vw, -0.6vh) 0 0 white, min(0.36vw, 0.6vh) max(-0.36vw, -0.6vh) 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    BottomRight(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "min(0.36vw, 0.6vh) 0 0 0 white, 0 min(0.36vw, 0.6vh) 0 0 white, min(0.36vw, 0.6vh) min(0.36vw, 0.6vh) 0 0 white" : document.getElementById(id).style.boxShadow = "none"}
    BottomLeft(id, pos){document.getElementById(id).style.position = pos; pos === "relative" ? document.getElementById(id).style.boxShadow = "max(-0.36vw, -0.6vh) 0 0 0 white, 0 min(0.36vw, 0.6vh) 0 0 white, max(-0.36vw, -0.6vh) min(0.36vw, 0.6vh) 0 0 white" : document.getElementById(id).style.boxShadow = "none"}

    DrawClearBorder(index,operation){
        var pos = "relative"
        if(operation === "draw"){ pos = "relative"}
        if(operation === "clear"){ pos = "static"}
        var indexLetter = index.slice(0,1).charCodeAt();
        var indexNumber = Number(index.slice(1,3));
        var LFTI = String.fromCharCode(indexLetter) + ('0' + (indexNumber - 1)).slice(-2) /* Left Index */
        var RGTI = String.fromCharCode(indexLetter) + ('0' + (indexNumber + 1)).slice(-2) /* Right Index */
        var TOPI = String.fromCharCode(indexLetter - 1) + ('0' + (indexNumber)).slice(-2) /* Top Index */
        var BTMI = String.fromCharCode(indexLetter + 1) + ('0' + (indexNumber)).slice(-2) /* Bottom Index */
        var TLTI = String.fromCharCode(indexLetter - 1) + ('0' + (indexNumber - 1)).slice(-2) /* Top Left Index */
        var TRTI = String.fromCharCode(indexLetter - 1) + ('0' + (indexNumber + 1)).slice(-2) /* Top Right Index */
        var BLTI = String.fromCharCode(indexLetter + 1) + ('0' + (indexNumber - 1)).slice(-2) /* Bottom Left Index Index */
        var BRTI = String.fromCharCode(indexLetter + 1) + ('0' + (indexNumber + 1)).slice(-2) /* Bottom Right Index */
        if(indexLetter > 65 && indexLetter < 80 && indexNumber > 1 && indexNumber < 30){
            this.Left(LFTI, pos)
            this.Top(TOPI, pos)
            this.Right(RGTI, pos)
            this.Bottom(BTMI, pos)
            this.TopLeft(TLTI, pos)
            this.TopRight(TRTI, pos)
            this.BottomLeft(BLTI,pos)
            this.BottomRight(BRTI,pos)
        }
        else if(indexLetter === 80 && indexNumber === 1){
            this.Top(TOPI, pos)
            this.Right(RGTI, pos)
            this.TopRight(TRTI, pos)
        }
        else if(indexLetter === 80 && indexNumber === 30){
            this.Left(LFTI, pos)
            this.Top(TOPI, pos)
            this.TopLeft(TLTI, pos)
        }
        else if(indexLetter === 65 && indexNumber === 1){
            this.Right(RGTI, pos)
            this.Bottom(BTMI, pos)
            this.BottomRight(BRTI,pos)
        }
        else if(indexLetter === 65 && indexNumber === 30){
            this.Left(LFTI, pos)
            this.Bottom(BTMI, pos)
            this.BottomLeft(BLTI,pos)
        }
        else if(indexLetter === 65){
            this.Left(LFTI, pos)
            this.Right(RGTI, pos)
            this.Bottom(BTMI, pos)
            this.BottomLeft(BLTI,pos)
            this.BottomRight(BRTI,pos)
        }
        else if(indexLetter === 80){
            this.Left(LFTI, pos)
            this.Top(TOPI, pos)
            this.Right(RGTI, pos)
            this.TopLeft(TLTI, pos)
            this.TopRight(TRTI, pos)
        }
        else if(indexNumber === 1){
            this.Top(TOPI, pos)
            this.Right(RGTI, pos)
            this.TopRight(TRTI, pos)
            this.BottomRight(BRTI,pos)
            this.Bottom(BTMI, pos)
        }
        else if(indexNumber === 30){
            this.Left(LFTI, pos)
            this.Top(TOPI, pos)
            this.Bottom(BTMI, pos)
            this.TopLeft(TLTI, pos)
            this.BottomLeft(BLTI,pos)
        }
    }

    ClickedSquare(index){
        // this.DrawClearBorder(index, "draw")
        this.setState({
            dotList:{ ...this.state.dotList, [index]: this.state.currentPlayer},
        });
        // console.log(this.state.dotList)
    }

    ScoreDots(index){
        var indexNumber = Number(index.slice(1,3));  
        var dotsAmount = 0
        var Artists = ["DaVinci", "VanGogh", "Monet","Picasso","Cezanne","Pollock","Dali","Kahlo","Matisee","Raphael"];
        for(let i = 0 ; i < Artists.length; i++) {
            if(this.state.scoreTracker[Artists[i]] === indexNumber){
                dotsAmount = dotsAmount + 1;
            }
        }
        console.log(index + "--" + dotsAmount)
        return(
            <div className="score-dot-holder">
                {this.state.scoreTracker["DaVinci"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "yellow"}}></span>}
                {this.state.scoreTracker["VanGogh"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "seagreen"}}></span>}
                {this.state.scoreTracker["Monet"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "coral"}}></span>}
                {this.state.scoreTracker["Picasso"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "darkviolet"}}></span>}
                {this.state.scoreTracker["Cezanne"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "tomato"}}></span>}
                {this.state.scoreTracker["Pollock"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "dodgerblue"}}></span>}
                {this.state.scoreTracker["Dali"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "hotpink"}}></span>}
                {this.state.scoreTracker["Kahlo"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "grey"}}></span>}
                {this.state.scoreTracker["Matisee"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "white"}}></span>}
                {this.state.scoreTracker["Raphael"] === indexNumber && <span className={"score-dot dots-" + dotsAmount} style={{backgroundColor: "black"}}></span>}          
            </div>
        )
    }

    SelectionDot(index){
        return(
            <div>
                <span className="selection-dot" style={{backgroundColor: this.currentPlayerColor[this.state.dotList[index]]  }}></span>
            </div>
        );
    }

    render() {
        return(
            <div className="board-container">
                <div id="TBU"></div>
                <div id="LBU"></div>
                <div id="BBU"></div>
                <div className="table-item-logo" id="LOG"></div>
                <div id="URC"></div>
                <div id="ULC" onClick={() => this.DrawClearBorder("F14", "clear")}></div>
                <div id="LRC" onClick={() => this.DotSelectedCheck("F14")}></div>
                <div id="LLC" onClick={() => this.ResetSquares()}></div>
                <div className="text-centered" id="Y01">1</div>
                <div className="text-centered" id="Y02">2</div>
                <div className="text-centered" id="Y03">3</div>
                <div className="text-centered" id="Y04">4</div>
                <div className="text-centered" id="Y05">5</div>
                <div className="text-centered" id="Y06">6</div>
                <div className="text-centered" id="Y07">7</div>
                <div className="text-centered" id="Y08">8</div>
                <div className="text-centered" id="Y09">9</div>
                <div className="text-centered" id="Y10">10</div>
                <div className="text-centered" id="Y11">11</div>
                <div className="text-centered" id="Y12">12</div>
                <div className="text-centered" id="Y13">13</div>
                <div className="text-centered" id="Y14">14</div>
                <div className="text-centered" id="Y15">15</div>
                <div className="text-centered" id="Y16">16</div>
                <div className="text-centered" id="Y17">17</div>
                <div className="text-centered" id="Y18">18</div>
                <div className="text-centered" id="Y19">19</div>
                <div className="text-centered" id="Y20">20</div>
                <div className="text-centered" id="Y21">21</div>
                <div className="text-centered" id="Y22">22</div>
                <div className="text-centered" id="Y23">23</div>
                <div className="text-centered" id="Y24">24</div>
                <div className="text-centered" id="Y25">25</div>
                <div className="text-centered" id="Y26">26</div>
                <div className="text-centered" id="Y27">27</div>
                <div className="text-centered" id="Y28">28</div>
                <div className="text-centered" id="Y29">29</div>
                <div className="text-centered" id="Y30">30</div>
                <div className="text-centered" id="Z01">1</div>
                <div className="text-centered" id="Z02">2</div>
                <div className="text-centered" id="Z03">3</div>
                <div className="text-centered" id="Z04">4</div>
                <div className="text-centered" id="Z05">5</div>
                <div className="text-centered" id="Z06">6</div>
                <div className="text-centered" id="Z07">7</div>
                <div className="text-centered" id="Z08">8</div>
                <div className="text-centered" id="Z09">9</div>
                <div className="text-centered" id="Z10">10</div>
                <div className="text-centered" id="Z11">11</div>
                <div className="text-centered" id="Z12">12</div>
                <div className="text-centered" id="Z13">13</div>
                <div className="text-centered" id="Z14">14</div>
                <div className="text-centered" id="Z15">15</div>
                <div className="text-centered" id="Z16">16</div>
                <div className="text-centered" id="Z17">17</div>
                <div className="text-centered" id="Z18">18</div>
                <div className="text-centered" id="Z19">19</div>
                <div className="text-centered" id="Z20">20</div>
                <div className="text-centered" id="Z21">21</div>
                <div className="text-centered" id="Z22">22</div>
                <div className="text-centered" id="Z23">23</div>
                <div className="text-centered" id="Z24">24</div>
                <div className="text-centered" id="Z25">25</div>
                <div className="text-centered" id="Z26">26</div>
                <div className="text-centered" id="Z27">27</div>
                <div className="text-centered" id="Z28">28</div>
                <div className="text-centered" id="Z29">29</div>
                <div className="text-centered" id="Z30">30</div>
                <div className="text-centered" id="LAA">A</div>
                <div className="text-centered" id="LAB">B</div>
                <div className="text-centered" id="LAC">C</div>
                <div className="text-centered" id="LAD">D</div>
                <div className="text-centered" id="LAE">E</div>
                <div className="text-centered" id="LAF">F</div>
                <div className="text-centered" id="LAG">G</div>
                <div className="text-centered" id="LAH">H</div>
                <div className="text-centered" id="LAI">I</div>
                <div className="text-centered" id="LAJ">J</div>
                <div className="text-centered" id="LAK">K</div>
                <div className="text-centered" id="LAL">L</div>
                <div className="text-centered" id="LAM">M</div>
                <div className="text-centered" id="LAN">N</div>
                <div className="text-centered" id="LAO">O</div>
                <div className="text-centered" id="LAP">P</div>
                <div className="text-centered" id="RAA">A</div>
                <div className="text-centered" id="RAB">B</div>
                <div className="text-centered" id="RAC">C</div>
                <div className="text-centered" id="RAD">D</div>
                <div className="text-centered" id="RAE">E</div>
                <div className="text-centered" id="RAF">F</div>
                <div className="text-centered" id="RAG">G</div>
                <div className="text-centered" id="RAH">H</div>
                <div className="text-centered" id="RAI">I</div>
                <div className="text-centered" id="RAJ">J</div>
                <div className="text-centered" id="RAK">K</div>
                <div className="text-centered" id="RAL">L</div>
                <div className="text-centered" id="RAM">M</div>
                <div className="text-centered" id="RAN">N</div>
                <div className="text-centered" id="RAO">O</div>
                <div className="text-centered" id="RAP">P</div>
                <div className="game-board-score" id ="S01">{this.ScoreDots("S01")}</div>
                <div className="game-board-score" id ="S02">{this.ScoreDots("S02")}</div>
                <div className="game-board-score" id ="S03">{this.ScoreDots("S03")}</div>
                <div className="game-board-score" id ="S04">{this.ScoreDots("S04")}</div>
                <div className="game-board-score text-centered" id ="S05">{this.ScoreDots("S05")}</div>
                <div className="game-board-score" id ="S06">{this.ScoreDots("S06")}</div>
                <div className="game-board-score" id ="S07">{this.ScoreDots("S07")}</div>
                <div className="game-board-score" id ="S08">{this.ScoreDots("S08")}</div>
                <div className="game-board-score" id ="S09">{this.ScoreDots("S09")}</div>
                <div className="game-board-score text-centered" id ="S10">{this.ScoreDots("S10")}</div>
                <div className="game-board-score" id ="S11">{this.ScoreDots("S11")}</div>
                <div className="game-board-score" id ="S12">{this.ScoreDots("S12")}</div>
                <div className="game-board-score" id ="S13">{this.ScoreDots("S13")}</div>
                <div className="game-board-score" id ="S14">{this.ScoreDots("S14")}</div>
                <div className="game-board-score text-centered" id ="S15">{this.ScoreDots("S15")}</div>
                <div className="game-board-score" id ="S16">{this.ScoreDots("S16")}</div>
                <div className="game-board-score" id ="S17">{this.ScoreDots("S17")}</div>
                <div className="game-board-score" id ="S18">{this.ScoreDots("S18")}</div>
                <div className="game-board-score" id ="S19">{this.ScoreDots("S19")}</div>
                <div className="game-board-score text-centered" id ="S20">{this.ScoreDots("S20")}</div>
                <div className="game-board-score" id ="S21">{this.ScoreDots("S21")}</div>
                <div className="game-board-score" id ="S22">{this.ScoreDots("S22")}</div>
                <div className="game-board-score" id ="S23">{this.ScoreDots("S23")}</div>
                <div className="game-board-score" id ="S24">{this.ScoreDots("S24")}</div>
                <div className="game-board-score text-centered" id ="S25">{this.ScoreDots("S25")}</div>
                <div className="game-board-score" id ="S26">{this.ScoreDots("S26")}</div>
                <div className="game-board-score" id ="S27">{this.ScoreDots("S27")}</div>
                <div className="game-board-score" id ="S28">{this.ScoreDots("S28")}</div>
                <div className="game-board-score" id ="S29">{this.ScoreDots("S29")}</div>
                <div className="game-board-score text-centered" id ="S30">{this.ScoreDots("S30")}</div>
                <div className="game-board-score" id ="S31">{this.ScoreDots("S31")}</div>
                <div className="game-board-score" id ="S32">{this.ScoreDots("S32")}</div>
                <div className="game-board-score" id ="S33">{this.ScoreDots("S33")}</div>
                <div className="game-board-score" id ="S34">{this.ScoreDots("S34")}</div>
                <div className="game-board-score text-centered" id ="S35">{this.ScoreDots("S35")}</div>
                <div className="game-board-score" id ="S36">{this.ScoreDots("S36")}</div>
                <div className="game-board-score" id ="S37">{this.ScoreDots("S37")}</div>
                <div className="game-board-score" id ="S38">{this.ScoreDots("S38")}</div>
                <div className="game-board-score" id ="S39">{this.ScoreDots("S39")}</div>
                <div className="game-board-score text-centered" id ="S40">{this.ScoreDots("S40")}</div>
                <div className="game-board-score" id ="S41">{this.ScoreDots("S41")}</div>
                <div className="game-board-score" id ="S42">{this.ScoreDots("S42")}</div>
                <div className="game-board-score" id ="S43">{this.ScoreDots("S43")}</div>
                <div className="game-board-score" id ="S44">{this.ScoreDots("S44")}</div>
                <div className="game-board-score text-centered" id ="S45">{this.ScoreDots("S45")}</div>
                <div className="game-board-score" id ="S46">{this.ScoreDots("S46")}</div>
                <div className="game-board-score" id ="S47">{this.ScoreDots("S47")}</div>
                <div className="game-board-score" id ="S48">{this.ScoreDots("S48")}</div>
                <div className="game-board-score" id ="S49">{this.ScoreDots("S49")}</div>
                <div className="game-board-score text-centered" id ="S50">{this.ScoreDots("S50")}</div>
                <div className="game-board-color" id= "A01" onClick={() => this.ClickedSquare("A01")}>{this.DotSelectedCheck("A01") && this.SelectionDot("A01")}</div>
                <div className="game-board-color" id ="A02" onClick={() => this.ClickedSquare("A02")}>{this.DotSelectedCheck("A02") && this.SelectionDot("A02")}</div>
                <div className="game-board-color" id ="A03" onClick={() => this.ClickedSquare("A03")}>{this.DotSelectedCheck("A03") && this.SelectionDot("A03")}</div>
                <div className="game-board-color" id ="A04" onClick={() => this.ClickedSquare("A04")}>{this.DotSelectedCheck("A04") && this.SelectionDot("A04")}</div>
                <div className="game-board-color" id ="A05" onClick={() => this.ClickedSquare("A05")}>{this.DotSelectedCheck("A05") && this.SelectionDot("A05")}</div>
                <div className="game-board-color" id ="A06" onClick={() => this.ClickedSquare("A06")}>{this.DotSelectedCheck("A06") && this.SelectionDot("A06")}</div>
                <div className="game-board-color" id ="A07" onClick={() => this.ClickedSquare("A07")}>{this.DotSelectedCheck("A07") && this.SelectionDot("A07")}</div>
                <div className="game-board-color" id ="A08" onClick={() => this.ClickedSquare("A08")}>{this.DotSelectedCheck("A08") && this.SelectionDot("A08")}</div>
                <div className="game-board-color" id ="A09" onClick={() => this.ClickedSquare("A09")}>{this.DotSelectedCheck("A09") && this.SelectionDot("A09")}</div>
                <div className="game-board-color" id ="A10" onClick={() => this.ClickedSquare("A10")}>{this.DotSelectedCheck("A10") && this.SelectionDot("A10")}</div>
                <div className="game-board-color" id ="A11" onClick={() => this.ClickedSquare("A11")}>{this.DotSelectedCheck("A11") && this.SelectionDot("A11")}</div>
                <div className="game-board-color" id ="A12" onClick={() => this.ClickedSquare("A12")}>{this.DotSelectedCheck("A12") && this.SelectionDot("A12")}</div>
                <div className="game-board-color" id ="A13" onClick={() => this.ClickedSquare("A13")}>{this.DotSelectedCheck("A13") && this.SelectionDot("A13")}</div>
                <div className="game-board-color" id ="A14" onClick={() => this.ClickedSquare("A14")}>{this.DotSelectedCheck("A14") && this.SelectionDot("A14")}</div>
                <div className="game-board-color" id ="A15" onClick={() => this.ClickedSquare("A15")}>{this.DotSelectedCheck("A15") && this.SelectionDot("A15")}</div>
                <div className="game-board-color" id ="A16" onClick={() => this.ClickedSquare("A16")}>{this.DotSelectedCheck("A16") && this.SelectionDot("A16")}</div>
                <div className="game-board-color" id ="A17" onClick={() => this.ClickedSquare("A17")}>{this.DotSelectedCheck("A17") && this.SelectionDot("A17")}</div>
                <div className="game-board-color" id ="A18" onClick={() => this.ClickedSquare("A18")}>{this.DotSelectedCheck("A18") && this.SelectionDot("A18")}</div>
                <div className="game-board-color" id ="A19" onClick={() => this.ClickedSquare("A19")}>{this.DotSelectedCheck("A19") && this.SelectionDot("A19")}</div>
                <div className="game-board-color" id ="A20" onClick={() => this.ClickedSquare("A20")}>{this.DotSelectedCheck("A20") && this.SelectionDot("A20")}</div>
                <div className="game-board-color" id ="A21" onClick={() => this.ClickedSquare("A21")}>{this.DotSelectedCheck("A21") && this.SelectionDot("A21")}</div>
                <div className="game-board-color" id ="A22" onClick={() => this.ClickedSquare("A22")}>{this.DotSelectedCheck("A22") && this.SelectionDot("A22")}</div>
                <div className="game-board-color" id ="A23" onClick={() => this.ClickedSquare("A23")}>{this.DotSelectedCheck("A23") && this.SelectionDot("A23")}</div>
                <div className="game-board-color" id ="A24" onClick={() => this.ClickedSquare("A24")}>{this.DotSelectedCheck("A24") && this.SelectionDot("A24")}</div>
                <div className="game-board-color" id ="A25" onClick={() => this.ClickedSquare("A25")}>{this.DotSelectedCheck("A25") && this.SelectionDot("A25")}</div>
                <div className="game-board-color" id ="A26" onClick={() => this.ClickedSquare("A26")}>{this.DotSelectedCheck("A26") && this.SelectionDot("A26")}</div>
                <div className="game-board-color" id ="A27" onClick={() => this.ClickedSquare("A27")}>{this.DotSelectedCheck("A27") && this.SelectionDot("A27")}</div>
                <div className="game-board-color" id ="A28" onClick={() => this.ClickedSquare("A28")}>{this.DotSelectedCheck("A28") && this.SelectionDot("A28")}</div>
                <div className="game-board-color" id ="A29" onClick={() => this.ClickedSquare("A29")}>{this.DotSelectedCheck("A29") && this.SelectionDot("A29")}</div>
                <div className="game-board-color" id ="A30" onClick={() => this.ClickedSquare("A30")}>{this.DotSelectedCheck("A30") && this.SelectionDot("A30")}</div>
                <div className="game-board-color" id ="B01" onClick={() => this.ClickedSquare("B01")}>{this.DotSelectedCheck("B01") && this.SelectionDot("B01")}</div>
                <div className="game-board-color" id ="B02" onClick={() => this.ClickedSquare("B02")}>{this.DotSelectedCheck("B02") && this.SelectionDot("B02")}</div>
                <div className="game-board-color" id ="B03" onClick={() => this.ClickedSquare("B03")}>{this.DotSelectedCheck("B03") && this.SelectionDot("B03")}</div>
                <div className="game-board-color" id ="B04" onClick={() => this.ClickedSquare("B04")}>{this.DotSelectedCheck("B04") && this.SelectionDot("B04")}</div>
                <div className="game-board-color" id ="B05" onClick={() => this.ClickedSquare("B05")}>{this.DotSelectedCheck("B05") && this.SelectionDot("B05")}</div>
                <div className="game-board-color" id ="B06" onClick={() => this.ClickedSquare("B06")}>{this.DotSelectedCheck("B06") && this.SelectionDot("B06")}</div>
                <div className="game-board-color" id ="B07" onClick={() => this.ClickedSquare("B07")}>{this.DotSelectedCheck("B07") && this.SelectionDot("B07")}</div>
                <div className="game-board-color" id ="B08" onClick={() => this.ClickedSquare("B08")}>{this.DotSelectedCheck("B08") && this.SelectionDot("B08")}</div>
                <div className="game-board-color" id ="B09" onClick={() => this.ClickedSquare("B09")}>{this.DotSelectedCheck("B09") && this.SelectionDot("B09")}</div>
                <div className="game-board-color" id ="B10" onClick={() => this.ClickedSquare("B10")}>{this.DotSelectedCheck("B10") && this.SelectionDot("B10")}</div>
                <div className="game-board-color" id ="B11" onClick={() => this.ClickedSquare("B11")}>{this.DotSelectedCheck("B11") && this.SelectionDot("B11")}</div>
                <div className="game-board-color" id ="B12" onClick={() => this.ClickedSquare("B12")}>{this.DotSelectedCheck("B12") && this.SelectionDot("B12")}</div>
                <div className="game-board-color" id ="B13" onClick={() => this.ClickedSquare("B13")}>{this.DotSelectedCheck("B13") && this.SelectionDot("B13")}</div>
                <div className="game-board-color" id ="B14" onClick={() => this.ClickedSquare("B14")}>{this.DotSelectedCheck("B14") && this.SelectionDot("B14")}</div>
                <div className="game-board-color" id ="B15" onClick={() => this.ClickedSquare("B15")}>{this.DotSelectedCheck("B15") && this.SelectionDot("B15")}</div>
                <div className="game-board-color" id ="B16" onClick={() => this.ClickedSquare("B16")}>{this.DotSelectedCheck("B16") && this.SelectionDot("B16")}</div>
                <div className="game-board-color" id ="B17" onClick={() => this.ClickedSquare("B17")}>{this.DotSelectedCheck("B17") && this.SelectionDot("B17")}</div>
                <div className="game-board-color" id ="B18" onClick={() => this.ClickedSquare("B18")}>{this.DotSelectedCheck("B18") && this.SelectionDot("B18")}</div>
                <div className="game-board-color" id ="B19" onClick={() => this.ClickedSquare("B19")}>{this.DotSelectedCheck("B19") && this.SelectionDot("B19")}</div>
                <div className="game-board-color" id ="B20" onClick={() => this.ClickedSquare("B20")}>{this.DotSelectedCheck("B20") && this.SelectionDot("B20")}</div>
                <div className="game-board-color" id ="B21" onClick={() => this.ClickedSquare("B21")}>{this.DotSelectedCheck("B21") && this.SelectionDot("B21")}</div>
                <div className="game-board-color" id ="B22" onClick={() => this.ClickedSquare("B22")}>{this.DotSelectedCheck("B22") && this.SelectionDot("B22")}</div>
                <div className="game-board-color" id ="B23" onClick={() => this.ClickedSquare("B23")}>{this.DotSelectedCheck("B23") && this.SelectionDot("B23")}</div>
                <div className="game-board-color" id ="B24" onClick={() => this.ClickedSquare("B24")}>{this.DotSelectedCheck("B24") && this.SelectionDot("B24")}</div>
                <div className="game-board-color" id ="B25" onClick={() => this.ClickedSquare("B25")}>{this.DotSelectedCheck("B25") && this.SelectionDot("B25")}</div>
                <div className="game-board-color" id ="B26" onClick={() => this.ClickedSquare("B26")}>{this.DotSelectedCheck("B26") && this.SelectionDot("B26")}</div>
                <div className="game-board-color" id ="B27" onClick={() => this.ClickedSquare("B27")}>{this.DotSelectedCheck("B27") && this.SelectionDot("B27")}</div>
                <div className="game-board-color" id ="B28" onClick={() => this.ClickedSquare("B28")}>{this.DotSelectedCheck("B28") && this.SelectionDot("B28")}</div>
                <div className="game-board-color" id ="B29" onClick={() => this.ClickedSquare("B29")}>{this.DotSelectedCheck("B29") && this.SelectionDot("B29")}</div>
                <div className="game-board-color" id ="B30" onClick={() => this.ClickedSquare("B30")}>{this.DotSelectedCheck("B30") && this.SelectionDot("B30")}</div>
                <div className="game-board-color" id ="C01" onClick={() => this.ClickedSquare("C01")}>{this.DotSelectedCheck("C01") && this.SelectionDot("C01")}</div>
                <div className="game-board-color" id ="C02" onClick={() => this.ClickedSquare("C02")}>{this.DotSelectedCheck("C02") && this.SelectionDot("C02")}</div>
                <div className="game-board-color" id ="C03" onClick={() => this.ClickedSquare("C03")}>{this.DotSelectedCheck("C03") && this.SelectionDot("C03")}</div>
                <div className="game-board-color" id ="C04" onClick={() => this.ClickedSquare("C04")}>{this.DotSelectedCheck("C04") && this.SelectionDot("C04")}</div>
                <div className="game-board-color" id ="C05" onClick={() => this.ClickedSquare("C05")}>{this.DotSelectedCheck("C05") && this.SelectionDot("C05")}</div>
                <div className="game-board-color" id ="C06" onClick={() => this.ClickedSquare("C06")}>{this.DotSelectedCheck("C06") && this.SelectionDot("C06")}</div>
                <div className="game-board-color" id ="C07" onClick={() => this.ClickedSquare("C07")}>{this.DotSelectedCheck("C07") && this.SelectionDot("C07")}</div>
                <div className="game-board-color" id ="C08" onClick={() => this.ClickedSquare("C08")}>{this.DotSelectedCheck("C08") && this.SelectionDot("C08")}</div>
                <div className="game-board-color" id ="C09" onClick={() => this.ClickedSquare("C09")}>{this.DotSelectedCheck("C09") && this.SelectionDot("C09")}</div>
                <div className="game-board-color" id ="C10" onClick={() => this.ClickedSquare("C10")}>{this.DotSelectedCheck("C10") && this.SelectionDot("C10")}</div>
                <div className="game-board-color" id ="C11" onClick={() => this.ClickedSquare("C11")}>{this.DotSelectedCheck("C11") && this.SelectionDot("C11")}</div>
                <div className="game-board-color" id ="C12" onClick={() => this.ClickedSquare("C12")}>{this.DotSelectedCheck("C12") && this.SelectionDot("C12")}</div>
                <div className="game-board-color" id ="C13" onClick={() => this.ClickedSquare("C13")}>{this.DotSelectedCheck("C13") && this.SelectionDot("C13")}</div>
                <div className="game-board-color" id ="C14" onClick={() => this.ClickedSquare("C14")}>{this.DotSelectedCheck("C14") && this.SelectionDot("C14")}</div>
                <div className="game-board-color" id ="C15" onClick={() => this.ClickedSquare("C15")}>{this.DotSelectedCheck("C15") && this.SelectionDot("C15")}</div>
                <div className="game-board-color" id ="C16" onClick={() => this.ClickedSquare("C16")}>{this.DotSelectedCheck("C16") && this.SelectionDot("C16")}</div>
                <div className="game-board-color" id ="C17" onClick={() => this.ClickedSquare("C17")}>{this.DotSelectedCheck("C17") && this.SelectionDot("C17")}</div>
                <div className="game-board-color" id ="C18" onClick={() => this.ClickedSquare("C18")}>{this.DotSelectedCheck("C18") && this.SelectionDot("C18")}</div>
                <div className="game-board-color" id ="C19" onClick={() => this.ClickedSquare("C19")}>{this.DotSelectedCheck("C19") && this.SelectionDot("C19")}</div>
                <div className="game-board-color" id ="C20" onClick={() => this.ClickedSquare("C20")}>{this.DotSelectedCheck("C20") && this.SelectionDot("C20")}</div>
                <div className="game-board-color" id ="C21" onClick={() => this.ClickedSquare("C21")}>{this.DotSelectedCheck("C21") && this.SelectionDot("C21")}</div>
                <div className="game-board-color" id ="C22" onClick={() => this.ClickedSquare("C22")}>{this.DotSelectedCheck("C22") && this.SelectionDot("C22")}</div>
                <div className="game-board-color" id ="C23" onClick={() => this.ClickedSquare("C23")}>{this.DotSelectedCheck("C23") && this.SelectionDot("C23")}</div>
                <div className="game-board-color" id ="C24" onClick={() => this.ClickedSquare("C24")}>{this.DotSelectedCheck("C24") && this.SelectionDot("C24")}</div>
                <div className="game-board-color" id ="C25" onClick={() => this.ClickedSquare("C25")}>{this.DotSelectedCheck("C25") && this.SelectionDot("C25")}</div>
                <div className="game-board-color" id ="C26" onClick={() => this.ClickedSquare("C26")}>{this.DotSelectedCheck("C26") && this.SelectionDot("C26")}</div>
                <div className="game-board-color" id ="C27" onClick={() => this.ClickedSquare("C27")}>{this.DotSelectedCheck("C27") && this.SelectionDot("C27")}</div>
                <div className="game-board-color" id ="C28" onClick={() => this.ClickedSquare("C28")}>{this.DotSelectedCheck("C28") && this.SelectionDot("C28")}</div>
                <div className="game-board-color" id ="C29" onClick={() => this.ClickedSquare("C29")}>{this.DotSelectedCheck("C29") && this.SelectionDot("C29")}</div>
                <div className="game-board-color" id ="C30" onClick={() => this.ClickedSquare("C30")}>{this.DotSelectedCheck("C30") && this.SelectionDot("C30")}</div>
                <div className="game-board-color" id ="D01" onClick={() => this.ClickedSquare("D01")}>{this.DotSelectedCheck("D01") && this.SelectionDot("D01")}</div>
                <div className="game-board-color" id ="D02" onClick={() => this.ClickedSquare("D02")}>{this.DotSelectedCheck("D02") && this.SelectionDot("D02")}</div>
                <div className="game-board-color" id ="D03" onClick={() => this.ClickedSquare("D03")}>{this.DotSelectedCheck("D03") && this.SelectionDot("D03")}</div>
                <div className="game-board-color" id ="D04" onClick={() => this.ClickedSquare("D04")}>{this.DotSelectedCheck("D04") && this.SelectionDot("D04")}</div>
                <div className="game-board-color" id ="D05" onClick={() => this.ClickedSquare("D05")}>{this.DotSelectedCheck("D05") && this.SelectionDot("D05")}</div>
                <div className="game-board-color" id ="D06" onClick={() => this.ClickedSquare("D06")}>{this.DotSelectedCheck("D06") && this.SelectionDot("D06")}</div>
                <div className="game-board-color" id ="D07" onClick={() => this.ClickedSquare("D07")}>{this.DotSelectedCheck("D07") && this.SelectionDot("D07")}</div>
                <div className="game-board-color" id ="D08" onClick={() => this.ClickedSquare("D08")}>{this.DotSelectedCheck("D08") && this.SelectionDot("D08")}</div>
                <div className="game-board-color" id ="D09" onClick={() => this.ClickedSquare("D09")}>{this.DotSelectedCheck("D09") && this.SelectionDot("D09")}</div>
                <div className="game-board-color" id ="D10" onClick={() => this.ClickedSquare("D10")}>{this.DotSelectedCheck("D10") && this.SelectionDot("D10")}</div>
                <div className="game-board-color" id ="D11" onClick={() => this.ClickedSquare("D11")}>{this.DotSelectedCheck("D11") && this.SelectionDot("D11")}</div>
                <div className="game-board-color" id ="D12" onClick={() => this.ClickedSquare("D12")}>{this.DotSelectedCheck("D12") && this.SelectionDot("D12")}</div>
                <div className="game-board-color" id ="D13" onClick={() => this.ClickedSquare("D13")}>{this.DotSelectedCheck("D13") && this.SelectionDot("D13")}</div>
                <div className="game-board-color" id ="D14" onClick={() => this.ClickedSquare("D14")}>{this.DotSelectedCheck("D14") && this.SelectionDot("D14")}</div>
                <div className="game-board-color" id ="D15" onClick={() => this.ClickedSquare("D15")}>{this.DotSelectedCheck("D15") && this.SelectionDot("D15")}</div>
                <div className="game-board-color" id ="D16" onClick={() => this.ClickedSquare("D16")}>{this.DotSelectedCheck("D16") && this.SelectionDot("D16")}</div>
                <div className="game-board-color" id ="D17" onClick={() => this.ClickedSquare("D17")}>{this.DotSelectedCheck("D17") && this.SelectionDot("D17")}</div>
                <div className="game-board-color" id ="D18" onClick={() => this.ClickedSquare("D18")}>{this.DotSelectedCheck("D18") && this.SelectionDot("D18")}</div>
                <div className="game-board-color" id ="D19" onClick={() => this.ClickedSquare("D19")}>{this.DotSelectedCheck("D19") && this.SelectionDot("D19")}</div>
                <div className="game-board-color" id ="D20" onClick={() => this.ClickedSquare("D20")}>{this.DotSelectedCheck("D20") && this.SelectionDot("D20")}</div>
                <div className="game-board-color" id ="D21" onClick={() => this.ClickedSquare("D21")}>{this.DotSelectedCheck("D21") && this.SelectionDot("D21")}</div>
                <div className="game-board-color" id ="D22" onClick={() => this.ClickedSquare("D22")}>{this.DotSelectedCheck("D22") && this.SelectionDot("D22")}</div>
                <div className="game-board-color" id ="D23" onClick={() => this.ClickedSquare("D23")}>{this.DotSelectedCheck("D23") && this.SelectionDot("D23")}</div>
                <div className="game-board-color" id ="D24" onClick={() => this.ClickedSquare("D24")}>{this.DotSelectedCheck("D24") && this.SelectionDot("D24")}</div>
                <div className="game-board-color" id ="D25" onClick={() => this.ClickedSquare("D25")}>{this.DotSelectedCheck("D25") && this.SelectionDot("D25")}</div>
                <div className="game-board-color" id ="D26" onClick={() => this.ClickedSquare("D26")}>{this.DotSelectedCheck("D26") && this.SelectionDot("D26")}</div>
                <div className="game-board-color" id ="D27" onClick={() => this.ClickedSquare("D27")}>{this.DotSelectedCheck("D27") && this.SelectionDot("D27")}</div>
                <div className="game-board-color" id ="D28" onClick={() => this.ClickedSquare("D28")}>{this.DotSelectedCheck("D28") && this.SelectionDot("D28")}</div>
                <div className="game-board-color" id ="D29" onClick={() => this.ClickedSquare("D29")}>{this.DotSelectedCheck("D29") && this.SelectionDot("D29")}</div>
                <div className="game-board-color" id ="D30" onClick={() => this.ClickedSquare("D30")}>{this.DotSelectedCheck("D30") && this.SelectionDot("D30")}</div>
                <div className="game-board-color" id ="E01" onClick={() => this.ClickedSquare("E01")}>{this.DotSelectedCheck("E01") && this.SelectionDot("E01")}</div>
                <div className="game-board-color" id ="E02" onClick={() => this.ClickedSquare("E02")}>{this.DotSelectedCheck("E02") && this.SelectionDot("E02")}</div>
                <div className="game-board-color" id ="E03" onClick={() => this.ClickedSquare("E03")}>{this.DotSelectedCheck("E03") && this.SelectionDot("E03")}</div>
                <div className="game-board-color" id ="E04" onClick={() => this.ClickedSquare("E04")}>{this.DotSelectedCheck("E04") && this.SelectionDot("E04")}</div>
                <div className="game-board-color" id ="E05" onClick={() => this.ClickedSquare("E05")}>{this.DotSelectedCheck("E05") && this.SelectionDot("E05")}</div>
                <div className="game-board-color" id ="E06" onClick={() => this.ClickedSquare("E06")}>{this.DotSelectedCheck("E06") && this.SelectionDot("E06")}</div>
                <div className="game-board-color" id ="E07" onClick={() => this.ClickedSquare("E07")}>{this.DotSelectedCheck("E07") && this.SelectionDot("E07")}</div>
                <div className="game-board-color" id ="E08" onClick={() => this.ClickedSquare("E08")}>{this.DotSelectedCheck("E08") && this.SelectionDot("E08")}</div>
                <div className="game-board-color" id ="E09" onClick={() => this.ClickedSquare("E09")}>{this.DotSelectedCheck("E09") && this.SelectionDot("E09")}</div>
                <div className="game-board-color" id ="E10" onClick={() => this.ClickedSquare("E10")}>{this.DotSelectedCheck("E10") && this.SelectionDot("E10")}</div>
                <div className="game-board-color" id ="E11" onClick={() => this.ClickedSquare("E11")}>{this.DotSelectedCheck("E11") && this.SelectionDot("E11")}</div>
                <div className="game-board-color" id ="E12" onClick={() => this.ClickedSquare("E12")}>{this.DotSelectedCheck("E12") && this.SelectionDot("E12")}</div>
                <div className="game-board-color" id ="E13" onClick={() => this.ClickedSquare("E13")}>{this.DotSelectedCheck("E13") && this.SelectionDot("E13")}</div>
                <div className="game-board-color" id ="E14" onClick={() => this.ClickedSquare("E14")}>{this.DotSelectedCheck("E14") && this.SelectionDot("E14")}</div>
                <div className="game-board-color" id ="E15" onClick={() => this.ClickedSquare("E15")}>{this.DotSelectedCheck("E15") && this.SelectionDot("E15")}</div>
                <div className="game-board-color" id ="E16" onClick={() => this.ClickedSquare("E16")}>{this.DotSelectedCheck("E16") && this.SelectionDot("E16")}</div>
                <div className="game-board-color" id ="E17" onClick={() => this.ClickedSquare("E17")}>{this.DotSelectedCheck("E17") && this.SelectionDot("E17")}</div>
                <div className="game-board-color" id ="E18" onClick={() => this.ClickedSquare("E18")}>{this.DotSelectedCheck("E18") && this.SelectionDot("E18")}</div>
                <div className="game-board-color" id ="E19" onClick={() => this.ClickedSquare("E19")}>{this.DotSelectedCheck("E19") && this.SelectionDot("E19")}</div>
                <div className="game-board-color" id ="E20" onClick={() => this.ClickedSquare("E20")}>{this.DotSelectedCheck("E20") && this.SelectionDot("E20")}</div>
                <div className="game-board-color" id ="E21" onClick={() => this.ClickedSquare("E21")}>{this.DotSelectedCheck("E21") && this.SelectionDot("E21")}</div>
                <div className="game-board-color" id ="E22" onClick={() => this.ClickedSquare("E22")}>{this.DotSelectedCheck("E22") && this.SelectionDot("E22")}</div>
                <div className="game-board-color" id ="E23" onClick={() => this.ClickedSquare("E23")}>{this.DotSelectedCheck("E23") && this.SelectionDot("E23")}</div>
                <div className="game-board-color" id ="E24" onClick={() => this.ClickedSquare("E24")}>{this.DotSelectedCheck("E24") && this.SelectionDot("E24")}</div>
                <div className="game-board-color" id ="E25" onClick={() => this.ClickedSquare("E25")}>{this.DotSelectedCheck("E25") && this.SelectionDot("E25")}</div>
                <div className="game-board-color" id ="E26" onClick={() => this.ClickedSquare("E26")}>{this.DotSelectedCheck("E26") && this.SelectionDot("E26")}</div>
                <div className="game-board-color" id ="E27" onClick={() => this.ClickedSquare("E27")}>{this.DotSelectedCheck("E27") && this.SelectionDot("E27")}</div>
                <div className="game-board-color" id ="E28" onClick={() => this.ClickedSquare("E28")}>{this.DotSelectedCheck("E28") && this.SelectionDot("E28")}</div>
                <div className="game-board-color" id ="E29" onClick={() => this.ClickedSquare("E29")}>{this.DotSelectedCheck("E29") && this.SelectionDot("E29")}</div>
                <div className="game-board-color" id ="E30" onClick={() => this.ClickedSquare("E30")}>{this.DotSelectedCheck("E30") && this.SelectionDot("E30")}</div>
                <div className="game-board-color" id ="F01" onClick={() => this.ClickedSquare("F01")}>{this.DotSelectedCheck("F01") && this.SelectionDot("F01")}</div>
                <div className="game-board-color" id ="F02" onClick={() => this.ClickedSquare("F02")}>{this.DotSelectedCheck("F02") && this.SelectionDot("F02")}</div>
                <div className="game-board-color" id ="F03" onClick={() => this.ClickedSquare("F03")}>{this.DotSelectedCheck("F03") && this.SelectionDot("F03")}</div>
                <div className="game-board-color" id ="F04" onClick={() => this.ClickedSquare("F04")}>{this.DotSelectedCheck("F04") && this.SelectionDot("F04")}</div>
                <div className="game-board-color" id ="F05" onClick={() => this.ClickedSquare("F05")}>{this.DotSelectedCheck("F05") && this.SelectionDot("F05")}</div>
                <div className="game-board-color" id ="F06" onClick={() => this.ClickedSquare("F06")}>{this.DotSelectedCheck("F06") && this.SelectionDot("F06")}</div>
                <div className="game-board-color" id ="F07" onClick={() => this.ClickedSquare("F07")}>{this.DotSelectedCheck("F07") && this.SelectionDot("F07")}</div>
                <div className="game-board-color" id ="F08" onClick={() => this.ClickedSquare("F08")}>{this.DotSelectedCheck("F08") && this.SelectionDot("F08")}</div>
                <div className="game-board-color" id ="F09" onClick={() => this.ClickedSquare("F09")}>{this.DotSelectedCheck("F09") && this.SelectionDot("F09")}</div>
                <div className="game-board-color" id ="F10" onClick={() => this.ClickedSquare("F10")}>{this.DotSelectedCheck("F10") && this.SelectionDot("F10")}</div>
                <div className="game-board-color" id ="F11" onClick={() => this.ClickedSquare("F11")}>{this.DotSelectedCheck("F11") && this.SelectionDot("F11")}</div>
                <div className="game-board-color" id ="F12" onClick={() => this.ClickedSquare("F12")}>{this.DotSelectedCheck("F12") && this.SelectionDot("F12")}</div>
                <div className="game-board-color" id ="F13" onClick={() => this.ClickedSquare("F13")}>{this.DotSelectedCheck("F13") && this.SelectionDot("F13")}</div>
                <div className="game-board-color" id ="F14" onClick={() => this.ClickedSquare("F14")}>{this.DotSelectedCheck("F14") && this.SelectionDot("F14")}</div>
                <div className="game-board-color" id ="F15" onClick={() => this.ClickedSquare("F15")}>{this.DotSelectedCheck("F15") && this.SelectionDot("F15")}</div>
                <div className="game-board-color" id ="F16" onClick={() => this.ClickedSquare("F16")}>{this.DotSelectedCheck("F16") && this.SelectionDot("F16")}</div>
                <div className="game-board-color" id ="F17" onClick={() => this.ClickedSquare("F17")}>{this.DotSelectedCheck("F17") && this.SelectionDot("F17")}</div>
                <div className="game-board-color" id ="F18" onClick={() => this.ClickedSquare("F18")}>{this.DotSelectedCheck("F18") && this.SelectionDot("F18")}</div>
                <div className="game-board-color" id ="F19" onClick={() => this.ClickedSquare("F19")}>{this.DotSelectedCheck("F19") && this.SelectionDot("F19")}</div>
                <div className="game-board-color" id ="F20" onClick={() => this.ClickedSquare("F20")}>{this.DotSelectedCheck("F20") && this.SelectionDot("F20")}</div>
                <div className="game-board-color" id ="F21" onClick={() => this.ClickedSquare("F21")}>{this.DotSelectedCheck("F21") && this.SelectionDot("F21")}</div>
                <div className="game-board-color" id ="F22" onClick={() => this.ClickedSquare("F22")}>{this.DotSelectedCheck("F22") && this.SelectionDot("F22")}</div>
                <div className="game-board-color" id ="F23" onClick={() => this.ClickedSquare("F23")}>{this.DotSelectedCheck("F23") && this.SelectionDot("F23")}</div>
                <div className="game-board-color" id ="F24" onClick={() => this.ClickedSquare("F24")}>{this.DotSelectedCheck("F24") && this.SelectionDot("F24")}</div>
                <div className="game-board-color" id ="F25" onClick={() => this.ClickedSquare("F25")}>{this.DotSelectedCheck("F25") && this.SelectionDot("F25")}</div>
                <div className="game-board-color" id ="F26" onClick={() => this.ClickedSquare("F26")}>{this.DotSelectedCheck("F26") && this.SelectionDot("F26")}</div>
                <div className="game-board-color" id ="F27" onClick={() => this.ClickedSquare("F27")}>{this.DotSelectedCheck("F27") && this.SelectionDot("F27")}</div>
                <div className="game-board-color" id ="F28" onClick={() => this.ClickedSquare("F28")}>{this.DotSelectedCheck("F28") && this.SelectionDot("F28")}</div>
                <div className="game-board-color" id ="F29" onClick={() => this.ClickedSquare("F29")}>{this.DotSelectedCheck("F29") && this.SelectionDot("F29")}</div>
                <div className="game-board-color" id ="F30" onClick={() => this.ClickedSquare("F30")}>{this.DotSelectedCheck("F30") && this.SelectionDot("F30")}</div>
                <div className="game-board-color" id ="G01" onClick={() => this.ClickedSquare("G01")}>{this.DotSelectedCheck("G01") && this.SelectionDot("G01")}</div>
                <div className="game-board-color" id ="G02" onClick={() => this.ClickedSquare("G02")}>{this.DotSelectedCheck("G02") && this.SelectionDot("G02")}</div>
                <div className="game-board-color" id ="G03" onClick={() => this.ClickedSquare("G03")}>{this.DotSelectedCheck("G03") && this.SelectionDot("G03")}</div>
                <div className="game-board-color" id ="G04" onClick={() => this.ClickedSquare("G04")}>{this.DotSelectedCheck("G04") && this.SelectionDot("G04")}</div>
                <div className="game-board-color" id ="G05" onClick={() => this.ClickedSquare("G05")}>{this.DotSelectedCheck("G05") && this.SelectionDot("G05")}</div>
                <div className="game-board-color" id ="G06" onClick={() => this.ClickedSquare("G06")}>{this.DotSelectedCheck("G06") && this.SelectionDot("G06")}</div>
                <div className="game-board-color" id ="G07" onClick={() => this.ClickedSquare("G07")}>{this.DotSelectedCheck("G07") && this.SelectionDot("G07")}</div>
                <div className="game-board-color" id ="G08" onClick={() => this.ClickedSquare("G08")}>{this.DotSelectedCheck("G08") && this.SelectionDot("G08")}</div>
                <div className="game-board-color" id ="G09" onClick={() => this.ClickedSquare("G09")}>{this.DotSelectedCheck("G09") && this.SelectionDot("G09")}</div>
                <div className="game-board-color" id ="G10" onClick={() => this.ClickedSquare("G10")}>{this.DotSelectedCheck("G10") && this.SelectionDot("G10")}</div>
                <div className="game-board-color" id ="G11" onClick={() => this.ClickedSquare("G11")}>{this.DotSelectedCheck("G11") && this.SelectionDot("G11")}</div>
                <div className="game-board-color" id ="G12" onClick={() => this.ClickedSquare("G12")}>{this.DotSelectedCheck("G12") && this.SelectionDot("G12")}</div>
                <div className="game-board-color" id ="G13" onClick={() => this.ClickedSquare("G13")}>{this.DotSelectedCheck("G13") && this.SelectionDot("G13")}</div>
                <div className="game-board-color" id ="G14" onClick={() => this.ClickedSquare("G14")}>{this.DotSelectedCheck("G14") && this.SelectionDot("G14")}</div>
                <div className="game-board-color" id ="G15" onClick={() => this.ClickedSquare("G15")}>{this.DotSelectedCheck("G15") && this.SelectionDot("G15")}</div>
                <div className="game-board-color" id ="G16" onClick={() => this.ClickedSquare("G16")}>{this.DotSelectedCheck("G16") && this.SelectionDot("G16")}</div>
                <div className="game-board-color" id ="G17" onClick={() => this.ClickedSquare("G17")}>{this.DotSelectedCheck("G17") && this.SelectionDot("G17")}</div>
                <div className="game-board-color" id ="G18" onClick={() => this.ClickedSquare("G18")}>{this.DotSelectedCheck("G18") && this.SelectionDot("G18")}</div>
                <div className="game-board-color" id ="G19" onClick={() => this.ClickedSquare("G19")}>{this.DotSelectedCheck("G19") && this.SelectionDot("G19")}</div>
                <div className="game-board-color" id ="G20" onClick={() => this.ClickedSquare("G20")}>{this.DotSelectedCheck("G20") && this.SelectionDot("G20")}</div>
                <div className="game-board-color" id ="G21" onClick={() => this.ClickedSquare("G21")}>{this.DotSelectedCheck("G21") && this.SelectionDot("G21")}</div>
                <div className="game-board-color" id ="G22" onClick={() => this.ClickedSquare("G22")}>{this.DotSelectedCheck("G22") && this.SelectionDot("G22")}</div>
                <div className="game-board-color" id ="G23" onClick={() => this.ClickedSquare("G23")}>{this.DotSelectedCheck("G23") && this.SelectionDot("G23")}</div>
                <div className="game-board-color" id ="G24" onClick={() => this.ClickedSquare("G24")}>{this.DotSelectedCheck("G24") && this.SelectionDot("G24")}</div>
                <div className="game-board-color" id ="G25" onClick={() => this.ClickedSquare("G25")}>{this.DotSelectedCheck("G25") && this.SelectionDot("G25")}</div>
                <div className="game-board-color" id ="G26" onClick={() => this.ClickedSquare("G26")}>{this.DotSelectedCheck("G26") && this.SelectionDot("G26")}</div>
                <div className="game-board-color" id ="G27" onClick={() => this.ClickedSquare("G27")}>{this.DotSelectedCheck("G27") && this.SelectionDot("G27")}</div>
                <div className="game-board-color" id ="G28" onClick={() => this.ClickedSquare("G28")}>{this.DotSelectedCheck("G28") && this.SelectionDot("G28")}</div>
                <div className="game-board-color" id ="G29" onClick={() => this.ClickedSquare("G29")}>{this.DotSelectedCheck("G29") && this.SelectionDot("G29")}</div>
                <div className="game-board-color" id ="G30" onClick={() => this.ClickedSquare("G30")}>{this.DotSelectedCheck("G30") && this.SelectionDot("G30")}</div>
                <div className="game-board-color" id ="H01" onClick={() => this.ClickedSquare("H01")}>{this.DotSelectedCheck("H01") && this.SelectionDot("H01")}</div>
                <div className="game-board-color" id ="H02" onClick={() => this.ClickedSquare("H02")}>{this.DotSelectedCheck("H02") && this.SelectionDot("H02")}</div>
                <div className="game-board-color" id ="H03" onClick={() => this.ClickedSquare("H03")}>{this.DotSelectedCheck("H03") && this.SelectionDot("H03")}</div>
                <div className="game-board-color" id ="H04" onClick={() => this.ClickedSquare("H04")}>{this.DotSelectedCheck("H04") && this.SelectionDot("H04")}</div>
                <div className="game-board-color" id ="H05" onClick={() => this.ClickedSquare("H05")}>{this.DotSelectedCheck("H05") && this.SelectionDot("H05")}</div>
                <div className="game-board-color" id ="H06" onClick={() => this.ClickedSquare("H06")}>{this.DotSelectedCheck("H06") && this.SelectionDot("H06")}</div>
                <div className="game-board-color" id ="H07" onClick={() => this.ClickedSquare("H07")}>{this.DotSelectedCheck("H07") && this.SelectionDot("H07")}</div>
                <div className="game-board-color" id ="H08" onClick={() => this.ClickedSquare("H08")}>{this.DotSelectedCheck("H08") && this.SelectionDot("H08")}</div>
                <div className="game-board-color" id ="H09" onClick={() => this.ClickedSquare("H09")}>{this.DotSelectedCheck("H09") && this.SelectionDot("H09")}</div>
                <div className="game-board-color" id ="H10" onClick={() => this.ClickedSquare("H10")}>{this.DotSelectedCheck("H10") && this.SelectionDot("H10")}</div>
                <div className="game-board-color" id ="H11" onClick={() => this.ClickedSquare("H11")}>{this.DotSelectedCheck("H11") && this.SelectionDot("H11")}</div>
                <div className="game-board-color" id ="H12" onClick={() => this.ClickedSquare("H12")}>{this.DotSelectedCheck("H12") && this.SelectionDot("H12")}</div>
                <div className="game-board-color" id ="H13" onClick={() => this.ClickedSquare("H13")}>{this.DotSelectedCheck("H13") && this.SelectionDot("H13")}</div>
                <div className="game-board-color" id ="H14" onClick={() => this.ClickedSquare("H14")}>{this.DotSelectedCheck("H14") && this.SelectionDot("H14")}</div>
                <div className="game-board-color" id ="H15" onClick={() => this.ClickedSquare("H15")}>{this.DotSelectedCheck("H15") && this.SelectionDot("H15")}</div>
                <div className="game-board-color" id ="H16" onClick={() => this.ClickedSquare("H16")}>{this.DotSelectedCheck("H16") && this.SelectionDot("H16")}</div>
                <div className="game-board-color" id ="H17" onClick={() => this.ClickedSquare("H17")}>{this.DotSelectedCheck("H17") && this.SelectionDot("H17")}</div>
                <div className="game-board-color" id ="H18" onClick={() => this.ClickedSquare("H18")}>{this.DotSelectedCheck("H18") && this.SelectionDot("H18")}</div>
                <div className="game-board-color" id ="H19" onClick={() => this.ClickedSquare("H19")}>{this.DotSelectedCheck("H19") && this.SelectionDot("H19")}</div>
                <div className="game-board-color" id ="H20" onClick={() => this.ClickedSquare("H20")}>{this.DotSelectedCheck("H20") && this.SelectionDot("H20")}</div>
                <div className="game-board-color" id ="H21" onClick={() => this.ClickedSquare("H21")}>{this.DotSelectedCheck("H21") && this.SelectionDot("H21")}</div>
                <div className="game-board-color" id ="H22" onClick={() => this.ClickedSquare("H22")}>{this.DotSelectedCheck("H22") && this.SelectionDot("H22")}</div>
                <div className="game-board-color" id ="H23" onClick={() => this.ClickedSquare("H23")}>{this.DotSelectedCheck("H23") && this.SelectionDot("H23")}</div>
                <div className="game-board-color" id ="H24" onClick={() => this.ClickedSquare("H24")}>{this.DotSelectedCheck("H24") && this.SelectionDot("H24")}</div>
                <div className="game-board-color" id ="H25" onClick={() => this.ClickedSquare("H25")}>{this.DotSelectedCheck("H25") && this.SelectionDot("H25")}</div>
                <div className="game-board-color" id ="H26" onClick={() => this.ClickedSquare("H26")}>{this.DotSelectedCheck("H26") && this.SelectionDot("H26")}</div>
                <div className="game-board-color" id ="H27" onClick={() => this.ClickedSquare("H27")}>{this.DotSelectedCheck("H27") && this.SelectionDot("H27")}</div>
                <div className="game-board-color" id ="H28" onClick={() => this.ClickedSquare("H28")}>{this.DotSelectedCheck("H28") && this.SelectionDot("H28")}</div>
                <div className="game-board-color" id ="H29" onClick={() => this.ClickedSquare("H29")}>{this.DotSelectedCheck("H29") && this.SelectionDot("H29")}</div>
                <div className="game-board-color" id ="H30" onClick={() => this.ClickedSquare("H30")}>{this.DotSelectedCheck("H30") && this.SelectionDot("H30")}</div>
                <div className="game-board-color" id ="I01" onClick={() => this.ClickedSquare("I01")}>{this.DotSelectedCheck("I01") && this.SelectionDot("I01")}</div>
                <div className="game-board-color" id ="I02" onClick={() => this.ClickedSquare("I02")}>{this.DotSelectedCheck("I02") && this.SelectionDot("I02")}</div>
                <div className="game-board-color" id ="I03" onClick={() => this.ClickedSquare("I03")}>{this.DotSelectedCheck("I03") && this.SelectionDot("I03")}</div>
                <div className="game-board-color" id ="I04" onClick={() => this.ClickedSquare("I04")}>{this.DotSelectedCheck("I04") && this.SelectionDot("I04")}</div>
                <div className="game-board-color" id ="I05" onClick={() => this.ClickedSquare("I05")}>{this.DotSelectedCheck("I05") && this.SelectionDot("I05")}</div>
                <div className="game-board-color" id ="I06" onClick={() => this.ClickedSquare("I06")}>{this.DotSelectedCheck("I06") && this.SelectionDot("I06")}</div>
                <div className="game-board-color" id ="I07" onClick={() => this.ClickedSquare("I07")}>{this.DotSelectedCheck("I07") && this.SelectionDot("I07")}</div>
                <div className="game-board-color" id ="I08" onClick={() => this.ClickedSquare("I08")}>{this.DotSelectedCheck("I08") && this.SelectionDot("I08")}</div>
                <div className="game-board-color" id ="I09" onClick={() => this.ClickedSquare("I09")}>{this.DotSelectedCheck("I09") && this.SelectionDot("I09")}</div>
                <div className="game-board-color" id ="I10" onClick={() => this.ClickedSquare("I10")}>{this.DotSelectedCheck("I10") && this.SelectionDot("I10")}</div>
                <div className="game-board-color" id ="I11" onClick={() => this.ClickedSquare("I11")}>{this.DotSelectedCheck("I11") && this.SelectionDot("I11")}</div>
                <div className="game-board-color" id ="I12" onClick={() => this.ClickedSquare("I12")}>{this.DotSelectedCheck("I12") && this.SelectionDot("I12")}</div>
                <div className="game-board-color" id ="I13" onClick={() => this.ClickedSquare("I13")}>{this.DotSelectedCheck("I13") && this.SelectionDot("I13")}</div>
                <div className="game-board-color" id ="I14" onClick={() => this.ClickedSquare("I14")}>{this.DotSelectedCheck("I14") && this.SelectionDot("I14")}</div>
                <div className="game-board-color" id ="I15" onClick={() => this.ClickedSquare("I15")}>{this.DotSelectedCheck("I15") && this.SelectionDot("I15")}</div>
                <div className="game-board-color" id ="I16" onClick={() => this.ClickedSquare("I16")}>{this.DotSelectedCheck("I16") && this.SelectionDot("I16")}</div>
                <div className="game-board-color" id ="I17" onClick={() => this.ClickedSquare("I17")}>{this.DotSelectedCheck("I17") && this.SelectionDot("I17")}</div>
                <div className="game-board-color" id ="I18" onClick={() => this.ClickedSquare("I18")}>{this.DotSelectedCheck("I18") && this.SelectionDot("I18")}</div>
                <div className="game-board-color" id ="I19" onClick={() => this.ClickedSquare("I19")}>{this.DotSelectedCheck("I19") && this.SelectionDot("I19")}</div>
                <div className="game-board-color" id ="I20" onClick={() => this.ClickedSquare("I20")}>{this.DotSelectedCheck("I20") && this.SelectionDot("I20")}</div>
                <div className="game-board-color" id ="I21" onClick={() => this.ClickedSquare("I21")}>{this.DotSelectedCheck("I21") && this.SelectionDot("I21")}</div>
                <div className="game-board-color" id ="I22" onClick={() => this.ClickedSquare("I22")}>{this.DotSelectedCheck("I22") && this.SelectionDot("I22")}</div>
                <div className="game-board-color" id ="I23" onClick={() => this.ClickedSquare("I23")}>{this.DotSelectedCheck("I23") && this.SelectionDot("I23")}</div>
                <div className="game-board-color" id ="I24" onClick={() => this.ClickedSquare("I24")}>{this.DotSelectedCheck("I24") && this.SelectionDot("I24")}</div>
                <div className="game-board-color" id ="I25" onClick={() => this.ClickedSquare("I25")}>{this.DotSelectedCheck("I25") && this.SelectionDot("I25")}</div>
                <div className="game-board-color" id ="I26" onClick={() => this.ClickedSquare("I26")}>{this.DotSelectedCheck("I26") && this.SelectionDot("I26")}</div>
                <div className="game-board-color" id ="I27" onClick={() => this.ClickedSquare("I27")}>{this.DotSelectedCheck("I27") && this.SelectionDot("I27")}</div>
                <div className="game-board-color" id ="I28" onClick={() => this.ClickedSquare("I28")}>{this.DotSelectedCheck("I28") && this.SelectionDot("I28")}</div>
                <div className="game-board-color" id ="I29" onClick={() => this.ClickedSquare("I29")}>{this.DotSelectedCheck("I29") && this.SelectionDot("I29")}</div>
                <div className="game-board-color" id ="I30" onClick={() => this.ClickedSquare("I30")}>{this.DotSelectedCheck("I30") && this.SelectionDot("I30")}</div>
                <div className="game-board-color" id ="J01" onClick={() => this.ClickedSquare("J01")}>{this.DotSelectedCheck("J01") && this.SelectionDot("J01")}</div>
                <div className="game-board-color" id ="J02" onClick={() => this.ClickedSquare("J02")}>{this.DotSelectedCheck("J02") && this.SelectionDot("J02")}</div>
                <div className="game-board-color" id ="J03" onClick={() => this.ClickedSquare("J03")}>{this.DotSelectedCheck("J03") && this.SelectionDot("J03")}</div>
                <div className="game-board-color" id ="J04" onClick={() => this.ClickedSquare("J04")}>{this.DotSelectedCheck("J04") && this.SelectionDot("J04")}</div>
                <div className="game-board-color" id ="J05" onClick={() => this.ClickedSquare("J05")}>{this.DotSelectedCheck("J05") && this.SelectionDot("J05")}</div>
                <div className="game-board-color" id ="J06" onClick={() => this.ClickedSquare("J06")}>{this.DotSelectedCheck("J06") && this.SelectionDot("J06")}</div>
                <div className="game-board-color" id ="J07" onClick={() => this.ClickedSquare("J07")}>{this.DotSelectedCheck("J07") && this.SelectionDot("J07")}</div>
                <div className="game-board-color" id ="J08" onClick={() => this.ClickedSquare("J08")}>{this.DotSelectedCheck("J08") && this.SelectionDot("J08")}</div>
                <div className="game-board-color" id ="J09" onClick={() => this.ClickedSquare("J09")}>{this.DotSelectedCheck("J09") && this.SelectionDot("J09")}</div>
                <div className="game-board-color" id ="J10" onClick={() => this.ClickedSquare("J10")}>{this.DotSelectedCheck("J10") && this.SelectionDot("J10")}</div>
                <div className="game-board-color" id ="J11" onClick={() => this.ClickedSquare("J11")}>{this.DotSelectedCheck("J11") && this.SelectionDot("J11")}</div>
                <div className="game-board-color" id ="J12" onClick={() => this.ClickedSquare("J12")}>{this.DotSelectedCheck("J12") && this.SelectionDot("J12")}</div>
                <div className="game-board-color" id ="J13" onClick={() => this.ClickedSquare("J13")}>{this.DotSelectedCheck("J13") && this.SelectionDot("J13")}</div>
                <div className="game-board-color" id ="J14" onClick={() => this.ClickedSquare("J14")}>{this.DotSelectedCheck("J14") && this.SelectionDot("J14")}</div>
                <div className="game-board-color" id ="J15" onClick={() => this.ClickedSquare("J15")}>{this.DotSelectedCheck("J15") && this.SelectionDot("J15")}</div>
                <div className="game-board-color" id ="J16" onClick={() => this.ClickedSquare("J16")}>{this.DotSelectedCheck("J16") && this.SelectionDot("J16")}</div>
                <div className="game-board-color" id ="J17" onClick={() => this.ClickedSquare("J17")}>{this.DotSelectedCheck("J17") && this.SelectionDot("J17")}</div>
                <div className="game-board-color" id ="J18" onClick={() => this.ClickedSquare("J18")}>{this.DotSelectedCheck("J18") && this.SelectionDot("J18")}</div>
                <div className="game-board-color" id ="J19" onClick={() => this.ClickedSquare("J19")}>{this.DotSelectedCheck("J19") && this.SelectionDot("J19")}</div>
                <div className="game-board-color" id ="J20" onClick={() => this.ClickedSquare("J20")}>{this.DotSelectedCheck("J20") && this.SelectionDot("J20")}</div>
                <div className="game-board-color" id ="J21" onClick={() => this.ClickedSquare("J21")}>{this.DotSelectedCheck("J21") && this.SelectionDot("J21")}</div>
                <div className="game-board-color" id ="J22" onClick={() => this.ClickedSquare("J22")}>{this.DotSelectedCheck("J22") && this.SelectionDot("J22")}</div>
                <div className="game-board-color" id ="J23" onClick={() => this.ClickedSquare("J23")}>{this.DotSelectedCheck("J23") && this.SelectionDot("J23")}</div>
                <div className="game-board-color" id ="J24" onClick={() => this.ClickedSquare("J24")}>{this.DotSelectedCheck("J24") && this.SelectionDot("J24")}</div>
                <div className="game-board-color" id ="J25" onClick={() => this.ClickedSquare("J25")}>{this.DotSelectedCheck("J25") && this.SelectionDot("J25")}</div>
                <div className="game-board-color" id ="J26" onClick={() => this.ClickedSquare("J26")}>{this.DotSelectedCheck("J26") && this.SelectionDot("J26")}</div>
                <div className="game-board-color" id ="J27" onClick={() => this.ClickedSquare("J27")}>{this.DotSelectedCheck("J27") && this.SelectionDot("J27")}</div>
                <div className="game-board-color" id ="J28" onClick={() => this.ClickedSquare("J28")}>{this.DotSelectedCheck("J28") && this.SelectionDot("J28")}</div>
                <div className="game-board-color" id ="J29" onClick={() => this.ClickedSquare("J29")}>{this.DotSelectedCheck("J29") && this.SelectionDot("J29")}</div>
                <div className="game-board-color" id ="J30" onClick={() => this.ClickedSquare("J30")}>{this.DotSelectedCheck("J30") && this.SelectionDot("J30")}</div>
                <div className="game-board-color" id ="K01" onClick={() => this.ClickedSquare("K01")}>{this.DotSelectedCheck("K01") && this.SelectionDot("K01")}</div>
                <div className="game-board-color" id ="K02" onClick={() => this.ClickedSquare("K02")}>{this.DotSelectedCheck("K02") && this.SelectionDot("K02")}</div>
                <div className="game-board-color" id ="K03" onClick={() => this.ClickedSquare("K03")}>{this.DotSelectedCheck("K03") && this.SelectionDot("K03")}</div>
                <div className="game-board-color" id ="K04" onClick={() => this.ClickedSquare("K04")}>{this.DotSelectedCheck("K04") && this.SelectionDot("K04")}</div>
                <div className="game-board-color" id ="K05" onClick={() => this.ClickedSquare("K05")}>{this.DotSelectedCheck("K05") && this.SelectionDot("K05")}</div>
                <div className="game-board-color" id ="K06" onClick={() => this.ClickedSquare("K06")}>{this.DotSelectedCheck("K06") && this.SelectionDot("K06")}</div>
                <div className="game-board-color" id ="K07" onClick={() => this.ClickedSquare("K07")}>{this.DotSelectedCheck("K07") && this.SelectionDot("K07")}</div>
                <div className="game-board-color" id ="K08" onClick={() => this.ClickedSquare("K08")}>{this.DotSelectedCheck("K08") && this.SelectionDot("K08")}</div>
                <div className="game-board-color" id ="K09" onClick={() => this.ClickedSquare("K09")}>{this.DotSelectedCheck("K09") && this.SelectionDot("K09")}</div>
                <div className="game-board-color" id ="K10" onClick={() => this.ClickedSquare("K10")}>{this.DotSelectedCheck("K10") && this.SelectionDot("K10")}</div>
                <div className="game-board-color" id ="K11" onClick={() => this.ClickedSquare("K11")}>{this.DotSelectedCheck("K11") && this.SelectionDot("K11")}</div>
                <div className="game-board-color" id ="K12" onClick={() => this.ClickedSquare("K12")}>{this.DotSelectedCheck("K12") && this.SelectionDot("K12")}</div>
                <div className="game-board-color" id ="K13" onClick={() => this.ClickedSquare("K13")}>{this.DotSelectedCheck("K13") && this.SelectionDot("K13")}</div>
                <div className="game-board-color" id ="K14" onClick={() => this.ClickedSquare("K14")}>{this.DotSelectedCheck("K14") && this.SelectionDot("K14")}</div>
                <div className="game-board-color" id ="K15" onClick={() => this.ClickedSquare("K15")}>{this.DotSelectedCheck("K15") && this.SelectionDot("K15")}</div>
                <div className="game-board-color" id ="K16" onClick={() => this.ClickedSquare("K16")}>{this.DotSelectedCheck("K16") && this.SelectionDot("K16")}</div>
                <div className="game-board-color" id ="K17" onClick={() => this.ClickedSquare("K17")}>{this.DotSelectedCheck("K17") && this.SelectionDot("K17")}</div>
                <div className="game-board-color" id ="K18" onClick={() => this.ClickedSquare("K18")}>{this.DotSelectedCheck("K18") && this.SelectionDot("K18")}</div>
                <div className="game-board-color" id ="K19" onClick={() => this.ClickedSquare("K19")}>{this.DotSelectedCheck("K19") && this.SelectionDot("K19")}</div>
                <div className="game-board-color" id ="K20" onClick={() => this.ClickedSquare("K20")}>{this.DotSelectedCheck("K20") && this.SelectionDot("K20")}</div>
                <div className="game-board-color" id ="K21" onClick={() => this.ClickedSquare("K21")}>{this.DotSelectedCheck("K21") && this.SelectionDot("K21")}</div>
                <div className="game-board-color" id ="K22" onClick={() => this.ClickedSquare("K22")}>{this.DotSelectedCheck("K22") && this.SelectionDot("K22")}</div>
                <div className="game-board-color" id ="K23" onClick={() => this.ClickedSquare("K23")}>{this.DotSelectedCheck("K23") && this.SelectionDot("K23")}</div>
                <div className="game-board-color" id ="K24" onClick={() => this.ClickedSquare("K24")}>{this.DotSelectedCheck("K24") && this.SelectionDot("K24")}</div>
                <div className="game-board-color" id ="K25" onClick={() => this.ClickedSquare("K25")}>{this.DotSelectedCheck("K25") && this.SelectionDot("K25")}</div>
                <div className="game-board-color" id ="K26" onClick={() => this.ClickedSquare("K26")}>{this.DotSelectedCheck("K26") && this.SelectionDot("K26")}</div>
                <div className="game-board-color" id ="K27" onClick={() => this.ClickedSquare("K27")}>{this.DotSelectedCheck("K27") && this.SelectionDot("K27")}</div>
                <div className="game-board-color" id ="K28" onClick={() => this.ClickedSquare("K28")}>{this.DotSelectedCheck("K28") && this.SelectionDot("K28")}</div>
                <div className="game-board-color" id ="K29" onClick={() => this.ClickedSquare("K29")}>{this.DotSelectedCheck("K29") && this.SelectionDot("K29")}</div>
                <div className="game-board-color" id ="K30" onClick={() => this.ClickedSquare("K30")}>{this.DotSelectedCheck("K30") && this.SelectionDot("K30")}</div>
                <div className="game-board-color" id ="L01" onClick={() => this.ClickedSquare("L01")}>{this.DotSelectedCheck("L01") && this.SelectionDot("L01")}</div>
                <div className="game-board-color" id ="L02" onClick={() => this.ClickedSquare("L02")}>{this.DotSelectedCheck("L02") && this.SelectionDot("L02")}</div>
                <div className="game-board-color" id ="L03" onClick={() => this.ClickedSquare("L03")}>{this.DotSelectedCheck("L03") && this.SelectionDot("L03")}</div>
                <div className="game-board-color" id ="L04" onClick={() => this.ClickedSquare("L04")}>{this.DotSelectedCheck("L04") && this.SelectionDot("L04")}</div>
                <div className="game-board-color" id ="L05" onClick={() => this.ClickedSquare("L05")}>{this.DotSelectedCheck("L05") && this.SelectionDot("L05")}</div>
                <div className="game-board-color" id ="L06" onClick={() => this.ClickedSquare("L06")}>{this.DotSelectedCheck("L06") && this.SelectionDot("L06")}</div>
                <div className="game-board-color" id ="L07" onClick={() => this.ClickedSquare("L07")}>{this.DotSelectedCheck("L07") && this.SelectionDot("L07")}</div>
                <div className="game-board-color" id ="L08" onClick={() => this.ClickedSquare("L08")}>{this.DotSelectedCheck("L08") && this.SelectionDot("L08")}</div>
                <div className="game-board-color" id ="L09" onClick={() => this.ClickedSquare("L09")}>{this.DotSelectedCheck("L09") && this.SelectionDot("L09")}</div>
                <div className="game-board-color" id ="L10" onClick={() => this.ClickedSquare("L10")}>{this.DotSelectedCheck("L10") && this.SelectionDot("L10")}</div>
                <div className="game-board-color" id ="L11" onClick={() => this.ClickedSquare("L11")}>{this.DotSelectedCheck("L11") && this.SelectionDot("L11")}</div>
                <div className="game-board-color" id ="L12" onClick={() => this.ClickedSquare("L12")}>{this.DotSelectedCheck("L12") && this.SelectionDot("L12")}</div>
                <div className="game-board-color" id ="L13" onClick={() => this.ClickedSquare("L13")}>{this.DotSelectedCheck("L13") && this.SelectionDot("L13")}</div>
                <div className="game-board-color" id ="L14" onClick={() => this.ClickedSquare("L14")}>{this.DotSelectedCheck("L14") && this.SelectionDot("L14")}</div>
                <div className="game-board-color" id ="L15" onClick={() => this.ClickedSquare("L15")}>{this.DotSelectedCheck("L15") && this.SelectionDot("L15")}</div>
                <div className="game-board-color" id ="L16" onClick={() => this.ClickedSquare("L16")}>{this.DotSelectedCheck("L16") && this.SelectionDot("L16")}</div>
                <div className="game-board-color" id ="L17" onClick={() => this.ClickedSquare("L17")}>{this.DotSelectedCheck("L17") && this.SelectionDot("L17")}</div>
                <div className="game-board-color" id ="L18" onClick={() => this.ClickedSquare("L18")}>{this.DotSelectedCheck("L18") && this.SelectionDot("L18")}</div>
                <div className="game-board-color" id ="L19" onClick={() => this.ClickedSquare("L19")}>{this.DotSelectedCheck("L19") && this.SelectionDot("L19")}</div>
                <div className="game-board-color" id ="L20" onClick={() => this.ClickedSquare("L20")}>{this.DotSelectedCheck("L20") && this.SelectionDot("L20")}</div>
                <div className="game-board-color" id ="L21" onClick={() => this.ClickedSquare("L21")}>{this.DotSelectedCheck("L21") && this.SelectionDot("L21")}</div>
                <div className="game-board-color" id ="L22" onClick={() => this.ClickedSquare("L22")}>{this.DotSelectedCheck("L22") && this.SelectionDot("L22")}</div>
                <div className="game-board-color" id ="L23" onClick={() => this.ClickedSquare("L23")}>{this.DotSelectedCheck("L23") && this.SelectionDot("L23")}</div>
                <div className="game-board-color" id ="L24" onClick={() => this.ClickedSquare("L24")}>{this.DotSelectedCheck("L24") && this.SelectionDot("L24")}</div>
                <div className="game-board-color" id ="L25" onClick={() => this.ClickedSquare("L25")}>{this.DotSelectedCheck("L25") && this.SelectionDot("L25")}</div>
                <div className="game-board-color" id ="L26" onClick={() => this.ClickedSquare("L26")}>{this.DotSelectedCheck("L26") && this.SelectionDot("L26")}</div>
                <div className="game-board-color" id ="L27" onClick={() => this.ClickedSquare("L27")}>{this.DotSelectedCheck("L27") && this.SelectionDot("L27")}</div>
                <div className="game-board-color" id ="L28" onClick={() => this.ClickedSquare("L28")}>{this.DotSelectedCheck("L28") && this.SelectionDot("L28")}</div>
                <div className="game-board-color" id ="L29" onClick={() => this.ClickedSquare("L29")}>{this.DotSelectedCheck("L29") && this.SelectionDot("L29")}</div>
                <div className="game-board-color" id ="L30" onClick={() => this.ClickedSquare("L30")}>{this.DotSelectedCheck("L30") && this.SelectionDot("L30")}</div>
                <div className="game-board-color" id ="M01" onClick={() => this.ClickedSquare("M01")}>{this.DotSelectedCheck("M01") && this.SelectionDot("M01")}</div>
                <div className="game-board-color" id ="M02" onClick={() => this.ClickedSquare("M02")}>{this.DotSelectedCheck("M02") && this.SelectionDot("M02")}</div>
                <div className="game-board-color" id ="M03" onClick={() => this.ClickedSquare("M03")}>{this.DotSelectedCheck("M03") && this.SelectionDot("M03")}</div>
                <div className="game-board-color" id ="M04" onClick={() => this.ClickedSquare("M04")}>{this.DotSelectedCheck("M04") && this.SelectionDot("M04")}</div>
                <div className="game-board-color" id ="M05" onClick={() => this.ClickedSquare("M05")}>{this.DotSelectedCheck("M05") && this.SelectionDot("M05")}</div>
                <div className="game-board-color" id ="M06" onClick={() => this.ClickedSquare("M06")}>{this.DotSelectedCheck("M06") && this.SelectionDot("M06")}</div>
                <div className="game-board-color" id ="M07" onClick={() => this.ClickedSquare("M07")}>{this.DotSelectedCheck("M07") && this.SelectionDot("M07")}</div>
                <div className="game-board-color" id ="M08" onClick={() => this.ClickedSquare("M08")}>{this.DotSelectedCheck("M08") && this.SelectionDot("M08")}</div>
                <div className="game-board-color" id ="M09" onClick={() => this.ClickedSquare("M09")}>{this.DotSelectedCheck("M09") && this.SelectionDot("M09")}</div>
                <div className="game-board-color" id ="M10" onClick={() => this.ClickedSquare("M10")}>{this.DotSelectedCheck("M10") && this.SelectionDot("M10")}</div>
                <div className="game-board-color" id ="M11" onClick={() => this.ClickedSquare("M11")}>{this.DotSelectedCheck("M11") && this.SelectionDot("M11")}</div>
                <div className="game-board-color" id ="M12" onClick={() => this.ClickedSquare("M12")}>{this.DotSelectedCheck("M12") && this.SelectionDot("M12")}</div>
                <div className="game-board-color" id ="M13" onClick={() => this.ClickedSquare("M13")}>{this.DotSelectedCheck("M13") && this.SelectionDot("M13")}</div>
                <div className="game-board-color" id ="M14" onClick={() => this.ClickedSquare("M14")}>{this.DotSelectedCheck("M14") && this.SelectionDot("M14")}</div>
                <div className="game-board-color" id ="M15" onClick={() => this.ClickedSquare("M15")}>{this.DotSelectedCheck("M15") && this.SelectionDot("M15")}</div>
                <div className="game-board-color" id ="M16" onClick={() => this.ClickedSquare("M16")}>{this.DotSelectedCheck("M16") && this.SelectionDot("M16")}</div>
                <div className="game-board-color" id ="M17" onClick={() => this.ClickedSquare("M17")}>{this.DotSelectedCheck("M17") && this.SelectionDot("M17")}</div>
                <div className="game-board-color" id ="M18" onClick={() => this.ClickedSquare("M18")}>{this.DotSelectedCheck("M18") && this.SelectionDot("M18")}</div>
                <div className="game-board-color" id ="M19" onClick={() => this.ClickedSquare("M19")}>{this.DotSelectedCheck("M19") && this.SelectionDot("M19")}</div>
                <div className="game-board-color" id ="M20" onClick={() => this.ClickedSquare("M20")}>{this.DotSelectedCheck("M20") && this.SelectionDot("M20")}</div>
                <div className="game-board-color" id ="M21" onClick={() => this.ClickedSquare("M21")}>{this.DotSelectedCheck("M21") && this.SelectionDot("M21")}</div>
                <div className="game-board-color" id ="M22" onClick={() => this.ClickedSquare("M22")}>{this.DotSelectedCheck("M22") && this.SelectionDot("M22")}</div>
                <div className="game-board-color" id ="M23" onClick={() => this.ClickedSquare("M23")}>{this.DotSelectedCheck("M23") && this.SelectionDot("M23")}</div>
                <div className="game-board-color" id ="M24" onClick={() => this.ClickedSquare("M24")}>{this.DotSelectedCheck("M24") && this.SelectionDot("M24")}</div>
                <div className="game-board-color" id ="M25" onClick={() => this.ClickedSquare("M25")}>{this.DotSelectedCheck("M25") && this.SelectionDot("M25")}</div>
                <div className="game-board-color" id ="M26" onClick={() => this.ClickedSquare("M26")}>{this.DotSelectedCheck("M26") && this.SelectionDot("M26")}</div>
                <div className="game-board-color" id ="M27" onClick={() => this.ClickedSquare("M27")}>{this.DotSelectedCheck("M27") && this.SelectionDot("M27")}</div>
                <div className="game-board-color" id ="M28" onClick={() => this.ClickedSquare("M28")}>{this.DotSelectedCheck("M28") && this.SelectionDot("M28")}</div>
                <div className="game-board-color" id ="M30" onClick={() => this.ClickedSquare("M30")}>{this.DotSelectedCheck("M30") && this.SelectionDot("M30")}</div>
                <div className="game-board-color" id ="M29" onClick={() => this.ClickedSquare("M29")}>{this.DotSelectedCheck("M29") && this.SelectionDot("M29")}</div>
                <div className="game-board-color" id ="N01" onClick={() => this.ClickedSquare("N01")}>{this.DotSelectedCheck("N01") && this.SelectionDot("N01")}</div>
                <div className="game-board-color" id ="N02" onClick={() => this.ClickedSquare("N02")}>{this.DotSelectedCheck("N02") && this.SelectionDot("N02")}</div>
                <div className="game-board-color" id ="N03" onClick={() => this.ClickedSquare("N03")}>{this.DotSelectedCheck("N03") && this.SelectionDot("N03")}</div>
                <div className="game-board-color" id ="N04" onClick={() => this.ClickedSquare("N04")}>{this.DotSelectedCheck("N04") && this.SelectionDot("N04")}</div>
                <div className="game-board-color" id ="N05" onClick={() => this.ClickedSquare("N05")}>{this.DotSelectedCheck("N05") && this.SelectionDot("N05")}</div>
                <div className="game-board-color" id ="N06" onClick={() => this.ClickedSquare("N06")}>{this.DotSelectedCheck("N06") && this.SelectionDot("N06")}</div>
                <div className="game-board-color" id ="N07" onClick={() => this.ClickedSquare("N07")}>{this.DotSelectedCheck("N07") && this.SelectionDot("N07")}</div>
                <div className="game-board-color" id ="N08" onClick={() => this.ClickedSquare("N08")}>{this.DotSelectedCheck("N08") && this.SelectionDot("N08")}</div>
                <div className="game-board-color" id ="N09" onClick={() => this.ClickedSquare("N09")}>{this.DotSelectedCheck("N09") && this.SelectionDot("N09")}</div>
                <div className="game-board-color" id ="N10" onClick={() => this.ClickedSquare("N10")}>{this.DotSelectedCheck("N10") && this.SelectionDot("N10")}</div>
                <div className="game-board-color" id ="N11" onClick={() => this.ClickedSquare("N11")}>{this.DotSelectedCheck("N11") && this.SelectionDot("N11")}</div>
                <div className="game-board-color" id ="N12" onClick={() => this.ClickedSquare("N12")}>{this.DotSelectedCheck("N12") && this.SelectionDot("N12")}</div>
                <div className="game-board-color" id ="N13" onClick={() => this.ClickedSquare("N13")}>{this.DotSelectedCheck("N13") && this.SelectionDot("N13")}</div>
                <div className="game-board-color" id ="N14" onClick={() => this.ClickedSquare("N14")}>{this.DotSelectedCheck("N14") && this.SelectionDot("N14")}</div>
                <div className="game-board-color" id ="N15" onClick={() => this.ClickedSquare("N15")}>{this.DotSelectedCheck("N15") && this.SelectionDot("N15")}</div>
                <div className="game-board-color" id ="N16" onClick={() => this.ClickedSquare("N16")}>{this.DotSelectedCheck("N16") && this.SelectionDot("N16")}</div>
                <div className="game-board-color" id ="N17" onClick={() => this.ClickedSquare("N17")}>{this.DotSelectedCheck("N17") && this.SelectionDot("N17")}</div>
                <div className="game-board-color" id ="N18" onClick={() => this.ClickedSquare("N18")}>{this.DotSelectedCheck("N18") && this.SelectionDot("N18")}</div>
                <div className="game-board-color" id ="N19" onClick={() => this.ClickedSquare("N19")}>{this.DotSelectedCheck("N19") && this.SelectionDot("N19")}</div>
                <div className="game-board-color" id ="N20" onClick={() => this.ClickedSquare("N20")}>{this.DotSelectedCheck("N20") && this.SelectionDot("N20")}</div>
                <div className="game-board-color" id ="N21" onClick={() => this.ClickedSquare("N21")}>{this.DotSelectedCheck("N21") && this.SelectionDot("N21")}</div>
                <div className="game-board-color" id ="N22" onClick={() => this.ClickedSquare("N22")}>{this.DotSelectedCheck("N22") && this.SelectionDot("N22")}</div>
                <div className="game-board-color" id ="N23" onClick={() => this.ClickedSquare("N23")}>{this.DotSelectedCheck("N23") && this.SelectionDot("N23")}</div>
                <div className="game-board-color" id ="N24" onClick={() => this.ClickedSquare("N24")}>{this.DotSelectedCheck("N24") && this.SelectionDot("N24")}</div>
                <div className="game-board-color" id ="N25" onClick={() => this.ClickedSquare("N25")}>{this.DotSelectedCheck("N25") && this.SelectionDot("N25")}</div>
                <div className="game-board-color" id ="N26" onClick={() => this.ClickedSquare("N26")}>{this.DotSelectedCheck("N26") && this.SelectionDot("N26")}</div>
                <div className="game-board-color" id ="N27" onClick={() => this.ClickedSquare("N27")}>{this.DotSelectedCheck("N27") && this.SelectionDot("N27")}</div>
                <div className="game-board-color" id ="N28" onClick={() => this.ClickedSquare("N28")}>{this.DotSelectedCheck("N28") && this.SelectionDot("N28")}</div>
                <div className="game-board-color" id ="N29" onClick={() => this.ClickedSquare("N29")}>{this.DotSelectedCheck("N29") && this.SelectionDot("N29")}</div>
                <div className="game-board-color" id ="N30" onClick={() => this.ClickedSquare("N30")}>{this.DotSelectedCheck("N30") && this.SelectionDot("N30")}</div>
                <div className="game-board-color" id ="O01" onClick={() => this.ClickedSquare("O01")}>{this.DotSelectedCheck("O01") && this.SelectionDot("O01")}</div>
                <div className="game-board-color" id ="O02" onClick={() => this.ClickedSquare("O02")}>{this.DotSelectedCheck("O02") && this.SelectionDot("O02")}</div>
                <div className="game-board-color" id ="O03" onClick={() => this.ClickedSquare("O03")}>{this.DotSelectedCheck("O03") && this.SelectionDot("O03")}</div>
                <div className="game-board-color" id ="O04" onClick={() => this.ClickedSquare("O04")}>{this.DotSelectedCheck("O04") && this.SelectionDot("O04")}</div>
                <div className="game-board-color" id ="O05" onClick={() => this.ClickedSquare("O05")}>{this.DotSelectedCheck("O05") && this.SelectionDot("O05")}</div>
                <div className="game-board-color" id ="O06" onClick={() => this.ClickedSquare("O06")}>{this.DotSelectedCheck("O06") && this.SelectionDot("O06")}</div>
                <div className="game-board-color" id ="O07" onClick={() => this.ClickedSquare("O07")}>{this.DotSelectedCheck("O07") && this.SelectionDot("O07")}</div>
                <div className="game-board-color" id ="O08" onClick={() => this.ClickedSquare("O08")}>{this.DotSelectedCheck("O08") && this.SelectionDot("O08")}</div>
                <div className="game-board-color" id ="O09" onClick={() => this.ClickedSquare("O09")}>{this.DotSelectedCheck("O09") && this.SelectionDot("O09")}</div>
                <div className="game-board-color" id ="O10" onClick={() => this.ClickedSquare("O10")}>{this.DotSelectedCheck("O10") && this.SelectionDot("O10")}</div>
                <div className="game-board-color" id ="O11" onClick={() => this.ClickedSquare("O11")}>{this.DotSelectedCheck("O11") && this.SelectionDot("O11")}</div>
                <div className="game-board-color" id ="O12" onClick={() => this.ClickedSquare("O12")}>{this.DotSelectedCheck("O12") && this.SelectionDot("O12")}</div>
                <div className="game-board-color" id ="O13" onClick={() => this.ClickedSquare("O13")}>{this.DotSelectedCheck("O13") && this.SelectionDot("O13")}</div>
                <div className="game-board-color" id ="O14" onClick={() => this.ClickedSquare("O14")}>{this.DotSelectedCheck("O14") && this.SelectionDot("O14")}</div>
                <div className="game-board-color" id ="O15" onClick={() => this.ClickedSquare("O15")}>{this.DotSelectedCheck("O15") && this.SelectionDot("O15")}</div>
                <div className="game-board-color" id ="O16" onClick={() => this.ClickedSquare("O16")}>{this.DotSelectedCheck("O16") && this.SelectionDot("O16")}</div>
                <div className="game-board-color" id ="O17" onClick={() => this.ClickedSquare("O17")}>{this.DotSelectedCheck("O17") && this.SelectionDot("O17")}</div>
                <div className="game-board-color" id ="O18" onClick={() => this.ClickedSquare("O18")}>{this.DotSelectedCheck("O18") && this.SelectionDot("O18")}</div>
                <div className="game-board-color" id ="O19" onClick={() => this.ClickedSquare("O19")}>{this.DotSelectedCheck("O19") && this.SelectionDot("O19")}</div>
                <div className="game-board-color" id ="O20" onClick={() => this.ClickedSquare("O20")}>{this.DotSelectedCheck("O20") && this.SelectionDot("O20")}</div>
                <div className="game-board-color" id ="O21" onClick={() => this.ClickedSquare("O21")}>{this.DotSelectedCheck("O21") && this.SelectionDot("O21")}</div>
                <div className="game-board-color" id ="O22" onClick={() => this.ClickedSquare("O22")}>{this.DotSelectedCheck("O22") && this.SelectionDot("O22")}</div>
                <div className="game-board-color" id ="O23" onClick={() => this.ClickedSquare("O23")}>{this.DotSelectedCheck("O23") && this.SelectionDot("O23")}</div>
                <div className="game-board-color" id ="O24" onClick={() => this.ClickedSquare("O24")}>{this.DotSelectedCheck("O24") && this.SelectionDot("O24")}</div>
                <div className="game-board-color" id ="O25" onClick={() => this.ClickedSquare("O25")}>{this.DotSelectedCheck("O25") && this.SelectionDot("O25")}</div>
                <div className="game-board-color" id ="O26" onClick={() => this.ClickedSquare("O26")}>{this.DotSelectedCheck("O26") && this.SelectionDot("O26")}</div>
                <div className="game-board-color" id ="O27" onClick={() => this.ClickedSquare("O27")}>{this.DotSelectedCheck("O27") && this.SelectionDot("O27")}</div>
                <div className="game-board-color" id ="O28" onClick={() => this.ClickedSquare("O28")}>{this.DotSelectedCheck("O28") && this.SelectionDot("O28")}</div>
                <div className="game-board-color" id ="O29" onClick={() => this.ClickedSquare("O29")}>{this.DotSelectedCheck("O29") && this.SelectionDot("O29")}</div>
                <div className="game-board-color" id ="O30" onClick={() => this.ClickedSquare("O30")}>{this.DotSelectedCheck("O30") && this.SelectionDot("O30")}</div>
                <div className="game-board-color" id ="P01" onClick={() => this.ClickedSquare("P01")}>{this.DotSelectedCheck("P01") && this.SelectionDot("P01")}</div>
                <div className="game-board-color" id ="P02" onClick={() => this.ClickedSquare("P02")}>{this.DotSelectedCheck("P02") && this.SelectionDot("P02")}</div>
                <div className="game-board-color" id ="P03" onClick={() => this.ClickedSquare("P03")}>{this.DotSelectedCheck("P03") && this.SelectionDot("P03")}</div>
                <div className="game-board-color" id ="P04" onClick={() => this.ClickedSquare("P04")}>{this.DotSelectedCheck("P04") && this.SelectionDot("P04")}</div>
                <div className="game-board-color" id ="P05" onClick={() => this.ClickedSquare("P05")}>{this.DotSelectedCheck("P05") && this.SelectionDot("P05")}</div>
                <div className="game-board-color" id ="P06" onClick={() => this.ClickedSquare("P06")}>{this.DotSelectedCheck("P06") && this.SelectionDot("P06")}</div>
                <div className="game-board-color" id ="P07" onClick={() => this.ClickedSquare("P07")}>{this.DotSelectedCheck("P07") && this.SelectionDot("P07")}</div>
                <div className="game-board-color" id ="P08" onClick={() => this.ClickedSquare("P08")}>{this.DotSelectedCheck("P08") && this.SelectionDot("P08")}</div>
                <div className="game-board-color" id ="P09" onClick={() => this.ClickedSquare("P09")}>{this.DotSelectedCheck("P09") && this.SelectionDot("P09")}</div>
                <div className="game-board-color" id ="P10" onClick={() => this.ClickedSquare("P10")}>{this.DotSelectedCheck("P10") && this.SelectionDot("P10")}</div>
                <div className="game-board-color" id ="P11" onClick={() => this.ClickedSquare("P11")}>{this.DotSelectedCheck("P11") && this.SelectionDot("P11")}</div>
                <div className="game-board-color" id ="P12" onClick={() => this.ClickedSquare("P12")}>{this.DotSelectedCheck("P12") && this.SelectionDot("P12")}</div>
                <div className="game-board-color" id ="P13" onClick={() => this.ClickedSquare("P13")}>{this.DotSelectedCheck("P13") && this.SelectionDot("P13")}</div>
                <div className="game-board-color" id ="P14" onClick={() => this.ClickedSquare("P14")}>{this.DotSelectedCheck("P14") && this.SelectionDot("P14")}</div>
                <div className="game-board-color" id ="P15" onClick={() => this.ClickedSquare("P15")}>{this.DotSelectedCheck("P15") && this.SelectionDot("P15")}</div>
                <div className="game-board-color" id ="P16" onClick={() => this.ClickedSquare("P16")}>{this.DotSelectedCheck("P16") && this.SelectionDot("P16")}</div>
                <div className="game-board-color" id ="P17" onClick={() => this.ClickedSquare("P17")}>{this.DotSelectedCheck("P17") && this.SelectionDot("P17")}</div>
                <div className="game-board-color" id ="P18" onClick={() => this.ClickedSquare("P18")}>{this.DotSelectedCheck("P18") && this.SelectionDot("P18")}</div>
                <div className="game-board-color" id ="P19" onClick={() => this.ClickedSquare("P19")}>{this.DotSelectedCheck("P19") && this.SelectionDot("P19")}</div>
                <div className="game-board-color" id ="P20" onClick={() => this.ClickedSquare("P20")}>{this.DotSelectedCheck("P20") && this.SelectionDot("P20")}</div>
                <div className="game-board-color" id ="P21" onClick={() => this.ClickedSquare("P21")}>{this.DotSelectedCheck("P21") && this.SelectionDot("P21")}</div>
                <div className="game-board-color" id ="P22" onClick={() => this.ClickedSquare("P22")}>{this.DotSelectedCheck("P22") && this.SelectionDot("P22")}</div>
                <div className="game-board-color" id ="P23" onClick={() => this.ClickedSquare("P23")}>{this.DotSelectedCheck("P23") && this.SelectionDot("P23")}</div>
                <div className="game-board-color" id ="P24" onClick={() => this.ClickedSquare("P24")}>{this.DotSelectedCheck("P24") && this.SelectionDot("P24")}</div>
                <div className="game-board-color" id ="P25" onClick={() => this.ClickedSquare("P25")}>{this.DotSelectedCheck("P25") && this.SelectionDot("P25")}</div>
                <div className="game-board-color" id ="P26" onClick={() => this.ClickedSquare("P26")}>{this.DotSelectedCheck("P26") && this.SelectionDot("P26")}</div>
                <div className="game-board-color" id ="P27" onClick={() => this.ClickedSquare("P27")}>{this.DotSelectedCheck("P27") && this.SelectionDot("P27")}</div>
                <div className="game-board-color" id ="P28" onClick={() => this.ClickedSquare("P28")}>{this.DotSelectedCheck("P28") && this.SelectionDot("P28")}</div>
                <div className="game-board-color" id ="P29" onClick={() => this.ClickedSquare("P29")}>{this.DotSelectedCheck("P29") && this.SelectionDot("P29")}</div>
                <div className="game-board-color" id ="P30" onClick={() => this.ClickedSquare("P30")}>{this.DotSelectedCheck("P30") && this.SelectionDot("P30")}</div>
            </div>
        );
    }
}
export default Board;