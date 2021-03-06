import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'
import axios from 'axios'

class Navbar extends React.Component {
  constructor(){
    super()

    this.state = { profile: null }
    this.logout = this.logout.bind(this)
    this.isOwner = this.isOwner.bind(this)
  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ profile: res.data }))
      .catch(err => console.log(err.response))
    this.setActiveTab()
  }

  setActiveTab() {
    this.setState({ activeTab: this.props.location.pathname.slice(1) })
  }

  isOwner() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user._id
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    // console.log('on render', this.state)
    const { profile } = this.state
    if (!profile) return null
    return(
      <div>




        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="dropdown is-right is-hoverable">
                <div className="dropdown-trigger">
                  <button id="menu-button" className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    Menu
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                  <div className="dropdown-content">
                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                    <Link to="/income" className="dropdown-item">Income</Link>
                    <Link to="/outgoings" className="dropdown-item">Outgoings</Link>
                    <Link to="/savings" className="dropdown-item">Savings</Link>
                    <Link to="/" className="dropdown-item">Report an issue</Link>
                    <Link to="/aboutus" className="dropdown-item">About Us</Link>
                    <hr className="dropdown-divider"/>
                    <a className="dropdown-item log-out" onClick={this.logout}>Logout</a>
                  </div>
                </div>
              </div>
              <h1 id="title-navbar" className="title">
                PYFIN
              </h1>
              <h2 id="subtitle-navbar" className="subtitle">
                Fiscal Transparency at its finest <span id="SaveDatMoney"><a href="https://youtu.be/yvHYWD29ZNY?t=87">#SaveDatMoney</a></span>
              </h2>
            </div>
          </div>
        </section>

        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            <li
              className={this.state.activeTab === 'dashboard' ? 'is-active' : ''}
            >
              <Link to="/dashboard">
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={this.state.activeTab === 'income' ? 'is-active' : ''}

            >
              <Link to="/income">
                <span>Income</span>
              </Link>
            </li>
            <li
              className={this.state.activeTab === 'outgoings' ? 'is-active' : ''}

            >
              <Link to="/outgoings">
                <span>Outgoings</span>
              </Link>
            </li>
            <li
              className={this.state.activeTab === 'savings' ? 'is-active' : ''}

            >
              <Link to="/savings">
                <span>Savings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
