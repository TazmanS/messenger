import React, {useState} from 'react'
import {connect} from 'react-redux'
import {userNewMess} from '../actions/userAction'
import './Chat.css'

const Chat = (props) => {

    let [newMess, newMessHandler] = useState('')

    const chatMess = props.chat.map((one, index) => {
        return(
            <p key={index} className='collection-item'>
                {one.name} : {one.text} 
            </p>
        )
    })

    return(
        <div className='container Chat'>
            <div className='row ChatBody'>
                <div className="collection col s12 l12">
                    {chatMess}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="new_name" type="text" className="validate" 
                        value={newMess} 
                        onChange={(event)=>newMessHandler(newMess = event.target.value)}
                    />
                    <label htmlFor="new_name">Сообщение</label>
                </div>
                <button 
                    className='waves-effect waves-small btn'
                    onClick={()=>{
                        props.userNewMess(newMess)
                        newMessHandler(newMess = '')
                    }}
                >Добавить сообщение</button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        chat: state.user.chat
    }
}

function mapDispatchToProps(dispatch){
    return{
        userNewMess: (newMess) => dispatch( userNewMess(newMess) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)