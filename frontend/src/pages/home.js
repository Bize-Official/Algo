import SideMenu from '../primeReact/main';
import { TWidget } from '../components/widget/Test-widget';
import { Widget } from '../components/widget/widget';
import { PostTest } from '../components/widget/post';

function Home() {
    return (
        <>
            <SideMenu />
            {/* <TWidget /> */}
            <PostTest />
            {/* <Widget /> */}
        </>
    )
}

export default Home;