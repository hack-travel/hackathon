import React, { Component } from 'react';

class RatePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { baseCurrency, 
          targetCurrency, 
          destinationName, 
          destinationCode, 
          budget, 
          quotes, 
          monthAgoQuotes } = this.props;
    let exchangeRate = quotes.rates[targetCurrency];
    let monthAgoExchangeRate = monthAgoQuotes.rates[targetCurrency];
    return (
      <li>
      <div style={{ margin: '2%' }}>
        For your trip to {' '}
        <span style={{ textDecoration: 'underline', color: 'orange' }}>{destinationName}</span> 
        {' '} Your budget is {' '}
        <span style={{ textDecoration: 'underline', color: 'green' }}>{budget} {baseCurrency}</span> 
        {' '} The exchange rate is {' '}
        <span style={{ textDecoration: 'underline', color: 'purple' }}>{exchangeRate} {baseCurrency} per {targetCurrency}</span>
        {' '} You should ask your bank for {' '}
        <span style={{ textDecoration: 'underline', color: 'blue' }}>{exchangeRate * budget} {targetCurrency}</span>
      </div>
        { monthAgoExchangeRate > exchangeRate ? 
          (
            <div>
              <img src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png' style={{ maxHeight: '50px', maxWidth: '50px'}}/>
              {' '} Over the last month, the <span style={{ textDecoration: 'underline', color: 'green' }}>{baseCurrency}</span> has decreased in value against the {' '}
              <span style={{ textDecoration: 'underline', color: 'blue' }}>{targetCurrency}</span>, consider exchanging sooner rather than later
            </div>
          ) :
          (
            <div>
              <img src='https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png' style={{ maxHeight: '50px', maxWidth: '50px'}}/>
              {' '} Over the last month, the <span style={{ textDecoration: 'underline', color: 'green' }}>{baseCurrency}</span> has increased in value against the {' '}
              <span style={{ textDecoration: 'underline', color: 'blue' }}>{targetCurrency}</span>, consider waiting a bit to exchange
            </div>
          )}
      </li>
    );
  }
}

export default RatePanel;