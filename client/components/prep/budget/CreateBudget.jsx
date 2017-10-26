import React from 'react';
import axios from 'axios';

class CreateBudget extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      Flight: 0,
      Hotel: 0,
      Food: 0,
      PublicTransport: 0,
      Souvenirs: 0,
      EmergencyFund: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    let s = this.state;
    axios.post('/prep/budget', {
      Flight: s.Flight,
      Hotel: s.Hotel,
      Food: s.Food,
      PublicTransport: s.PublicTransport,
      Souvenirs: s.Souvenirs,
      EmergencyFund: s.EmergencyFund
    })
  }
  handleChange (e) {
    this.setState({
      [e.target.dataset.type]:e.target.value
    })
  }
  render () {
    return <div>
      <div>Create Your Budget Plan</div>
      <form>
        Flight:<input value={this.state.Flight} onChange={this.handleChange} data-type='Flight'/><br/>
        Hotel:<input value={this.state.Hotel} onChange={this.handleChange} data-type='Hotel'/><br/>
        Food:<input value={this.state.Food} onChange={this.handleChange} data-type='Food'/><br/>
        PublicTransport:<input value={this.state.PublicTransport} onChange={this.handleChange} data-type='PublicTransport'/><br/>
        Souvenirs:<input value={this.state.Souvenirs} onChange={this.handleChange} data-type='Souvenirs'/><br/>
        EmergencyFund:<input value={this.state.EmergencyFund} onChange={this.handleChange} data-type='EmergencyFund'/><br/>
      </form>
      <button onClick={this.handleSubmit}>Make Budget Plan</button>
    </div>
  }
}

export default CreateBudget;