import { useState } from "react";
import { instractorTableOne, studentDetail, studentInfo } from "../../data/table";

export default function DefaultTable(){

    // code show
    const [showCode, setShowCode] = useState({
        tableOne: false,
        tableTwo: false,
        tableThree: false,
        tableFour: false,
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
                    <h2 className="card-title">Table Component</h2>
                </div>
                <div className="grid grid-cols-12">
                    {/* INFORMATION TABLE ONE */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Information Table One</h3>
                                <button type="button" onClick={()=>toggleCodeView('tableOne')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.tableOne ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.tableOne ? 'hidden':''}`}>
                                <div className="flex-center-between">
                                    <div className="flex items-center gap-5">
                                        <form className="max-w-80 relative">
                                            <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                            </span>
                                            <input type="text" placeholder="Search for..." className="form-input pl-[30px]"/>
                                        </form>
                                        <button type="button" className="font-spline_sans text-sm px-1 text-gray-900 dark:text-dark-text flex-center gap-1.5" onclick="window.location.href=window.location.href">
                                            <i className="ri-loop-right-line text-inherit text-sm"></i>
                                            <span>Refresh</span>
                                        </button>
                                    </div>
                                    <button className="btn b-light btn-primary-light">
                                        <i className="ri-add-fill text-inherit"></i>
                                        <span>Add Data</span>
                                    </button>
                                </div>
                                {/* START INFORMATION TABLE */}
                                <div className="overflow-x-auto mt-5">
                                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                                        <thead>
                                            <tr>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Instructor Name</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Category</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Classes</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Last Update</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Total Student</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one w-10">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                            {instractorTableOne && instractorTableOne.map((data, idx) => (
                                                <tr key={idx}>
                                                    <td className="p-6 py-4 dk-border-one">{data?.name}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.category}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.classes}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.lastUpdate}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.totalStudents}</td>
                                                    <td className="p-6 py-4 dk-border-one">
                                                        <div className="flex items-center gap-2">
                                                            {/* Dirrect Message */}
                                                            <a href="chatbox.html" className="btn-icon btn-primary-icon-light size-7">
                                                                <i className="ri-message-2-line text-inherit text-[13px]"></i>
                                                            </a>
                                                            {/* Delete From List */}
                                                            <a href="#" className="btn-icon btn-danger-icon-light size-7">
                                                                <i className="ri-delete-bin-line text-inherit text-[13px]"></i>
                                                            </a>
                                                            <div className="relative ml-5">
                                                                <button data-popover-target={`td-${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                                    <i className="ri-more-2-fill text-inherit"></i>
                                                                </button>
                                                                <ul id={`td-${idx}`} className="popover-target invisible" data-popover>
                                                                    <li>
                                                                        <a className="popover-item" href="#">More</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* START PAGINATION */}
                                <div className="flex-center-between mt-5">
                                    <div className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">Showing 1 to 8 of 20 entries</div>
                                    <nav className="dk-border-one rounded-[4px] overflow-hidden">
                                        <ul className="divide-x divide-gray-200 dark:divide-dark-border-three flex items-center">
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-card-two hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 -rotate-45">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                                                    </svg>                                            
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500">1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500 active">2</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500">
                                                    <i className="ri-more-fill text-inherit"></i>                                              
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500">10</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-card-two hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white active">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rotate-45">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                    </svg>                                                                                          
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.tableOne ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`Sorry we can't show the huge data table`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* INFORMATION TABLE TWO */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Information Table Two</h3>
                                <button type="button" onClick={()=>toggleCodeView('tableTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.tableTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.tableTwo ? 'hidden':''}`}>
                                <div className="flex-center-between">
                                    <div className="flex items-center gap-5">
                                        <form className="max-w-80 relative">
                                            <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                            </span>
                                            <input type="text" placeholder="Search for..." className="form-input pl-[30px]"/>
                                        </form>
                                        <button type="button" className="font-spline_sans text-sm px-1 text-gray-900 dark:text-dark-text flex-center gap-1.5">
                                            <i className="ri-loop-right-line text-inherit text-sm"></i>
                                            <span>Refresh</span>
                                        </button>
                                    </div>
                                    <button className="btn b-light btn-primary-light">
                                        <i className="ri-add-fill text-inherit"></i>
                                        <span>Add Data</span>
                                    </button>
                                </div>
                                <div className="overflow-x-auto mt-5">
                                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium leading-none">
                                        <thead>
                                            <tr>
                                                <th className="p-6 py-4 bg-[#E6F6FD] dark:bg-dark-card-shade dk-border-one">Instructor Name</th>
                                                <th className="p-6 py-4 bg-[#E6F6FD] dark:bg-dark-card-shade dk-border-one">Category</th>
                                                <th className="p-6 py-4 bg-[#E6F6FD] dark:bg-dark-card-shade dk-border-one">Classes</th>
                                                <th className="p-6 py-4 bg-[#E6F6FD] dark:bg-dark-card-shade dk-border-one">Last Update</th>
                                                <th className="p-6 py-4 bg-[#E6F6FD] dark:bg-dark-card-shade dk-border-one">Total Student</th>
                                                <th className="p-6 py-4 bg-[#E6F6FD] dark:bg-dark-card-shade dk-border-one w-10">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                            {instractorTableOne && instractorTableOne.map((data, idx) => (
                                                <tr key={idx} className="has-[:checked]:bg-[#F2F4F9] dark:has-[:checked]:bg-dark-icon/50">
                                                    <td className="p-6 py-4 dk-border-one">
                                                        <div className="inline-flex items-center gap-4 w-full">
                                                            <input type="checkbox" className="size-4 cursor-pointer bg-transparent border-2 border-gray-200 rounded-sm appearance-none relative after:position-center after:size-4 checked:border-none checked:after:bg-checked"/>
                                                            {data?.name}
                                                        </div>
                                                    </td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.category}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.classes}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.lastUpdate}</td>
                                                    <td className="p-6 py-4 dk-border-one">{data?.totalStudents}</td>
                                                    <td className="p-6 py-4 dk-border-one">
                                                        <div className="flex items-center gap-2">
                                                            <a href="chatbox.html" className="btn-icon btn-primary-icon-light size-7">
                                                                <i className="ri-message-2-line text-inherit text-[13px]"></i>
                                                            </a>
                                                            <a href="#" className="btn-icon btn-danger-icon-light size-7">
                                                                <i className="ri-delete-bin-line text-inherit text-[13px]"></i>
                                                            </a>
                                                            <div className="relative ml-5">
                                                                <button data-popover-target={`td-2-${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                                    <i className="ri-more-2-fill text-inherit"></i>
                                                                </button>
                                                                <ul id={`td-2-${idx}`} className="popover-target invisible" data-popover>
                                                                    <li>
                                                                        <a className="popover-item" href="#">More</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* START PAGINATION */}
                                <div className="flex-center-between mt-5">
                                    <div className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">Showing 1 to 8 of 20 entries</div>
                                    <nav className="dk-border-one rounded-[4px] overflow-hidden">
                                        <ul className="divide-x divide-gray-200 dark:divide-dark-border-three flex items-center">
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-card-two hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 -rotate-45">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                                                    </svg>                                            
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500">1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500 active">2</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500">
                                                    <i className="ri-more-fill text-inherit"></i>                                              
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-icon hover:text-primary-500 [&.active]:text-primary-500">10</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 text-gray-900 dark:text-dark-text bg-white dark:bg-dark-card-two hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white active">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rotate-45">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                    </svg>                                                                                          
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.tableTwo ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`Sorry we can't show the huge data table`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* INFORMATION TABLE THREE */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Student Information Table</h3>
                                <button type="button" onClick={()=>toggleCodeView('tableThree')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.tableThree ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.tableThree ? 'hidden':''}`}>
                                <div className="flex-center-between">
                                    <div className="flex items-center gap-5">
                                        <form className="max-w-80 relative">
                                            <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                            </span>
                                            <input type="text" placeholder="Search for..." className="form-input pl-[30px]"/>
                                        </form>
                                        <button type="button" className="font-spline_sans text-sm px-1 text-gray-900 dark:text-dark-text flex-center gap-1.5">
                                            <i className="ri-loop-right-line text-inherit text-sm"></i>
                                            <span>Refresh</span>
                                        </button>
                                    </div>
                                    <button className="btn b-light btn-primary-light">
                                        <i className="ri-add-fill text-inherit"></i>
                                        <span>Add Data</span>
                                    </button>
                                </div>
                                <div className="overflow-x-auto mt-5">
                                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                                        <thead>
                                            <tr className="text-primary-500">
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Name</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Status</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Last Activities</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Course Name</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Purchase</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Progress</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg w-10">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                            {studentInfo && studentInfo?.map((student, index) => (
                                                <tr key={index}> 
                                                    <td className="p-6 py-4">
                                                        <div className="flex items-center gap-3.5">
                                                            <a href="#" className="size-12 rounded-50 overflow-hidden">
                                                                <img src={student?.image} alt="student"/>
                                                            </a>
                                                            <div>
                                                                <h6 className="leading-none text-heading font-semibold">
                                                                    <a href="#">{student?.name}</a>
                                                                </h6>
                                                                <p className="font-spline_sans text-sm font-light mt-1">{student?.position}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-6 py-4">
                                                        <span className={`${{'success':'badge-success-light', 'warning':'badge-warning-light', 'info':'badge-info-light', 'danger':'badge-danger-light'} [student?.status] || 'badge-success-light'} badge rounded-full`}>{student?.status}</span>
                                                    </td>
                                                    <td className="p-6 py-4">{student?.lastActivities}</td>
                                                    <td className="p-6 py-4">{student?.courseName}</td>
                                                    <td className="p-6 py-4">{student?.purchase}</td>
                                                    <td className="p-6 py-4">
                                                        <div className="flex flex-col gap-2">
                                                            <div className="relative max-w-[106px] h-2 rounded-full bg-progress-bar-bg dark:bg-progress-bar-bg-dark overflow-hidden">
                                                                <div className={`absolute top-0 left-0 bottom-0 bg-progress-bar rounded-full w-[${student?.progress}%]`}></div>
                                                            </div>
                                                            <div className="text-xs leading-none text-gray-500 dark:text-dark-text">{student?.progress}% Growing</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <a href="chatbox.html" className="btn-icon btn-primary-icon-light size-7">
                                                                <i className="ri-message-2-line text-inherit text-[13px]"></i>
                                                            </a>
                                                            <a href="#" className="btn-icon btn-danger-icon-light size-7">
                                                                <i className="ri-delete-bin-line text-inherit text-[13px]"></i>
                                                            </a>
                                                            <div className="relative ml-5">
                                                                <button data-popover-target={`td-3-${index}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                                    <i className="ri-more-2-fill text-inherit"></i>
                                                                </button>
                                                                <ul id={`td-3-${index}`} className="popover-target invisible" data-popover>
                                                                    <li>
                                                                        <a className="popover-item" href="#">More</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </table>
                                </div>
                                {/* START PAGINATION */}
                                <div className="flex-center-between mt-5">
                                    <div className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">Showing 1 to 8 of 20 entries</div>
                                    <nav>
                                        <ul className="flex items-center gap-1">
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text hover:bg-primary-500 hover:text-white dark:bg-dark-card-two">
                                                    <i className="ri-arrow-left-s-line text-inherit"></i>                                            
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text [&.active]:bg-primary-500 [&.active]:text-white">1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text [&.active]:bg-primary-500 [&.active]:text-white active">2</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text [&.active]:bg-primary-500 [&.active]:text-white">3</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text [&.active]:bg-primary-500 [&.active]:text-white">4</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text [&.active]:bg-primary-500 [&.active]:text-white">
                                                    <i className="ri-more-fill text-inherit"></i>                                              
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text [&.active]:bg-primary-500 [&.active]:text-white">10</a>
                                            </li>
                                            <li>
                                                <a href="#" className="font-spline_sans font-medium flex-center size-8 rounded-50 text-gray-900 dark:text-dark-text hover:bg-primary-500 hover:text-white dark:bg-dark-card-two">
                                                    <i className="ri-arrow-right-s-line text-inherit"></i>                                                                                          
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.tableThree ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`Sorry we can't show the huge data table`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* INFORMATION TABLE FOUR */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Student Information Table</h3>
                                <button type="button" onClick={()=>toggleCodeView('tableFour')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.tableFour ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.tableFour ? 'hidden':''}`}>
                                <div className="flex-center-between">
                                    <div className="flex items-center gap-5">
                                        <form className="max-w-80 relative">
                                            <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                            </span>
                                            <input type="text" placeholder="Search for..." className="form-input pl-[30px]"/>
                                        </form>
                                        <button type="button" className="font-spline_sans text-sm px-1 text-gray-900 dark:text-dark-text flex-center gap-1.5">
                                            <i className="ri-loop-right-line text-inherit text-sm"></i>
                                            <span>Refresh</span>
                                        </button>
                                    </div>
                                    <button className="btn b-light btn-primary-light">
                                        <i className="ri-add-fill text-inherit"></i>
                                        <span>Add Data</span>
                                    </button>
                                </div>
                                <div className="overflow-x-auto mt-5">
                                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                                        <thead>
                                            <tr>
                                                <th className="p-6 py-4 bg-[#FFEEEE] dark:bg-dark-card-shade first:rounded-l-lg last:rounded-r-lg">Instructor Name</th>
                                                <th className="p-6 py-4 bg-[#FFEEEE] dark:bg-dark-card-shade first:rounded-l-lg last:rounded-r-lg">Category</th>
                                                <th className="p-6 py-4 bg-[#FFEEEE] dark:bg-dark-card-shade first:rounded-l-lg last:rounded-r-lg">Student</th>
                                                <th className="p-6 py-4 bg-[#FFEEEE] dark:bg-dark-card-shade first:rounded-l-lg last:rounded-r-lg">Date</th>
                                                <th className="p-6 py-4 bg-[#FFEEEE] dark:bg-dark-card-shade first:rounded-l-lg last:rounded-r-lg">Progress</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                            {studentDetail && studentDetail?.map((student, idx) => (
                                                <tr key={idx}> 
                                                    <td className="p-6 py-4">{student?.name}</td>
                                                    <td className="p-6 py-4">{student?.category}</td>
                                                    <td className="p-6 py-4">
                                                        <ul className="flex items-center *:-ms-1">
                                                            {student?.student.length > 0 && student?.student?.map((std, idx) => (
                                                                <li key={idx} className="relative hover:scale-110 hover:z-10 duration-200">
                                                                    <img src={std?.image} alt="student" className="size-7 rounded-50"/>
                                                                </li>
                                                            ))}
                                                            <li className="relative hover:scale-110 hover:z-10">
                                                                <a href="#" className="text-xs flex-center size-7 rounded-50 bg-primary-500 text-white">+5</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="p-6 py-4">{student?.date}</td>
                                                    <td className="p-6 py-4">
                                                        <div className="flex flex-col gap-2">
                                                            <div className="relative max-w-[106px] h-2 rounded-full bg-primary-200 dark:bg-progress-bar-bg-dark overflow-hidden">
                                                                <div className={`absolute top-0 left-0 bottom-0 bg-primary-500 rounded-full w-[${student?.progress}%]`}></div>
                                                            </div>
                                                            <div className="text-xs leading-none text-gray-500 dark:text-dark-text">{student?.progress}% Growing</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* START PAGINATION */}
                                <div className="flex-center-between mt-5">
                                    <div className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">Showing 1 to 8 of 20 entries</div>
                                    <ul className="flex items-center gap-1 5 text-gray-500 dark:text-dark-text text-sm font-medium">
                                        <li>
                                            <a href="#" className="size-8 dk-border-one rounded-[5px] flex-center bg-primary-500 dark:hover:bg-dark-card-shade hover:bg-transparent text-white hover:text-gray-900 dark:text-dark-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 -rotate-45">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="size-8 dk-border-one rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white active">01</a>
                                        </li>
                                        <li>
                                            <a href="#" className="size-8 dk-border-one rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white">02</a>
                                        </li>
                                        <li>
                                            <a href="#" className="size-8 dk-border-one rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white">03</a>
                                        </li>
                                        <li>
                                            <a href="#" className="size-8 dk-border-one rounded-[5px] flex-center bg-primary-500 dark:hover:bg-dark-card-shade hover:bg-transparent text-white hover:text-gray-900 dark:text-dark-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rotate-45">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.tableFour ? '':'hidden'}`}>
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