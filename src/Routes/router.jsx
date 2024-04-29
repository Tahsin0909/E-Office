import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Employee_Salary from "../Components/Employee_Salary/Employee_Salary";
import PaySlip from "../Components/PaySlip/PaySlip";
import PayrollItems from "../Components/Payroll_Items/PayrollItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'',
                element: <Employee_Salary/>
            },
            {
                path:'/paySlip',
                element: <PaySlip/>
            },
            {
                path:'/payrollItem',
                element: <PayrollItems/>
            },
        ]
    },
]);