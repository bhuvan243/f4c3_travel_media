import React from "react";
import Post from "../../Home/components/Post";
import { getMorePost } from "../functions";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
const MorePosts = ({ id }) => {
  //   const morePosts = useSelector((state) => {
  //     console.log(state.posts);
  //     // const posts = state.posts;
  //     // return getMorePost(posts, id);
  //   });
  //   const posts = useSelector((state) => state.posts);
  //   console.log(posts);

  //   const store = store.getState();
  return (
    // <div className="more-posts">
    //   {morePosts?.map((post) => {
    //     return <Post key={post.id} id={post.id} />;
    //   })}
    // </div>
    null
  );
};

export default MorePosts;
