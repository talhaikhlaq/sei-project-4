import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/financials/Dashboard'
import Income from './components/financials/Income'
import Outgoings from './components/financials/Outgoings'
import Savings from './components/financials/Savings'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/income" component={Income} />
            <Route path="/outgoings" component={Outgoings} />
            <Route path="/savings" component={Savings} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
