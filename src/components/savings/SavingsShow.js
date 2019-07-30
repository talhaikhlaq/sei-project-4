import React from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'
import Auth from '../../lib/Auth'

class SavingsShow extends React.Component {
  constructor() {
    super()

    this.state = { profile: null }
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
    const { profile } = this.state
    if (!profile) return null
    const salary = profile.salary[0]
    return(
      <div>
        <Navbar />
        <WelcomeBack />
        <div id="savings-overview" className="section">
          <h2 id="savings-overview" className="subtitle">Your Total Savings this month is £{((salary.annual_net_salary / 12) - (profile.category.total_outgoing) + (salary.annual_pension / 12)).toFixed(2)}</h2>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div id="savings-breakdown-tile" className="tile is-child box">
                  
                  <p>Balance (after monthly spends): £{((salary.annual_net_salary / 12) - (profile.category.total_outgoing)).toFixed(2)}</p>
                  <p>Pension Contribution: £{(salary.annual_pension / 12).toFixed(2)}</p>
                  <p>Other: </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default SavingsShow
