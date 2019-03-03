import React, { Component } from 'react';
import UserItem from 'components/molecules/UserItem';
import { appointments } from 'services';
class Appointments extends Component {
  componentDidMount() {
    appointments()
      .then((response) => {
        console.log('ddd');
        console.log(response);

        // TODO: Handle response here
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  render() {
    return (
      <div>
        <h1>Appointments</h1>
        <h3>Upcoming</h3>
        <div>
          <UserItem />
        </div>
      </div>
    );
  }
}

export default Appointments;
