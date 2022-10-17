import React from "react";
import ContactUserCard from "./ContactUserCard";
const Contacts = () => {
  return (
    <div class="dropdown">
    <button onclick="contactDrpDwnFunction()" class="contact-dropbtn">
      Contacts
    </button>
    <div id="contactDropdown" class="contact-dropdown-content">
     <ContactUserCard />
    </div>
  </div>
  );
};
export default Contacts;


