import React from 'react';


export class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {player1: "", player2: ""}
    }
    render(){
        return (
            <body>
                <div class="container login"> 
                    <div className="col-md-12">
                        <div class="title">Welcome to Tic Tac Toe:</div>
                        <div className="col-md-12">
                            <label>Name for Player 1:</label>
                            <input type="text" class="inputtext" placeholder="Player1" name="player1" onChange={this.handleChange} value={this.state.player1} />
                        </div>
                        <div className="col-md-12">
                            <label>Name for Player 2:</label>
                            <input type="text" class="inputtext" placeholder="Player2" name="player2" onChange={this.handleChange} value={this.state.player2}/>
                        </div>
                        <div className="col-md-12">                
                            <input type="button" className="btn loginbtn col-md-1" value="Submit" onClick={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(){
        if(this.state.player1 !== "" && this.state.player2 !== ""){
            this.props.handleUsername(this.state.player1, this.state.player2);
        }
        else{
            alert("Please insert a value for both players")
        }
    }
}