import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPost = ({
  editPostTitle,
  setEditPostTitle,
  editPostContent,
  setEditPostContent,
  handleEdit,
  posts
}) => {
  const { id } = useParams(); // crap the id of post here
  const post = posts.find(post => post.id === id);// the id of the post here for finding the post title and content.

  //^ load the edit post title and content
  //^ set the Previous title and content in input fields
  useEffect(()=>{
    if(post){
      setEditPostTitle(post.title) // set the Previous on title input field
      setEditPostContent(post.content) // set the Previous on content input field
    }
  },[post,setEditPostContent,setEditPostTitle])

// the post not found in the list of posts and we should return this 
  if (!post) return (
    <section className="no-post-edit">
      <h2>Post not found</h2>
      <button className="back-btn" onClick={() => window.history.back()}>Back</button>
    </section>
  );
 
// the post are founded then return this
  return (
    <main className="edit-container">
      <form className="edit-form" onSubmit={(e)=>handleEdit(id,e)}>
        <label htmlFor="edit-post-title">Edit Title:</label>
        <input 
          type="text" 
          placeholder="Title" 
          required 
          value={editPostTitle}
          onChange={(e)=>setEditPostTitle(e.target.value)}
          id="edit-post-title"

        />

        <label htmlFor="edit-post-content">Edit Content:</label>

        <textarea 
          placeholder="Content" 
          required
          value={editPostContent}
          onChange={(e)=>setEditPostContent(e.target.value)}
          id="edit-post-content"

        />
        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="cancel-btn"  onClick={() => window.history.back()}>
          Cancel
        </button>
      </form>
    </main>
  );
};

export default EditPost;
