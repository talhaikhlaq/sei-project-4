import React from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'

class OutgoingsShow extends React.Component {
  constructor() {
    super()

    this.state = { profile: null }
    this.filterObjects = this.filterObjects.bind(this)
  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ profile: res.data }))
      .catch(err => console.log(err.response))
  }

  filterObjects(profile) {
    const filtered = Object.filter(profile.category, categories =>
      categories === null
    )
    console.log(filtered)
  }


  render() {
    console.log(this.state)
    const { profile } = this.state
    if (!profile) return null
    const breakdown = profile.category
    delete breakdown.created_at
    delete breakdown.updated_at
    delete breakdown.users
    delete breakdown.id
    return(
      <div>
        <Navbar />
        <WelcomeBack />
        <div id="outgoings-overview" className="section">
          <h2 id="outgoings-overview" className="subtitle">Your Total Outgoings this month are £{(profile.category.total_outgoing).toFixed(2)}</h2>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div id="outgoings-breakdown-tile" className="tile is-child box">
                  <h2> {Object.keys(breakdown).map((category, i) => (
                    <li id="outgoing-list" key={i}>{category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: £{breakdown[category] ? breakdown[category].toFixed(2) : '0.00' }</li>
                  ))}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OutgoingsShow
