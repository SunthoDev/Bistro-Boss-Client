import React, { useContext } from 'react';
import "./ShopCard.css"
import { AuthContext } from '../../AuthoncationSystem/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const ShopCard = ({ item }) => {


    let { cart , refetch } =useCart()

    const { name, image, price, recipe, _id } = item

    let { user } = useContext(AuthContext)
    let Navigate = useNavigate()
    let location = useLocation()


    // add to cart data database 

    let handleAddToCart = (id) => {

        
        if (user && user.email) {
            
            let cartAddItem = { itemId: id, name, image, price, email: user.email }
            
            fetch("https://bistro-boss-project-server.vercel.app/addCard", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartAddItem)
            })
            .then(res => res.json())

            .then(data => {
                if (data.insertedId) {
                    alert("YOUR ITEM IS ADD")
                }
                refetch()
            })
        }

        else {

            Swal.fire({
                title: 'Please Login Your Account ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {

                    Navigate("/login", { state: { from: location } })

                    Swal.fire(
                        'Success!',
                        'Your Login Page',
                        'success'
                    )
                }
            })
        }
    }

    return (

        <div className='fdf'>
            <div className="card w-full bg-[#F3F3F3] shadow-xl relative">
                <img src={image} alt="Shoes" className=" h-[300px]" />
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="font-semibold absolute top-4 right-4">Price :{price}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(_id)} className="AddCaryButton">add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShopCard;