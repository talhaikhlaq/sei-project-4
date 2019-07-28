import React from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'

class Outgoings extends React.Component {
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

  render() {
    console.log(this.state)
    const { profile } = this.state
    if (!profile) return null
    return(
      <div>
        <Navbar />
        <h2 className="subtitle">Welcome back, {profile.username}</h2>
        <p>You last logged in on ...</p>
        <hr/>
        <div className="section">
          <h2 className="subtitle">Your Total Outgoings this month are £{(profile.category.total_outgoing).toFixed(2)}</h2>
          <h2> Breakdown: {Object.keys(profile.category).map((category, i) => (
            <li key={i}>{category}: £{profile.category[i]}</li>
          ))}
          </h2>
        </div>
      </div>
    )
  }
}

export default Outgoings
