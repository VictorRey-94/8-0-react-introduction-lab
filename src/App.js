import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <div class="dropdown">
      <button onclick="appFunction()" class="app-dropbtn">
        App
      </button>
      <div id="appDropDown" class="dropdown-content">
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
