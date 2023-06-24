import { Avatar } from '@mui/material'
import './SidebarOption.style.css'
import React from 'react'

const SidebarOption = (props) => {
    const {src, Icon , title} = props
  return (
    
    <div className='sidebarRow'>
    {src && <Avatar src={src} /> }
    {Icon && <Icon/>}
    <p>{title}</p>
    </div>

    
    
  )
}

export default SidebarOption