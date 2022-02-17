import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={c.content}>
      <div className={c.wallpaper}>
        <img src="https://c.wallhere.com/photos/f4/d9/Hololive_Gawr_Gura_shark_teeth_underwater_blue_eyes_anime_anime_girls-1949947.jpg!d" />
      </div>
      <div className={c.description}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
