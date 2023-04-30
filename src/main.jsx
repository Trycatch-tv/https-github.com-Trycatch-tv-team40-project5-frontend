import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar/Navbar'
import RestaurantTargets from './components/restaurant-targets/RestaurantTargets'
import SponsorBrands from './components/sponsor-brands/SponsorBrands'
import Footer from './components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <main>
      <h2 className='subtitle'>¡Los mas elegidos!</h2>
      <div className='targets'>
        <RestaurantTargets />
        <RestaurantTargets />
        <RestaurantTargets />
        <RestaurantTargets />
        <RestaurantTargets />
      </div>
      <h2 className='subtitle subtitle-2'>Nuestras marcas aliadas</h2>
      <div className='sponsors targets'>
        <SponsorBrands />
        <SponsorBrands />
        <SponsorBrands />
        <SponsorBrands />
        <SponsorBrands />
      </div>
    </main>
    <Footer />
  </>
)
