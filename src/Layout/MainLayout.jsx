import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='flex gap-4 max-w-screen-xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;