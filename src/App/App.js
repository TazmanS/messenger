import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import UserPage from '../UserPage/UserPage'
import {connect} from 'react-redux'
import {LoginUser} from '../actions/userAction'

class App extends React.Component {
  
  componentDidMount(){
    if(localStorage.getItem('email')){
      let userLogin = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        returnSecureToken: true 
      }
      this.props.LoginUser(userLogin)
    }
  }
  render(){
    const body = 
      localStorage.getItem('email')
      ? <React.Fragment>
        <Switch>
          <Route path="/messenger" component={UserPage} />
          <Redirect to={'/messenger/'} />
        </Switch>
      </React.Fragment>
      : <React.Fragment>
          <Switch>
            <Route path="/messenger" exact component={Home} />
            <Route path="/messenger/login" extends component={Login} />
            <Route path="/messenger/register" component={Register} />
            <Redirect to={'/messenger/'} />
          </Switch>
      </React.Fragment>
    return (
      <Layout>
        {body}
      </Layout>
      
    )  
  }
  
}

function mapStateToProps(state){
  return{
    userIndicator: state.user.userIndicator
  }
}

function mapDispatchToProps(dispatch){
    return{
      LoginUser: (userLogin) => dispatch( LoginUser(userLogin) )  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
