
import React from 'react';

import { Navigate } from "react-router-dom";




export const  withAuthNavigate = (Component) => {
    let redirectComponent = (props) =>  {
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component {...props} />
    }
    return redirectComponent
}