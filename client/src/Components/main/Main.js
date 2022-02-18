import React from 'react'
import mainImg from "./main-img.jpg"


const Main = () => {
  return (
    <div className='main'>
        <img src={mainImg} alt="mainimg"/>
        <div className='main-txt'>
            <h1>Welcome to</h1>
            <h1>WeDeliver</h1>
            <p>join the food atmosphere, create an acount with click and GET STARTED</p>
        </div>
    </div>
  )
}

export default Main