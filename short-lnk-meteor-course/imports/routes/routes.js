import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';

import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import history from '../ui/history';

window.browserHistory = history;
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () => {
  console.log(Meteor.userId());
  if(Meteor.userId()){
    console.log("back");
    history.push("/links", this.state);
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathName = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);
  //console.log(pathName);
  console.log('isAuthenticated', isAuthenticated);
  if(isUnauthenticatedPage&& isAuthenticated){
    history.push("/links", this.state);
  } else if(isAuthenticatedPage && !isAuthenticated){
    history.push("/", this.state);
  }

};

export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/links" component={Link}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);
