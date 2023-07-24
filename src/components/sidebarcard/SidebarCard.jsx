import React from 'react'

function SidebarCard({Img, Txt, is_active}) {
  return (
    <div className={is_active ? `button active` : 'button'}>
        <img src={Img} alt="home-icon" className='icon' />
        <h4 className='text'>{Txt}</h4>
    </div>
  )
}

export default SidebarCard
