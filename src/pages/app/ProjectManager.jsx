import FormateDate from "../../components/SimpleComponents/FormateDate"
import Chart from "react-apexcharts";
import useApexCharts from "../Charts/useApexCharts";
import SimpleCounter from "../../components/Counter/Counter";
import { latestProjects } from "../../data/table";
import { inboxs, recentActivities } from "../../data/data";

import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function ProjectManager(){

    const {formattedDate, dateInput} = FormateDate();
    const {projectStatusOptions, totalTaskOptions, financeStatusOptions, taskOverviewOptions} = useApexCharts()

    // calendar
    const calendarRef = useRef(null);
    useEffect(() => {
        if (calendarRef.current) {
        flatpickr(calendarRef.current, {
            inline: true,
            mode: "range",
        });

        const nextElement = calendarRef.current.nextElementSibling;
        if (nextElement) {
            nextElement.style.boxShadow = "none";
            nextElement.style.backgroundColor = "transparent";
        }
        }
    }, []);


    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const popoverRef = useRef(null);

    const handleClick = () => {
        setIsPopoverVisible((prev) => !prev);
    };

    // Close the popover when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsPopoverVisible(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

      
    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="grid grid-cols-12 gap-x-4">
                {/* Start Dashboard Overview Header */}
                <div className="col-span-full card p-3 sm:p-7">
                <div className="flex-center-between flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div>
                        <h6 className="card-title">Welcome Admin! 👋</h6>
                        <p className="card-description today">{formattedDate}</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                        <div className="max-w-36">
                            <input type="date" value={dateInput} className="form-input" />
                        </div>
                        <div>
                            <a href="#" className="btn b-solid btn-primary-solid py-4">
                            <i className="ri-download-cloud-2-line text-inherit hidden sm:block" />
                            Download Report
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                {/* End Dashboard Overview Header */}
                {/* Start Project Status Chart */}
                <div className="col-span-full sm:col-span-6 lg:col-span-4 card">
                <div className="flex-center-between">
                    <h6 className="card-title text-[20px]">Projects status</h6>
                    <select className="form-input form-select">
                    <option value="this-month">This Month</option>
                    <option value="this-week">This Week</option>
                    <option value="this-year">This Year</option>
                    <option value="today">Today</option>
                    </select>
                </div>
                <div className="grid grid-cols-12 gap-y-4 mt-4 items-center">
                    <div className="col-span-full 3xl:col-span-7">
                    {/* <div id="projectStatus" /> */}
                        <Chart options={projectStatusOptions.options} series={projectStatusOptions.series} type="pie" height={230} />
                    </div>
                    <div className="col-span-full 3xl:col-span-5">
                    <div className="flex 3xl:flex-col justify-around *:shrink-0">
                        <div>
                        <h6 className="text-xs font-semibold text-gray-500 dark:text-dark-text">Total Project</h6>
                        <div className="flex items-center gap-2 mt-1.5">
                            <div className="card-title text-2xl sm:text-[42px]">
                                <SimpleCounter value={1200}/>
                            </div>
                            <div className="size-[30px] rounded-xl border border-secondary text-secondary flex-center">
                            <i className="ri-corner-right-up-line text-inherit rotate-45" />
                            </div>
                        </div>
                        </div>
                        <ul className="text-xs leading-none text-gray-500 dark:text-dark-text *:flex-center *:justify-start *:gap-2 space-y-2 3xl:mt-5">
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-500">70% Active Project</li>
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-300">20% Pending</li>
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-200">10% Under Review</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Project Status Chart */}
                {/* Start Total Task Chart */}
                <div className="col-span-full sm:col-span-6 lg:col-span-4 card">
                <div className="flex-center-between">
                    <h6 className="card-title text-[20px]">Total task</h6>
                    <select className="form-input form-select">
                    <option value="this-month">This Month</option>
                    <option value="this-week">This Week</option>
                    <option value="this-year">This Year</option>
                    <option value="today">Today</option>
                    </select>
                </div>
                <div className="grid grid-cols-12 gap-y-4 mt-4 items-center">
                    <div className="col-span-full 3xl:col-span-7">
                    {/* <div id="total-task-chart" /> */}
                    <Chart options={totalTaskOptions.options} series={totalTaskOptions.series} type="radialBar" height={300} />
                    </div>
                    <div className="col-span-full 3xl:col-span-5 sm:translate-y-1/2 3xl:transform-none">
                    <div className="flex 3xl:flex-col justify-around *:shrink-0">
                        <div>
                        <h6 className="text-xs font-semibold text-gray-500 dark:text-dark-text">Total task</h6>
                        <div className="flex items-center gap-2 mt-1.5">
                            <div className="card-title text-2xl sm:text-[42px]">
                                <SimpleCounter value={1500}/>
                            </div>
                            <div className="size-[30px] rounded-xl border border-secondary text-secondary flex-center">
                            <i className="ri-corner-right-up-line text-inherit rotate-45" />
                            </div>
                        </div>
                        </div>
                        <ul className="text-xs leading-none text-gray-500 dark:text-dark-text *:flex-center *:justify-start *:gap-2 space-y-2 3xl:mt-5">
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-500">199 Active now </li>
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-300">29 Pending</li>
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-200">1182 Under review</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Total Task Chart */}
                {/* Start Finance Status Chart */}
                <div className="col-span-full lg:col-span-4 card">
                <div className="flex-center-between">
                    <h6 className="card-title text-[20px]">Finance status</h6>
                    <select className="form-input form-select">
                    <option value="this-month">This Month</option>
                    <option value="this-week">This Week</option>
                    <option value="this-year">This Year</option>
                    <option value="today">Today</option>
                    </select>
                </div>
                <div className="grid grid-cols-12 gap-y-4 mt-4 items-center">
                    <div className="col-span-full 3xl:col-span-7">
                    {/* <div id="finance-status-chart" /> */}
                    <Chart options={financeStatusOptions.options} series={financeStatusOptions.series} type="radialBar" height={230} />
                    </div>
                    <div className="col-span-full 3xl:col-span-5">
                    <div className="flex 3xl:flex-col justify-around *:shrink-0">
                        <div>
                        <h6 className="text-xs font-semibold text-gray-500 dark:text-dark-text">Finance status</h6>
                        <div className="flex items-center gap-2 mt-1.5">
                            <div className="card-title text-[42px]">$<SimpleCounter value={50}/>k</div>
                            <div className="size-[30px] rounded-xl border border-secondary text-secondary flex-center">
                            <i className="ri-corner-right-up-line text-inherit rotate-45" />
                            </div>
                        </div>
                        </div>
                        <ul className="text-xs leading-none text-gray-500 dark:text-dark-text *:flex-center *:justify-start *:gap-2 space-y-2 3xl:mt-5">
                        <li className="before:size-1.5 before:rounded-50 before:bg-primary-500">Avg. project budget</li>
                        <li className="before:size-1.5 before:rounded-50 before:bg-success">Active project</li>
                        <li className="before:size-1.5 before:rounded-50 before:bg-warning">Lowest project</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Total Task Chart */}
                {/* Start Task Overview Chart */}
                <div className="col-span-full lg:col-span-6 card p-3 sm:p-7">
                <div className="flex-center-between">
                    <div>
                    <h6 className="card-title text-[20px]">Task overview</h6>
                    <p className="card-description">As of 10th to 17th of Jun 2024</p>
                    </div>
                    <select className="form-input form-select">
                    <option value="val">Last 7 days</option>
                    <option value="valk">Last 30 days</option>
                    <option value="val">This Year</option>
                    <option value="val">Today</option>
                    </select>
                </div>
                <div>
                    {/* <div id="taskOverview" /> */}
                    <Chart options={taskOverviewOptions.options} series={taskOverviewOptions.series} type="bar" height={400} />
                </div>
                </div>
                {/* End Task Overview Chart */}
                {/* Start Latest Project Table */}
                <div className="col-span-full lg:col-span-6 card p-3 sm:p-7">
                <div className="flex-center-between">
                    <h6 className="card-title text-[20px]">Latest projects</h6>
                    <button className="btn b-solid btn-primary-solid bg-primary-400">See all</button>
                </div>
                <div className="overflow-x-auto scrollbar-table mt-3">
                    <table className="table-auto w-full border-separate border-spacing-x-0 border-spacing-y-2 whitespace-nowrap text-sm text-left text-gray-500 dark:text-dark-text">
                    <thead className="font-semibold">
                        <tr>
                        <th className="px-4 py-1">Project name</th>
                        <th className="px-4 py-1">Project time line</th>
                        <th className="px-4 py-1">Progress</th>
                        <th className="px-4 py-1">Assign</th>
                        </tr>
                    </thead>
                    <tbody>
                        {latestProjects && latestProjects?.map((project, idx) => (
                            <tr key={idx}> 
                                <td className="px-4 py-4 rounded-row-border font-semibold">{project?.name}</td>
                                <td className="px-4 py-4 rounded-row-border">
                                    <div className="flex-center w-max h-8 text-heading dark:text-dark-text px-2.5 bg-gray-200 dark:bg-dark-icon rounded-full">
                                    🕒 {project?.timeLine}
                                    </div>
                                </td>
                                <td className="px-4 py-4 rounded-row-border">
                                    <div className="flex flex-col gap-2">
                                    <div className="relative w-[106px] h-2 rounded-full bg-progress-bar-bg dark:bg-progress-bar-bg-dark overflow-hidden">
                                        <div className={`absolute top-0 left-0 bottom-0 rounded-full w-[${project?.progress}%] ${{'in progress': 'bg-progress-bar','deadline missed': 'bg-danger','completed': 'bg-success'}[project?.status] || 'bg-progress-bar'}`} />
                                    </div>
                                    <div className="text-xs leading-none text-gray-500 dark:text-dark-text capitalize">{project?.status}</div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 rounded-row-border">
                                    <div className="flex items-center gap-2 w-max">
                                        <ul className="flex items-center *:-ms-1 shrink-0">
                                            {project && project?.teamImages?.map((item, idx) => (
                                                <li key={idx} className="relative hover:scale-110 hover:z-10">
                                                    <img src={item?.image} alt="student" className="size-6 rounded-50" />
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="shrink-0">{project?.teamName} Team</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
                {/* End Latest Project Table */}
                {/* Start Calendar */}
                <div className="col-span-full 2xl:col-span-6 card p-0 overflow-hidden">
                <div className="grid grid-cols-12 h-full">
                    <div className="col-span-full md:col-span-6 2xl:col-span-7 p-4 sm:px-5 sm:py-7">
                    <div className="flex-center-between">
                        <h6 className="card-title text-[20px]">Calendar</h6>
                        <button className="btn b-solid btn-primary-solid !bg-primary-400 btn-sm">Create new</button>
                    </div>
                    <div className="flex-center mt-6">
                        <input id="inline_calendar_input" ref={calendarRef} type="text" className="sr-only size-0" />
                    </div>
                    </div>
                    <div className="col-span-full md:col-span-6 2xl:col-span-5 p-4 sm:px-5 sm:py-7 bg-primary-200 dark:bg-dark-card-two">
                    <h6 className="card-title text-[16px]">Calendar</h6>
                    <div className="text-xs font-semibold text-gray-500 dark:text-dark-text mt-1">Sunday</div>
                    <ul className="space-y-2 mt-6">
                        <li className="bg-task-before rounded-10 pl-1">
                        <div className="p-4 bg-white dark:bg-dark-card-shade rounded-10">
                            <h6 className="card-title text-[16px] line-clamp-1" title="Meeting with marketing team">Meeting with marketing team</h6>
                            <div className="text-xs text-gray-500 dark:text-dark-text mt-1.5">🕒 01 Jan - 26 Jan</div>
                        </div>
                        </li>
                        <li className="bg-task-before rounded-10 pl-1">
                        <div className="p-4 bg-white dark:bg-dark-card-shade rounded-10">
                            <h6 className="card-title text-[16px] line-clamp-1" title="Project planning session">Project planning session</h6>
                            <div className="text-xs text-gray-500 dark:text-dark-text mt-1.5">🕒 15 Feb - 20 Feb</div>
                        </div>
                        </li>
                        <li className="bg-task-before rounded-10 pl-1">
                        <div className="p-4 bg-white dark:bg-dark-card-shade rounded-10">
                            <h6 className="card-title text-[16px] line-clamp-1" title="Team building workshop">Team building workshop</h6>
                            <div className="text-xs text-gray-500 dark:text-dark-text mt-1.5">🕒 05 Mar - 10 Mar</div>
                        </div>
                        </li>
                        <li className="bg-task-before rounded-10 pl-1">
                        <div className="p-4 bg-white dark:bg-dark-card-shade rounded-10">
                            <h6 className="card-title text-[16px] line-clamp-1" title="Client feedback review">Client feedback review</h6>
                            <div className="text-xs text-gray-500 dark:text-dark-text mt-1.5">🕒 01 Apr - 07 Apr</div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* End Calendar */}
                {/* Start Recent Activities */}
                <div className="col-span-full xl:col-span-6 2xl:col-span-3 card px-0 relative">
                <div className="flex-center-between px-6 mb-5">
                    <h6 className="card-title text-lg leading-none">Recent activities</h6>
                    <div className="relative">
                    <button data-popover-target="recentActivities" data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-6 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                        <i className="ri-more-fill text-gray-500 dark:text-dark-text text-lg" />
                    </button>
                    <ul id="recentActivities" className="popover-target invisible" data-popover>
                        <li>
                        <a className="popover-item" href="#">More one</a>
                        </li>
                        <li>
                        <a className="popover-item" href="#">More two</a>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* Activitiy List */}
                <div className="max-h-[330px] smooth-scrollbar" data-scrollbar>
                    <ul className="space-y-3 text-sm leading-none px-6">
                        {recentActivities && recentActivities?.map((activiti, idx) => (
                            <li key={idx}>
                                <a href={activiti?.link} className="flex items-center flex-grow hover:bg-primary-100/50 dark:hover:bg-dark-icon p-2 rounded-md">
                                    <div className="size-10 rounded-50 overflow-hidden shrink-0">
                                        <img src={activiti?.image} alt="student" />
                                    </div>
                                    <div className="pl-3">
                                        <h6 className="text-xs leading-none text-heading font-bold">{activiti?.name}</h6>
                                        <p className="font-light mt-1 text-xs leading-none text-gray-500 dark:text-dark-text line-clamp-1">{activiti?.description}</p>
                                    </div>
                                    <i className="ri-arrow-right-s-line text-gray-500 dark:text-dark-text ms-auto" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                {/* End Recent Activities */}
                {/* Start Chat Inbox */}
                <div className="col-span-full xl:col-span-6 2xl:col-span-3 card px-0 relative">
                <div className="flex-center-between px-6 mb-5">
                    <h6 className="card-title text-lg leading-none">Inbox</h6>
                    <div className="relative">
                        <button data-popover-target="cbMore" data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-6 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                            <i className="ri-more-fill text-gray-500 dark:text-dark-text text-lg" />
                        </button>
                        <ul id="cbMore" className="popover-target invisible" data-popover>
                            <li>
                            <a className="popover-item" href="#">More one</a>
                            </li>
                            <li>
                            <a className="popover-item" href="#">More two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Message List */}
                <div className="max-h-[330px] smooth-scrollbar" data-scrollbar>
                    <ul className="space-y-2 text-sm leading-none px-6">
                        {inboxs && inboxs?.map((inbox, idx)=>(
                            <li key={idx}>
                                <a href={inbox?.link} className="flex items-center flex-grow group/chat unread hover:bg-primary-100/50 dark:hover:bg-dark-icon p-2 rounded-md">
                                <div className="size-13 rounded-10 overflow-hidden shrink-0">
                                    <img src={inbox?.image} alt="student" />
                                </div>
                                <div className="pl-3">
                                    <div className="text-xs leading-none text-gray-900 dark:text-dark-text mb-0.5">{inbox?.time}</div>
                                    <h6 className="leading-none text-heading font-semibold">{inbox?.name}</h6>
                                    <p className="font-spline_sans font-light mt-1 text-xs leading-none text-gray-900 dark:text-dark-text line-clamp-1">{inbox?.description}</p>
                                </div>
                                <i className="ri-wechat-line text-[26px] text-gray-900 dark:text-dark-text group-[.unread]/chat:text-primary-500 shrink-0 ms-auto" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                {/* End Chat Inbox */}
            </div>
        </div>
        </>
    )
}