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

export function getMorePost(posts, id) {
  console.log(posts, id);
  const nextFivePosts = [];

  let totalNumberOfMorePosts = 5;
  let index = parseInt(id) + 1;

  while (totalNumberOfMorePosts !== 0) {
    if (index <= posts.length) {
      nextFivePosts.push(posts[index]);
      index += 1;
    } else {
      index = 0;
      nextFivePosts.push(posts[index]);
    }
    totalNumberOfMorePosts -= 1;
  }

  return nextFivePosts;
}
