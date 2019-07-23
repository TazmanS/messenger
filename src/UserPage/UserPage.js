import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Exit from '../Exit/Exit'
import {connect} from 'react-redux'
import Options from '../Options/Options'
import Chat from '../Chat/Chat'
import './UserPage.css'
import {getChat} from '../actions/userAction'

const UserPage = (props) => {
    return(
        <div className='container UserPage'>
            <div className='row'>
                <div className='col s12 l4'>
                    <h3>{props.name}</h3>
                    <div className="collection">
                        <Link to="/messenger/chat" className="collection-item"
                            onClick={() => { props.getChat() }}
                        >Чат</Link>
                        <Link to="/messenger/options" className="collection-item">Настройка профиля</Link>
                    </div>
                    <Exit />
                </div>
                <div className='col s12 l8'>
                    <Switch>
                        <Route path="/messenger/chat" component={Chat} />
                        <Route path="/messenger/options" component={Options} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        name: state.user.name
    }
}

function mapDispatchToProps(dispatch){
    return{
        getChat: () => dispatch( getChat() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)