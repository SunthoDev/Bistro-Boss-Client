import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sharied/Footer/Footer';
import Header from '../Sharied/Headers/Header';

const Home = () => {
    let location=useLocation()
    let noHeaderFooterLogin=location.pathname.includes("login")
    let noHeaderFooterSingUp=location.pathname.includes("register")
    return (
        <div>
           {noHeaderFooterLogin || noHeaderFooterSingUp ||  <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooterLogin || noHeaderFooterSingUp || <Footer></Footer>}
            
        </div>
    );
};

export default Home;