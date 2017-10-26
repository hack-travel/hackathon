import React from 'react';
import jQuery from 'jQuery';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

console.log('actionCreators', ActionCreators);

class ViewItineraries extends React.Component {
  
  componentDidMount() {
    console.log('this.props', this.props);
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:8080/api/itinerary/itineraries",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "e9b0e95d-3a50-8d68-c37f-47e16455b61a"
      }
    }
    
    jQuery.ajax(settings).done(response => {
      console.log('response', response);
      this.props.actions.changeItineraries(response);
    });
  }

  render() {
    const { itineraries } = this.props;
    console.log('itin', itineraries)
    return (
      <div>
        <h3> FDEWFWEFW </h3>
        {itineraries && itineraries.length ? itineraries.map(itinerary => <div>{itinerary.name}</div>) : null}
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
    itineraries: state.itineraries,
    events: state.events,
    router: state.router,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewItineraries));
