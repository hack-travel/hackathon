import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChangeActions from '../actions';
import Home from './Home.jsx';
import ProfileIndex from './profile/ProfileIndex.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import PrepIndex from './prep/PrepIndex.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log('App: this:', this);
  }

  render() {
    return (
      <div>
        <h3> Hack Travel </h3> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={ProfileIndex}/>
          <Route path="/itinerary" component={ItineraryIndex}/>
          <Route path="/prep" component={PrepIndex}/>
        </Switch>
           

      </div>
    )
  }
}

// React-Redux connect() boilerplate
// 1. Include the properties in the Store you want this component to have access to
// 2. Change the Component name at the very end to the one in the current file
const mapStateToProps = (state) => {
  console.log('state', state);
  return ({
  })
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChangeActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
