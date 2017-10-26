import React from 'react';

class CreateBudget extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      Flight: '',
      Hotel: '',
      Food: '',
      PublicTransport: '',
      Souvenirs: '',
      EmergencyFund: ''
    }
    this.handleChange = this.handleChange.bind(this);
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
    </div>
  }
}

export default CreateBudget;