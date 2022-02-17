import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="hello" likeCounts='20'/>
        <Post message="i just repeat this course" likeCounts='10'/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
