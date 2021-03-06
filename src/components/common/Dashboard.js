import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'

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
      .then(res => this.setState({ profile: res.data }))
      .catch(err => console.log(err.response))
  }

  isOwner() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user._id
  }

  render() {
    console.log(this.state)
    const { profile } = this.state
    if (!profile) return null
    const salary = profile.salary[0]
    return(

      <div>
        <Navbar />
        <WelcomeBack />
        <div id="overview" className="section">
          <h2 id="overview" className="subtitle">Overview</h2>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <Link to="/income" id="income-tile" className="tile is-child box">
                  <h1>INCOME THIS MONTH:</h1>
                  <h1>£{(salary.annual_net_salary / 12).toFixed(2)}</h1>
                </Link>
                <Link to="/outgoings" id="outgoings-tile" className="tile is-child box">
                  <h1>OUTGOINGS THIS MONTH:</h1>
                  <h1>£{(profile.category.total_outgoing).toFixed(2)}</h1>
                </Link>
                <Link to="/savings" id="savings-tile" className="tile is-child box">
                  <h1>SAVINGS THIS MONTH:</h1>
                  <h1>£{((salary.annual_net_salary / 12) - (profile.category.total_outgoing) + (salary.annual_pension / 12)).toFixed(2)}</h1>
                </Link>
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
