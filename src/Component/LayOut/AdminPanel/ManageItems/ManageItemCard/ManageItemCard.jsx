import React from 'react';
import "./ManageItemCard.css"
import { FaPen, FaRegTrashAlt } from 'react-icons/fa';

const ManageItemCard = ({ allItems, handleDeleteMenu, index }) => {
    const { name, image, price, _id } = allItems
    
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>

            <td>
                <button className="update"><FaPen></FaPen></button>
            </td>

            <td>
                <button onClick={()=>handleDeleteMenu(_id)} className="deleteBtn"><FaRegTrashAlt></FaRegTrashAlt></button>
            </td>

        </tr>
    );
};

export default ManageItemCard;