import React, {useState} from 'react'
import {connect} from 'react-redux'
import {userNewName} from '../actions/userAction'

const Options = (props) => {

    let [newName, userNewNameHandler] = useState('')

    return(
        <div className='container'>
            <h3>Настройка имени</h3>
            <div className="form-group row">
                <div className="input-field col s12 l10">
                    <input id="name" type="text" className="validate"
                        onChange={(event) => userNewNameHandler(newName = event.target.value  ) }
                        value={newName}
                    />
                    <label htmlFor="name">Новое имя</label>
                    <button
                        className="btn btn-small"
                        onClick={() => {
                            props.userNewName(newName) 
                            userNewNameHandler(newName = '')
                        }}
                >Изменить</button>
                </div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        userNewName: (newName) => dispatch( userNewName(newName) )
    }
}

export default connect(null, mapDispatchToProps)(Options)