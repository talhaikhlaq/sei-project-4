import React from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'

class IncomeShow extends React.Component {
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
    const salary = profile.salary[0]
    return(
      <div>
        <Navbar />
        <WelcomeBack />
        <div id="income-overview" className="section">
          <h2 id="income-overview" className="subtitle">Your Total After Tax Income this month is £{(salary.annual_net_salary / 12).toFixed(2)}</h2>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div id="yearly-tile" className="tile is-child box">
                  <h2>Yearly:</h2>
                  <p>Take Home: £{(salary.annual_net_salary).toFixed(2)}</p>
                  <p>Tax: £{(salary.annual_tax).toFixed(2)}</p>
                  <p>National Insurance: £{(salary.annual_ni).toFixed(2)}</p>
                </div>
                <div id="monthly-tile" className="tile is-child box">
                  <h2>Monthly:</h2>
                  <p>Take Home: £{(salary.annual_net_salary / 12).toFixed(2)}</p>
                  <p>Tax: £{(salary.annual_tax / 12).toFixed(2)}</p>
                  <p>National Insurance: £{(salary.annual_ni / 12).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          <br/>
        </div>
      </div>
    )
  }
}

export default IncomeShow
