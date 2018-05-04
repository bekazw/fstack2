import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Auth extends Component {
    constructor( props) {
        super(props);
        this.state = {
            log : "",
            pass : ""
        }     
    }
    xx = () => {       
        let t = this;
        if (this.state.log.length>0) {
        fetch("http://localhost:1000/auth/"+this.state.log+"/"+this.state.pass+"")   
                .then(function(response) {
                  return response.json()
                }).then(function(json) {
                  console.log(json);
                  t.props.history.push('/main');
                }).catch(function(ex) {
                  console.log('parsing failed', ex)
                })    
            }
      }      
    render() {           
            return (            
                <div id = "Auth">
                    <input type = "text" 
                        id = "Auth_log" value = {this.state.log} onChange={this.handleChangeLog.bind(this)}/>
                    <input type = "password" id = "Auth pass" value = {this.state.pass} onChange={this.handleChangePass.bind(this)}/>
                    <button onClick = {this.xx}>LogIn</button> 
                </div>
            )                 
    }
    handleChangeLog(e) {
        this.setState({ log: e.target.value });
    }
    handleChangePass (e) {
        this.setState({ pass: e.target.value});
    }
}

export default withRouter(Auth);