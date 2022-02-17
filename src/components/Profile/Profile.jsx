import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.content}>
      <div className={c.wallpaper}>
        <img src="https://c.wallhere.com/photos/f4/d9/Hololive_Gawr_Gura_shark_teeth_underwater_blue_eyes_anime_anime_girls-1949947.jpg!d" />
      </div>
      <div>Ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
