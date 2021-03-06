import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main">
        <Navbar />
        <Routes>
          <Route
            path="/dialogs"
            element={
              <DialogsContainer
                store={props.store}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                store={props.store}
              />
            }
          />
          <Route
            path="/users"
            element={
              <UsersContainer
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
