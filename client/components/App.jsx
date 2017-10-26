import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import Home from './Home.jsx';
import ProfileIndex from './profile/ProfileIndex.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import PrepIndex from './prep/PrepIndex.jsx';
import BudgetHome from './prep/budget/BudgetHome.jsx';




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
// 1. In mapStateToProps, include the properties in the Store you want this component to have access to (ALWAYS include router: state.router)
// 2. Change the Component name at the end of connect() to the one in the current file
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    example: state.example,
    router: state.router
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
