import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import C3Chart from 'react-c3js';
// import 'c3/c3.css';

class CurrencyChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { quotes, monthAgoQuotes, currencies } = this.props;
    const data = {
      columns: [
        ['Rate Today'],
        ['Rate Last Month']
      ],
      type: 'bar',
      labels: true
    };
    const axis = {
      x: {
        type: 'category',
        categories: []
      }
    };
    if (Object.keys(quotes).length) {
      currencies.forEach(currency => {
        axis.x.categories.push(currency);
        data.columns[0].push(quotes.rates[currency]);
        data.columns[1].push(monthAgoQuotes.rates[currency]);
      });
      return (
        <div id='react-c3js'>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.css' />
          <C3Chart 
            data={data}
            axis={axis}
           />
        </div>
      );
    } else {
      return <div>Loading Quotes...</div>
    }
  }
}

export default CurrencyChart;