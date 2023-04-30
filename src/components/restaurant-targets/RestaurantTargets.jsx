import React from 'react'
import Star from '../../assets/Star.svg'
import FoodCard from '../../assets/FoodCard.png'
import './restaurantTargets.css'

function RestaurantTargets() {
    return (
        <div className='card'>
            <img className='card-img' src={FoodCard} alt="FoodCard" />
            <div className="card-body">
                <h3 className='card-title'>Papitas con broaster</h3>
                <p className='card-subtitle'>Calificación</p>
                <div className='card-stars'>
                    <img className='star' src={Star} alt="Star" />
                    <img className='star' src={Star} alt="Star" />
                    <img className='star' src={Star} alt="Star" />
                    <img className='star' src={Star} alt="Star" />
                    <img className='star' src={Star} alt="Star" />
                </div>
                <button className='card-btn'>$ 4 Dolares</button>
            </div>
        </div>
    )
}

export default RestaurantTargets