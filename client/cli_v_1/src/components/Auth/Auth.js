import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redirect from '../../redux/actions';

class Auth extends Component {
    constructor (props) {
        super(props);
        this.state = {
            login : "",
            pass : ""
        }
        let tryToLogIn = this.tryToLogIn.bind(this);
    }
    
    tryToLogIn = (el) => {        
        fetch("http://localhost:1000/auth/"+this.state.login+"/"+this.state.pass+"")   
        .then(function(response) {
          return response.json()
        }).then(function(json) {
            console.dir(json);
          if (json !== 404) {  
              el.props.onLogin("/main");             
            }
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })      
        
    }

    valueUpdate = (e, who) => {
        if (who === "l") {
            this.setState({
                login : e.target.value
            })
        }
        else {
            this.setState({
                pass : e.target.value
            })
        }
    }

    render() {
        if (this.props.curPage === "/auth") { 
            return (
                <div>
                   <p>! {} </p>
                    <input 
                        type = "text"
                        onChange = {e=>this.valueUpdate(e,"l")} />
                    <input 
                        type = "password"
                        onChange = {e=>this.valueUpdate(e,"p")}/>
                    <button onClick={() => {this.tryToLogIn(this)}}>LogIn</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    None {this.props.curPage}
                </div>
            )
        }
    }   
}

const mapStateToProps = (state) => ({    
        curPage : state.curPage    
})
 
const mapDispatchToStore = dispatch => ({
    onLogin : pat => { dispatch(Redirect(pat))}
})

export default connect(mapStateToProps, mapDispatchToStore )(Auth);