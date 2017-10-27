import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import example from './example';
import itineraries from './itineraries'
import events from './events'

const rootReducer = combineReducers({
  example,
  itineraries,
  events,
  router: routerReducer,
});

export default rootReducer;
