import React, { useContext } from 'react';
import "./Register.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {


    let { createUserEmail, userUpdateProfile, logOut } = useContext(AuthContext)
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")
    let navigate = useNavigate()


    // from handler use data collect
    let handleFromLogin = (event) => {
        setError("")
        setSuccess("")
        event.preventDefault()
        let name = event.target.name.value
        let photo = event.target.photo.value
        let email = event.target.email.value
        let password = event.target.password.value


        // create user 
        createUserEmail(email, password)
            .then(result => {

                let loginUser = result.user
                console.log(loginUser)
                // update user Profile 
                userUpdateProfile(loginUser, name, photo)
                    .then(() => {
                        let saveUser = { names: name, email: loginUser.email }
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                event.target.reset()
                                if (data.insertedId) {
                                    alert("Your Login Complete")
                                    navigate("/")
                                }
                            })

                    })
                    .then(error => {
                        // console.log(error.message)
                    })
            })
            .then(error => {
                // setError(error.message)
            })
    }






    return (
        <div className='AllParentRegister'>

            <div className="ParentRegister md:mx-32">

                <div className="hero">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className="text-center w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>

                        <div className="card  md:w-1/2 max-w-sm ">
                            <form onSubmit={handleFromLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="enter your name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="enter your photoURL" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="enter your email" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="enter your password" className="input input-bordered" />

                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <h2 className='text-red-500'>  {error}  </h2>
                                <h2 className='text-green-500'>  {success}  </h2>

                                <div className="form-control">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <h2 className='text-[#D1A054] font-bold'>Already Haven Account ? <Link to="/login">Login Account</Link></h2>
                                <h2 className='text-center font-bold'>Or sign in with</h2>

                                <div className="anotherLogin text-center">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                    <i class="fa fa-github" aria-hidden="true"></i>

                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;