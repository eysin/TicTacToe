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
    render(){
        return (
        <div>
            <h1>TicTactoe works</h1>)
        </div>
        );
    }
}