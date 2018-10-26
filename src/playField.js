import React from 'react';


export class PlayField extends React.Component{//The container class for the main display of the website
    render(){
        return (
        <div class="container">
            <div class="title">Tic Tac Toe</div>
            <div className="division col-md-12 col-sm-6">
                <Players />
            </div>
            <div className="division col-md-12 col-sm-6">
                <TicTacToe />
            </div>
            <div className="division col-md-12 col-sm-6">
                <ScoreBoard />
            </div>
        </div>);
    }
}

class TicTacToe extends React.Component{//The container class for the Tic-Tac-Toe game itself
    constructor(props){
        super(props);
        this.state = {
            playField: [[0, 1, 0], [0, 1, 0], [0, 2, 0]],
            turn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render(){//A table that will be stiled will handle the graphics part of the tic-tac-toe
        return (
        <div>
            <table class=" col-md-12">
                <tbody>
                    {this.state.playField.map((row, i1)=> 
                    <tr>
                        {row.map((element, i2)=>
                            <td onClick={() => this.handleClick(i1, i2)}>
                                {element === 0 ? <h1>empty</h1> : null}
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
        alert(index1+ " " + index2)
        this.setstate({"Variable": "X"})
    }

}

class Players extends React.Component{
    render(){
        return(
        <div>
            <div class="player blue">Player1 VS Player2</div>
            <div class="turn green">Player X's Turn!</div>
        </div>
        );
    }
}

class ScoreBoard extends React.Component{//Keeps track of the Scoreboard
    render(){
        return(
        <div>
            <button id="resetBtn" type="button">Play again!</button>
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
                        <td>Player1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr class="green">
                        <td>Player2</td>
                        <td>3</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}