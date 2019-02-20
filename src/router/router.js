import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import DefaultPage from '@pages/DefaultPage/DefaultPage'
import HomePage from '@pages/HomePage/HomePage'
import EditPage from '@pages/EditPage/EditPage'

class Root extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/edit' component={EditPage}/>
        <Route component={DefaultPage}/>
      </Switch>
    )
  }
}

export default withRouter(Root)