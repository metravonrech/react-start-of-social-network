const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych1'},
        {id: 2, name: 'Dimych2'},
        {id: 3, name: 'Dimych3'},
        {id: 4, name: 'Dimych4'},
    ],
    messages: [
        {id: 1, message: "Yo"},
        {id: 2, message: "whats up"},
        {id: 3, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
        {id: 4, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
        {id: 5, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
        {id: 6, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
        {id: 7, message: "Hello worldHello worldHello worldHello worldHello worldHello"},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: action.newMessageText}],
                newMessageText: ''
            };
        }
        default: return state;
    }
}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})



export default dialogsReducer;