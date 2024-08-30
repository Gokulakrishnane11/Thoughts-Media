import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  const { id } = useParams(); //hooks for showing the post id
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}`} className="link-style">
              <h1>{post.title}</h1>
              <p>Posted at: {post.dateTime}</p>
            </Link>
            <p><b>
              {post.content.length <= 25
                ? post.content
                : `${post.content.slice(0, 25)}....`}
            </b></p>
            <hr />
          </div>
        ))
      ) : (
        // if no posts are found, display a message to the user.
        <article className="no-posts">
          <p>No posts available</p>
          <Link to="/post"><button>Add Post</button></Link>
        </article>
      )}
    </div>
  );
};

export default Post;
