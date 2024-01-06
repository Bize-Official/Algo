import SideMenu from '../primeReact/main';
import { TWidget } from '../components/widget/Test-widget';
import { Widget } from '../components/widget/widget';

function Home() {
    return (
        <>
            <SideMenu />
            <TWidget />
            {/* <Widget /> */}
        </>
    )
}

export default Home;