import { MdLocalPrintshop } from "react-icons/md";
import { convertToWords } from "./dollarToWord";
const PaySlip = () => {
    // month and year 
    const newDate = new Date()
    const currentMonth = newDate.getMonth();
    const currentyear = newDate.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[currentMonth - 1];
    const salaryMonth = monthNames[currentMonth];

    // get employee data from local storage 
    const storedData = localStorage.getItem('employee');
    const employeeData = JSON.parse(storedData);

    // payslip number 
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
    const randomFourDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="md:p-4 py-2">

            <div className="flex items-center justify-between">
                {/* heading  */}
                <div>
                    <h1 className="text-2xl font-bold text-blue-700">Payslip</h1>
                    <p className="text-sm">E-Office / <a href="/paySlip">paySlip</a></p>
                </div>
                {/* print  */}
                <div className="flex items-center bg-gray-200 w-fit">
                    <p className="p-1 border hover:bg-white transition-all">CSB</p>
                    <p className="p-1 border hover:bg-white transition-all">PDF</p>
                    <MdLocalPrintshop className="p-1 border w-8 h-8 hover:bg-white transition-all" />
                </div>
            </div>
            {/* payslip  */}
            <div className="m-4 p-2 border rounded-md bg-zinc-50">
                <p className="font-bold text-lg underline text-center">PAYSLIP FOR THE MONTH OF {currentMonthName} {currentyear}</p>
                <div className="flex items-center justify-between mt-4">
                    {/* company data  */}
                    <div>
                        <p className="text-lg">My IT Solution</p>
                        <p>Ashkona, Airport</p>
                        <p>Dhaka- 1230, Bangladesh</p>
                    </div>
                    {/* payslip data  */}
                    <div>
                        <p className="text-xl font-bold">Payslip #{randomFourDigitNumber}</p>
                        <p>Salary Month: {salaryMonth}</p>
                    </div>
                </div>
                {/* employeee data  */}
                <div className="mt-6">
                    <p className="font-bold">{employeeData?.name}</p>
                    <p>{employeeData?.role}</p>
                    <p>Employee Id: {employeeData?.employee_id}</p>
                    <p>Joining Date: {employeeData?.join_date}</p>
                </div>
                {/* earning and deduction  */}
                <div className="mt-6 flex gap-4 items-center">
                    <div className="w-1/2">
                        <p className="font-bold text-lg">Earnings</p>
                        {/* earning table  */}
                        <div className="font-bold border rounded-md">
                            <div className="flex justify-between items-center p-1">
                                <p>Basic Salary</p>
                                <p>${employeeData?.salary}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>House Rent Allowance (H.R.A.)</p>
                                <p>$100</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>Conveyance</p>
                                <p>$100</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>Other Allowance</p>
                                <p>$100</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>Total Earnings</p>
                                <p>$100</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <p className="font-bold text-lg">Deduction</p>
                        {/* earning table  */}
                        <div className="font-bold border rounded-md">
                            <div className="flex justify-between items-center p-1">
                                <p>Tax Deducted at Source (T.D.S.)</p>
                                <p>$100</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>Provident Fund</p>
                                <p>$50</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>ESI</p>
                                <p>$50</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>Loan</p>
                                <p>$150</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center p-1">
                                <p>Other Deduction</p>
                                <p>$50</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="my-2"><span className="font-bold">Net Salary: </span>${employeeData?.salary} ({convertToWords(employeeData?.salary)})</p>
                {/* powerd by  */}
                <div className="flex items-center mt-10">
                    <p>Powered By</p>
                    <img className="w-20" src="https://i.ibb.co/hF5G0d0/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-1-removebg-prev.png" alt="e office icon" />
                </div>
            </div>
        </div>
    );
};

export default PaySlip;