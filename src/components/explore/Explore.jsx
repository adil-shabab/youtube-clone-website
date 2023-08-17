import React, {useState, useContext} from 'react'
import './css/Explore.css'
import HorizontalScroll from "react-scroll-horizontal";
import MyContext from '../../context/MyContext';


function Explore() {

  const explore_title = [
    "All", "Mixes", "Tamil Cinema", "Music", "Python", "Live", "News Malayalam", "Next JS", "Sketch", "AI", "Gaming", "Programming", "Gadegets", "Asian Music", "Recently Uploaded", "Javascript", "MERN", "Django", "React Native"
  ]

  const {selectedItem, setSelectedItem} = useContext(MyContext)




  return (
    <div className='explore_item_parent'>
        <HorizontalScroll className="scroll" reverseScroll={true}>
            {explore_title.map((item, index)=>(
                <div key={index} onClick={()=>{setSelectedItem(item)}} className={`explore_item ${selectedItem === item && 'active'}`}>
                    <span>{item}</span>
                </div>
            ))}
        </HorizontalScroll>
    </div>
  )
}

export default Explore
