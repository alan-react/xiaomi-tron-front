import {AuthApi} from "../../api/api";

const LOGIN_SUCCESS = "/authReducer/LOGIN_SUCCESS"
const LOGOUT_SUCCESS = "/authReducer/LOGOUT_SUCCESS"

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true
            }
        }

        default: return state
    }
}

const loginSuccess = () => ({type: LOGIN_SUCCESS})
const logoutSuccess = () => ({type: LOGOUT_SUCCESS})

export const login = (email, password) => async (dispatch) => {
    const response = await AuthApi.login(email, password)
    console.log(response.status)
    if (response.status === 200) {
        dispatch(loginSuccess())
    }
}

export default authReducer
