import React from 'react'
import {NavLink} from 'react-router-dom'
import './LoginHeader.css'

const LoginHeader = () => {
    return(
        <div className='row LoginHeader'>
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/messenger" className="brand-logo">Messenger</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/messenger/login">Войти</NavLink></li>
                        <li><NavLink to="/messenger/register">Регистрация</NavLink></li>
                    </ul>
                </div>
            </nav>
        

        </div>
    )
}

export default LoginHeader