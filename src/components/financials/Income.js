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
          <h2 className="subtitle">Your Total After Tax Income this month is £{Math.round(profile.salary.annual_net_salary) / 12}</h2>
        </div>
      </div>
    )
  }
}

export default Income
