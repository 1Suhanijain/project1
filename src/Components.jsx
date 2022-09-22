import React from 'react'
import './Heading.css'
import Heading from './Heading'

function Components({address1}) {
  console.log({address1})
  return (
    <div className='components'>
      
      {
        <p className='boxes'>{address1}</p>
      }
      {/* <p className='boxes'>componenet2</p>
      <p className='boxes'>componenet3</p>
      <p className='boxes'>component4</p> */}
    </div>
  )
}

export default Components
