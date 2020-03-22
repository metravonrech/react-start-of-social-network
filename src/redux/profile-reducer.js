import {profileAPI, UserAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hello there", likes: "10"},
        {id: 2, message: "Hello there", likes: "11"},
        {id: 3, message: "Hello there", likes: "12"},
        {id: 4, message: "Hello there", likes: "13"},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likes: 0}],
                newPostText: ''
            };
        }

        case UPDATE_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: UPDATE_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_USER_STATUS, status: status});
export const updateStatus = (status) => ({type: SET_USER_STATUS, status: status});

export const getUserProfile = (userId) => (dispatch) => {
    UserAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if(data.resultCode === 0){
            dispatch(updateStatus(status));
        }

    })
}



export default profileReducer;