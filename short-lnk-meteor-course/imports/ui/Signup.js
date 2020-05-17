import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import history from './history';
import { Meteor } from 'meteor/meteor';


export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }
  componentDidMount() {
    if(Meteor.userId()){
      history.replace("/links", this.state);
    }
  }
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if(password.length < 9) {
      return this.setState({error: 'Password must be more thaan 8 characters long'});
    }
    Accounts.createUser({email, password}, (err) => {
      if(err){
        this.setState({error: err.reason});
      }else {
        this.setState({error: ''});
      }
    //  console.log("Signup callback", err);
    });
    // this.setState({
    //   error: 'something went wrong'
    // })
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Lnk</h1>
          {this.state.error ? <p> {this.state.error} </p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );

  }
};
