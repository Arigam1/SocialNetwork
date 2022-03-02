import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCounts={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () =>{
    props.dispatch({type: "ADD-POST"});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})

  }

  return (
    <div className={c.postsBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
