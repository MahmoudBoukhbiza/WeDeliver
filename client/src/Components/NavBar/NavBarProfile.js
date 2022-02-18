import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../JS/actions/user";
import PersonImg from "./personne.png";
import "./Navbar.css";

const NavBarProfile = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);
  if (isAuth)
    return (
      <div className="user-profile">
        <div className="name-img">
          <h4>
            {user.isAdmin ? (
              <a href="/dashboard">
                {user.name} {user.lastName}{" "}
              </a>
            ) : (
              <a href="/profile">
                {user.name} {user.lastName}
              </a>
            )}
          </h4>
          {user.isAdmin ? (
            <img
              className="user-img"
              src={PersonImg}
              alt=""
              onClick={() => navigate("/dashboard")}
            />
          ) : (
            <img
              className="user-img"
              src={PersonImg}
              alt=""
              onClick={() => navigate("/profile")}
            />
          )}
        </div>
        <button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          logOut
        </button>
      </div>
    );
  else
    return (
      <div>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          GET STARTED
        </button>
      </div>
    );
};

export default NavBarProfile;
