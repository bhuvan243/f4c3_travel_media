import axios from "axios";
import { baseUrl } from "../../resource/endpoints";

export async function fetchPostData(id) {
  try {
    const response = await axios(`${baseUrl}/${id}`);
    return { data: response.data };
  } catch (error) {
    console.log("Error occurred: ", error);
  }
}
