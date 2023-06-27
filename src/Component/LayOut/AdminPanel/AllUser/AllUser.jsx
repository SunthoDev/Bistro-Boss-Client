import React from 'react';
import "./AllUser.css"
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt, FaUsers } from 'react-icons/fa';

const AllUser = () => {

    // user data all find use tenStack query 

    let { refetch, data: users = [] } = useQuery(["users"], async () => {
        let res = await fetch("https://bistro-boss-project-server.vercel.app/users",{
            headers:{
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        return res.json()
    })



    // user update admin
    let handleMakeAdmin=(user)=>{
        fetch(`https://bistro-boss-project-server.vercel.app/users/admin/${user._id}`,{
            method:"PATCH",
        })
        .then(res=> res.json())
        .then(data=>{
            refetch()
            if(data.modifiedCount > 0){
                alert("YOur Admin Is Complete")
            }
        })
    }

    // user delete admin
    const handleDeleteUser=(user)=>{
        fetch(`https://bistro-boss-project-server.vercel.app/usersDelete/${user._id}`,{
            method:"DELETE",
        })
        .then(res=> res.json())
        .then(data=>{
            refetch()
            if(data.deletedCount){
                alert("User Delete is Successfully")
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
                        <h2>Total Users: {users.length}</h2>
                    </div>

                    <div className="MyData pt-10 ">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th>NUM</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th></th>
                                        <th>ACTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        users.map((us, index) =><tr key={us._id}>
                                            <th>{index + 1}</th>
                                            <th>{us.name}</th>
                                            <th>{us.email}</th>
                                            <th></th>
                                            <th>
                                                {
                                                    us.role == "admin" ? "ADMIN" :
                                                    <button onClick={()=>handleMakeAdmin(us)} className="AdminBtn"><FaUsers></FaUsers></button> 
                                                }
                                            </th>
                                            <th>
                                                <button onClick={()=>handleDeleteUser(us)} className="deleteBtn"><FaRegTrashAlt></FaRegTrashAlt></button>
                                            </th>

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

export default AllUser;