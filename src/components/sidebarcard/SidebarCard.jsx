import React from 'react'

function SidebarCard({Img, Txt, is_active, is_channel}) {
  const channelStyle = {
    padding: is_channel ? '8px 15px 8px 20px' :  '12px 15px 12px 20px' 
  }
  const channelText = {
    fontSize: is_channel && '13px'
  }
  return (
    <div className={is_active ? `button active` : 'button'} style={channelStyle}>
        <img src={Img} alt="home-icon" className={is_channel ? `channel` : `icon`} />
        <h4 className='text' style={channelText}>{Txt}</h4>
    </div>
  )
}

export default SidebarCard
