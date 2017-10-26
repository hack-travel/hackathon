import React from 'react';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

class ViewItineraries extends React.Component {
  
  componentDidMount() {
    const myHeaders = new Headers();
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors'
    }
    console.log(',ounted')

    fetch('/api/itinerary/itineraries', myInit)
      .then(response => {
        console.log('response.data', response.data);
        return ActionCreators.changeItineraries(response.data)
      })
      .catch(err => console.log('err', err))
  }

  render() {
    const { itineraries } = this.props;
    return (
      <div>
        <h3> FDEWFWEFW </h3>
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
