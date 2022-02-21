import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello my brother", likesCount: "20" },
      { id: 2, message: "Hello my Nigga", likesCount: "11" },
      { id: 2, message: "Hello my Nigga", likesCount: "11" },
      { id: 2, message: "Hello my Nigga", likesCount: "11" },
      { id: 2, message: "Hello my Nigga", likesCount: "11" },
    ],
    newPostText: "Arigami"
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
};
window.state=state;
export let addPost = () =>{
  let newPost={
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}


export let updateNewPostText = (newText) =>{

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export default state;
