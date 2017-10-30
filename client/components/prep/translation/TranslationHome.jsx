import React from 'react';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../../actions';
import axios from 'axios';
import rawPhrases from './rawPhrases.jsx';

// need to find a free translation API, or just bite the bullet and sign up for a trail version of google's translate, but requires a credit card... need to find an old unused credit card?
// preset phrase list
  // do we want users to be able to add to the present list of phrases? That would mean we would have to store their custom phrases in a data base entry.
  // do we want to allow users to delete from teh preset list of phrases? That would mean the entire array of phrases would need to be stored, not just their custom ones like stated above. 
  // in both above cases, we'll need to make a database call on the mount, unless it's being passed in.


class TranslationHome extends React.Component {
  //need to determine what these props are, currently seeing the location as some funky code, "q4vdh0" ... what does that mean?
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Banana',
      translatedTerm: 'Apple',
      presetLanguage: '',
      translatedPhrases: [],
    }
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleTranslate = this.handleTranslate.bind(this);
    this.translateCommonPhrases = this.translateCommonPhrases.bind(this);
  }

  componentDidMount() {
    //on mount, need to use props location and send to api to set what's the most popular language at that location to the presetLanguage.
    //need to run translate on all the common phrases and render those out in the presetLangauge.
    //this.translateCommonPhrases()
  }

  handleSearchTerm(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleTranslate(e) {
    e.preventDefault();
    axios.post('/api/prep/translate', {
      data: { translate: this.state.searchTerm },
    })
    .then(response => {
      console.log(reponse);
      this.setState({
        translatedTerm: reponse.data,
      });
    })
  }

  translateCommonPhrases() {
    axios.post('/api/prep/translateArray', {
      data: {
        array: rawPhrases
        lang: this.state.presetLanguage
      }
    })
    .then(response => {
      this.setState({
        translatedPhrases: response.data,
      })
    })
  }

  render() {
    return (
      <div className='translationHome'>
        <p>Translation Home</p>
          <form onSubmit={this.handleTranslate} >
            <input onChange={this.handleSearchTerm} type="text" placeholder="Translate Me!" />
            <button type="submit">Translate </button> {'  '}
            {this.state.translatedTerm}
            <br />
            {this.state.translatedPhrases.map(phrase => {
              return (
                <div>{phrase}</div>
              )
            })}
          </form>
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
)(TranslationHome));