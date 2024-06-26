import { Link } from "react-router-dom";
import SharedBtn from "../Shared/button/SharedBtn";
import { useEffect, useState } from "react";
const Employee_Salary = () => {
    const [employeeData, SetEmployeeData] = useState(null)
    const [loading, SetLoading] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [pagePerView, SetPagePerView] = useState(5)
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => SetEmployeeData(data))
        SetLoading(false)
    }, [pagePerView])
    console.log(pagePerView);
    const handlLocalStorage = (Data) => {
        const stringifyData = JSON.stringify(Data)
        localStorage.setItem('employee', stringifyData)
    }
    return (
        <div className=" md:p-4 py-2">
            {/* heading  */}
            <h1 className="text-2xl font-bold text-blue-700">Employee Salary</h1>
            <p className="text-sm">E-Office / <a href="/">Employee Salary</a></p>
            <div className="flex justify-end">
                <SharedBtn text="Add Salary" />
            </div>
            {/* functionality  */}
            <div className="flex items-center gap-2 mt-4">
                {/* search input  */}
                <div>
                    <div className="">
                        <input
                            placeholder="Search"
                            type="text"
                            name="inputname"
                            className=" w-40 h-10 rounded-md py-1.5 px-2  border-2 focus:border-blue-400  focus:outline-none"
                        />
                    </div>
                </div>


                {/* purchase input field  */}
                <select className=" px-1 w-40 h-10 rounded-md  border-2 focus:border-blue-400 focus:outline-none">
                    <option className="rounded-md text-white bg-blue-700" disabled selected>Purchase By</option>
                    <option className="rounded-md text-white bg-blue-700"  >Manager</option>
                    <option className="rounded-md text-white bg-blue-700" >Employee</option>
                </select>

                {/* pAID BY INPUT input field  */}
                <select className=" px-1 w-40 h-10 rounded-md  border-2 focus:border-blue-400 focus:outline-none">
                    <option className="rounded-md text-white bg-blue-700" disabled selected>Paid By</option>
                    <option className="rounded-md text-white bg-blue-700"  >Cash</option>
                    <option className="rounded-md text-white bg-blue-700" >Cheque</option>
                </select>
                {/* date  */}
                <div>
                    <input type="text"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                        placeholder="From" className="px-1 w-40 h-10 rounded-md border-2 focus:border-blue-400 focus:outline-none" />

                </div>
                <div>
                    <input type="text"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                        placeholder="To" className="px-1 w-40 h-10 rounded-md border-2 focus:border-blue-400 focus:outline-none" />

                </div>

                <button type='button' className="flex items-center justify-center py-3 rounded-full bg-blue-500 hover:bg-blue-600 px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" className="fill-white">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                </button>
            </div>
            {/* employee table   */}
            <div className="overflow-x-auto py-8">
                <table className="min-w-full bg-white font-[sans-serif]">
                    <thead className="whitespace-nowrap">
                        <tr>
                            <th className="pl-6 w-8">
                                <input id="checkbox" type="checkbox" className="hidden peer" />
                                <label htmlFor="checkbox"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Employee ID
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Join Date
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Role
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Active
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Salary
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Payslip
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {loading ? <p className="flex justify-center items-center">Loading..</p> :
                            employeeData?.slice(0, pagePerView).map(data => <tr key={data.id} className="odd:bg-blue-50">
                                <td className="pl-6 w-8">
                                    <input id="checkbox1" type="checkbox" className="hidden peer" />
                                    <label htmlFor="checkbox1"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    <div className="flex items-center cursor-pointer">
                                        <img src={data.img} className="w-9 h-9 rounded-full shrink-0" />
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{data.name}</p>
                                            <p className="text-xs text-gray-400">{data.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    {data.employee_id}
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    {data.join_date}
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    {data.role}
                                </td>
                                <td className="px-6 py-3">
                                    <label className="relative cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div
                                            className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]">
                                        </div>
                                    </label>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    {data.salary}
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    <Link onClick={() => handlLocalStorage(data)} className=" btn-link" to={'paySlip'}>Payslip</Link>
                                </td>
                                <td className="px-6 py-3">
                                    <button className="mr-4" title="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-blue-500 hover:fill-blue-700"
                                            viewBox="0 0 348.882 348.882">
                                            <path
                                                d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                                data-original="#000000" />
                                            <path
                                                d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                    <button className="mr-4" title="Delete">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                data-original="#000000" />
                                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <div className="md:flex mt-4 px-6">
                    <p className="text-sm text-gray-400 flex-1">Showind 1 to 5 of 10 entries</p>
                    <div className="flex items-center max-md:mt-4">
                        <p className="text-sm text-gray-400">Display</p>
                        <select onChange={(e) => SetPagePerView(e.target.value)} className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <ul className="flex space-x-1 ml-2">
                            <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500" viewBox="0 0 55.753 55.753">
                                    <path
                                        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        data-original="#000000" />
                                </svg>
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                                1
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                                2
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                                3
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                                4
                            </li>
                            <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 rotate-180" viewBox="0 0 55.753 55.753">
                                    <path
                                        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        data-original="#000000" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee_Salary;