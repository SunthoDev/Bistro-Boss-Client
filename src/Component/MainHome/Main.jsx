import React from 'react';
import Banner from '../HomeAllSection/Banner/Banner';
import OrderOnline from '../HomeAllSection/OrderOnline/OrderOnline';
import ChefServices from '../HomeAllSection/ChefServices/ChefServices';
import FromOurMenu from '../HomeAllSection/FromOurMenu/FromOurMenu';
import ChefRecommends from '../HomeAllSection/ChefRecomend/ChefRecommends';
import FetcherMenu from '../HomeAllSection/FetcherMenu/FetcherMenu';
import Testimonials from '../HomeAllSection/testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>

            <div className="mx-4 md:mx-32">
                <OrderOnline></OrderOnline>
                <ChefServices></ChefServices>
                <FromOurMenu></FromOurMenu>
                <ChefRecommends></ChefRecommends>
            </div>

            <FetcherMenu></FetcherMenu>

            <div className='mx-4 md:mx-32'>
                <Testimonials></Testimonials>

            </div>

        </div>
    );
};

export default Main;