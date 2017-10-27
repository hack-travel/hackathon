import React from 'react';

// React-Redux connect() boilerplate
// NOTE: you may have to modify the filepath for ActionCreators
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as ActionCreators from '../../actions';
import axios from 'axios'



class PhotoChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPicture: {url: `http://www.capalino.com/wp-content/uploads/2017/04/NYC599100186_city.jpg`, tags: ['city', 'night-life']},
      secondPicture: {url: `https://upload.wikimedia.org/wikipedia/commons/1/12/BerglandschapVanafSorebois.JPG`, tags: ['nature', 'hiking']}
    };
    this.choosePhoto = this.choosePhoto.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  //axios.get for event photos and event keys
  //each photo is an object w/ a url and an array of keywords
  getPhotos() {
    axios.get('/api/profile/getTwoEvents')
    .then((res) => {
      console.log(res)
      this.setState({
        firstPicture: res.data[0],
        secondPicture: res.data[1]
      })
    })
    .catch((err) => console.error(err));
  }

  componentWillMount() {
    this.getPhotos();
  }

  choosePhoto(relevantTags) {
    // Hardcoded userId for the time being, eventually should pick up user info in backend
    axios.post('/api/profile/insertIntoUsersAndTags', { tags: relevantTags, userId: 12 }) 
    .then((res) => {
      this.getPhotos();
    })
    .catch((err) => console.error('Oh my god!', err))
  }

  render() {
    return (
      <div>
        <h3> Chooser </h3> 
        {this.state.firstPicture  && this.state.secondPicture ? (
          <div>
            <div>
              <img 
                src={this.state.firstPicture.pictureUrl}
                style={{width: 300, height: 'auto'}}
              />
              <button onClick={() => this.choosePhoto(this.state.firstPicture.tags)}>I like this one more.</button>
            </div>
            <div>
              <img 
                src={this.state.secondPicture.pictureUrl}
                style={{width: 300, height: 'auto'}}
              />
              <button onClick={() => this.choosePhoto(this.state.secondPicture.tags)}>I like this one more.</button>
            </div>
          </div>
        ): null}
        
      </div>
    );
  }
}
export default PhotoChoice;
// React-Redux connect() boilerplate
// 1. In mapStateToProps, include the properties in the Store you want this component to have access to (ALWAYS include router: state.router)
// 2. Change the Component name at the end of connect() to the one in the current file
// const mapStateToProps = (state) => {
//   console.log('state', state);
//   return {
//     example: state.example,
//     router: state.router
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(ActionCreators, dispatch)
// });

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PhotoChoice));
