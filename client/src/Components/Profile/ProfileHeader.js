import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profileheader.css";

const ProfileHeader = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="profile-header">
      <h1>
        {user.name} {user.lastName}{" "}
      </h1>
      <div className="profile-contact">
        <h3>{user.email}</h3>
        <h3>00 216 xx xx xx xx</h3>
        <h3>Street xxxxxxxxxxxx, Number:0000</h3>
      </div>
    </div>
  );
};

export default ProfileHeader;
