import React from 'react'
// import axios from 'axios'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'

// import OutgoingsForm from './components/outgoings/OutgoingsForm'

class OutgoingsForm extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <main>
        <Navbar />
        <WelcomeBack />
        <div id="outgoings-form-title">
          <h2 id="outgoings-form-title">Outgoings Form</h2>
        </div>
      </main>

    )
  }
}

export default OutgoingsForm
