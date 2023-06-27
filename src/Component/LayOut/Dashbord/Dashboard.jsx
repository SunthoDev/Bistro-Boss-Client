import React from 'react';
import "./Dashboard.css"
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaShoppingCart, FaCalendarAlt, FaHome,FaUtensils,FaUsers, FaBook} from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const Dashboard = () => {

    let cart = useCart()
    let carts = (cart[0])

    //TODO : lode data from the server to have dynamick is admin based on data
    // let isAdmin = true

    let admins =useAdmin()
    let admin=admins[0].admin



    return (
        <div className="drawer lg:drawer-open  bg-[#F6F6F6]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col ">

                {/* jahatu page content nicha thi oupore outlate deta hova  */}

                <Outlet></Outlet>

                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className=" drawer-overlay"></label>

                <ul className="menuParent menu px-6 pt-10 w-80 h-full bg-[#D1A054] text-base-content">

                    <h2 className='Logo'>BISTRO BOSS <br /> <span>Restaurant</span> </h2>
                    {/* Sidebar content here */}

                    {/* condition admin hola admin data dhakava user hola user data dhakava  */}
                    {/*======================================================================*/}

                    {
                        admin ? //Admin panel

                            <div className="ADMIN">
                                <li> <NavLink to="/dashboard/adminHome"><span><FaHome></FaHome></span>Admin Home</NavLink></li>
                                <li> <NavLink to="/dashboard/addItems"><span><FaUtensils></FaUtensils></span> add items</NavLink></li>
                                <li> <NavLink to="/dashboard/manageItems"><span><FaWallet></FaWallet></span>manage items</NavLink></li>
                                <li> <NavLink to="/dashboard/manageBooking"><span><FaBook></FaBook></span>Manage bookings</NavLink></li>
                                <li> <NavLink to="/dashboard/allUser"><span><FaUsers></FaUsers></span>All Users</NavLink></li>
                            </div>

                        :  //user panel

                            <div className="USER">
                                <li> <NavLink to="/dashboard/userHome"><span><FaHome></FaHome></span> User Home</NavLink></li>
                                <li> <NavLink to="/dashboard/myPayment"><span><FaCalendarAlt></FaCalendarAlt></span>Reservation Payment</NavLink></li>

                                <li> <NavLink to="/dashboard/paymentHistory"><span><FaWallet></FaWallet></span> payment history</NavLink></li>

                                <li>
                                    <NavLink to="/dashboard/myCart"> <span><FaShoppingCart></FaShoppingCart></span> MyCart<span className="notifaction badge badge-secondary">+{carts.length}</span>   </NavLink>

                                </li>
                                <li> <NavLink to="/dashboard/addReview"><span><i class="fa fa-comments" aria-hidden="true"></i></span> add review</NavLink></li>
                                <li> <NavLink to="/dashboard/myBooking"><span><i class="fa fa-calendar" aria-hidden="true"></i></span> my booking</NavLink></li>

                            </div>
                    }

                    {/*==========condition route============*/}

                    <div className="divider  text-white"></div>

                    <li> <NavLink to="/"><span><FaHome></FaHome></span> Home</NavLink></li>
                    <li> <NavLink to="/ourMenu"><span><i class="fa fa-bars" aria-hidden="true"></i></span> Menu</NavLink></li>
                    <li> <NavLink to="/ourShop/pizza"><span><i class="fa fa-shopping-bag" aria-hidden="true"></i></span> Shop</NavLink></li>
                    <li> <NavLink to="/contact"><span><i class="fa fa-phone" aria-hidden="true"></i></span> Contact</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;