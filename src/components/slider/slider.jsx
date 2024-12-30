import {React , useState} from 'react'
import "./slider.scss"

const Slider = ({images}) => {
    const [imageIndex , setImageIndex] = useState(null)

    const changeDirection = (direction) => {
        if(direction === "left"){
            if(imageIndex == 0){
                setImageIndex(images.length - 1)
            }else{
                setImageIndex(imageIndex - 1)
    
            }

        }else{
            if(imageIndex === images.length - 1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex + 1)
            }
        }

    }

  return (
    <div className = "slider">
       {imageIndex !== null &&  <div className="fullSlider">
            <div  onClick={()=>{changeDirection("left")}} className="arrow">
                <img src="left-chevron.png" alt="" />
            </div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div onClick={()=>{changeDirection("right")}} className="arrow">
                <img src="right-chevron.png" alt="" />
            </div>
            <div className="close" onClick={()=>{setImageIndex(null)}}><img src="cancel.png" alt="" /></div>
        </div> }

        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>(setImageIndex(0))} />

        </div>
        <div className="smallImages">
            {images.slice(1).map((image , index) => {
                return <img src={image} key={index} onClick={()=>(setImageIndex(index + 1))}/>
            } )}
        </div>
      
      
    </div>
  )
}

export default Slider
