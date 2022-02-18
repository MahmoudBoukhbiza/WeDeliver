import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../JS/actions/user";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="txt"
            placeholder="Name"
            required=""
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="txt"
            placeholder="Last Name"
            required=""
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="checkbox" onChange={(e) => setIsAdmin(true)}/>
          <button
            onClick={() =>
              dispatch(
                registerUser({ name, lastName, email, password,isAdmin }, navigate)
              )
            }
          >
            GET STARTED
          </button>
        </div>
        <div className="login">
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => dispatch(loginUser({ email, password }, navigate))}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
