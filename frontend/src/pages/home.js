import SideMenu from '../primeReact/main';
import { TWidget } from '../components/widget/Test-widget';
import { Widget } from '../components/widget/widget';
import { PostTest } from '../components/widget/post';
import ProfileStatistics from '../components/widget/post-profile';

function Home() {
    return (
        <>
            <SideMenu />
            {/* <TWidget /> */}
            <PostTest />
            <TWidget />
            {/* <ProfileStatistics /> */}
            {/* <Widget /> */}
        </>
    )
}

export default Home;