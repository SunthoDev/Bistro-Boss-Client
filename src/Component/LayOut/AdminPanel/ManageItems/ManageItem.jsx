import React from 'react';
import "./ManageItem.css"
import { useQuery } from '@tanstack/react-query';
import ManageItemCard from './ManageItemCard/ManageItemCard';

const ManageItem = () => {

    // all menu get admin tenStack Query

    let { refetch, data: items = [] } = useQuery(["menus"], async () => {
        let res = await fetch("http://localhost:5000/menus")
        return res.json()
    })

    // menu deleted admin function 

    let handleDeleteMenu=(id)=>{

        fetch(`http://localhost:5000/menus/${id}`,{
            method:"DELETE",
        })
        .then(res=> res.json())
        .then(data=> {
            refetch()
            if(data.deletedCount > 0){
                alert("Your Menu Is Deleted Confirm")
            }

        })

    } 




    return (
        <div classNam="">
            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6 mt-8">
                <p>------MANAGE USER------</p>
                <h3>MANAGE ALL USERS</h3>
            </div>

            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-24 rounded-sm">


                <div className="div mx-7 my-8 w-full text-left">

                    <div className="hedInfo">
                        <h2>Total Users: {items.length}</h2>
                    </div>

                    <div className="MyData pt-10 ">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th>NUM</th>
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>UPDATE</th>
                                        <th>DELETED</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>

                                    {
                                        items.map((item,index)=> <ManageItemCard key={item._id} allItems={item} index={index} handleDeleteMenu={handleDeleteMenu}></ManageItemCard>)
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

export default ManageItem;