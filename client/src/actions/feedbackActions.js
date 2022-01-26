import axios from "axios";
import {
  USER_FEEDBACK_FAIL,
  USER_FEEDBACK_REQUEST,
  USER_FEEDBACK_SUCCESS,
} from "../constants/feedbackConstant";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";

export const userFeedback = (feedback) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_FEEDBACK_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();



    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/feedback", feedback, config);

    dispatch({ type: USER_FEEDBACK_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("authToken", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_FEEDBACK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
