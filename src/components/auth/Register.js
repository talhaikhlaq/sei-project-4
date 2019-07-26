import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = {...this.state.data, [e.target.name]: e.target.value}
    const errors = { ...this.state.errors, [e.target.name]: ''}
    this.setState({ data: data, errors: errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
    return (
      <main className="section">
        <section className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Registe</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>
            <button type="submit" className="button is-info">Submit</button>
          </form>
        </section>
      </main>
    )
  }
}

export default Register
