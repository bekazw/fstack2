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
        console.log(this.props)
    }
    
    tryToLogIn = () => {
       /* fetch("http://localhost:1000/auth/"+this.state.log+"/"+this.state.pass+"")   
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          console.log(json);         
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        }) 
       */ this.props.onLogin("/main");
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
                    <button onClick={this.tryToLogIn}>LogIn</button>
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