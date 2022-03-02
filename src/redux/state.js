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
        { message: "Privet" },
        { message: "Privet" },
        { message: "Privet11" },
      ],
      dialogs: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Natali" },
        { id: 4, name: "Oleg" },
      ],
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;

window.store = store;
