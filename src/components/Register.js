import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { validate } from '../helpers/Validate';
import { notify } from "../helpers/Toast"
import "./Styles.css";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You signed up successfully", "success")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler} className="formContainer">
                <h2 className="header">Register</h2>
                <p>A good sentence here</p>
                <div className="formField">
                    <label>Name</label>
                    <input
                        className={(errors.name && touched.name) ? "uncompleted" : "formInput"}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                <div className="formField">
                    <label>Confirm Password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? "uncompleted" : "formInput"}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className="formField">
                    <div className="checkBoxContainer">
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                        <label>I agree with...</label>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className="formButtons">
                    <button type="submit">REGISTER</button>
                    <p>or register with other accounts?</p>
                    <div className='registericons'>
                        <FcGoogle />
                        <FaFacebook/>
                        <FaInstagramSquare />
                        <AiFillLinkedin/>
                    </div>
                    
                    <p>Don't have an acccount?<Link to="/signin">Click here to sign in.</Link></p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};
// !/\S+@\S+\.\S+/.test(data.email)
export default Register;