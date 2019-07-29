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
    return(
      <div>
        <Navbar />
        <WelcomeBack />
        <div className="section">
          <h2 className="subtitle">Your Total Savings this month is £{((profile.salary.annual_net_salary / 12) - (profile.category.total_outgoing) + (profile.salary.annual_pension / 12)).toFixed(2)}</h2>
          <h2>Breakdown:</h2>
          <p>Balance (after monthly spends): £{((profile.salary.annual_net_salary / 12) - (profile.category.total_outgoing)).toFixed(2)}</p>
          <p>Pension Contribution: £{(profile.salary.annual_pension / 12).toFixed(2)}</p>
          <p>Other: </p>
          <br/>
          
        </div>
      </div>
    )
  }
}

export default SavingsShow
