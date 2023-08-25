import React, { useState, useContext } from 'react'
import './css/Sidebar.css'
import SidebarCard from '../sidebarcard/SidebarCard'
import Home from './img/icons/home.png'
import Explore from './img/icons/explore.png'
import Subscription from './img/icons/subscribe.png'
import History from './img/icons/history.png'
import YourVideos from './img/icons/your-videos.png'
import Downloads from './img/icons/download.png'
import Liked from './img/icons/like.png'
import WatchLater from './img/icons/watch-later.png'
import Settings from './img/icons/settings.png'
import Report from './img/icons/report.png'
import Help from './img/icons/help.png'
import Feedback from './img/icons/feedback.png'
import AkilNrd from './img/channels/akil-nrd.jpg'
import Brototype from './img/channels/brototype.jpg'
import Ap from './img/channels/ap.jpg'
import Arjou from './img/channels/arjou.jpg'
import ArunPradeep from './img/channels/arun-pradeep.jpg'
import Asianet from './img/channels/asianet.jpg'
import CallmeShazzam from './img/channels/callme-shazzam.jpg'
import DebugMedia from './img/channels/debug-media.jpg'
import EnglishHouse from './img/channels/english-house.jpg'
import FridayFilmHouse from './img/channels/friday-film-house.jpg'
import GingerMedia from './img/channels/ginger-media.jpg'
import Jayaraj from './img/channels/jayaraj.jpg'
import JsMastery from './img/channels/js-mastery.jpg'
import LifeShazzam from './img/channels/life-shazzam.jpg'
import Mazhavil from './img/channels/mazhavil.jpg'
import MileStone from './img/channels/milestone-makers.jpg'
import MrLink from './img/channels/mr-link.jpg'
import Nick from './img/channels/nick.jpg'
import SecretAgent from './img/channels/secret-agent.jpg'
import Sony from './img/channels/sony.jpg'
import ThinkMusic from './img/channels/think-music.jpg'
import Thoppi from './img/channels/thoppi.jpg'
import Traversy from './img/channels/traversy.jpg'
import Umer from './img/channels/umer.jpg'
import VarietyMedia from './img/channels/variety-media.jpg'
import ArrowDown from './img/icons/arrow-down.png'
import ArrowUp from './img/icons/arrow-up.png'
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext'




