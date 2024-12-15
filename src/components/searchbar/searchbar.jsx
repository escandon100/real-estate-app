import React, { useState } from 'react'
import "./searchbar.scss"


const types = ["Buy" , "Rent"]

const SearchBar = () => {
    const [query , setQuery ] = useState({
        type : "Buy",
        location : "",
        minPrice : 0,
        maxPrice : 0
    })

    function switchType(type){
        setQuery((pre) => ({
            ...pre ,
            type : type
        }           
        ))
    }
  
  return (
    <div className='searchbar'>
        <div className="type">
            {types.map(type => {
            
          return  <button key={type} onClick={()=>{switchType(type)}} className={query.type === type ? "active" : ""}>
                {type}
            </button>
            
            })}
        </div>
        <form action="">
            <input type="text" name="location" placeholder='City location' />
            <input type="number" name="minPrice" min={0} max={1000000} placeholder='Min Price' />
            <input type="number" name="maxPrice"  min={0} max={1000000} placeholder='Max Price' />
            <button><img src="search.png" alt="" /></button>
        </form>

      
    </div>
  )
}

export default SearchBar
