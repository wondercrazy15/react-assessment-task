import React from "react";
import { NavLink } from "react-router-dom";
import styles from './header.styles.module.scss'
import { HomeIcon, MessageIcon, NotificationIcon } from "../../../assets/icons";

function Header() {
  return (
      <div className="container">
        <div className="row ">
          <nav className={`navbar navbar-expand-lg bg-white p-3 mb-3 align-items-center ${styles.headerNav}`}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item d-flex align-items-center">
                <HomeIcon />
                <NavLink className={`nav-link`} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link`} to="/employee">Employee</NavLink>
              </li>
            </ul>
            <ul className="d-flex list-none p-0 mb-0"> 
              <li >
                  <MessageIcon />
                  <span>Messages</span>
              </li>
              <li>
                  <NotificationIcon />
                  <span>Notification</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
};

export default Header;
