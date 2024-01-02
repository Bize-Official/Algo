
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Panel from './Panel';
import { ToggleButton } from 'primereact/togglebutton';
import styles from './styles/Styles.module.css';
import BasicBar from './SideBar';


export default function SideMenu() {

    
    return (
        <>

            <nav className="navbar fixed-top navbar-expand-lg navbar-light top-navbar">
                <div className="container-fluid"> 
                    
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </nav>

            <BasicBar />

        </>
    )
}
        