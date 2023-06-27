import React from 'react';
import "./AddReview.css"
import { Rating } from '@smastrom/react-rating';
import { FaStar } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthoncationSystem/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {

    const {user}=useContext(AuthContext)
    let navigate=useNavigate()


    let handleReview=(event)=>{
        event.preventDefault()

        let email=event.target.email.value
        let liked=event.target.liked.value
        let suggestion=event.target.suggestion.value
        let details=event.target.details.value
        let review={email,liked,suggestion,details}

        fetch("https://bistro-boss-project-server.vercel.app/addReview",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  event.target.reset()
                  navigate("/dashboard/userHome")
            }
        })

    }

    return (
        <div classNam="">
            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6 mt-8">
                <p>------My Review------</p>
                <h3>This My Review?</h3>
            </div>

            <div className="myItemsAll bg-white  my-10 mx-4 md:mx-24 rounded-sm">

                <div className="head text-center pt-8">
                    <h2 className="font-semibold text-lg">Rate Us!</h2>
                    <Rating className='mx-auto mt-5'
                        style={{ maxWidth: 180 }}
                        value={<FaStar></FaStar>}
                        readOnly
                    />
                </div>

                <form className='md:px-10 pb-5 px-4 FromAll' onSubmit={handleReview}>
                    <h3>User Email</h3>

                    <input type="text" placeholder="Type here" value={user?.email}readonly name='email' required className="input input-bordered input-accent w-full " />

                    <h3>Which recipe you liked most?</h3>
                    <input type="text" required placeholder="Type here" name='liked' className="input input-bordered input-accent w-full " />


                    <h3>Do you have any suggestion for us?</h3>
                    <input type="text" required placeholder="Type here" name='suggestion' className="input input-bordered input-accent w-full " />
                    <h3>Kindly express your care in a short way.</h3>
                    <textarea  required className="textarea w-full textarea-accent" name='details' placeholder="Bio"></textarea>
                    <button  type="submit" className="btn btn-outline btn-success">Send Review</button>

                </form>


            </div>


        </div>
    );
};
// BistroBoss-Client-Site
export default AddReview;