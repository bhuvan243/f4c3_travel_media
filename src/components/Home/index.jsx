import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/thunk";
import Post from "./components/Post";
import "./styles/home.scss";
import InputBar from "./components/InputBar";
const Home = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <main className="home-container">
      <h1>Social Media For Travellers</h1>
      <InputBar />

      <section className="posts-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </section>
    </main>
  );
};

export default Home;
