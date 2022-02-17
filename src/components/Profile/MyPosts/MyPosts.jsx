import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
      <div className={c.posts}>
        <Post message="hello" likeCounts="20" />
        <Post message="i just repeat this course" likeCounts="10" />
      </div>
    </div>
  );
};

export default MyPosts;
