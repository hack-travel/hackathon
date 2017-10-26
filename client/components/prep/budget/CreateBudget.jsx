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
  }
  render () {
    return <div>
      <div>Create Your Budget Plan</div>
      <form>
        Flight:<input value={}/>
        Hotel: <input/>
      </form>
    </div>
  }
}

export default CreateBudget;