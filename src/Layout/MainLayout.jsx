import { Outlet } from 'react-router-dom';
import SideBar from '../Components/Navbar/SideBar';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='flex '>
            <SideBar />
            <div className='w-full h-full'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;