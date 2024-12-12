import React from 'react'
import "./homepage.scss";
import SearchBar from '../../components/searchbar/searchbar';

const Homepage = () => {
  return (
    <div className='homepage'>
       <div className='textContainer'>
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos non rerum voluptatibus possimus minima quam error delectus laborum perspiciatis eveniet facere, consequatur saepe dolor.
          </p>
           <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
        </div>
       <div className='imgContainer'><img src="bg.png" alt="" /></div>
    </div>
      
)}
export default Homepage
