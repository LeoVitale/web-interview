import React, { Component } from 'react';
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

      </div>
    );
  }
}

export default Appointments;
