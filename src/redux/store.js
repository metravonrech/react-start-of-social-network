// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// const store = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych1'},
//                 {id: 2, name: 'Dimych2'},
//                 {id: 3, name: 'Dimych3'},
//                 {id: 4, name: 'Dimych4'},
//             ],
//             messages: [
//                 {id: 1, message: "Yo"},
//                 {id: 2, message: "whats up"},
//                 {id: 3, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
//                 {id: 4, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
//                 {id: 5, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
//                 {id: 6, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
//                 {id: 6, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
//             ],
//             newMessageText: '',
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hello there", likes: "10"},
//                 {id: 2, message: "Hello there", likes: "11"},
//                 {id: 3, message: "Hello there", likes: "12"},
//                 {id: 4, message: "Hello there", likes: "13"},
//             ],
//             newPostText: '',
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callToSubscriber = observer;
//     },
//     _callToSubscriber() {
//         console.log("state was changed")
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callToSubscriber();
//     }
// }
//
//
//
//
//
//
// export default store;
//
// window.state = store;