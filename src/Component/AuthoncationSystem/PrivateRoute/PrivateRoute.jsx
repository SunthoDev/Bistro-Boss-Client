import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    let location=useLocation()
    let {user,loading}=useContext(AuthContext)

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate> 

};

export default PrivateRoute;




