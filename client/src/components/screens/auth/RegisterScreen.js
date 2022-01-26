import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions";
import { useEffect } from "react";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setMessage("Passwords do not match");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else dispatch(register(username, email, password));
  };

  return (
    <>
      <Link to="/welcome">
        <img src={logo} alt="logo" width="100px" className="mt-5 ml-4" />
      </Link>
      <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          {
            ({message , error}  && (
              <span className="error-message">
                {message}  {error}
              </span>
            ))}
          <div className="">
            {/* <label htmlFor="name">Username:</label> */}
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              required
              id="name"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className=" ">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="email"
              required
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" ">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" ">
            {/* <label htmlFor="confirmpassword">Confirm Password:</label> */}
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-500 hover:bg-blue-700  text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Register
          </button>

          <span className="register-screen__subtext">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
