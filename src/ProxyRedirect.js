import React, { Component } from 'react'

class ProxyRedirect extends Component {

  render() {
    return (
      <div>
        ProxyRedirect
      </div>
    )
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    let payload = {
      username: params.username,
      password: params.password
    }
    switch (params.component) {
      case 'dashboard':
        this.props.history.push('/dashboard', { payload: payload });
        break;
      case 'login':
        this.props.history.push('/login', { payload: payload });
        break;
      default:
        this.props.history.push('/404');
    }
  }

}

export default ProxyRedirect;

