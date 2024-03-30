import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ViewPost from "./components/ViewPost";
import Post from "../Home/components/Post";
import "./styles/display-post.scss";
import { useSelector } from "react-redux";
const Display = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  // const morePosts = useSelector((state) => {
  //   const nextFivePosts = [];
  //   let totalNumberOfMorePosts = 5;
  //   let index = parseInt(params.id) + 1;
  //   while (totalNumberOfMorePosts !== 0) {
  //     if (index <= state.posts.length) {
  //       nextFivePosts.push(state.posts[index]);
  //       index += 1;
  //     } else {
  //       index = 0;
  //       nextFivePosts.push(state.posts[index]);
  //     }
  //     totalNumberOfMorePosts -= 1;
  //   }
  //   return nextFivePosts; 
  // });
  // console.log(morePosts);
  return (
    <section className="post-display-section">
      <header className="header">
        <span className="material-icons go-back" onClick={goBack}>keyboard_backspace</span>
        <h1>Post Number #{params.id}</h1>
      </header>
      <ViewPost id={params.id} />
      <h1>More Posts</h1>
      {/* <div className="more-posts">
        {
          morePosts?.map((post) => {
            return <Post key={post.id} id={post.id} />;
          })
        }
      </div> */}
    </section>
  );
};

export default Display;
