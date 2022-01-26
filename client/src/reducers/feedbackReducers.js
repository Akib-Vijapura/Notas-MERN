import { USER_FEEDBACK_FAIL, USER_FEEDBACK_REQUEST, USER_FEEDBACK_SUCCESS } from "../constants/feedbackConstant";

export const userFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FEEDBACK_REQUEST:
      return { loading: true };
    case USER_FEEDBACK_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_FEEDBACK_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
