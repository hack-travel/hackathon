import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Carousel from 'slick-carousel';

class IteneraryItemsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      images: [],
      selected: ''
    }
  }

  componentDidMount() {
    //GET the relevant itenraries
  }


  render() {
    return (

      <div className='IteneraryItemsModalContainer'>

        <Modal.Header>
          <Modal.Title>BYOI</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Related to specific iten
          <Carousel />
          <a>Based on what image is selected, show event details</a>
        </Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>

      </div>
    )
  }

};

export default IteneraryItemsModal;

//name of place
//time
//thumnail
//blurb
