import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = { profile: null }
    // this.getSalarySummary = this.getSalarySummary.bind(this)
    // this.getOutgoingSummary = this.getOutgoingSummary.bind(this)
  }

  getSalarySummary() {

  }

  getOutgoingSummary() {

  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({profile: res.data}))
      .catch(err => console.log(err.response))
  }

  isOwner() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user._id
  }

  render() {
    console.log(this.state)
    return(

      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                PYFIN
              </h1>
              <h2 className="subtitle">
                Fiscal Transparency at its finest #SaveDatMoney
              </h2>
            </div>
          </div>
        </section>

        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            <li className="is-active">
              <a>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a>
                <span>Income</span>
              </a>
            </li>
            <li>
              <a>
                <span>Outgoings</span>
              </a>
            </li>
            <li>
              <a>
                <span>Savings</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <h1>INCOME THIS MONTH:</h1>
                </div>
                <div className="tile is-child box">
                  <h1>OUTGOINGS THIS MONTH:</h1>
                </div>
                <div className="tile is-child box">
                  <h1>SAVINGS THIS MONTH:</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard

// ASIDE MENU
// <aside className="menu">
//   <h2>LOGO HERE</h2>
//   <h2>PYFIN</h2>
//   <p className="menu-label"></p>
//   <ul className="menu-list">
//     <li><a>Dashboard</a></li>
//     <li><a>Income</a></li>
//     <li><a>Outgoings</a></li>
//     <li><a>Savings</a></li>
//   </ul>
//   <p className="menu-label"></p>
//   <ul className="menu-list">
//     <li><a></a></li>
//     <li><a></a></li>
//     <li><a></a></li>
//     <li><a>Logout</a></li>
//   </ul>
// </aside>
