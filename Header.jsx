import React from 'react'
import feo from "./header.module.css"

const Header = () => {
  return (
    <div>
        <header>
        <div className={feo.container}>
                <h1 id={feo.title}>Play millions of songs and podcasts, for free.</h1>
                <button className={feo.btn}>get spotify free</button>
        </div>

      </header>
    </div>
  )
}

export default Header