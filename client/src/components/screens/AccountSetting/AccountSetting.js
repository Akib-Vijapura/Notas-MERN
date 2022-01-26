import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../actions/userActions";
import NavBar from "../DeshBoard/NavBar";

const AccountSetting = ({ history }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { error, success } = userUpdate;

  console.log(success);

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setUserName(userInfo.username);
      setEmail(userInfo.email);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(updateProfile({ username, email, password }));
    }
  };
  return (
    <>
      <NavBar />

      <div className=" min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-gray-900">Account Setting</h2>
            <form
              onSubmit={submitHandler}
              className="mt-6 border-t border-gray-400 pt-4"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <p>{error}</p>
                <p>{success}</p>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    User Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500"
                    id="grid-text-1"
                    type="text"
                    value={username}
                    placeholder="Enter UserName"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    email address
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500"
                    id="grid-text-1"
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    New Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500"
                    id="grid-text-1"
                    type="password"
                    value={password}
                    placeholder="Enter New Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500"
                    id="grid-text-1"
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Your Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                    type="submit"
                  >
                    save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
