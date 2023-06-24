import React from "react";
import  './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useStateValue } from "../state/StateProvider";

const Header = () => {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
      <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
        <img
          src="https://i.pinimg.com/originals/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.png"
          alt="fb-logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header__option">
          <GroupIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h5>{user.displayName}</h5>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>

    
      </div>
    </div>
  );
};

export default Header;
