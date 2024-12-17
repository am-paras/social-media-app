import React, { useState, useContext }from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AuthContext } from '../../Context/AuthContext';
import './Navbar.scss';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <span>Socialbook</span>
        <HomeOutlinedIcon onClick = { () => window.location.href = '/'} style = {{cursor : "pointer"}}/>
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
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
