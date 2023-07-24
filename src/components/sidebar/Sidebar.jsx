import React from 'react'
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




function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarCard Img={Home} Txt="Home" is_active={true} is_channel={false} />
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
            <SidebarCard Img={AkilNrd} Txt="Akhil Nrd" is_active={false} is_channel={true} />
            <SidebarCard Img={Brototype} Txt="Brototype Mala..." is_active={false} is_channel={true} />
            <SidebarCard Img={SecretAgent} Txt="Secret Agent" is_active={false} is_channel={true} />
            <SidebarCard Img={Ap} Txt="apimalayalamcomedy" is_active={false} is_channel={true} />
            <SidebarCard Img={JsMastery} Txt="JavaScript Mastery" is_active={false} is_channel={true} />
            <SidebarCard Img={MrLink} Txt="Mr.Link" is_active={false} is_channel={true} />
            <SidebarCard Img={VarietyMedia} Txt="Variety Media" is_active={false} is_channel={true} />
            <SidebarCard Img={Umer} Txt="Umer Abdussalam" is_active={false} is_channel={true} />


            <div className='d-none'>
                <SidebarCard Img={Asianet} Txt="Asianet" is_active={false} is_channel={true} />
                <SidebarCard Img={ThinkMusic} Txt="Think Music India" is_active={false} is_channel={true} />
                <SidebarCard Img={MileStone} Txt="Milestone Makers" is_active={false} is_channel={true} />
                <SidebarCard Img={Mazhavil} Txt="Mazhavil Manorama" is_active={false} is_channel={true} />
                <SidebarCard Img={LifeShazzam} Txt="LifeofShazzam" is_active={false} is_channel={true} />
                <SidebarCard Img={Jayaraj} Txt="Jayaraj G Nath" is_active={false} is_channel={true} />
                <SidebarCard Img={Arjou} Txt="Arjyou" is_active={false} is_channel={true} />
                <SidebarCard Img={Sony} Txt="Sonny Sangha" is_active={false} is_channel={true} />
                <SidebarCard Img={ArunPradeep} Txt="Arun Pradeep" is_active={false} is_channel={true} />
                <SidebarCard Img={Traversy} Txt="Traversy Media" is_active={false} is_channel={true} />
                <SidebarCard Img={EnglishHouse} Txt="English House" is_active={false} is_channel={true} />
                <SidebarCard Img={Nick} Txt="Nick Vlogs" is_active={false} is_channel={true} />
                <SidebarCard Img={Thoppi} Txt="Mrz Thoppi" is_active={false} is_channel={true} />
                <SidebarCard Img={GingerMedia} Txt="Ginger Media" is_active={false} is_channel={true} />
                <SidebarCard Img={CallmeShazzam} Txt="CallMe Shazzam" is_active={false} is_channel={true} />
                <SidebarCard Img={FridayFilmHouse} Txt="Friday Film House" is_active={false} is_channel={true} />
                <SidebarCard Img={DebugMedia} Txt="Debug Media" is_active={false} is_channel={true} />
            </div>
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
