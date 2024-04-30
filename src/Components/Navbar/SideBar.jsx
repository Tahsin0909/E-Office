import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const SideBar = () => {
    // state for drawer toogle 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // drawer handle 
    const handleDrawer = () => {
        setIsDrawerOpen(false);
    }
    const NavOptions = () => {
        return (
            <div className="flex flex-col gap-4 lg:text-lg w-40">
                <img className="md:w-40 w-20" src="https://i.ibb.co/hF5G0d0/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-1-removebg-prev.png" alt="e office icon" />
                <NavLink onClick={handleDrawer}
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-white  rounded-md  p-1 bg-blue-700 transition-colors" : isPending ? "pending p-1" : "text-black "}
                >
                    Employee Salary
                </NavLink>
                <NavLink onClick={handleDrawer}
                    to={`/paySlip`}
                    className={({ isActive, isPending }) =>
                    isActive ? "text-white  rounded-md  p-1 bg-blue-700 transition-colors" : isPending ? "pending p-1" : "text-black "}
                >
                    Payslip
                </NavLink>
                <NavLink onClick={handleDrawer}
                    to={`/payrollItem`}
                    className={({ isActive, isPending }) =>
                    isActive ? "text-white  rounded-md  p-1 bg-blue-700 transition-colors" : isPending ? "pending p-1" : "text-black "}
                >
                    Payroll
                </NavLink>
            </div>
        );
    };
    return (

        <div className=" p-4 md:h-[100vh] md:bg-slate-200">

            {/* // large and medium devices  */}
            <div className="hidden sm:flex">
                <NavOptions />
            </div>
            {/* small devices  */}
            <div className="drawer sm:hidden">
                <input id="my-drawer" type="checkbox" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                    <label htmlFor="my-drawer" className=" drawer-button"><FiMenu size={25}/></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[50vw] min-h-full bg-base-200 text-base-content">
                        <NavOptions />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;