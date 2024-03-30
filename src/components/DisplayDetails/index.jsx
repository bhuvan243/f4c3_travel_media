import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ViewPost from "./components/ViewPost";
import MorePosts from "./components/MorePosts";
import "./styles/display-post.scss";

const Display = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="post-display-section">
      <header className="header">
        <span className="material-icons go-back" onClick={goBack}>
          keyboard_backspace
        </span>
        <h1>Post Number #{params.id}</h1>
      </header>
      <ViewPost id={params.id} />
      {/* <h1>More Posts</h1> */}
      {/* <MorePosts id={params.id} /> */}
    </section>
  );
};

export default Display;
