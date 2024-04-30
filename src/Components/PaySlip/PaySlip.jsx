
const PaySlip = () => {
    const storedData = localStorage.getItem('employee');
    const employeeData = JSON.parse(storedData);
    return (
        <div>
            Payslip
            <p>{employeeData?.name}</p>
        </div>
    );
};

export default PaySlip;