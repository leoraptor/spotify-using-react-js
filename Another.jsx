import React from 'react'
import reo from "./another.module.css"

const Another = () => {
  return (
    <div>
         <header className={reo.meow}>
         <div className={reo.container}>
                <h1 id={reo.title}>It's free.No credit card required.</h1>                                   
         </div>

      </header>


    </div>
  )
}

export default Another