import React from 'react'
import './About.css'
import MultiplePizza from '../Assets/multiplePizzas.jpeg';

function About() {
    return (
        <div className="about">
            <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizza})`}}>
                
            </div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>
At Pizza Hut, we don’t just make pizza. We make people happy. Pizza Hut was built on the belief that pizza night should be special, and we carry that belief into everything we do. With more than 55 years of experience under our belts, we understand how to best serve our customers through tried and true service principles: We create food we’re proud to serve and deliver it fast, with a smile.
We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
In June 1996, Pizza Hut made its foray into India with a restaurant in Bangalore and was the first international restaurant chain to pioneer this category. The restaurant brand offers an exciting menu consisting of its signature pizzas, appetizers, pastas, desserts and beverages. Its trademark dining experience has been recognized by Brand Equity to make it the ‘Most Trusted Food Service Brand’ for 11 years in a row. Pizza Hut is the most preferred pizza brand in India, given its freshest, tastiest and affordable Pizzas.</p>
            </div>
        </div>
    )
}

export default About
