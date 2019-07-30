import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class WelcomeBack extends React.Component {
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
    const { profile } = this.state
    if (!profile) return null
    return(
      <section>
        <h2 id="welcome-back" className="subtitle">Welcome back, {profile.username}</h2>
        <p>You last logged in on ...</p>
        <hr/>
      </section>
    )
  }
}
export default WelcomeBack
