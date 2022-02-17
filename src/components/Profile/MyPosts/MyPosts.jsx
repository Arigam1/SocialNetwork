import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hello my brother", likesCount: "20" },
    { id: 2, message: "Hello my Nigga", likesCount: "11" },
    { id: 2, message: "Hello my Nigga", likesCount: "11" },
    { id: 2, message: "Hello my Nigga", likesCount: "11" },
    { id: 2, message: "Hello my Nigga", likesCount: "11" },
    
  ];

  let postsElements = posts.map((p) => (
    <Post id={p.id} message={p.message} likeCounts={p.likesCount} />
  ));
  return (
    <div className={c.postsBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
