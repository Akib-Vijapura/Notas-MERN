import { useState, useEffect } from "react";
// import axios from "axios";
import "./PrivateScreen.css";
import Home from "../DeshBoard/Home";
import MyNotes from "../Mynotes/MyNotes";
const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        // const { data } = await axios.get("/api/private", config);
        setPrivateData(<Home /> , <MyNotes/>);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  // const logoutHandler = () => {
  //   localStorage.removeItem("authToken");
  //   history.push("/login");
  // };
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>
      {privateData}
      {/* <Home/> */}
    </div>
  );
};

export default PrivateScreen;
