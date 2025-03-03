import SimpleCounter from "../../components/Counter/Counter"
import { courses, topInstructors } from "../../data/data"
import { sellCourses } from "../../data/table"
import useApexCharts from "../Charts/useApexCharts";
import Chart from "react-apexcharts";
export default function OnlineCourse(){

	const { enrollOptions, courseOptions, totalStudentOption, averageCourseSellingOption, learnActivityOption } = useApexCharts();

    return(
        <>

        {/* Start Main Content */}
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="grid grid-cols-12 gap-x-4">
                {/* Start Dashboard Overview */}
                <div className="col-span-full card p-3 sm:p-7">
                    <div className="flex-center-between flex-col sm:flex-row items-start sm:items-center gap-3 pb-3 sm:pb-7">
                        <div>
                            <h6 className="card-title isd">Dashboard Online Courses</h6>
                            <p className="card-description">Welcome to Dashkit Dashboard</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <select className="form-input form-select form-select-calendar h-[42px]">
                                <option>Monthly</option>
                                <option>Weekly</option>
                                <option>Daily</option>
                                <option>Yearly</option>
                            </select>
                            <div>
                                <a href="create-course.html" className="btn b-solid btn-primary-solid">
                                    <i className="ri-add-circle-line text-inherit"></i>
                                    New course
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        {/* Total Courses */}
                        <div className="col-span-full md:col-span-6 2xl:col-span-3 p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">All Courses</h6>
                                <select className="form-input form-select form-select-sm">
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                </select>
                            </div>
                            <div className="bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex-center-between gap-4 mt-10">
                                <div className="shrink-0">
                                    <div className="card-title text-[32px]">
                                        <SimpleCounter value={2190}/>
                                    </div>
                                    <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                                        <span className="text-lg font-semibold text-primary-500">+0.9% </span>
                                        from last month
                                    </div>
                                </div>
                                <div className="max-w-[100px]">
                                    {/* <div id="total-course-chart"></div> */}
                                    <Chart options={courseOptions.options} series={courseOptions.series} type="area" height={50} />
                                </div>
                            </div>
                        </div>
                        {/* Total Mentors */}
                        <div className="col-span-full md:col-span-6 2xl:col-span-3 p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Total Mentors</h6>
                                <select className="form-input form-select form-select-sm">
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                </select>
                            </div>
                            <div className="bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex-center-between gap-4 mt-10">
                                <div className="shrink-0">
                                    <div className="card-title text-[32px]">
                                        <SimpleCounter value={140}/>
                                    </div>
                                    <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                                        <span className="text-lg font-semibold text-danger">-0.3% </span>
                                        from last month
                                    </div>
                                </div>
                                <div className="max-w-[100px]">
                                    {/* <div id="total-instructor-chart"></div> */}
                                    <Chart options={enrollOptions.options} series={enrollOptions.series} type="area" height={50} />
                                </div>
                            </div>
                        </div>
                        {/* Total Students */}
                        <div className="col-span-full md:col-span-6 2xl:col-span-3 p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Total Students</h6>
                                <select className="form-input form-select form-select-sm">
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                </select>
                            </div>
                            <div className="bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex-center-between gap-4 mt-10">
                                <div className="shrink-0">
                                    <div className="card-title text-[32px]">
                                        <SimpleCounter value={13.2}/>k                                    
                                    </div>
                                    <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                                        <span className="text-lg font-semibold text-success">+0.5% </span>
                                        from last month
                                    </div>
                                </div>
                                <div className="max-w-[100px]">
                                    {/* <div id="total-student-chart"></div> */}
                                    <Chart options={totalStudentOption.options} series={totalStudentOption.series} type="area" height={50} />
                                </div>
                            </div>
                        </div>
                        {/* Total Enroll */}
                        <div className="col-span-full md:col-span-6 2xl:col-span-3 p-[10px_16px] dk-border-one rounded-xl h-full">
                            <div className="flex-center-between">
                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Total Enroll</h6>
                                <select className="form-input form-select form-select-sm">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Daily</option>
                                </select>
                            </div>
                            <div className="bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex-center-between gap-4 mt-10">
                                <div className="shrink-0">
                                    <div className="card-title text-[32px]">
                                        <SimpleCounter value={2.5}/>k                                    
                                    </div>
                                    <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                                        <span className="text-lg font-semibold text-primary-500">+0.6% </span>
                                        from last week
                                    </div>
                                </div>
                                <div className="max-w-[100px]">
                                    {/* <div id="total-enroll-chart"></div> */}
                                    <Chart options={courseOptions.options} series={courseOptions.series} type="area" height={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Dashboard Overview */}

                {/* Start Average Course Selling Chart */}
                <div className="col-span-full 2xl:col-span-7 card">
                    <div className="flex-center-between">
                        <h6 className="card-title">Average course selling</h6>
                        <select className="form-input form-select">
                            <option>This Month</option>
                            <option>This Year</option>
                            <option>This Week</option>
                        </select>
                    </div>
                    {/* <div id="average-course-selling-chart"></div> */}
                    <Chart options={averageCourseSellingOption.options} series={averageCourseSellingOption.series} type="bar" height={360} />
                </div>
                {/* End Average Course Selling Chart */}

                {/* Start Top Selling Course */}
                <div className="col-span-full 2xl:col-span-5 card">
                    <div className="flex-center-between">
                        <h6 className="card-title">Top selling courses</h6>
                        <a href="all-course" className="btn b-solid btn-primary-solid btn-sm">See all</a>
                    </div>
                    {/* Course Table */}
                    <div className="overflow-x-auto scrollbar-table mt-5">
                        <table className="table-auto w-full whitespace-nowrap text-left text-xs text-gray-500 dark:text-dark-text font-semibold leading-none">
                            <thead className="">
                                <tr>
                                    <th className="px-3.5 py-4 bg-[#F4F4F4] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Course</th>
                                    <th className="px-3.5 py-4 bg-[#F4F4F4] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Publish on</th>
                                    <th className="px-3.5 py-4 bg-[#F4F4F4] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Enrolled</th>
                                    <th className="px-3.5 py-4 bg-[#F4F4F4] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-dashed divide-gray-200 dark:divide-dark-border-three">
                                {courses && courses?.slice(0, 4)?.map((course, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-2 px-3.5 py-4">
                                            <a href={`course-details/${course?.id}`} className="size-12 rounded-lg overflow-hidden shrink-0">
                                                <img src={course?.image} alt="thumb" className="size-full object-cover"/>
                                            </a>
                                            <div>
                                                <h6 className="text-heading font-semibold mb-1.5 line-clamp-1">
                                                    <a href={`course-details/${course?.id}`}>{course?.title}</a>
                                                </h6>
                                                <p className="font-normal">Author - {course?.instructor}</p>
                                            </div>
                                        </td>
                                        <td className="px-3.5 py-4">{course?.releaseDate}</td>
                                        <td className="px-3.5 py-4">{course?.totalEnrolled >= 1000
									? `${(course.totalEnrolled / 1000).toFixed(1)}k`
									: course?.totalEnrolled}</td>
                                        <td className="px-3.5 py-4">${course?.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* End Top Selling Course */}

                {/* Start Top Instructor */}
                <div className="col-span-full 2xl:col-span-5 card">
                    <div className="flex-center-between">
                        <h6 className="card-title">Top Instructor</h6>
                        <select className="form-input form-select">
                            <option>This Month</option>
                            <option>This Year</option>
                            <option>This Week</option>
                        </select>
                    </div>
                    {/* Intructor List */}
                    <ul className="divide-y divide-dashed divide-gray-200 dark:divide-dark-border-three space-y-3 mt-5">
                        {topInstructors && topInstructors?.map((instructor, index) => (
                            <li key={index} className="flex-center-between pt-3 last:pt-0">
                            <div className="flex items-center gap-3">
                                <a href="#" className="size-12 rounded-lg overflow-hidden shrink-0">
                                    <img src={instructor?.image} alt="instructor"/>
                                </a>
                                <div>
                                    <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">
                                        <a href="#">{instructor?.name}</a>
                                    </h6>
                                    <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{instructor?.courseQuantity}+ Courses</p>
                                </div>
                            </div>
                            <div className="ms-auto mr-5">
                                <div className="flex items-center gap-2">
                                    <div className="text-heading font-semibold dark:text-dark-text leading-none">{instructor?.rating}</div>
                                    <div className="flex items-center">
                                        <i className="ri-star-s-fill text-star-mail text-[14px]"></i>
                                        <i className="ri-star-s-fill text-star-mail text-[14px]"></i>
                                        <i className="ri-star-s-fill text-star-mail text-[14px]"></i>
                                        <i className="ri-star-s-fill text-star-mail text-[14px]"></i>
                                        <i className="ri-star-s-fill text-star-mail text-[14px]"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="flex-center size-6 h-7 rounded-md text-primary-500 bg-primary-200 dark:bg-dark-icon shrink-0">
                                <i className="ri-arrow-right-line text-inherit text-[14px]"></i>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                {/* End Top Instructor */}

                {/* Start Learn Activity */}
                <div className="col-span-full 2xl:col-span-7 card">
                    <div className="flex-center-between">
                        <h6 className="card-title">Learn Activity</h6>
                        <select className="form-input form-select">
                            <option>This Month</option>
                            <option>This Year</option>
                            <option>This Week</option>
                        </select>
                    </div>
                    {/* <div id="learn-activity-chart"></div> */}
                    <Chart options={learnActivityOption.options} series={learnActivityOption.series} type="area" height={340} />
                </div>
                {/* End Learn Activity */}

                {/* Start All Instructor Table */}
                <div className="col-span-full">
                    <div className="card">
                        <div className="flex-center-between">
                            <h6 className="card-title">Top selling courses</h6>
                            <a href="#" className="btn b-solid btn-primary-solid btn-sm">See all</a>
                        </div>
                        <div className="overflow-x-auto scrollbar-table mt-5">
                            <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                                <thead className="text-heading dark:text-dark-text">
                                    <tr>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Name</th>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Course</th>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Publish on</th>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Enrolled</th>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Progress</th>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Rating</th>
                                        <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg w-10">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                    {sellCourses && sellCourses.map((course, idx) => (
                                        <tr key={idx}> 
                                            <td className="p-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <a href="#" className="size-12 rounded-lg overflow-hidden shrink-0">
                                                        <img src={course?.image} alt="instructor"/>
                                                    </a>
                                                    <div>
                                                        <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">
                                                            <a href="#">{course?.name}</a>
                                                        </h6>
                                                        <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">90+ Courses</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 py-4">{course?.title}</td>
                                            <td className="p-6 py-4">{course?.date}</td>
                                            <td className="p-6 py-4">{course?.enrolled}K+</td>
                                            <td className="p-6 py-4">
                                                <div className="flex flex-col gap-2">
                                                    <div className="relative max-w-[106px] h-2 rounded-full bg-primary-200 dark:bg-dark-icon overflow-hidden">
                                                        <div className={`absolute top-0 left-0 bottom-0 bg-primary-500 rounded-full w-[${course?.progress}%]`}></div>
                                                    </div>
                                                    <div className="text-xs leading-none text-gray-500 dark:text-dark-text">{course?.progress}% Growing</div>
                                                </div>
                                            </td>
                                            <td className="p-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="text-gray-500 font-medium dark:text-dark-text leading-none">{course?.rating}</div>
                                                    <i className="ri-star-s-fill text-star-mail text-[14px]"></i>
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
                                                        <button data-popover-target={`td-3-${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                            <i className="ri-more-2-fill text-inherit"></i>
                                                        </button>
                                                        <ul id={`td-3-${idx}`} className="popover-target invisible" data-popover>
                                                            <li>
                                                                <a className="popover-item" href="#">View Profile</a>
                                                            </li>
                                                            <li>
                                                                <a className="popover-item" href="#">Course Details</a>
                                                            </li>
                                                            <li>
                                                                <a className="popover-item" href="#">View Analytics</a>
                                                            </li>
                                                            <li>
                                                                <a className="popover-item" href="#">Delete Course</a>
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
                    </div>
                </div>
                {/* End All Instructor Table */}
            </div>
        </div>
        {/* End Main Content */}
        </>
    )
}