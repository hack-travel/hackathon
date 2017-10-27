import React, { Component } from 'react';

class CurrencyChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { baseCurrency, targetCurrency } = this.props;
    return (
      <div id='currencyChart'>
        charting {baseCurrency} vs {targetCurrency}
      </div>
    );
  }
}

export default CurrencyChart;