import React from 'react';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';




class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    var heading = {
      float: 'left'
    }

    var rightNav = {
      marginTop: '22px'
    }
    return (
      <div className='navbar'>
        <h2 style={heading}> Hack Travel </h2>
        <div style={rightNav}>
          <ul>
            <li> <Link to='/profile'> Profile </Link> </li>
            <li> <Link to='/itinerary'> Itinerary </Link> </li>
            <li> <Link to='/prep'> Preperation </Link> </li>
            <li onClick={this.props.handleSignOut}><Link to="/">Sign Out</Link></li>
          </ul>
        </div>
      </div>
    );
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
)(Navbar));
