import React from "react";
import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete/*handleEditClick*/ }) => {
  const { id } = useParams(); // hooks for showing the post id
  // find the post by id from the posts array.
  const post = posts.find((post) => post.id.toString() === id);
  
  // no post. showing this
  if (!post)
    return (
      <section className="empty-post">
      <p>No post found.</p>
        <Link to='/post' className="link-style"><button className="post-btn">create New Post</button></Link>
        <Link to="/" className="link-style"><button className="back-home-btn">Back to Home</button></Link>
      </section>
    );

    // post are available. show them here  
    return (
    <div className="post-page">
      <article className="post">
        {post && (
          <>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button onClick={() => handleDelete(post.id)}
               className="delete-button">
                  Delete
                  </button>
                  <Link to={`/post/edit/${id}`} className="edit-link">
                  <button className="edit-button"/**  onClick={() => handleEditClick(post.id)}*/> Edit </button>
                  </Link>
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default PostPage;
