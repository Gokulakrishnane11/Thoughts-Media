import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='missing-page'>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to ='/'>Back to Home</Link>
    </div>
  )
}

export default Missing