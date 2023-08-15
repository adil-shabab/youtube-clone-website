import React from 'react'
import Like from './img/like.png'
import Share from './img/share.png'
import Download from './img/download.png'
import SunTV from './img/sun-tv.jpg'
import './css/Vedio.css'
import Description from '../../assets/description/Description'
import Comment from '../../components/comment/Comment'
import Profile from './img/profile.jpg'
import Profile2 from './img/profile-2.jpg'
import Profile3 from './img/profile-3.jpg'
import Profile4 from './img/profile-4.jpg'
import Profile5 from './img/profile-5.jpg'

import Thumbnail1 from './img/thumbnail1.webp'
import Thumbnail2 from './img/thumbnail2.webp'
import Thumbnail3 from './img/thumbnail3.webp'
import Thumbnail4 from './img/thumbnail4.webp'
import Thumbnail5 from './img/thumbnail5.webp'
import Thumbnail6 from './img/thumbnail6.webp'
import RelatedCard from '../../components/relatedvideo/RelatedCard'

function Vedio() {

  

  return (
    <div className='feed_container'>
      <div className="content px-5">
        <div className="video_details row w-100 px-5 mt-3">
          <div className="col-md-8">


          <iframe
          width="830"
          height="491"
          src="https://www.youtube.com/embed/0E1kVRRi6lk?autoplay=1&mute=0" // Autoplay and mute
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>



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


            

            <div className="video_comments">
              <p className="comment_count">202,312 Comments</p>


              <Comment
                profileImage={Profile}
                username="@1mindvoicetamil"
                date="1 year ago"
                text="Another RECORD 🔥🔥"
                likeCount="558"
              />

              <Comment
                profileImage={Profile2}
                username="@hydrophotography"
                date="1 year ago"
                text="Beast was 8/10 for me. Minus points as expected more logic and wanted more romance and comedy scenes. Other than that, cinematography, music, action scenes and dance all were awesome. All the actors did their parts well. Thalapathy mass and screen presence 🔥🔥🔥 An enjoyable commercial entertainer you can watch with families 👌🏽💯"
                likeCount="88"
              />

              <Comment
                profileImage={Profile3}
                username="@nikhildaniel"
                date="8 months ago"
                text="Eppa paathalum pure goosebumps Thalapa🔥🔥"
                likeCount="112"
              />

              <Comment
                profileImage={Profile4}
                username="@tijotjoseph"
                date="5 months ago"
                text="Anirudh Ravichander just never misses, does he? His music is always on point. 🙌"
                likeCount="200"
              />

              <Comment
                profileImage={Profile5}
                username="@aslambot"
                date="2 days ago"
                text="Highest likes in Thalapathy movies 🔥🔥🔥 ithu beast mode 🔥😍"
                likeCount="55"
              />
             
             
              <Comment
                profileImage={Profile}
                username="@1mindvoicetamil"
                date="1 year ago"
                text="Another RECORD 🔥🔥"
                likeCount="558"
              />

              <Comment
                profileImage={Profile2}
                username="@hydrophotography"
                date="1 year ago"
                text="Beast was 8/10 for me. Minus points as expected more logic and wanted more romance and comedy scenes. Other than that, cinematography, music, action scenes and dance all were awesome. All the actors did their parts well. Thalapathy mass and screen presence 🔥🔥🔥 An enjoyable commercial entertainer you can watch with families 👌🏽💯"
                likeCount="88"
              />

              <Comment
                profileImage={Profile3}
                username="@nikhildaniel"
                date="8 months ago"
                text="Eppa paathalum pure goosebumps Thalapa🔥🔥"
                likeCount="112"
              />

              <Comment
                profileImage={Profile4}
                username="@tijotjoseph"
                date="5 months ago"
                text="Anirudh Ravichander just never misses, does he? His music is always on point. 🙌"
                likeCount="200"
              />

              <Comment
                profileImage={Profile5}
                username="@aslambot"
                date="2 days ago"
                text="Highest likes in Thalapathy movies 🔥🔥🔥 ithu beast mode 🔥😍"
                likeCount="55"
              />


            </div>
          </div>


          
          <div className="col-md-4">
            <div className="related_videos">
              


            <RelatedCard
            thumbnailSrc={Thumbnail2}
            videoTitle="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh"
            channelName="Sony Music India"
            views="64M"
            date="6 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail1}
            videoTitle="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
            channelName="Sun TV"
            views="28M"
            date="5 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail3}
            videoTitle="VIJAYudan Nerukku Ner - Exclusive Interview | Full Show | Thalapathy Vijay | Nelson | BEAST | Sun TV"
            channelName="Sun TV"
            views="1.8M"
            date="8 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail4}
            videoTitle="Jailer- Mohanlal | Mathew Bgm | HD full | Rajnikanth | Nelson | Rockstar Anirudh | BGM BOSS"
            channelName="BGM BOSS"
            views="230K"
            date="2 days ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail5}
            videoTitle="LEO - Glimpse of Antony Das | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
            channelName="Sony South Music"
            views="13M"
            date="2 weeks ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail6}
            videoTitle="Jagame Thandhiram - Bujji Video | Dhanush | Santhosh Narayanan | Karthik Subbaraj | Anirudh"
            channelName="Sony South Music"
            views="102M"
            date="2 year ago"
          />


            <RelatedCard
            thumbnailSrc={Thumbnail2}
            videoTitle="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh"
            channelName="Sony Music India"
            views="64M"
            date="6 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail1}
            videoTitle="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
            channelName="Sun TV"
            views="28M"
            date="5 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail3}
            videoTitle="VIJAYudan Nerukku Ner - Exclusive Interview | Full Show | Thalapathy Vijay | Nelson | BEAST | Sun TV"
            channelName="Sun TV"
            views="1.8M"
            date="8 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail4}
            videoTitle="Jailer- Mohanlal | Mathew Bgm | HD full | Rajnikanth | Nelson | Rockstar Anirudh | BGM BOSS"
            channelName="BGM BOSS"
            views="230K"
            date="2 days ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail5}
            videoTitle="LEO - Glimpse of Antony Das | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
            channelName="Sony South Music"
            views="13M"
            date="2 weeks ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail6}
            videoTitle="Jagame Thandhiram - Bujji Video | Dhanush | Santhosh Narayanan | Karthik Subbaraj | Anirudh"
            channelName="Sony South Music"
            views="102M"
            date="2 year ago"
          />


            <RelatedCard
            thumbnailSrc={Thumbnail2}
            videoTitle="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh"
            channelName="Sony Music India"
            views="64M"
            date="6 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail1}
            videoTitle="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
            channelName="Sun TV"
            views="28M"
            date="5 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail3}
            videoTitle="VIJAYudan Nerukku Ner - Exclusive Interview | Full Show | Thalapathy Vijay | Nelson | BEAST | Sun TV"
            channelName="Sun TV"
            views="1.8M"
            date="8 months ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail4}
            videoTitle="Jailer- Mohanlal | Mathew Bgm | HD full | Rajnikanth | Nelson | Rockstar Anirudh | BGM BOSS"
            channelName="BGM BOSS"
            views="230K"
            date="2 days ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail5}
            videoTitle="LEO - Glimpse of Antony Das | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
            channelName="Sony South Music"
            views="13M"
            date="2 weeks ago"
          />
          <RelatedCard
            thumbnailSrc={Thumbnail6}
            videoTitle="Jagame Thandhiram - Bujji Video | Dhanush | Santhosh Narayanan | Karthik Subbaraj | Anirudh"
            channelName="Sony South Music"
            views="102M"
            date="2 year ago"
          />



            </div>
          </div>



        </div>
      </div>
    </div>
  )
}


export default Vedio
