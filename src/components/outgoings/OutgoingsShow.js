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
    return(
      <div>
        <Navbar />
        <WelcomeBack />
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

export default OutgoingsShow
