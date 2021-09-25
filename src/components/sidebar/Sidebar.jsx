import React from "react";
import "./sidebar.css";
import { LineStyle ,Timeline,TrendingUp, PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItems active">
                <LineStyle className="sidebarIcons" />
                Home
              </li>
              <li className="sidebarListItems">
                <Timeline className="sidebarIcons"/>
                Analytics
              </li>
              <li className="sidebarListItems">
                <TrendingUp className="sidebarIcons"/>
                Sales
              </li>
            </ul>

            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItems">
                <PermIdentity className="sidebarIcons" />
                User
              </li>
              <li className="sidebarListItems">
                <Storefront className="sidebarIcons"/>
                Products
              </li>
              <li className="sidebarListItems">
                <AttachMoney className="sidebarIcons"/>
                Transaction
              </li>
              <li className="sidebarListItems">
                <BarChart className="sidebarIcons"/>
                Reports
              </li>
            </ul>

            <h3 className="sidebarTitle">Notifcations</h3>
            <ul className="sidebarList">
              <li className="sidebarListItems">
                <MailOutline className="sidebarIcons" />
                Mail
              </li>
              <li className="sidebarListItems">
                <DynamicFeed className="sidebarIcons"/>
                Feedback
              </li>
              <li className="sidebarListItems">
                <ChatBubbleOutline className="sidebarIcons"/>
                Messages
              </li>
            </ul>

            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItems">
                <WorkOutline className="sidebarIcons" />
                Manage
              </li>
              <li className="sidebarListItems">
                <Timeline className="sidebarIcons"/>
                Analytics
              </li>
              <li className="sidebarListItems">
                <Report className="sidebarIcons"/>
                Report
              </li>
            </ul>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
