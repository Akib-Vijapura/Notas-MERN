import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);

  // const loginHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const { data } = await axios.post(
  //       "/api/auth/login",
  //       { email, password },
  //       config
  //     );

  //     localStorage.setItem("authToken", data.token);

  //     history.push("/");
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error ,  userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

   

  return (
    <>
      <Link to="/welcome">
        <img src={logo} alt="logo" width="100px" className="mt-5 ml-4" />
      </Link>
      <div className="login-screen">
        <form onSubmit={submitHandler} className="login-screen__form">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          {error && <span className="error-message">{error}</span>}
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              type="email"
              required
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="">
              Password{" "}
              <Link
                to="/forgotpassword"
                className="login-screen__forgotpassword"
              >
                Forgot Password?
              </Link>
            </label>
            <input
              className=" w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={4}
            />
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-500 hover:bg-blue-700  text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Login
          </button>

          <span className="login-screen__subtext">
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};;

export default LoginScreen;
