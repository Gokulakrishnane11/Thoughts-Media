import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
      <p><Link to="/post-page/1">post 1</Link></p>
      <p><Link to="/post-page/2">post 2</Link></p>
      <p><Link to="/post-page/3">post 3</Link></p>
      <p><Link to="/post-page/new-post">New Post</Link></p>{/** why mention like this because post page inside open the new post["/post-page/new-post"] */}
      <Outlet /> {/*//? use the outlet because take value child into parent outside*/}
    </>
  )
}

export default PostLayout