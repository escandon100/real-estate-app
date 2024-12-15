import React from 'react'
import "./homepage.scss";
import SearchBar from '../../components/searchbar/searchbar';
import Experience from '../../components/experience/experience';

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
           <Experience/>
          
        </div>
        </div>
       <div className='imgContainer'><img src="bg.png" alt="" /></div>
    </div>
      
)}
export default Homepage
