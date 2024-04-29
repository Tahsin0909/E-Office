import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
    // state for drawer toogle 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // drawer handle 
    const handleDrawer = () => {
        setIsDrawerOpen(false);
    }
    const NavOptions = () => {
        return (
            <div className="flex flex-col gap-4 lg:text-lg ">
                <img className="md:w-40 w-20" src="https://i.ibb.co/hF5G0d0/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-1-removebg-prev.png" alt="e office icon" />
                <NavLink onClick={handleDrawer}
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-blue-600 " : isPending ? "pending" : "text-black"}
                >
                    Employee Salary
                </NavLink>
                <NavLink onClick={handleDrawer}
                    to={`/paySlip`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-blue-600 " : isPending ? "pending" : "text-black"}
                >
                    Payslip
                </NavLink>
                <NavLink onClick={handleDrawer}
                    to={`/payrollItem`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-blue-600 " : isPending ? "pending" : "text-black"}
                >
                    Payroll
                </NavLink>
            </div>
        );
    };
    return (

        <div className="border p-4 h-[100vh]">

            {/* // large and medium devices  */}
            <div className="hidden sm:flex">
                <NavOptions />
            </div>
            {/* small devices  */}
            <div className="drawer sm:hidden">
                <input id="my-drawer" type="checkbox" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                    <label htmlFor="my-drawer" className=" drawer-button"><FiMenu /></label>
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

export default Navbar;