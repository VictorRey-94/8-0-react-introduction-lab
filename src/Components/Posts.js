import React from "react";
import Post from "./Post";
const Posts = () => {
  return (
    <div class="dropdown">
      <button onclick="DrpDwnFunction()" class="contact-dropbtn">
        Posts
      </button>
      <div id="contactDropdown" class="contact-dropdown-content">
        <Post />
      </div>
    </div>
  );
};
export default Posts;
