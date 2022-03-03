import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello my brother", likesCount: "20" },
        { id: 2, message: "Hello my Nigga", likesCount: "11" },
        { id: 2, message: "Hello my Nigga", likesCount: "11" },
        { id: 2, message: "Hello my Nigga", likesCount: "11" },
        { id: 2, message: "Hello my Nigga", likesCount: "11" },
      ],
      newPostText: "Arigami",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Privet" },
        { id: 2, message: "Privet" },
        { id: 3, message: "Privet11" },
      ],
      dialogs: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Natali" },
        { id: 4, name: "Oleg" },
      ],
      newMessageBody: ''
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};



export default store;

window.store = store;
