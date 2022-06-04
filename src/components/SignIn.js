import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { validate } from '../helpers/Validate';
import { notify } from "../helpers/Toast"
import styles from './Styles.css'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const SignIn = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        isAccepted: false,

    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You loged up successfully", "success")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                email: true,
                password: true,
                isAccepted: true,
            })
        }
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler} className="formContainer">
                <h2 className="header">Sign In</h2>
                <p>A good sentence here</p>
                <div className="formField">
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? "uncompleted" : "formInput"}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className="formField">
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? "uncompleted" : "formInput"}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div id='signinformFielld' className="formField">
                    <div className="checkBoxContainer">
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                        <label>remember me</label>
                    </div>
                    {/* {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>} */}
                    <Link to="/register">Forget Password?</Link>
                </div>
                <div className="formButtons">
                    <button type="submit">SIGN IN</button>
                    <p>or sign in with other accounts?</p>
                    <div className='registericons'>
                        <FcGoogle />
                        <FaFacebook/>
                        <FaInstagramSquare />
                        <AiFillLinkedin/>
                    </div>
                    
                    <p>Don't have an acccount?<Link to="/register">Click here to register.</Link></p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
