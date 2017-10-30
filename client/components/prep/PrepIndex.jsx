import React from 'react';
import PrepHome from './PrepHome.jsx';
import PackingHome from './packing/PackingHome.jsx';
import BudgetHome from './budget/BudgetHome.jsx';
import EssentialsHome from './essentials/EssentialsHome.jsx';
import TranslationHome from './translation/TranslationHome.jsx';
import CurrencyHome from './currency/CurrencyHome.jsx';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

class PrepIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='prepIndex'>
        <h2>Prepare for Your Trip</h2>
        <Switch>
          <Route exact path='/prep' component={PrepHome} />
          <Route path='/prep/packing' component={PackingHome} />
          <Route path='/prep/budget' component={BudgetHome} />
          <Route path='/prep/essentials' component={EssentialsHome} />
          <Route path='/prep/translation' component={TranslationHome} />
          <Route path='/prep/currency' component={CurrencyHome} />
        </Switch>
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
)(PrepIndex));
