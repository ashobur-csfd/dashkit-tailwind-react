import { useState } from "react";
import { basicTableData } from "../../data/table";

export default function DataTable(){

    // code show
    const [showCode, setShowCode] = useState({
        basicTable: false,
        borderTable: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    return (
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card">
                    <h2 className="card-title">Data Table Component</h2>
                </div>
                <div className="grid grid-cols-12">
                    {/* INITIALIZE CSS CLASS */}
                    <div className="hidden">
                        <div className="self-center md:col-span-6 md:place-self-end lg:col-span-full inline-block w-auto ml-2 dark:bg-dark-card-two dark:text-white align-middle"></div>
                        <div className="hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"></div>
                        <div className="text-slate-300 border-slate-300 dark:!bg-gray-400 dark:text-slate-300 bg-slate-200/50 first:rounded-l-lg last:rounded-r-lg"></div>
                        <div className=" dark:bg-gray-700 dark:!rounded-none transition-all duration-150 ease-linear [&.selected]:bg-[#F2F4F9] dark:[&.selected]:bg-dark-icon"></div>
                        <div className="group-[.bordered]:rounded-none group-[.bordered]:border group-[.bordered]:border-gray-200 dark:group-[.bordered]:border-dark-border"></div>
                    </div>
                    {/* INITIALIZE CSS CLASS */}
                    <div className="tablejs sr-only size-0"></div>
                    {/* BASIC DATA TABLE */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Basic Data Table</h3>
                                <button type="button" onClick={()=>toggleCodeView('basicTable')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.basicTable ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 space-y-4 ${showCode.basicTable ? 'hidden':''}`}>
                                <table id="basicDataTable">
                                    <thead>
                                        <tr>
                                            <th className="bg-[#B2E8D9]">Name</th>
                                            <th className="bg-[#B2E8D9]">Position</th>
                                            <th className="bg-[#B2E8D9]">Office</th>
                                            <th className="bg-[#B2E8D9]">Age</th>
                                            <th className="bg-[#B2E8D9]">Start date</th>
                                            <th className="bg-[#B2E8D9]">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                                        {basicTableData && basicTableData?.map((employee, idx) => (
                                            <tr key={idx}>
                                                <td>{employee?.name}</td>
                                                <td>{employee?.position}</td>
                                                <td>{employee?.office}</td>
                                                <td>{employee?.age}</td>
                                                <td>{employee?.date}</td>
                                                <td>{employee?.salary}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.basicTable ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`Sorry we can't show the huge data table`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* BORDERED SELECTION DELETION DATA TABLE */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Bordered Data Table</h3>
                                <button type="button" onClick={()=>toggleCodeView('advancedTable')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.advancedTable ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 space-y-4 ${showCode.advancedTable ? 'hidden':''}`}>
                                <button id="deleteRowButton" className="btn b-solid btn-danger-solid">Delete Row</button>
                                <table id="rowSelectionDeletion" className="group bordered">
                                    <thead>
                                        <tr>
                                            <th className="!bg-[#FEF6EC] dark:!bg-dark-card-shade">Name</th>
                                            <th className="!bg-[#FEF6EC] dark:!bg-dark-card-shade">Position</th>
                                            <th className="!bg-[#FEF6EC] dark:!bg-dark-card-shade">Office</th>
                                            <th className="!bg-[#FEF6EC] dark:!bg-dark-card-shade">Age</th>
                                            <th className="!bg-[#FEF6EC] dark:!bg-dark-card-shade">Start date</th>
                                            <th className="!bg-[#FEF6EC] dark:!bg-dark-card-shade">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {basicTableData && basicTableData?.map((employee, idx) => (
                                            <tr key={idx}>
                                                <td>{employee?.name}</td>
                                                <td>{employee?.position}</td>
                                                <td>{employee?.office}</td>
                                                <td>{employee?.age}</td>
                                                <td>{employee?.date}</td>
                                                <td>{employee?.salary}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.advancedTable ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`Sorry we can't show the huge data table`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}