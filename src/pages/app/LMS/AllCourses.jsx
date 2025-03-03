import { useState } from "react";
import { courses } from "../../../data/data";

export default function AllCourses() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Adjust this to control how many courses to display per page

    // Calculate total pages
    const totalPages = Math.ceil(courses.length / itemsPerPage);

    // Get current courses based on the current page
    const currentCourses = courses.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card">
                    <div className="p-1.5">
                        <div className="flex-center-between">
                            <div className="flex items-center gap-5">
                                <h6 className="leading-none text-[28px] font-semibold text-heading hidden md:block">All courses</h6>
                                <div className="sm:min-w-52 leading-none text-sm relative text-gray-900 dark:text-dark-text">
                                    <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                        <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                    </span>
                                    <input type="search" placeholder="Search..." className="form-input pl-8" />
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="leading-none flex items-center gap-2.5">
                                    <label className="text-gray-500 dark:text-dark-text font-medium hidden sm:inline-block">Sort by:</label>
                                    <select className="form-input form-select h-10 py-0">
                                        <option value="accepted">Approved</option>
                                        <option value="pending">Pending</option>
                                        <option value="rejected">Rejected</option>
                                        <option value="reviewing">Reviewing</option>
                                    </select>
                                </div>
                                <a href="create-course" className="hidden xl:btn b-solid btn-primary-solid">
                                    <i className="ri-add-circle-line text-inherit"></i>
                                    <span>Create new</span>
                                </a>
                            </div>
                        </div>

                        {/* Start All Course Table */}
                        <div className="overflow-x-auto scrollbar-table">
                            <table className="table-auto w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium leading-none mt-5">
                                <thead className="font-semibold relative z-[1] before:absolute before:size-full before:bg-[#F4F4F4] dark:before:bg-dark-icon before:rounded-10 before:-z-[1]">
                                    <tr>
                                        <th className="px-3.5 py-4">Course title</th>
                                        <th className="px-3.5 py-4">Instructor</th>
                                        <th className="px-3.5 py-4">Category</th>
                                        <th className="px-3.5 py-4">Level</th>
                                        <th className="px-3.5 py-4">Price</th>
                                        <th className="px-3.5 py-4">Status</th>
                                        <th className="px-3.5 py-4 w-10">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three text-heading dark:text-dark-text">
                                    {currentCourses.map((course, idx) => (
                                        <tr key={idx}>
                                            <td className="flex items-center gap-2 px-3.5 py-5">
                                                <a href={`course-details/${course?.id}`} className="size-[70px] rounded-50 overflow-hidden">
                                                    <img src={course?.image} alt="thumb" className="size-full object-cover" />
                                                </a>
                                                <div>
                                                    <h6 className="card-title text-lg line-clamp-1">
                                                        <a href={`course-details/${course?.id}`}>{course?.title}</a>
                                                    </h6>
                                                    <div className="flex items-center gap-2.5 mt-1.5">
                                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-dark-text">
                                                            <i className="ri-timer-2-line text-inherit"></i>
                                                            <div className="font-semibold">{course?.duration}</div>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-dark-text">
                                                            <i className="ri-book-line text-inherit"></i>
                                                            <div className="font-semibold">{course?.lectures} Lectures</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3.5 py-5">{course?.instructor}</td>
                                            <td className="px-3.5 py-5">{course?.category}</td>
                                            <td className="px-3.5 py-5">{course?.level}</td>
                                            <td className="px-3.5 py-5">${course?.price}</td>
                                            <td className="px-3.5 py-5">
                                                <span className={`badge capitalize ${{
                                                    'approved': 'badge-success-light',
                                                    'rejected': 'badge-danger-light',
                                                    'reviewing': 'badge-info-light',
                                                    'pending': 'badge-warning-light'
                                                }[course?.status] || 'badge-success-light'}`}>
                                                    {course?.status}
                                                </span>
                                            </td>
                                            <td className="px-3.5 py-5">
                                                <div className="flex items-center gap-2">
                                                    {/* Edit Course */}
                                                    <a href={`edit-course/${course?.id}`} className="btn-icon btn-primary-icon-light size-7">
                                                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                                                    </a>
                                                    {/* Delete From List */}
                                                    <a href="#" className="btn-icon btn-danger-icon-light size-7">
                                                        <i className="ri-delete-bin-line text-inherit text-[13px]"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* End All Course Table */}

                        {/* Start Pagination */}
                        <div className="flex-center-between border-t-[0.5px] border-gray-200 dark:border-dark-border pt-4">
                            <div className="leading-none text-xs font-semibold text-gray-900 dark:text-dark-text">
                                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, courses.length)} of {courses.length} entries
                            </div>
                            <ul className="flex items-center gap-1 text-xs text-gray-900 dark:text-dark-text">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className={`size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none ${
                                                currentPage === index + 1
                                                    ? "bg-primary-500 text-white"
                                                    : "hover:bg-primary-500 hover:text-white"
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(index + 1);
                                            }}
                                        >
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#"
                                        className={`size-6 border-[0.5px] border-transparent hover:border-gray-900/50 rounded-[5px] flex-center ${
                                            currentPage === totalPages ? "bg-primary-500 text-white" : "hover:bg-primary-500 hover:text-white"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                            <path d="M10.9593 5L1 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.94254 1L10.9595 4.99967L6.94254 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End Pagination */}
                    </div>
                </div>
            </div>
        </>
    );
}
