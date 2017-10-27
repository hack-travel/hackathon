import React from 'react';
import jQuery from 'jQuery';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

import updateStateFromDb from './helpers/dbHelpers'
import findOneEventFromItinerary from './helpers/dataHelpers'

import ItineraryPreview from './ItineraryPreview.jsx';

class ViewItineraries extends React.Component {
  componentDidMount() {
    updateStateFromDb('itineraries', this.props.actions);
    updateStateFromDb('events', this.props.actions);
  }

  render() {
    const { itineraries, events } = this.props;
    let itinerariesWithPhotos = null;

    if (itineraries && events) {
      itinerariesWithPhotos = itineraries.map((itinerary) => {
        const { pictureUrl } = findOneEventFromItinerary(events, itinerary) || '';
        console.log('pictureUrl to assign', pictureUrl)
        const newItinerary = Object.assign({
          pictureUrl,
        }, itinerary);

        return newItinerary;
      });
    }

    return (
      <div>
        <h3> FDEWFWEFW </h3>
        <div className="itinerary-preview-list">
          {
            itineraries && itineraries.length ?
            itinerariesWithPhotos.map(itinerary => <ItineraryPreview itinerary={itinerary} />)
              :
              null
          }
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
    itineraries: state.itineraries,
    events: state.events,
    router: state.router,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewItineraries));
