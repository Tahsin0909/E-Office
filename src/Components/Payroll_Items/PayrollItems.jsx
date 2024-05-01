import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Additions from "./TableContent/Additions";

const PayrollItems = () => {
    return (
        <div className="md:p-4 py-2">

            {/* heading  */}
            <div>
                <h1 className="text-2xl font-bold text-blue-700">Payroll Items</h1>
                <p className="text-sm">E-Office / <a href="/payrollItem">payrollItem</a></p>
            </div>
            {/* tabs  */}
            <div>
                <Tabs>
                    <TabList className={'flex items-center mb-4 mt-8'}>
                        <Tab className={"border-b-4  focus:border-blue-700 px-4 py-3 text-lg focus:font-bold transition-all hover:bg-gray-200 "}>Additions</Tab>
                        <Tab className={"border-b-4  focus:border-blue-700 px-4 py-3 text-lg focus:font-bold transition-all hover:bg-gray-200"}>Overtime</Tab>
                        <Tab className={"border-b-4  focus:border-blue-700 px-4 py-3 text-lg focus:font-bold transition-all hover:bg-gray-200"}>Deductions</Tab>
                    </TabList>

                    <TabPanel>
                        <Additions props={'Add Additions'} />
                    </TabPanel>
                    <TabPanel>
                        <Additions props={'Add Overtime'}/>
                    </TabPanel>
                    <TabPanel>
                        <Additions props={'Add Deductions'}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default PayrollItems;