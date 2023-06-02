import React from 'react'
import imageHero from '../../../assets/img/imageHero.jpg'

const HeroSection = () => {
  return (
 
<div className="p-5 text-center bg-image rounded-3 position-sticky h-25" style={{backgroundImage: `url(${imageHero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
  <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6'}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Nomad</h1>
        <h4 className="mb-3">Tienda virtual a tu alcance</h4>
      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection