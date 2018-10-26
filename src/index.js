import React from 'react';
import ReactDOM from 'react-dom';
import {PlayField} from './playField';
import {Login} from './login';
import './style.css';


class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetched: false,
            player1: null,
            player2: null
        }
        this.handleUsername = this.handleUsername.bind(this);
    }
    render(){
        if(this.state.fetched){
            return <PlayField player1={this.state.player1} player2={this.state.player2}/>
        }
        else{
            return <Login handleUsername={this.handleUsername}/>;
        }
        
    }
    handleUsername(player1, player2){
        this.setState({fetched: true, player1: player1, player2: player2}); 
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

