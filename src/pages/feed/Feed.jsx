import React from 'react'
import './css/Feed.css'
import Sidebar from '../../components/sidebar/Sidebar'

function Feed() {

  return (
    <div className='feed_container'>
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
      </div>
    </div>
  )
}

export default Feed
