import React from 'react'
import {Link} from 'react-router-dom'
// import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor(){
    super()
  }



  render() {
    return(
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                PYFIN
              </h1>
              <h2 className="subtitle">
                Fiscal Transparency at its finest #SaveDatMoney
              </h2>
            </div>
          </div>
        </section>

        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            <li className="is-active">
              <Link to="/dashboard">
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/income">
                <span>Income</span>
              </Link>
            </li>
            <li>
              <Link to="/outgoings">
                <span>Outgoings</span>
              </Link>
            </li>
            <li>
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

export default Navbar
