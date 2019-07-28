import React from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'

class Income extends React.Component {
  constructor() {
    super()

    this.state = { profile: null }
  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ profile: res.data }))
      .catch(err => console.log(err.response))
  }

  render() {
    console.log(this.state)
    const { profile } = this.state
    if (!profile) return  null
    return(
      <div>
        <Navbar />
        <h2 className="subtitle">Welcome back, {profile.username}</h2>
        <p>You last logged in on...</p>
        <hr/>
        <div className="section">
          <h2 className="subtitle">Your Total After Tax Income this month is £{(profile.salary.annual_net_salary / 12).toFixed(2)}</h2>
          <h2>Yearly:</h2>
          <p>Take Home: £{(profile.salary.annual_net_salary).toFixed(2)}</p>
          <p>Tax: £{(profile.salary.annual_tax).toFixed(2)}</p>
          <p>National Insurance: £{(profile.salary.annual_ni).toFixed(2)}</p>
          <br/>
          <h2>Monthly:</h2>
          <p>Take Home: £{(profile.salary.annual_net_salary / 12).toFixed(2)}</p>
          <p>Tax: £{(profile.salary.annual_tax / 12).toFixed(2)}</p>
          <p>National Insurance: £{(profile.salary.annual_ni / 12).toFixed(2)}</p>
        </div>
      </div>
    )
  }
}

export default Income
