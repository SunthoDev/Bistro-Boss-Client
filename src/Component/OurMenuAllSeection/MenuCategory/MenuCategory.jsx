import React from 'react';
import "./MenuCategory.css"
import OuerMenuDetails from '../OurMenuDetails/OuerMenuDetails';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title}) => {

    return (
        <div className="mb-14">

            <div className="offered grid md:grid-cols-2 gap-5 my-14">
                {
                    items.map(of=> <OuerMenuDetails key={of._id} item={of}></OuerMenuDetails>)
                }
            </div>

            <Link  to={`/ourShop/${title}`} className='favoriteFood mx-auto'>ORDER YOUR FAVOURITE FOOD</Link>

        </div>
    );
};

export default MenuCategory;