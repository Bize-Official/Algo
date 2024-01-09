
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Panel from './Panel';
import { ToggleButton } from 'primereact/togglebutton';
import styles from './styles/Styles.module.css';
import BasicBar from './SideBar';
import  Navbar from './navbar';

export default function SideMenu() {

    
    return (
        <>
            <Navbar />
            

            <BasicBar />
        </>
    )
}
        