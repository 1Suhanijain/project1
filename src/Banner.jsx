import React from 'react'
import './Banner.css'

function Banner({BannerText}) {
  return (
    <div>
      <h1 className='banner'>{BannerText}</h1>
    </div>
  )
}

export default Banner
