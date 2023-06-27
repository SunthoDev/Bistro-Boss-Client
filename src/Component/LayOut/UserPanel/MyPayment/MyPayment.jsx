import React from 'react';
import "./MyPayment.css"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';
import useCart from '../../../../Hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const MyPayment = () => {

    let cart = useCart()
    let carts = (cart[0])
    let totalPrice = carts?.reduce((sum, items) => items.price + sum, 0)
    let price=parseFloat(totalPrice.toFixed(2))


    return (
        <div classNam="">
            <div className="title px-4 md:px-0 w-full md:w-2/4 mx-auto mb-6 mt-8">
                <p>------My Payment------</p>
                <h3>MY PAYMENT METHOD</h3>
            </div>

            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-24 rounded-sm">
                <div className="div mx-7 my-8 w-full text-center">


                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nesciunt?</p>


                    <Elements stripe={stripePromise}>

                        <CheckOutFrom price={price} carts={carts}></CheckOutFrom>

                    </Elements>


                </div>
            </div>
        </div>
    );
};

export default MyPayment;