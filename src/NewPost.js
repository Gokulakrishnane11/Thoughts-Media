import React from 'react'

const NewPost = ({handleSubmit,newPostTitle,setNewPostTitle,newPostContent,setNewPostContent}) => {
  return (
    <main className='Newport'>
      <h1>Create New Post</h1>
      <p>Share your thoughts and ideas💡...</p>
      <form onSubmit={handleSubmit} className='newpost-form'>
        <label htmlFor='title'>Title:</label>
        <input 
          type='text' 
          id='title' 
          name='title'
          required
          value={newPostTitle}
          onChange={(e)=>setNewPostTitle(e.target.value)}
          />

      <label htmlFor='content'>Content:</label>

      <textarea 
      id="content"
      required
      value={newPostContent}
      onChange={(e) => setNewPostContent(e.target.value)}
      name="content"
      ></textarea>
      <button className='btn'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost