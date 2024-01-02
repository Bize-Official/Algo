
import React, { useState } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import './styles/styles.css';
import { Button } from 'primereact/button';



export default function BasicBar() {
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <>
            <div className='side-menu-button'>
                <input type="checkbox" id="checkbox" onClick={() => setShowSideMenu(!showSideMenu)} />
                <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
            </div>
            <div className={`side-menu ${showSideMenu ? '' : 'side-menu-closed'}`}>
                <ul className="menu-list">
                    <li className="item">
                        <Button icon="pi pi-home" severity="secondary" size="large" className='menu-item' raised />
                    </li>
                    <li className="item">
                        <Button icon="pi pi-home" severity="secondary" size="large" className='menu-item' raised />
                    </li>
                </ul>
            </div>
      </>
    );
  }
        