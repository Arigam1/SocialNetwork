import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
};

export default Profile;
