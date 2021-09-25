import React from 'react'
import './topbar.css'
import { NotificationsNone,Language,Settings} from '@mui/icons-material';

const Topbar = () => {
    return (
        <>
        <div className="topbar">
            <div className="topbarWrapper">
               <div className="topLeft">
                 <span className="logo">admin</span>
                 </div> 
               <div className="topRight">
                 <div className="topbarIconsContainer">
                    <NotificationsNone/>
                    <span className = "topIconBag">2</span>

                 </div>
                 <div className="topbarIconsContainer">
                    <Language/>
                    <span className = "topIconBag">2</span>

                 </div>
                 <div className="topbarIconsContainer">
                    <Settings/>
                   

                 </div>
                 <img src="./images/IMG_20210517_100223_627.jpg" alt="avatar" className="topAvatar" />
               </div>
            </div>
        </div>
            
        </>
    )
}

export default Topbar
