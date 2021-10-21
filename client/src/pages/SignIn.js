import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "./../JS/action/user";

const SignIn = ({ history }) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h2>Sign in</h2>
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
            <button onClick={() => dispatch(signin(user, history))}>
                SignIn
            </button>
        </div>
    );
};

export default SignIn;
