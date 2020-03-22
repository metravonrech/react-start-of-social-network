import {UserAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';
const SET_FOLLOWING_STATUS = 'SET_FOLLOWING_STATUS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userId) {
                        return {...elem, followed: true}
                    }
                    return elem;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userId) {
                        return {...elem, followed: false}
                    }
                    return elem;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case SET_FETCHING_STATUS:
            return {...state, isFetching: action.status}
        case SET_FOLLOWING_STATUS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber});
export const setTotalUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount: usersCount});
export const setFetchingStatus = (status) => ({type: SET_FETCHING_STATUS, status: status});
export const setFollowingStatus = (isFetching, id) => ({type: SET_FOLLOWING_STATUS, isFetching: isFetching, id: id});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetchingStatus(true));
        UserAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(setFetchingStatus(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(setFollowingStatus(true, id));
        UserAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(setFollowingStatus(false, id));
        })
    }
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(setFollowingStatus(true, id));
        UserAPI.unFollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(setFollowingStatus(false, id));
        })
    }
}


export default usersReducer;