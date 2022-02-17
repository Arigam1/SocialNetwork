import React from "react";
import c from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={c.item}>
      <img src="https://i.pinimg.com/736x/d2/9c/4d/d29c4decc0d6e97e00aacb9d0142fe18.jpg" />
      {props.message}
      <div>
        <span>like</span> {props.likeCounts}
      </div>
    </div>
  );
};

export default Post;
