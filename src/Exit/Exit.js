import React from 'react'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'
import {withRouter} from 'react-router-dom'

const Exit = (props) => {
    return(
        <button
            className="waves-effect waves-light btn-small"
            onClick={()=>{
                props.history.push('/messenger/')
                props.userExit()  
            }}
        >Exit</button>
    )
}

function mapDispatchToProps(dispatch){
    return{
        userExit: () => dispatch( userExit() )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Exit)) 