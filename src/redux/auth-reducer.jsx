import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_FETCHING_STATUS:
            return {...state, isFetching: action.status}
        default:
            return state;
    }
}

const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId: id, login, email, isAuth}});

export const getUserData = () => (dispatch) => {
    return authAPI.getPersonalAccount().then(data => {
        if(data.resultCode === 0){
            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if(data.resultCode === 0){
            dispatch(getUserData())
        } else {
            data.messages.length > 0
                ? dispatch(stopSubmit("login", {_error: data.messages[0]}))
                : dispatch(stopSubmit("Oops, something went wrong", {_error: data.messages[0]}))
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.resultCode === 0){
            dispatch(setUserData(null, null, null, false));
        }
    })
}


export default authReducer;