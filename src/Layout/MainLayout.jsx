import { Outlet } from 'react-router-dom';
import SideBar from '../Components/Navbar/SideBar';

const MainLayout = () => {
    return (
        <div className='flex '>
            <SideBar/>
            <div>
                <h1>navbar</h1>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;