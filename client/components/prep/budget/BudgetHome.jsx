import React from 'react';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../../actions';

class BudgetHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='budgetHome'>
        <p>Budget Home</p>
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
    example: state.example,
    router: state.router
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetHome));