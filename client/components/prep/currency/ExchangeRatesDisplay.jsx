import React, { Component } from 'react';

import RatePanel from './RatePanel.jsx';

class ExchangeRatesDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { origin, destinations, quotes } = this.props;
    if (Object.keys(quotes).length) {
      return (
        <div id='ExchangeRatesDisplay' style={{ display: 'grid' }}>
          {destinations.map(destination => (
            <RatePanel 
              key={destination.country}
              baseCurrency={origin.currency.code}
              targetCurrency={destination.currency.code}
              budget={destination.budget}
              quotes={quotes}
            />
          ))}
        </div>
      );
    } else {
      return <div>Loading Quotes...</div>
    }
  }
}

export default ExchangeRatesDisplay;