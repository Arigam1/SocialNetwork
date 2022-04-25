import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://www.wikihow.com/images/5/5b/Draw-Anime-or-Manga-Faces-Step-15-Version-5.jpg",
        followed: false,
        fullName: "Dima",
        status: "Hello world",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://www.wikihow.com/images/5/5b/Draw-Anime-or-Manga-Faces-Step-15-Version-5.jpg",
        followed: true,
        fullName: "Alexia",
        status: "Me best",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://www.wikihow.com/images/5/5b/Draw-Anime-or-Manga-Faces-Step-15-Version-5.jpg",
        followed: false,
        fullName: "Vova",
        status: "Im Boss",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? 
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
               : 
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              }
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
