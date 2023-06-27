import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/AuthoncationSystem/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {

    
    let location=useLocation()
    let {user,loading}=useContext(AuthContext)

    let admins=useAdmin()
    let admin=admins[0].admin
    let AdminLoading=admins[2].isAdminLoading


    if (loading || AdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && admin) {
        return children
    }
    return <Navigate to="/" state={{from:location}}></Navigate> 


};

export default AdminRoute;