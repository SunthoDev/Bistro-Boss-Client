import React from 'react';
import "./UserHOme.css"
import { useContext } from 'react';
import { AuthContext } from '../../../AuthoncationSystem/AuthProvider/AuthProvider';
import { useEffect } from 'react';
import { useState } from 'react';

const UserHome = () => {

    let { user } = useContext(AuthContext)
    let [status,setStatus]=useState([])

    useEffect(()=>{
        fetch(`https://bistro-boss-project-server.vercel.app/user-status?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> setStatus(data))
    },[])


    return (
        <div className='md:mx-8 mx-4'>
            <h2 className='mt-10 font-semibold text-xl'>Hi, Welcome Back!  {user.displayName}</h2>

            <div className=" grid md:grid-cols-3 gap-5 mt-5">

                <div className="stat bg-white rounded-lg">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-value text-primary">{status.product}</div>
                    <div className="stat-desc">Menu</div>
                </div>

                <div className="stat bg-white rounded-lg">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-value text-primary">60</div>
                    <div className="stat-desc">Shop</div>
                </div>

                <div className="stat bg-white rounded-lg">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-value text-primary">20</div>
                    <div className="stat-desc">Contact</div>
                </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

                <div className="leftA">

                    <div className="img">
                        <img src={user.photoURL} alt="" />
                    </div>
                    <h2 className="name">{user.displayName}</h2>

                </div>

                <div className="rightA">
                    <div className="info">
                        <h2>Your Activities</h2>
                        <p className="text-[#0088FE]"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Order : {status?.cart?.length}</p>
                        <p className="text-[#00C4A1]"><i class="fa fa-star" aria-hidden="true"></i>Reviews : {status?.review?.length}</p>
                        <p className="text-[#FFBB28]"><i class="fa fa-calendar" aria-hidden="true"></i>Bookings : 3</p>
                        <p className="text-[#FF8042]"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>Payment : {status?.payment?.length}</p>
                    </div>

                </div>

            </div>















        </div>
    );
};

export default UserHome;