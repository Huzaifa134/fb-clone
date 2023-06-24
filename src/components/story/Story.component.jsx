import { Avatar } from '@mui/material'
import React from 'react'
import './Story.style.css'

const Story = (props) => {
    const {ImageUrl ,HeaderImage,title} = props
  return (
 <div className='story' style={{backgroundImage:`url(${ImageUrl})`}}>  

 <Avatar src={HeaderImage}/>
 <h4>{title}</h4>
 </div>
  )
}

export default Story