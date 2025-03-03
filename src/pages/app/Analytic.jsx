
import usFlag from "@/assets/images/flag/us.svg";
import franceFlag from "@/assets/images/flag/fr.svg";
import rusFlag from "@/assets/images/flag/es.svg";
import SimpleCounter from "../../components/Counter/Counter";
import { email, socialTraffcs, viewMinute } from "../../data/data";
import useApexCharts from "../Charts/useApexCharts";
import Chart from "react-apexcharts";

export default function Analytic (){

    const {conversionOneOptions, conversionTwoOptions, conversionThreeOptions, analyticOverviewOptions, activeUserOptions, browserSessionOptions, viewPerminuteOptions} = useApexCharts();

    return(
    <>
     {/* Start Main Content  */}
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="grid grid-cols-12 gap-x-4">
            {/* Start Dashboard Overview */}
            <div className="col-span-full card p-3 sm:p-7">
                <div className="flex-center-between flex-col sm:flex-row items-start sm:items-center gap-3 pb-3 sm:pb-7">
                    <div>
                        <h6 className="card-title isd">Dashboard Analytics</h6>
                        <p className="card-description">Welcome to Dashkit Dashboard</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="max-w-36">
                            <input type="date" className="form-input"/>
                        </div>
                        <div>
                            <a href="#" className="btn b-solid btn-primary-solid">
                                Export
                                <i className="ri-arrow-down-s-line text-inherit"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-full 2xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-1 gap-4">
                         {/* Conversions One  */}
                        <div className="p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Conversions one</h6>
                                <div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
                            </div>
                            <div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
                                <div className="pb-7 shrink-0">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="card-title">
                                            $<SimpleCounter value={30000}/>
                                        </div>
                                        <div className="flex-center text-primary-500 size-5 rounded-50 border border-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <path d="M3.38569 1.43565L5.45455 3.44715L6 2.91683L3 0L0 2.91683L0.545456 3.44715L2.6143 1.43565V6H3.38569V1.43565Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="leading-none text-gray-900 dark:text-dark-text font-semibold">
                                        <span className="text-primary-500">09% </span>
                                        Below Target
                                    </div>
                                </div>
                                <div className="grow self-center pb-3">
                                    <Chart options={conversionOneOptions.options} series={conversionOneOptions.series} height={70} />
                                </div>
                            </div>
                        </div>
                         {/* Conversion Two  */}
                        <div className="p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Conversions two</h6>
                                <div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
                            </div>
                            <div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
                                <div className="pb-7 shrink-0">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="card-title">
                                                <SimpleCounter value={25000}/>
                                            </div>
                                        <div className="flex-center text-danger size-5 rounded-50 border border-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <path d="M3.38569 1.43565L5.45455 3.44715L6 2.91683L3 0L0 2.91683L0.545456 3.44715L2.6143 1.43565V6H3.38569V1.43565Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="leading-none text-gray-900 dark:text-dark-text font-semibold">
                                        <span className="text-danger">05% </span>
                                        Below Target
                                    </div>
                                </div>
                                <div className="grow self-center pb-3">
                                    <Chart options={conversionTwoOptions.options} series={conversionTwoOptions.series} height={70} />
                                </div>
                            </div>
                        </div>
                         {/* Conversion Three  */}
                        <div className="p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Conversions three</h6>
                                <div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
                            </div>
                            <div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
                                <div className="pb-7 shrink-0">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="card-title">
                                            <SimpleCounter value={3100}/>
                                        </div>
                                        <div className="flex-center text-primary-500 size-5 rounded-50 border border-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <path d="M3.38569 1.43565L5.45455 3.44715L6 2.91683L3 0L0 2.91683L0.545456 3.44715L2.6143 1.43565V6H3.38569V1.43565Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="leading-none text-gray-900 dark:text-dark-text font-semibold">
                                        <span className="text-primary-500">50% </span>
                                        Below Target
                                    </div>
                                </div>
                                <div className="grow self-center pb-3">
                                    <Chart options={conversionThreeOptions.options} series={conversionThreeOptions.series} height={70} />
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* Start Analytic Overview Chart  */}
                    <div className="col-span-full 2xl:col-span-9 card dk-border-one p-3 sm:px-5 mb-0">
                        <div className="flex-center-between">
                            <h6 className="card-title">Section overview</h6>
                            <select className="form-input form-select">
                                <option value="this-week">This Week</option>
                                <option value="this-month">This Month</option>
                                <option value="this-year">This Year</option>
                                <option value="today">Today</option>
                            </select>
                        </div>
                        <div className="analytic-chart mt-4">
                            <Chart options={analyticOverviewOptions.options} series={analyticOverviewOptions.series} type="area" height={400}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Dashboard Overview */}
            <div className="col-span-full grid grid-cols-13 gap-x-4">
                {/* Start Active User Chart  */}
                <div className="col-span-full lg:col-span-5 card">
                    <div className="flex-center-between">
                        <h6 className="card-title text-lg leading-none">Active users</h6>
                        <div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
                    </div>
                    <div className="active-user-chart mt-4">
                        <Chart options={activeUserOptions.options} series={activeUserOptions.series} type="area" height={400}/>
                    </div>
                </div>
                 {/* End Active User Chart  */}

                 {/* Start Session By Browser Chart  */}
                <div className="col-span-full sm:col-span-6 lg:col-span-4 card">
                    <div className="flex-center-between">
                        <h6 className="card-title text-lg leading-none">Sessions by browser</h6>
                        <div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
                    </div>
                    <div className="session-browser-chart mt-4">
                        <Chart options={browserSessionOptions.options} series={browserSessionOptions.series} type="pie" height={400}/>
                    </div>
                </div>
                 {/* End Session By Browser Chart  */}

                 {/* Start User By Country Chart  */}
                <div className="col-span-full sm:col-span-7 lg:col-span-4 card relative">
                    <div className="flex-center-between">
                        <h6 className="card-title text-lg leading-none">Users by country</h6>
                        <div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
                    </div>
                    <div id="customer-country-chart" className="w-full max-h-[370px] mt-4">
                        <ul className="absolute left-6 bottom-6 space-y-2">
                            <li className="flex items-center text-xs leading-none gap-1.5">
                                <img src={usFlag} alt="flag" className="size-4 rounded-sm"/>
                                <span className="text-gray-500 dark:text-dark-text font-medium">United State</span>
                            </li>
                            <li className="flex items-center text-xs leading-none gap-1.5">
                                <img src={franceFlag} alt="flag" className="size-4 rounded-sm"/>
                                <span className="text-gray-500 dark:text-dark-text font-medium">France</span>
                            </li>
                            <li className="flex items-center text-xs leading-none gap-1.5">
                                <img src={rusFlag} alt="flag" className="size-4 rounded-sm"/>
                                <span className="text-gray-500 dark:text-dark-text font-medium">Russia</span>
                            </li>
                        </ul>
                    </div>
                </div>
                 {/* End User By Country Chart  */}
            </div>
            {/* Start Views Per Minute Chart */}
            <div className="col-span-full lg:col-span-4 card relative">
                <div className="flex-center-between">
                    <h6 className="card-title text-lg leading-none">Views per minute</h6>
                    <div className="relative">
                        <button data-popover-target="vpmMore" data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-6 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                            <i className="ri-more-fill text-gray-500 dark:text-dark-text text-lg"></i>
                        </button>
                        <ul id="vpmMore" className="popover-target invisible" data-popover>
                            <li>
                                <a className="popover-item" href="#">More one</a>
                            </li>
                            <li>
                                <a className="popover-item" href="#">More two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="views-chart">
                    {/* <div id="views-browser-perminute-chart"></div> */}
                    <Chart options={viewPerminuteOptions.options} series={viewPerminuteOptions.series} type="bar" height={150} />
                </div>
                 {/* Views Pages Table  */}
                <div className="overflow-x-auto scrollbar-table">
                    <table className="table-auto whitespace-nowrap w-full leading-none">
                        <thead className="text-sm font-semibold text-gray-500 dark:text-dark-text">
                            <tr>
                                <td className="px-2.5 py-3 pt-0 first:pl-0 last:pr-0">Page</td>
                                <td className="px-2.5 py-3 pt-0 first:pl-0 last:pr-0">View</td>
                                <td className="px-2.5 py-3 pt-0 first:pl-0 last:pr-0">Bounce rate</td>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-gray-900 dark:text-dark-text *:border-t *:border-gray-200 dark:*:border-dark-border">
                            {viewMinute && viewMinute?.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-2.5 py-3 first:pl-0 last:pr-0 truncate">
                                        <a href={item?.link} className="hover:text-gray-500 dark:text-dark-text">{item?.link}</a>
                                    </td>
                                    <td className="px-2.5 py-3 first:pl-0 last:pr-0 text-center w-10">{item?.view}</td>
                                    <td className="px-2.5 py-3 first:pl-0 last:pr-0 text-center">{item?.bounceRate}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* End Views Per Minute Chart */}
            {/* Start Social Media Traffic Table */}
            <div className="col-span-full sm:col-span-6 lg:col-span-4 card relative">
                <div className="flex-center-between">
                    <h6 className="card-title text-lg leading-none">Social media traffic</h6>
                    <div className="relative">
                        <button data-popover-target="smtMore" data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-6 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                            <i className="ri-more-fill text-gray-500 dark:text-dark-text text-lg"></i>
                        </button>
                        <ul id="smtMore" className="popover-target invisible" data-popover>
                            <li>
                                <a className="popover-item" href="#">More one</a>
                            </li>
                            <li>
                                <a className="popover-item" href="#">More two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex-center-between py-3">
                        <div className="text-sm font-semibold text-gray-900 dark:text-dark-text">Network</div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-dark-text">Visit</div>
                    </div>
                    <ul className="flex flex-col gap-3 text-sm leading-none text-gray-500 dark:text-dark-text font-medium *:flex-center-between *:border *:border-gray-200 dark:*:border-dark-border *:rounded-lg *:px-1 *:py-1.5">
                        {socialTraffcs && socialTraffcs?.map((social, idx) => (
                            <li key={idx}>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center size-8 rounded-md shadow-md">
                                        <i className={`${social?.icon} text-gray-900 dark:text-dark-text`}></i>
                                    </div>
                                    <div>{social?.name}</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-24 2xl:w-32 h-1.5 rounded-full bg-progress-bar-bg dark:bg-progress-bar-bg-dark overflow-hidden">
                                        <div className={`absolute top-0 left-0 bottom-0 bg-progress-bar rounded-full w-[${social?.visitQuantity}%]`}></div>
                                    </div>
                                    <div className="pr-3">{social?.visitQuantity}k</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* End Social Media Traffic Table */}
            {/* Start Chat Inbox */}
            <div className="col-span-full sm:col-span-6 lg:col-span-4 card px-0 relative">
                <div className="flex-center-between px-6 mb-5">
                    <h6 className="card-title text-lg leading-none">Inbox</h6>
                    <div className="relative">
                        <button data-popover-target="cbMore" data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-6 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                            <i className="ri-more-fill text-gray-500 dark:text-dark-text text-lg"></i>
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
                 {/* Message List  */}
                <div className="max-h-[300px] smooth-scrollbar" data-scrollbar>
                    <ul className="flex flex-col gap-3 *:flex-center-between text-sm leading-none px-6">
                        {email && email.map((inbox, idx) => (
                            <li key={idx}>
                            <a href={`email/mail-detail/${inbox?.id}`} className="flex items-center flex-grow p-2 hover:bg-primary-100/50 dark:hover:bg-dark-icon rounded-lg group/chat unread">
                                <div className="size-13 rounded-10 overflow-hidden shrink-0">
                                    <img src={inbox?.senderImage} alt="student"/>
                                </div>
                                <div className="pl-3">
                                    <div className="text-xs leading-none text-gray-900 dark:text-dark-text mb-0.5">{inbox?.time}</div>
                                    <h6 className="leading-none text-heading font-semibold">{inbox?.senderName}</h6>
                                    <p className="font-spline_sans font-light mt-1 text-xs leading-none text-gray-900 dark:text-dark-text line-clamp-1">{inbox?.description}</p>
                                </div>
                                <i className="ri-wechat-line text-[26px] text-gray-900 dark:text-dark-text group-[.unread]/chat:text-primary-500 shrink-0 ms-auto"></i>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* End Chat Inbox */}
        </div>
    </div>
    {/* End Main Content  */}
    </>
    )
}