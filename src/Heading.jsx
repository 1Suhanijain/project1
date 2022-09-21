import React from 'react'
import Components from './Components'
import './Heading.css'

function Heading({heading}) {
  return (
    <div className='exhibhit'>
      <h1 className='exhibhitheading'>{heading}</h1>
      < Components/>
    </div>
  )
}

export default Heading