function Sidebar() {


  const [showMore, setShowMore] = useState(true);
  const [showMoreTxt, setShowMoreTxt] = useState("Show More");

  const navigate = useNavigate();


  const {setSelectedItem, selectedItem} = useContext(MyContext)


  const handleClickShowMore = () => {
    setShowMore(!showMore);
      if (showMore) {
        setShowMoreTxt("Show Less");
      } else {
        setShowMoreTxt("Show More");
      }
  }


  return (
    <div className='sidebar'>
        <div onClick={()=>{
          setSelectedItem("New Indian Videos")
          navigate("/")
        }}>
          <SidebarCard Img={Home} Txt="Home" is_active={true} is_channel={false} />
        </div>
        <SidebarCard Img={Explore} Txt="Explore" is_active={false} is_channel={false} />
        <SidebarCard Img={Subscription} Txt="Subscription" is_active={false} is_channel={false} />

        <div className="line"></div>

        <SidebarCard Img={History} Txt="History" is_active={false} is_channel={false} />
        <SidebarCard Img={YourVideos} Txt="Your Videos" is_active={false} is_channel={false} />
        <SidebarCard Img={Downloads} Txt="Downloads" is_active={false} is_channel={false} />
        <SidebarCard Img={Liked} Txt="Liked Videos" is_active={false} is_channel={false} />
        <SidebarCard Img={WatchLater} Txt="Watch Later" is_active={false} is_channel={false} />

        <div className="line"></div>

        <div>
            <div onClick={()=>{
              navigate("/channel/UCLa-ASLMIpWEOlZsJ4_CLUg")
            }}>
              <SidebarCard Img={AkilNrd} Txt="Akhil Nrd" is_active={false} is_channel={true} />
            </div>

            <div onClick={()=>{
              navigate("/channel/UCoGHeFY7jE2OB_TJS_87MOA")
            }}>
              <SidebarCard Img={Brototype} Txt="Brototype Mala..." is_active={false} is_channel={true} />
            </div>

            <div onClick={()=>{
              navigate("/channel/UCnYvT1git-T2jcn_wT1utjQ")
            }}>
              <SidebarCard Img={SecretAgent} Txt="Secret Agent" is_active={false} is_channel={true} />
            </div>


            <div onClick={()=>{
              navigate("/channel/UC-Uaz9tVnQS-wiOF1woadGA")
            }}>
              <SidebarCard Img={Ap} Txt="apimalayalamcomedy" is_active={false} is_channel={true} />
            </div>

            <div onClick={()=>{
              navigate("/channel/UCmXmlB4-HJytD7wek0Uo97A")
            }}>
              <SidebarCard Img={JsMastery} Txt="JavaScript Mastery" is_active={false} is_channel={true} />
            </div>

            <div onClick={()=>{
              navigate("/channel/UC1udfRC-_7vxFCrRiUG0Ppg")
            }}>
              <SidebarCard Img={MrLink} Txt="Mr.Link" is_active={false} is_channel={true} />
            </div>

            <div onClick={()=>{
              navigate("/channel/UCFZqtti2VoNdgeLklh48Liw")
            }}>
              <SidebarCard Img={VarietyMedia} Txt="Variety Media" is_active={false} is_channel={true} />
            </div>
            

            <div onClick={()=>{
              navigate("/channel/UCuZYQQGB5UhzZOS6YucIV9Q")
            }}>
              <SidebarCard Img={Umer} Txt="Umer Abdussalam" is_active={false} is_channel={true} />
            </div>

            <div className={showMore && 'd-none'}>


              <div onClick={()=>{
                navigate("/channel/UCp_r6Z-Oh0YTf-ym71z5Nqg")
              }}>
                <SidebarCard Img={Asianet} Txt="Asianet" is_active={false} is_channel={true} />
              </div>  
              
              <div onClick={()=>{
                navigate("/channel/UCLbdVvreihwZRL6kwuEUYsA")
              }}>
                <SidebarCard Img={ThinkMusic} Txt="Think Music India" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCAIhHcOFcJSsj-16kc_y4fw")
              }}>
                <SidebarCard Img={MileStone} Txt="Milestone Makers" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCUPD0jQo-EP0B1Nf4uzeIMA")
              }}>
                <SidebarCard Img={Mazhavil} Txt="Mazhavil Manorama" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCNhaliLwhGH9wX3pe9bFTbA")
              }}>
                <SidebarCard Img={LifeShazzam} Txt="LifeofShazzam" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCDEEw71KgDrxG61_p7U58ZA")
              }}>
                <SidebarCard Img={Jayaraj} Txt="Jayaraj G Nath" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UC9I8DWhqm5q7U_4fhfDwZIw")
              }}>
                <SidebarCard Img={Arjou} Txt="Arjyou" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCqeTj_QAnNlmt7FwzNwHZnA")
              }}>
                <SidebarCard Img={Sony} Txt="Sonny Sangha" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCAtHvaOVgCf28z79vUJm-bg")
              }}>
                <SidebarCard Img={ArunPradeep} Txt="Arun Pradeep" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UC29ju8bIPH5as8OGnQzwJyA")
              }}>
                <SidebarCard Img={Traversy} Txt="Traversy Media" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCUXKQ3MLWpRldWiY9C-c25A")
              }}>
                <SidebarCard Img={EnglishHouse} Txt="English House" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UC4XA9DBTDZ0mF4-sqnJRtJg")
              }}>
                <SidebarCard Img={Nick} Txt="Nick Vlogs" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UC0XCrZT2-n_Yyj4gAePKekg")
              }}>
                <SidebarCard Img={Thoppi} Txt="Mrz Thoppi" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCLRIGBQ3iYEvQ6zqz8mWGoQ")
              }}>
                <SidebarCard Img={GingerMedia} Txt="Ginger Media" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UC9MQp8a5uhaIosZPHaoqEXQ")
              }}>
                <SidebarCard Img={CallmeShazzam} Txt="CallMe Shazzam" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCv65_DW-OzwBgJw99zWJy3g")
              }}>
                <SidebarCard Img={FridayFilmHouse} Txt="Friday Film House" is_active={false} is_channel={true} />
              </div>

              <div onClick={()=>{
                navigate("/channel/UCO3nZaqZVqoGKld5nGeRVJw")
              }}>
                <SidebarCard Img={DebugMedia} Txt="Debug Media" is_active={false} is_channel={true} />
              </div>
            </div>
        </div>


        <div onClick={handleClickShowMore} className='link' href="">
          <SidebarCard Img={showMore ? ArrowDown : ArrowUp} Txt={showMoreTxt} is_active={false} is_channel={true} is_button={true}/>
        </div>

        <div className="line"></div>
        
        <SidebarCard Img={Settings} Txt="Settings" is_active={false}  />
        <SidebarCard Img={Report} Txt="Report History" is_active={false}  />
        <SidebarCard Img={Help} Txt="Help" is_active={false}  />
        <SidebarCard Img={Feedback} Txt="Send Feedback" is_active={false}  />

        <div className="line"></div>

        <p className='mt-4 footer_txt'>About Press Copyright Contact us Creator Advertise Developers.</p>
        <p className='footer_txt'>Terms Privacy Policy & Safety How YouTube works Test new features</p>

        <span className="copy_right">&#169; 2023 Google LLC</span>

    </div>
  )
}

export default Sidebar
