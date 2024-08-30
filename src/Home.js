import React from "react";
import Post from "./Post";

const Home = ({ posts = [] }) => {
  return (
    <div className="home">

       <Post posts={posts}/>
       {/* Render each post */}
    </div>
  );
};

export default Home;
