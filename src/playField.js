import React from 'react';


export class PlayField extends React.Component{//The container class for the main display of the website
    render(){
        return (
        <div className="col-md-12">
            <TicTacToe />
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
            <table className="col-md-12">
                <tbody>
                    {this.state.playField.map((row, i1)=> 
                    <tr>
                        {row.map((element, i2)=>
                            <td onClick={() => this.handleClick(i1, i2)}>
                                {element === 0 ? <h1>BLANK</h1> : null}
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
        //To update a variable in the state function, use thi.setstate({"Variable": "Value"})
        alert(this.state.playField[index1][index2])
    }

}

class ScoreBoard extends React.Component{
    render(){
        return <h1>Connection works</h1>
    }
}