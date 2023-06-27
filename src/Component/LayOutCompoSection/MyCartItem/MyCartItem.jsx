import React from 'react';
import "./MyCartItem.css"
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const MyCartItem = ({ infos, index }) => {

    let { name, price, image, _id } = infos

    let { refetch } = useCart()

    let handleDeleteItem = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://bistro-boss-project-server.vercel.app/addCard/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch()

                    })
            }
        })
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="img" />
                        </div>
                    </div>
                </div>
            </td>

            <td className='font-semibold'>
                {name}
            </td>
            <td className='font-semibold'>
                $ {price}
            </td>
            <th>
                <button onClick={() => handleDeleteItem(_id)} className="deleteBtn"><FaRegTrashAlt></FaRegTrashAlt></button>
            </th>
        </tr>
    );
};

export default MyCartItem;