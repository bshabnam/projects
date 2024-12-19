import React from 'react'
import Python from "../Assets/Images/python.png"
import Java from "../Assets/Images/java.png"
import Sql from "../Assets/Images/sql.png"
import React1 from "../Assets/Images/react.png"
import "./HeroSection.css"


function Herosection() {
  return (
    <div className='Herosection'>
        <div className='row1'>
            <div className='row1col1'>
                <img src={Python} className='images'/>
                <p className='para'>Python FullStack Webdevelopment</p>
                <button className='submit'>Enroll now</button>
            </div>
            <div className='row1col2'>
                <img src={Java} className='images'/>
                <p className='para'>Java FullStack Webdevelopment</p>
                <button className='submit'>Enroll now</button>
            </div>
        </div>
        <br/>
        <div className='row2'>
            <div className='row2col1'>
                <img src={Sql} className='images'/>
                <p className='para'>Database Language SQL</p>
                <button className='submit'>Enroll now</button>
            </div>
            <div className='row2col2'>
                <img src={React1} className='images'/>
                <p className='para'>React library for frontend library</p>
                <button className='submit'>Enroll now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Herosection
