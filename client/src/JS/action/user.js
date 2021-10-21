import axios from "axios";
import {
    LOAD_USER,
    SIGNUP_USER,
    SIGNIN_USER,
    FAIL_USER,
    LOGOUT_USER,
} from "./../actionTypes/user";

// signUp
export const signup = (newUser, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/signup", newUser);
        dispatch({ type: SIGNUP_USER, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};
// signIn
export const signin = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("api/user/signin", user);
        dispatch({ type: SIGNIN_USER, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};
// LogOut
export const logout = () => {
    return { type: LOGOUT_USER };
};
