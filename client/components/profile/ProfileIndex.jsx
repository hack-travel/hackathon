import React from 'react';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for Actions
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';




class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    
  }

  render() {
    return (
      <div>
        <h3> ProfileIndex </h3> 
      </div>
    )
  }
}

// React-Redux connect() boilerplate
// 1. In mapStateToProps, include the properties in the Store you want this component to have access to
// 2. Change the Component name at the end of connect() to the one in the current file
const mapStateToProps = (state) => {
  console.log('state', state);
  return ({
  })
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex));
