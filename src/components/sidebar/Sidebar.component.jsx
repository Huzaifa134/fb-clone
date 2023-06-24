import React from 'react'
import './sidebar.style.css'
import SidebarOption from '../sidebaroptions/SidebarOption.component'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../state/StateProvider';

const Sidebar = () => {
  const [{user}] = useStateValue();
  return (
    
    <div className='sidebar'>
    
    <SidebarOption title={user.displayName} src={user.photoURL}/>
    <SidebarOption title="Friends" src="https://cdn4.iconfinder.com/data/icons/facebook-and-social-media-2/64/Facebook_and_Social_Media-11-512.png"/>
    <SidebarOption title="Groups" src="https://banner2.cleanpng.com/20180717/cek/kisspng-computer-icons-desktop-wallpaper-team-concept-5b4e0cd3819810.4507019915318417475308.jpg"/>
    <SidebarOption title="Feeds (Most Recent)" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png?_nc_eui2=AeF9EId01rBpU8cQg0dLy5tF9As6vsZg84r0Czq-xmDzihZ0gPpW8r9k_m4y-AaXhlQJDgsnKPxCVdiEVAfLystE"/>
    <SidebarOption title="Marketplace" src="https://banner2.cleanpng.com/20180326/eew/kisspng-computer-icons-online-shopping-business-app-store-market-5ab88717c051a6.9827701615220426477877.jpg"/>
    <SidebarOption title="Watch" src="https://cdn-icons-png.flaticon.com/512/4406/4406124.png"/>
    <SidebarOption title="Memories" src="https://cdn0.iconfinder.com/data/icons/facebook-feature-outline/32/facebook-18-512.png"/>
    <SidebarOption title="See More" Icon={ExpandMoreIcon} />
    </div>
    
  )
}

export default Sidebar