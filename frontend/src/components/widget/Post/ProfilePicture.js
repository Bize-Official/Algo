import { useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import "./postStyle.css";


export default function ProfilePicture() {
    const menu = useRef(null);
    const items = [
        { label: 'Profile', icon: 'pi pi-fw pi-user' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' },
        { label: 'Report an issue', icon: 'pi pi-fw pi-flag' },
        { separator: true},
        { label: 'Log out', icon: 'pi pi-sign-out' }
    ];
    
    return (
        <>
            
            <div className="card flex justify-content-center">
                <Menu className='p-menu-list' model={items} popup ref={menu} />
            </div>
            <div className='navbar-icon'>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" onClick={(e) => menu.current.toggle(e)} label="Show" className="mr-2" shape="circle" />
            </div>
        </>
    )
}


