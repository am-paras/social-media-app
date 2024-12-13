import React, { useState }from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import './Navbar.scss';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <span>Socialbook</span>
        <HomeOutlinedIcon />
        {darkMode ? <DarkModeOutlinedIcon onClick = {() => setDarkMode(!darkMode)}/> : <WbSunnyOutlinedIcon  onClick = {() => setDarkMode(!darkMode)}/>}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fashallendesign.co.uk%2Fblog%2F13-placeholder-avatar-and-image-websites&psig=AOvVaw3RmBd_Y8FN9_h1n2qviW_S&ust=1734154976440000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiHge2EpIoDFQAAAAAdAAAAABAE" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
