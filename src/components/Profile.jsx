import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  return !user ? <div>Please login</div> : <div>Welcome {user.username}</div>;
}

export default Profile;
