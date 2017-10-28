import React from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import firebase from 'Firebase'
import fire from './profile/firebase.jsx';
import Home from './Home.jsx';
import ProfileIndex from './profile/ProfileIndex.jsx';
import Login from './profile/login.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import PrepIndex from './prep/PrepIndex.jsx';
import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      usersFacebook: null,
      userId: null,
    };
    this.login = this.login.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentWillMount() {
    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
          userId: user.uid,
          isLoggedIn: true,
        });
      }
    });
    setTimeout(() => unsubscribe(), 5000);
  }

  login(user, fbInfo) {
    this.setState({
      isLoggedIn: true,
      usersFacebook: fbInfo,
      userId: user.uid,
    })
  }

  handleSignOut(e) {
    e.preventDefault();
    fire.auth().signOut()
      .then((firebaseUser) => {
        this.setState({
          isLoggedIn: false,
          usersFacebook: null,
          userId: null,
        })
      })
      .catch((error) => {
        cb(error);
      });
  }


  render() {
    const LoginComponent = () => {
      return (
        <Login
        login={this.login}
        />
      );
    }
    return (
      <div>
        {this.state.isLoggedIn ?
          <div>
          <Navbar handleSignOut={this.handleSignOut}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={ProfileIndex}/>
            <Route path="/itinerary" component={ItineraryIndex}/>
            <Route path="/prep" component={PrepIndex}/>
            <Route path="/*" component={Home}/>
          </Switch>
          </div> :
          <Route path="/*" render={LoginComponent} login="test"/>
        }
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
