import React, { useContext } from 'react';
import "./Header.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthoncationSystem/AuthProvider/AuthProvider';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const Header = () => {
    let { user, logOut } = useContext(AuthContext)
    let navigate = useNavigate()

    let admins = useAdmin()
    let admin = admins[0].admin

    let cart = useCart()
    let xx = (cart[0])

    let navOption = <div className='navbar flex flex-wrap md:flex-nowrap'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ourMenu">Our Menu</Link></li>
        <li><Link to="/ourShop/pizza">Our Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>

            {
                admin ?
                    <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
                    :
                    <li><Link to="/dashboard/userHome">Dashboard</Link></li>
            }

    </div>


    let handleLogOut = () => {
        logOut()
            .then(data => { })
            .then(error => { })
    }


    return (
        <div>
            <div className="navbar fixed z-30 bg-opacity-20 bg-black px-0 md:px-10 ">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <i className="text-white fa fa-bars" aria-hidden="true"></i>
                        </label>
                        <ul tabindex="0" className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-black text-left text-white rounded-box ">

                            {navOption}

                        </ul>
                    </div>

                    <a className="logo"> <span className='one'>BISTRO BOSS</span> <br /> <span className='tow'>Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">

                        {navOption}

                    </ul>

                </div>
                <div className="navbar-end">
                    {/* dashboard */}

                    {
                        !admin && 
                            <Link to="/dashboard/userHome" className=" mr-4 md:mr-8">

                                <div className="shopIcons icon relative ">
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    <h2 className="notifaction badge badge-secondary  absolute">+{xx?.length || 0}</h2>
                                </div>

                            </Link>

                    }

                    {
                        user ? <button onClick={handleLogOut} className='text-white font-bold text-base uppercase pr-4'>Logout</button> :

                            <Link className='text-white font-bold text-base uppercase pr-4' to="/login">Login</Link>
                    }

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                            user && <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        }

                    </label>

                </div>
            </div>
        </div>
    );
};

export default Header;