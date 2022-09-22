import React from 'react'
// import Components from './Components'
import './Heading.css'

function Heading({heading,address1,address2}) {
  
  return (
    <div className='exhibhit'>
      <h1 className='exhibhitheading'>{heading}</h1>

       <div className="ExhibitContent">
      <p>{address1}</p>
      <p>{address2}</p>
    
       </div>
      
    </div>
  )
}

export default Heading
