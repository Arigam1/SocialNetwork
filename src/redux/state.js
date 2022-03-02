const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type ===UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type ===SEND_MESSAGE){
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 4, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST,});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({type: SEND_MESSAGE,});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;

window.store = store;
