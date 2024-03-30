import { GET_POSTS } from "../actions/actionTypes";

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
