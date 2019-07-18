import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

const Layout = (props) => {
    return(
        <Router>
            {props.children}
        </Router>
    )
}

export default Layout