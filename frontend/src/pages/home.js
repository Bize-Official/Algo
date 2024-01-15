import SideMenu from '../primeReact/main';
import { TWidget } from '../components/widget/Test-widget';
import { Widget } from '../components/widget/widget';
import ProfileStatistics from '../components/widget/post-profile';
import { OfficialPost } from '../components/widget/Post/post';

function Home() {
    return (
        <>
            <SideMenu />
            {/* <TWidget /> */}
            <OfficialPost />
            <TWidget />
            {/* <ProfileStatistics /> */}
            {/* <Widget /> */}
        </>
    )
}

export default Home;