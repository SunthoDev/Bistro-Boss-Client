import React from 'react';
import "./MyCart.css"
import MyCartItem from '../../LayOutCompoSection/MyCartItem/MyCartItem';
import useCart from '../../../Hooks/useCart';
import { Link } from 'react-router-dom';

    // TODO

const MyCart = () => {
    let cart = useCart()
    let carts = (cart[0])
    let totalPrice = carts && carts.reduce((sum, items) => items.price + sum, 0)

    return (
        <div classNam="">
            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6 mt-8">
                <p>------My Cart------</p>
                <h3>WANNA ADD MORE?</h3>
            </div>

            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-24 rounded-sm">


                <div className="div mx-7 my-8 w-full text-center">

                    <div className="hedInfo flex justify-between ">
                        <h2>Total orders: {carts.length}</h2>
                        <h3>total price: $ {totalPrice.toFixed(2)}</h3>
                        {
                            carts.length === 0 ?
                        <button><Link to="/ourShop/pizza">Our Shop Now</Link></button>
                         : 
                        <button><Link to="/dashboard/myPayment">Pay</Link></button>
                        }
                    </div>

                    <div className="MyData pt-10">
                        <div className="overflow-x-auto">
                            <table className="table ">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th>NUM</th>
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        carts.map((info, index) => <MyCartItem index={index} infos={info} key={info._id}></MyCartItem>)
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );

};

export default MyCart;