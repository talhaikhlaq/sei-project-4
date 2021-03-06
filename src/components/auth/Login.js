import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data, error: '' })
    // console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Logging in')
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/dashboard')
      })
      .catch(() => this.setState({ error: 'Invalid Credentials' }))
  }

  render(){
    return (
      <div id="home">
        <h1 id="home-title"></h1>
        <div id="modal-home" className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">

            <div className="section">
              <div className="container">
                <h1 id="login-title">PYFIN</h1>
                <form id="login-form" onSubmit={this.handleSubmit}>
                  <h2 className="title"></h2>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className={`input ${this.state.error ? 'is-danger' : ''}`}
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className={`input ${this.state.error ? 'is-danger' : ''}`}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                      />
                    </div>
                    {this.state.error && <small className="help is-danger">{this.state.error}</small>}
                  </div>
                  <br/>
                  <button type="submit" className="button is-info">Login</button>
                </form>
                <br/>
                <div>
                  <span>Not Registered? <Link to={'/register'}>Create an account</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
