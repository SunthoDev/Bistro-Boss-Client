import React from 'react';
import "./PaymentHistry.css"
import { useContext } from 'react';
import { AuthContext } from '../../../AuthoncationSystem/AuthProvider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const PaymentHistry = () => {

    let [history,setHistory]=useState([])
    let {user}=useContext(AuthContext)

    useEffect(() => {
        fetch(`https://bistro-boss-project-server.vercel.app/paymentHistory?email=${user.email}`)
            .then(res => res.json())
            .then(data => setHistory(data))
    }, [])




    return (
        <div>
           <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6 mt-8">
                <p>------My History------</p>
                <h3>My Payment History</h3>
            </div>


            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-24 rounded-sm">


                <div className="div mx-7 my-8 w-full text-center">

                    <div className="hedInfo flex justify-between ">
                        <h2>Total Payment: {history.length}</h2>
                    </div>

                    <div className="MyData pt-10">
                        <div className="overflow-x-auto">
                            <table className="table ">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th>NUM</th>
                                        <th>EMAIL</th>
                                        <th>CATEGORY</th>
                                        <th>TOTAL PRICE</th>
                                        <th>PAYMENT DATE</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        history.map((details,index) => <tr>
                                            <td className="text-left font-semibold">
                                                {index + 1}
                                            </td>
                                            <td className="text-left font-semibold">
                                                {details.email}
                                            </td>
                                            <td> Food Pizza </td>
                                            <td className="text-right font-semibold">
                                                ${details.price}
                                            </td>
                                            <td className="text-right font-semibold">
                                                ${details.date}
                                            </td>


                                        </tr>)
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

export default PaymentHistry;