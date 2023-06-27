import React from 'react';
import "./Contact.css"
import { Parallax } from 'react-parallax';
import banner from "../../assets/contact/banner.jpg"
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../AuthoncationSystem/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    <Helmet>
        <title>Bistro Boss || Contact</title>
    </Helmet>

    let {user}=useContext(AuthContext)
    let navigate=useNavigate()

    let handleContact=(event)=>{
        event.preventDefault()
        let name=event.target.name.value
        let email=event.target.email.value
        let phone=event.target.phone.value
        let details=event.target.details.value
        let contact={name,email,phone,details}

        fetch("https://bistro-boss-project-server.vercel.app/addContact",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(contact)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  event.target.reset()
            }
        })




    }

    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={banner}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[650px]">
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 py-28 md:px-64">
                        <div className="max-w-md">

                            <h1 className="mb-5 text-5xl font-bold">CONTACT US</h1>
                            <p className="mb-5">Would you like to try a dish?</p>
                        </div>
                    </div>
                </div>
            </Parallax>


            <div className="mx-4 md:mx-32 mt-14">
                <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                    <p>------Visit us------</p>
                    <h3>Our LOCATION</h3>
                </div>
            </div>

            <div className="mx-4 md:mx-32">
                <div className="div grid md:grid-cols-3 gap-5">

                    <div className="card text-center ">
                        <p className='bg-[#D1A054] text-white text-lg py-2'><i class="fa fa-phone" aria-hidden="true"></i></p>

                        <div className="div py-10 text-center bg-[#F3F3F3] mx-10">
                            <p className='font-bold'>PHONE</p>
                            <p className=''>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="card text-center ">
                        <p className='bg-[#D1A054] text-white text-lg py-2'><i class="fa fa-phone" aria-hidden="true"></i></p>

                        <div className="div py-10 text-center bg-[#F3F3F3] mx-10">
                            <p className='font-bold'>ADDRESS</p>
                            <p className=''>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="card text-center ">
                        <p className='bg-[#D1A054] text-white text-lg py-2'><i class="fa fa-phone" aria-hidden="true"></i></p>

                        <div className="div py-10 text-center bg-[#F3F3F3] mx-10">
                            <p className='font-bold'>WORKING HOURS</p>
                            <p className=''>+38 (012) 34 56 789</p>
                        </div>
                    </div>




                </div>

            </div>

            <div className="mx-4 md:mx-32 mt-14">
                <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                    <p>------Visit us------</p>
                    <h3>Our Contact</h3>
                </div>
            </div>

            <div className="div mx-4 md:mx-32 mt-14 bg-[#F3F3F3] md:px-14 px-8 py-20">
                <form className='contactAll' onSubmit={handleContact}>
                    <div className=" md:flex">
                        <div className="div w-full md:pr-3">
                            <p>Name*</p>
                            <input type="text" value={user&& user?.displayName} required name='name' placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className=" w-full md:pl-3">
                            <p>Email*</p>
                            <input type="email" value={user&& user?.email} required name='email' placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <p>Phone*</p>
                    <input type="number" name='phone' required placeholder="Type here" className="input input-bordered w-full " />
                    <p>Message*</p>
                    
                    <textarea name='details' required className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                    {
                        !user && <h2 className='py-3 font-bold text-sm text-[red]'>Please Login And Remove Disable</h2>
                    }
                    <button disabled={user? false : true} type='submit' className="btn btn-outline btn-success">Success</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;