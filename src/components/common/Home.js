import React from 'react'
import Login from '../auth/Login'

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1 id="home-title"></h1>
        <div id="modal-home" className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <Login />
          </div>

        </div>

      </div>
    )
  }
}

export default Home
