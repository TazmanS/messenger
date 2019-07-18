import React from 'react'
import './Home.css'
import LoginHeader from '../LoginHeader/LoginHeader'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return(
        <div className="container">
            <LoginHeader></LoginHeader>
            <div className="row Home align-content-start">
                <h3 className="col s12">Добро пожаловать</h3>
                <p className='col s12'>
                    <NavLink to="/messenger/login">Войдите </NavLink>
                     или 
                    <NavLink to="/messenger/register"> создайте нового пользователя</NavLink> 
                </p>
            </div>
        </div>
    )
}

export default Home