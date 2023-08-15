import React from 'react'
import Like from './img/like.png'
import Share from './img/share.png'
import Download from './img/download.png'
import SunTV from './img/sun-tv.jpg'
import './css/Vedio.css'
import Description from '../../assets/description/Description'

function Vedio() {


  return (
    <div className='feed_container'>
      <div className="content px-5">
        <div className="video_details row w-100 px-5 mt-3">
          <div className="col-md-9">
            <iframe width="873" height="491" src="https://www.youtube.com/embed/0E1kVRRi6lk"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2 className="vedio_title">Beast - Official Trailer | Thalapathy Vijay | Sun Pictures | Nelson | Anirudh | Pooja Hegde</h2>
            <div className="row channel_detail_section">
              <div className="col-md-6 channel_main_details">
                <img src={SunTV} className='channel_img img-fluid' alt="" />
                <div className="channel">
                  <h5 className="channel_title">Sun TV</h5>
                  <p className="subscribers">23.5M subscribers</p>
                </div>
                <button className="subscribe_btn">Subscribe</button>
              </div>
              <div className="col-md-6 video_detail">
                <div className="sm_box">
                  <img src={Like} className='img-fluid' alt="" />
                  <p className='txt'>3.2M</p>
                </div>
                <div className="sm_box">
                  <img src={Share} alt="" className="img-fluid" />
                  <p className="txt">Share</p>
                </div>
                <div className="sm_box">
                  <img src={Download} alt="" className="img-fluid" />
                  <p className="txt">Download</p>
                </div>
              </div>
            </div>


            <div className="video_description">
              <p className="view_time">62M views  1 year ago</p>
              <Description
              txt = {`Watch the much-awaited official trailer from Thalapathy Vijay’s "BEAST" by Sun Pictures, Directed by Nelson Dilipkumar & Music by Anirudh Ravichander.
                    Movie Credits:

                    Star Cast : Vijay, Pooja Hegde, Selvaraghavan, Yogi Babu, Redin Kingsley, Bjorn Surrao, VTV Ganesh, Aparna Das, Shine Tom Chacko, Liliput Faruqui, Ankur Ajit Vikal & Others.

                    Produced by: Sun Pictures
                    Directed by: Nelson Dilipkumar
                    Cinematography: Manoj Paramahamsa
                    Editing by: R. Nirmal
                    Art: D.R.K. Kiran
                    Costume Design by: V. Sai, Pallavi Singh
                    Makeup: P. Nagarajan
                    VFX: Bejoy Arputharaj, Phantom-fx
                    Stunt: AnbAriv
                    Choreographer: Jani`}
              />
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}


export default Vedio
