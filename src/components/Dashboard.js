import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard

        <h1>{this.props.location.state.payload.username}</h1>

      </div>
    )
  }
}

export default withRouter(Dashboard);
