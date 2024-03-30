import React, { useEffect, useState } from "react";
import { fetchPostData } from "../functions";
import "../styles/viewpost.scss";

const initialState = {
  detail: false,
  userInfo: false,
};
const ViewPost = ({ id }) => {
  const [post, setPost] = useState(null);
  const [activeBtn, setActiveBtn] = useState({ ...initialState, detail: true });
  useEffect(() => {
    (async function () {
      const { data } = await fetchPostData(id);
      setPost(data);
    })();
  }, []);
  function showInfo(event) {
    const name = event.target.getAttribute("name");
    setActiveBtn({ ...initialState, [name]: true });
  }

  if (!post) {
    return null;
  }
  return (
    <div className="post-container">
      <div className="image">
        <img
          alt={post.title}
          src={`https://picsum.photos/200?random=${post.id}`}
        />
      </div>
      <div className="details">
        <div className="buttons">
          <button
            name="detail"
            className={activeBtn.detail ? "active" : ""}
            onClick={showInfo}
          >
            Detail
          </button>
          <button
            name="userInfo"
            className={activeBtn.userInfo ? "active" : ""}
            onClick={showInfo}
          >
            User Info
          </button>
        </div>
        {activeBtn.detail && (
          <div className="details-info">
            <h1 className="title">{post.title}</h1>
            <p className="description">{post.body}</p>
          </div>
        )}
        {activeBtn.userInfo && (
          <div className="details-info">Post Was Posted By {post.userId}</div>
        )}
      </div>
    </div>
  );
};

export default ViewPost;
