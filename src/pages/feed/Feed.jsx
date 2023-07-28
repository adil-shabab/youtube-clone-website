import React from 'react'
import './css/Feed.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Explore from '../../components/explore/Explore'

function Feed() {

  return (
    <div className='feed_container'>
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
          <Explore />
        </div>
      </div>
    </div>
  )
}

export default Feed
