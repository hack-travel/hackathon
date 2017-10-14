import React from 'react';
import * as ChangeActions from '../../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'




class ItineraryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    
  }

  render() {
    return (
      <div>
        <h3> ItineraryIndex </h3> 
      </div>
    )
  }
}

// React-Redux connect() boilerplate
// 1. Include the properties in the Store you want this component to have access to
// 2. Change the Component name at the very end to the one in the current file
const mapStateToProps = (state) => {
  console.log('state', state);
  return ({
  })
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChangeActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItineraryIndex);
