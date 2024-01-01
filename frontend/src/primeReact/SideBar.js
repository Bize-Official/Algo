
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import './styles/styles.css';
import { Button } from 'primereact/button';



export default function BasicBar({ show }) {
    return (
        
        <div className={`side-menu ${show ? '' : 'side-menu-closed'}`}>
          <ul>
            <li>
                <Button icon="pi pi-home" severity="secondary" size="large" className='menu-item' raised />
            </li>
            <li>
                <Button icon="pi pi-home" severity="secondary" size="large" className='menu-item' raised />
            </li>
          </ul>
          {/* Possible additional code not visible in the image */}
        </div>
      );

    
}
        