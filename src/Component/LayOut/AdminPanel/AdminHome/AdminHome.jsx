import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthoncationSystem/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const { user } = useContext(AuthContext)

    let { refetch, data: status = {} } = useQuery(["admin-status"], async () => {
        let res = await fetch("http://localhost:5000/admin-status")
        return res.json()
    })
    let rev=status?.revenue?.toFixed(2)

    return (
        <div className='md:mx-8 mx-4'>
            <h2 className='mt-5 font-semibold text-xl'>Hi, Welcome Back!  {user.displayName}</h2>

                <div className=" grid md:grid-cols-4 gap-5 mt-5">

                    <div className="stat bg-white rounded-lg">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-value text-primary">{rev}</div>
                        <div className="stat-desc">Revenue</div>
                    </div>
                    
                    <div className="stat bg-white rounded-lg">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-value text-primary">{status.user}</div>
                        <div className="stat-desc">Customers</div>
                    </div>

                    <div className="stat bg-white rounded-lg">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-value text-primary">{status.product}</div>
                        <div className="stat-desc">Products</div>
                    </div>
                    <div className="stat bg-white rounded-lg">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-value text-primary">{status.orders}</div>
                        <div className="stat-desc">Orders</div>
                    </div>

                </div>












                


        </div>
    );
};

export default AdminHome;