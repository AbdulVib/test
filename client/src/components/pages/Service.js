import React, { useContext } from 'react'
import { withRouter } from "react-router";

import AppContext from '../store/context/context'

 function Service(props) {

    const { state } = useContext(AppContext)

    console.log(state, ' state')
    console.log(props, ' propss')
    return (
        <div>
            service
            service
            service
            service
            service
            service
            service
            service
            service
            service
            service
            service
            service
            service
        </div>
    )
}

export default withRouter(Service)