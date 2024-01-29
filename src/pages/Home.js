import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import HomeImage from '../Assets/pizza.jpeg';
 
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
        <div className='headerContainer'>
            <h1>Aditya's Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE </p>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
        </div>
      
    </div>
  )
}

export default Home; 
