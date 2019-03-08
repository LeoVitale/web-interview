import React, { Component } from 'react'
import UserItem from 'components/molecules/UserItem'
class Appointments extends Component {
  render() {
    return (
      <div>
        <h1>Appointments</h1>
        <h3>Upcoming</h3>
        <div>
          <UserItem />
        </div>
      </div>
    )
  }
}

export default Appointments
