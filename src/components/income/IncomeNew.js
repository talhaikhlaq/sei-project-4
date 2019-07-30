import React from 'react'
import axios from 'axios'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'
// import IncomeForm from './IncomeForm'
import IncomeCalc from './IncomeCalc'
import Auth from '../../lib/Auth'

class IncomeNew extends React.Component {
  constructor() {
    super()

    this.state = { data: null }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value } }) {
    const salary = { ...this.state.data.salary, [name]: value }
    const data = { ...this.state.data, salary}
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.put('/api/salary', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
  }

  render() {
    const { data } = this.state
    if (!data) return null
    // console.log(this.state)
    return(
      <div>
        <Navbar />
        <WelcomeBack />
        <div id="incomenew-overview" className="section">
          <h2 id="incomenew-overview" className="subtitle">Income Calculator</h2>
          <IncomeCalc
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }

}
export default IncomeNew
