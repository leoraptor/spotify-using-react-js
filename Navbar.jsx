import React from 'react'
import leo from "./navbar.module.css"




const Navbar = () => {
  
  return (
    <div>
     <nav>
  <div className={leo.containerr}>
    <img
      className={leo.spotifylogo}
      src="images/ss.jpg"
      alt="spotify-logo"
    />
    <ul className={leo.thison}>
      <li className={leo.thisone}>
        <a href="www.spotify.com">Premium</a>
      </li>
      <li className={leo.thisone}>
        <a href="www.spotify.com">Help</a>
      </li>
      <li className={leo.thisone}>
        <a href="www.spotify.com">Download</a>
      </li>
      <li className={leo.thisone}>
        <a className='text-light'>|</a>
      </li>
      <li className={leo.thisone}>
        <a href="www.spotify.com">Sign up</a>
      </li>
      <li className={leo.thisone}>
        <a href="www.spotify.com">Log In</a>
      </li>
    </ul>
  </div>
</nav>
      
      

     
      

     

     
               
      

        
    </div>
  )
}

export default Navbar