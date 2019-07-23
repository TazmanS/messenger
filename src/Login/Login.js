import React,{useState} from 'react'
import LoginHeader from '../LoginHeader/LoginHeader';
import {connect} from 'react-redux'
import {LoginUser} from '../actions/userAction'
import './Login.css'

const Register = (props) => {

    let [userEmail, userEmailHadnler] = useState("")
    let [userPassword, userPasswordHandler] = useState("")
    
    return (
<div className="container">
    <LoginHeader></LoginHeader>
    <div className="row Login">
        <div className="col s8 offset-s2">
            <h3>Вход в систему</h3>
            <form>
                <div className="input-field col s12">
                    <input 
                        onChange={ (event) =>{
                            userEmailHadnler(userEmail = event.target.value)
                        }} value={userEmail}
                        id="email" type="email" className="validate" required/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-field col s12">
                    <input id="password" 
                        minLength="6"
                        type="text" className="validate" required
                        onChange={(event) => {
                            userPasswordHandler(userPassword = event.target.value)
                        }}
                        value={userPassword}
                    />
                    <label htmlFor="password">Пароль(не меньше 6 символов)</label>
                </div>
                <div className="input-field col s8">
                    <button type="submit" className="btn btn-primary"
                        onClick={(event) => {
                            event.preventDefault()
                            const user = {
                                email: userEmail,
                                password: userPassword,
                                returnSecureToken: true
                            }
                            props.LoginUser(user)
                            userEmailHadnler(userEmail = '')
                            userPasswordHandler(userPassword = '')
                        }}
                        >Войти
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
        LoginUser: (userLogin) => dispatch( LoginUser(userLogin) )
    }
}

export default connect(null, mapDispatchToProps)(Register)