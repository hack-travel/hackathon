import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import * as ActionCreators from <filepath to the actions folder from the current folder>;

class FlightPrice extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      from: '',
      to: '',
      price: 'None yet'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let from = this.state.from;
    let to = this.state.to;
    axios.get({
      method: "GET",
      url: 'url',
      params: {
        from,
        to
      }
    })
    .then(result => {
      this.setState({
        display: result.data,
      })
    })

  }

  handleChange (e) {
    this.setState({
      [e.target.data]: e.target.value
    })
  }

  render () {
    let props = this.props;
    let state = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            From: 
            <input value={state.from} onChange={this.handleChange} data='from'/>
            To: 
            <input value={state.to} onChange={this.handleChange} data='to'/>
          </label>
          <button type='submit'/>
        </form>
        <div>Price: {state.price}</div>
      </div>
    )
  }
}

export default FlightPrice;
// const mapStateToProps = (state) => {
//   console.log('state', state);
//   return ({
//     niceThing: state.niceThing,
//     router: state.router
//   })
// };

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(ActionCreators, dispatch)
// });

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(<COMPONENT NAME HERE>));