import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({search,setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' 
               placeholder='Search...'
               className='searchInput'
               required={true}
               value={search}
               onChange={e=>{setSearch(e.target.value);}}

         />
        <button type='submit'>Search</button>
      </form>

      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='Post'>Post</Link></li>
        <li><Link to ='about'>About</Link></li>
      </ul>

    </nav>
  )
}

export default Nav