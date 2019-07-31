import React from 'react'
// import axios from 'axios'
import Navbar from '../common/Navbar'
import WelcomeBack from '../common/WelcomeBack'

// import OutgoingsForm from './components/outgoings/OutgoingsForm'

class OutgoingsEdit extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <main>
        <Navbar />
        <WelcomeBack />
        <div id="outgoings-edit-title">
          <h2 id="outgoings-edit-title">Edit</h2>
        </div>
      </main>

    )
  }
}

export default OutgoingsEdit
