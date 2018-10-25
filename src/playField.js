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
            playField: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        }
    }

    render(){
        return (
        <div>
            {this.state.playField.map((row, i1)=> 
            <div className="col-md-12">
                    {row.map((element, i2)=>
                        <hi>Hi</hi>    
                    )}
            </div>
            )}
            
        </div>
        );
    }

}