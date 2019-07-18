import React , {useState} from 'react'
import LoginHeader from '../LoginHeader/LoginHeader';
import {connect} from 'react-redux'
import {RegisterNewUser} from '../actions/userAction'
import './Register.css'

const Register = (props) => {

    let [userEmail, userEmailHadnler] = useState("")
    let [userPassword, userPasswordHandler] = useState("")
    
    return (
<div className="container">
    <LoginHeader></LoginHeader>
    <div className="row Register">
        <div className="col s8 offset-s2">
            <h3>Регистрация</h3>
            <form>
                <div className="input-field col s12">
                    <input 
                        onChange={ (event) =>{
                            userEmailHadnler(userEmail = event.target.value)
                        }} 
                        value={userEmail}
                        id="name" type="email" className="validate" required
                    />
                    <label htmlFor="name">Email</label>
                </div>

                <div className="input-field col s12">
                    <input id="password" type="text" className="validate" 
                        minLength="6"
                        onChange={(event) => {
                            userPasswordHandler(userPassword = event.target.value)
                        }}
                        value={userPassword}
                    />
                    <label htmlFor="password">Пароль(не меньше 6 символов)</label>
                </div>
                <div className="input-field col s12">
                    <button type="submit" className="btn btn-primary"
                        onClick={(event) => {
                            event.preventDefault()
                            const user = {
                                email: userEmail,
                                password: userPassword,
                                returnSecureToken: true
                            }
                            props.RegisterNewUser(user)
                            userEmailHadnler(userEmail = '')
                            userPasswordHandler(userPassword = '')
                        }}
                        >Создать
                    </button>    
                </div>
            </form>
        </div>
    </div>
</div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        RegisterNewUser: (user) => dispatch( RegisterNewUser(user) )
    }
}

export default connect(null, mapDispatchToProps)(Register)