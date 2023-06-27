import React, { useContext, useEffect, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImage from "../../../assets/others/authentication1.png"
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    let { loginUser, googleSingInUser } = useContext(AuthContext)
    let [disable, setDisable] = useState(true)
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/"


    // capture use 
    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    // from handler use data collect
    let handleFromLogin = (event) => {
        event.preventDefault()
        setError("")
        setSuccess("")
        let email = event.target.email.value
        let password = event.target.password.value

        // login user
        loginUser(email, password)
            .then(result => {
                let userLogin = result.user
                setSuccess("User Login Successfully")
                event.target.reset()
                navigate("/")

            })
            .then(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    // Captcha use function 
    let handleValidateCaptcha = (event) => {

        let captchaValue = event.target.value
        if (validateCaptcha(captchaValue) == true) {
            setDisable(false)
            setSuccess("Success Your Captcha")
        }
        return setError("not a validet Captcha")
    }


// google login,, name & email save database..google deya same user bar bar login hote pare ...thi varify kore user DB tha add korvo ..google deya login user are info jode aga DB tha add thaka tahola add korvo nah,, are nah hola add korvo...

    let handleGoogleLogin = () => {
        googleSingInUser()
            .then(result => {

                let loggedUser = result.user
                let saveUser={name : loggedUser.displayName , email:loggedUser.email}
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.insertedId) {
                            alert("Your Google Complete")
                           
                        }
                    })

                    navigate("/")
            })
            .then(error => {
                // console.log(error.message)
            })
    }



    return (
        <div className='AllParentLogin'>

            <div className="ParentLogin md:mx-32">

                <div className="hero">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className="text-center w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>

                        <div className="card  md:w-1/2 max-w-sm ">
                            <form onSubmit={handleFromLogin} className="card-body">
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

                                <h2 className='Captcha'><LoadCanvasTemplate /></h2>

                                <div className="form-control">
                                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type your captcha" className="input input-bordered" />

                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <h2 className='text-red-500'>  {error}  </h2>
                                <h2 className='text-green-500'>  {success}  </h2>

                                <div className="form-control">
                                    <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <h2 className='text-[#D1A054] font-bold'>New here? <Link to="/register">Create a New Account</Link></h2>
                                <h2 className='text-center font-bold'>Or sign in with</h2>

                                <div className="anotherLogin text-center">
                                    <button>

                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </button>
                                    <button onClick={handleGoogleLogin}>
                                        <i class="fa fa-google" aria-hidden="true"></i>

                                    </button>
                                    <button>
                                        <i class="fa fa-github" aria-hidden="true"></i>

                                    </button>

                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;