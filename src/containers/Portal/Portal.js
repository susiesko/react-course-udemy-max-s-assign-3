import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Portal.css'

import Courses from '../Courses/Courses';
import Users from '../Users/Users';

class Portal extends Component {
  render() {
    return (
      <div className="Portal">  
        <header>
          <nav>
            <ul>
              <li><NavLink 
                to='/users'
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#af00bd',
                  textDecoration: 'underline'
                }}>Users
              </NavLink></li>
              <li><NavLink 
                to={{
                  pathname: '/courses'
                }}>Courses
              </NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>{/* Load a single route with Switch */}
          <Route path="/users" exact component={Users} />
          <Route path="/courses" component={Courses} />      
          <Redirect from="/all-courses" to="/courses" />    
          <Route render={() => <h1>Not found</h1> }/>{/* 404 cases */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}


export default Portal;
