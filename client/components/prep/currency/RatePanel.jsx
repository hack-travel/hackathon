import React, { Component } from 'react';

class RatePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { baseCurrency, targetCurrency, budget, quotes } = this.props;
    return (
      <div>
        Displaying Rate for {baseCurrency} against {targetCurrency}
        Your budget is {budget} {baseCurrency}
        The exchange rate is {quotes.rates[targetCurrency]}
      </div>
    );
  }
}

export default RatePanel;