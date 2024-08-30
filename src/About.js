import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div class="about-container">  
    <h1>About Us</h1>  
    <p>Hey there! Welcome to our little corner of the internet, where words are the stars of the show! 🎉 This is our social media app, designed for those who believe that a well-crafted text can pack more punch than a thousand emojis (well, maybe not <em>that</em> many, but you get the idea!). Here, you can share your thoughts, ideas, and stories without the distractions of flashy images or videos—just good ol’ text!</p>  
    
    <p>I’m <span class="dev-name">Gokulakrishnan</span>, your friendly neighborhood coder, and I’m currently diving into the world of React.js to make this dream a reality. Think of me as the chef cooking up this digital dish, and trust me, I’m trying not to burn it! 🍳 This project isn’t just about coding; it’s about creating a fun community where we can all connect through the power of words.</p>  
    
    <p>So, if you’ve ever had a brilliant thought that you just had to share (or a joke that only you find funny), this is the place for you! Join us on this wild ride as we build a platform dedicated to the art of messaging. Your thoughts matter—seriously, they do! We can’t wait to hear what you have to say.</p>  
    
    <p>Thanks for stopping by and being part of this exciting adventure! Now, let’s get this word party started! 🎈</p>  
    
    <Link to = '/' class='btn'>Join Us</Link> 
</div>  
  )
}

export default About