import React from 'react'
import "./Meme.css"

import memesData from '../memesData';
const Meme = () => {
  
  const[memeImage, setMemeImage] =  React.useState("")
  const[first,setFirst] = React.useState("")
  const[second,setSecond] = React.useState("")
  console.log(memeImage);
 
  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].img)
  }
  function toptext(event){
    setFirst(event.target.value)
  }
  function bottomtext(event){
    setSecond(event.target.value)
  }
   
  return (
    <main>
      <div className='mainsection'>
      <div className='form' action="">
        <input className='forminput' type="text" name="" id="" placeholder='Top Text' onChange={toptext}/>
        <input className='forminput' type="text" name="" id="" placeholder='Bottom Text' onChange={bottomtext} />
        <button  className='formbutton' onClick={getMemeImage}>Get Image</button>
        
      </div>
      
       <img className='memeimage' src={memeImage} alt="" />

      <div className='textinsert'>
        <div className='top'>
          <p>{first}</p>
        </div>
        <div className='bottom'>
          <p>{second}</p>
        </div>
      </div>
    </div>
      <div className='instruct'>
        <h1>Instructions</h1>
        <ul>
          <li>Click On Get Image</li>
          <li>Enter the Top Text</li>
          <li>Enter the Bottom Text</li>
          <li>Clear the previously written top and bottom text and again continue with above instruction</li>
        </ul>
      </div>
    </main>
  )
}

export default Meme