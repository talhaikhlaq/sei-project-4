import React from 'react'
import axios from 'axios'
import Navbar from '../common/Navbar'
import IncomeForm from './IncomeForm'
import Auth from '../../lib/Auth'

class IncomeNew extends React.Component {
  constructor() {
    super()

    this.state = { profile: null }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ profile: res.data }))
      .catch(err => console.log(err.response))
  }

  // handleChange({ target: value }) {
  //   const salary = { ...this.state.profile, [name]: value }
  //   console.log(salary)
  // }

  render() {
    const { profile } = this.state
    if (!profile) return null
    return(
      <div>
        <Navbar />
        <h2 className="subtitle">Welcome back, {profile.username}</h2>
        <p>You last logged in on ...</p>
        <hr/>
        <section className="section-newform">
          <h1 className="title" id="newform-title">Income Calculator</h1>
          <IncomeForm
            data={this.state.profile}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
      </div>
    )
  }

}
export default IncomeNew
