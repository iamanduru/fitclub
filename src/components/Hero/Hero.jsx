import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">

            <Header/>
    {/*The best add */}
            <div className="the-best-ad">
                <div></div>
                <span>The best fitness in the town</span>
            </div>

             {/*Hero Heading */}
             <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                        In here, we will help ypu shape and build your ideal body
                        and live your life to the fullest!
                    </span>
                </div>
             </div>

             {/*Figures */}
             <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
             </div>

             {/*Hero buttons */}
             <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
             </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now!</button>


            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/*Hero images */}
            <img src={hero_image} alt="" className="hero-image"/>
            <img src={hero_image_back} alt="" className='hero-image-back'/>

            {/*Calories*/}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burnt</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero