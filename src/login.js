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
            <div>
                <div className="col-md-5" />
                <div className="col-md-7">
                    <div className="col-md-12">
                        <input type="text" className="col-md-2" placeholder="Player1" name="player1" onChange={this.handleChange} value={this.state.player1} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="col-md-2" placeholder="Player2" name="player2" onChange={this.handleChange} value={this.state.player2}/>
                    </div>
                    <div className="col-md-12">                
                        <input type="button" className="btn btn-success col-md-1" value="Submit" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
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