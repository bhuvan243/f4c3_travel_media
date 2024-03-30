import React from "react";
import "../styles/post-card.scss";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  function goToDetails(id) {
    navigate(`/item/${id}`);
  }
  return (
    <div className="post-card" onClick={() => goToDetails(post.id)}>
      <img
        className="image pointer"
        src={`https://picsum.photos/200?random=${post.id}`}
        alt={post.title}
      />
      <div className="card-details">
        <p className="title pointer" title={post.title}>
          {post.title.substring(0, 20) + "..."}
        </p>
        <p className="description">
          {post.body.substring(0, 90)}
          <span className="read-more pointer">...Read more</span>
        </p>
      </div>
      <div className="open-icon-container">
        <span className="material-icons arrow-btn pointer" title="Read more">
          chevron_right
        </span>
      </div>
    </div>
  );
};

export default Post;
