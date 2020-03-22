import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "85520e55-7a3a-4abe-b7ee-0265c63af395"
    }
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, ).then(res => res.data);
    },
    unFollowUser(userId){
        return instance.delete(`follow/${userId}`).then(res => res.data);
    },
    followUser(userId){
        return instance.post(`follow/${userId}`).then(res => res.data);
    },
    getProfile(userId ) {

        console.warn("outdated method");
        return profileAPI.getProfile(userId)
    },
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(res => res.data);
    }
}



export const authAPI = {
    getPersonalAccount() {
        return instance.get(`auth/me`).then(res => res.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(res => res.data);
    }
}


