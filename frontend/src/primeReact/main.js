
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Panel from './Panel';
import { ToggleButton } from 'primereact/togglebutton';
import styles from './styles/Styles.module.css';
import BasicBar from './SideBar';


export default function SideMenu() {
    const [showSideMenu, setShowSideMenu] = useState(false);

    
    return (
        <>
            {/* <nav className="top-navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </nav> */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark top-navbar">
            <div className="container-fluid"> 
                
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            </nav>

            <button className='btn btn-primary side-menu-button' onClick={() => setShowSideMenu(!showSideMenu)}>Hello</button>
            <BasicBar show={showSideMenu}/>

        </>
    )
}
        