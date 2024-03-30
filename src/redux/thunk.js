import axios from "axios";
import { GET_POSTS } from "./actions/actionTypes";
import { baseUrl } from "../resource/endpoints";
export async function fetchPosts(dispatch) {
  try {
    const response = await axios(baseUrl);
    dispatch({
      type: GET_POSTS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
  }
}
