import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar/Navbar'
import RestaurantTables from './components/restaurant-tables/RestaurantTables'
import ReservationForm from './components/reservation-form/reservationForm'
import Footer from './components/footer/Footer'
import BannerCard from './assets/banner.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <main>
      <section className='container-banner'>
        <img className='banner-img' src={BannerCard} alt="bannerComida" />  
      </section>

      <section className='container-card'>
      <div className="container-tables">
      <RestaurantTables />
      </div>

      <div className="container-form">
      <ReservationForm />
      </div>
      </section>
      
      <section className='information'>
      <h2 className='subtitle-2'>¡IMPORTANTE!</h2>

      <div className="circles">
        <div className="green-circle">
        </div>
          <p className='text'>Sí se encuentra este color significa que esta <strong>LIBRE.</strong></p>
      
        <div className="red-circle">
        </div>
        <p className='text'>Sí se encuentra este color significa que esta <strong>OCUPADO.</strong></p>
      </div>
      </section>
    </main>
    <Footer />
  </>
)
