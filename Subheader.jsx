import React from 'react'
import teo from "./subheader.module.css"

const Subheader = () => {
  return (
    <div>
        <header className={teo.hellyeah}>
        <div className={teo.container}>
                <h1 id={teo.title}>Why Spotify?</h1>
        </div>
        <article>
        <div className='row'>
            <div className='col-3'>
                <h3>Play your favorites.</h3>
                <p>Listen to the songs you love, and discover new music and podcasts.</p>

            </div>
            <div className='col-3'>
                <h3>Playlists made easy.</h3>
                <p>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
            </div>
            <div className='col-3'>
                <h3>Make it yours.</h3>
                <p>Tell us what you like, and we'll recommend music for you.</p>
            </div>
            <div className='col-3'>
                <h3>Save mobile data.</h3>
                <p>To use less data when you play music, turn on Data Saver in Settings.</p>
            </div>
        </div>
        </article>

      </header>
     
        
            
                
            

      
    </div>
  )
}

export default Subheader