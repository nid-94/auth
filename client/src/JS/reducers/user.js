import {
    LOAD_USER,
    SIGNUP_USER,
    SIGNIN_USER,
    FAIL_USER,
    LOGOUT_USER,
} from "./../actionTypes/user";

// initiale state
const initialeState = {
    user: {},
    load_user: false,
    errors: [],
    isAuth: false,
};
// purefunction

const userReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load_user: true };
        case SIGNUP_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                load_user: false,
                user: payload.user,
                isAuth: true,
            };
        case SIGNIN_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                load_user: false,
                user: payload.user,
                isAuth: true,
            };
        case FAIL_USER:
            return { ...state, load_user: false, error: payload };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { user: {}, load_user: false, errors: [], isAuth: false };

        default:
            return state;
    }
};
export default userReducer;
