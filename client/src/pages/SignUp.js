import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "./../JS/action/user";

const SignUp = ({ history }) => {
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h2>Sign up</h2>
            <label>Name</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your Name .."
                onChange={handleChange}
            />
            <label>Email</label>
            <input
                type="text"
                name="email"
                placeholder="Enter your email .."
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="text"
                name="password"
                placeholder="Enter your password .."
                onChange={handleChange}
            />
            <label>Phone</label>
            <input
                type="number"
                name="phone"
                placeholder="Enter your phone .."
                onChange={handleChange}
            />
            <button onClick={() => dispatch(signup(newUser, history))}>
                SignUp
            </button>
        </div>
    );
};

export default SignUp;
