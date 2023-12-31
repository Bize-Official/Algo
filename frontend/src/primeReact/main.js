
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Panel from './side-menu';
import { ToggleButton } from 'primereact/togglebutton';


export default function SideMenu() {
    const [visible, setVisible] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <React.Fragment>
            <h2 style={{ marginBottom: 0 }}>Sidebar</h2>
        </React.Fragment>
    );
    
    return (
        <div className="card flex justify-content-center">
            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                
                <Panel/>
                
            </Sidebar>
            
                <Button icon={"pi pi-bars"} onClick={() => setVisible(true)} />
        </div>
    )
}
        