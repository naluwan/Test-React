import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { itemStore } from './model/store.js'
import { OpenContext } from './context/ControlContext.js'

import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import MenuPage from './page/MenuPage'
import FormPage from './page/FormPage'

import './styles/main.scss'

const navStyle = {
  marginBottom: '10px',
  textAlign: 'center',
}

const Layout = (props) => {
  return (
    <>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/form" style={{ marginLeft: '20px' }}>
          Form
        </Link>
      </nav>
      {props.children}
    </>
  )
}

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact={true} path="/" component={MenuPage} />
          <Route path="/form" component={FormPage} />
        </Layout>
      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(
  <Provider store={itemStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
