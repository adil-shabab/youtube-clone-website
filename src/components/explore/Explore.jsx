import React, {useState} from 'react'
import './css/Explore.css'
import HorizontalScroll from "react-scroll-horizontal";


function Explore() {

  const explore_title = [
    "All", "Mixes", "Tamil Cinema", "Music", "Python", "Live", "News", "Next JS", "Sketch", "AI", "Gaming", "Programming", "Gadegets", "Asian Music", "Recently Uploaded", "Javascript", "MERN", "Django", "React Native"
  ]

  const [selectedItem, setSelectedItem] = useState("All");




  return (
    <div className='explore_item_parent'>
        <HorizontalScroll className="scroll" reverseScroll={true}>
            {explore_title.map((item, index)=>(
                <div key={index} className={`explore_item ${selectedItem === item && 'active'}`}>
                    <span>{item}</span>
                </div>
            ))}
        </HorizontalScroll>
    </div>
  )
}

export default Explore
