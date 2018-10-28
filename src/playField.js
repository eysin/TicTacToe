import React from 'react';
const winCheck = require('./functions');

let turn = true;

export class PlayField extends React.Component{//The container class for the main display of the website
    constructor(props){
        super(props);
        this.state = {turn: true,
                      player1: this.props.player1,
                      player2: this.props.player2,
                      score1: 0,
                      score2: 0,
                      draws: 0,
                      winner: 0,
                      redraw: false,
                      gameDone: false};
        this.finishGame = this.finishGame.bind(this);
        this.changeTurn = this.changeTurn.bind(this);
        this.resetGame = this.resetGame.bind(this);
        
    }
    
    render(){
        console.log(this.state)
        return (
        <div class="container">
            <div className="division col-md-12 col-sm-6">
            <div class="title">Tic Tac Toe</div>
                <Players player1={this.state.player1} player2={this.state.player2} turn={this.state.turn} gameDone={this.state.gameDone} winner={this.state.winner}/>
            </div>
            <div className="division col-md-12 col-sm-6">
                <TicTacToe key={this.state.redraw} finishGame={(winner)=> this.finishGame(winner)} changeTurn={() => this.changeTurn()} turn={this.state.turn}/>
            </div>
            <div className="division col-md-12 col-sm-6">
                <ScoreBoard resetGame={() => this.resetGame()} player1={this.state.player1} player2={this.state.player2} score1={this.state.score1} score2={this.state.score2} draws={this.state.draws}/>
            </div>
            <div className="division col-md-12">
                <Documentation/>
            </div>
            
        </div>);
    }
    changeTurn(){
        this.setState({turn: !this.state.turn});
    }
    finishGame(winner){
        if(winner === 0)
        {
            this.setState({draws: this.state.draws + 1, winner: winner, gameDone: true});
        }
        else if(winner === 1)
        {
            this.setState({score1: this.state.score1 + 1, winner: winner, gameDone: true});
        }
        else{
            this.setState({score2: this.state.score2 + 1, winner: winner, gameDone: true});
        }

    }
    resetGame(){
        this.setState({turn: true, redraw: !this.state.redraw, gameDone: false});
    }
}

class TicTacToe extends React.Component{//The container class for the Tic-Tac-Toe game itself
    constructor(props){
        super(props);
        this.state = {
            playField: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            turn: true,
            gameOver : false,
            turnCount : 0

        }
        this.handleClick = this.handleClick.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }
    render(){//A table that will be stiled will handle the graphics part of the tic-tac-toe
        return (
        <div>
            <table class="playfield col-md-12">
                <tbody>
                    {this.state.playField.map((row, i1)=> 
                    <tr key={i1}>
                        {row.map((element, i2)=>
                            <td className="boardPiece" onClick={() => this.handleClick(i1, i2)} key={i1.toString() + i2.toString()}>
                                {element === 0 ? <h1></h1> : null}
                                {element === 1 ? <h1>X</h1> : null}
                                {element === 2 ? <h1>O</h1> : null}
                            </td>    
                        )}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        );
    }
    handleClick(index1, index2){//Handles operation when an element in the table is clicked
        //To fetch the global variables in the state function, use this.state.{Name of variable}
        //To update a variable in the state function, use this.setstate({"Variable": "Value"})
        //alert(this.state.playField[index1][index2])
        if(!this.state.gameOver){
            if(this.state.playField[index1][index2] === 0){
                let tempField = this.state.playField;
                if(this.props.turn){
                    this.state.playField[index1][index2] = 1;
                }
                else{
                    this.state.playField[index1][index2] = 2;
                }
                this.setState({playField: tempField, turnCount: this.state.turnCount+1});
                this.props.changeTurn();
                this.checkWin();
                //alert(this.state.turnCount);
            } 
        }
          
        
    }
    checkWin(){
        let tempGrid = this.state.playField;
        //The tempGrid is equals to the playField's [3][3] grid 
        var winner = winCheck(tempGrid); 
        
        if(winner != 0)
        {  
            this.props.finishGame(winner);
            this.setState({gameOver: true});
        }
        else if(this.state.turnCount == 8)
        {
            this.props.finishGame(winner); //0 implies a draw
        }
    }
}

class Players extends React.Component{
    render(){
        return(
        <div>
            <div class="player blue">{this.props.player1} VS {this.props.player2}</div>
            {!this.props.gameDone ? 
                <div>{this.props.turn === true ? 
                    <div class="turn green"> {this.props.player1}'s Turn!</div> : 
                    <div className="turn green"> {this.props.player2}'s Turn!</div>}
                </div>:
                    <div className="turn green">
                        {this.props.winner === 0 ? <div>Game ended with a draw!</div>: null}
                        {this.props.winner === 1 ? <div>{this.props.player1}'s won the game!</div>: null}
                        {this.props.winner === 2 ? <div>{this.props.player2}'s won the game!</div>: null}
                    </div>}
        </div>
        );
    }
}

class ScoreBoard extends React.Component{//Keeps track of the Scoreboard
    render(){
        return(
        <div>
            <button id="resetBtn" type="button" onClick={() => this.resetGame()}> Play again!</button>
            <h1>Scoreboard:</h1>
            <table class="table scoreboard-table">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Wins</td>
                        <td>Losses</td>
                        <td>Draws</td>
                    </tr>
                    <tr class="blue">
                        <td>{this.props.player1}</td>
                        <td>{this.props.score1}</td>
                        <td>{this.props.score2}</td>
                        <td>{this.props.draws}</td>
                    </tr>
                    <tr class="green">
                        <td>{this.props.player2}</td>
                        <td>{this.props.score2}</td>
                        <td>{this.props.score1}</td>
                        <td>{this.props.draws}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
    resetGame(){
        this.props.resetGame();

    }    
}
class Documentation extends React.Component{//Keeps track of the Scoreboard</div>
    render(){
        return(
        <div>
            <label>Project Documentation:</label>
            <div class="docMenu">
                <ul>
                    <a href="#" class="col-sm-12 col-md-4"><li>Design Report</li></a>
                    <a href="#" class="col-sm-12 col-md-4"><li>Development Manual</li></a>
                    <a href="#" class="col-sm-12 col-md-4"><li>Administration Manual</li></a>
                </ul> 
            </div>
        </div>
        );
    }
}