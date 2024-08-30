import React from 'react';  


const Footer = () => {  
  return (  
    <footer className="footer">  
      <div className="footer-content">  
        <div className="footer-links">  
          <a href="#about-us">About Us</a>  
          <a href="#contact">Contact</a>  
          <a href="#privacy">Privacy Policy</a>  
          <a href="#terms">Terms of Service</a>  
        </div>  
        <div className="social-media">  
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">  
            <i className="fab fa-facebook-f"></i> Facebook  
          </a>  
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">  
            <i className="fab fa-twitter"></i> Twitter  
          </a>  
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">  
            <i className="fab fa-instagram"></i> Instagram  
          </a>  
        </div>  
      </div>  
      <div className="footer-bottom">  
        <p>&copy; {new Date().getFullYear()} Gokulakrishnan. All rights reserved.</p>  
      </div>  
    </footer>  
  );  
};  

export default Footer;