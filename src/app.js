import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/common/Dashboard'
import IncomeShow from './components/income/IncomeShow'
import OutgoingsShow from './components/outgoings/OutgoingsShow'
import SavingsShow from './components/savings/SavingsShow'
import IncomeNew from './components/income/IncomeNew'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/income/new" component={IncomeNew} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/income" component={IncomeShow} />
            <Route exact path="/outgoings" component={OutgoingsShow} />
            <Route exact path="/savings" component={SavingsShow} />
            <Route exact path="/login" component={Home} />
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
