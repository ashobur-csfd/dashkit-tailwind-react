
// Top performing courses
import { courses, email, trendCategories } from "../../data/data"

// top elements
import graphicalElement from "@/assets/images/element/graphical-element-1.svg"
import graphicalElement2 from "@/assets/images/element/graphical-element-2.svg"
import lotiAdmin from "@/assets/images/loti/loti-admin-dashboard.svg"
import lotiAdminDark from "@/assets/images/loti/loti-admin-dashboard-dark.svg"
import Chart from "react-apexcharts";
import useApexCharts from "../Charts/useApexCharts";
import SimpleCounter from "../../components/Counter/Counter";

export default function Admin() {

	const { revenueOptions, enrollOptions, courseOptions, ratingOptions, averageEnrollOptions, catrgoryOneOptions, learnActivity } = useApexCharts();

    return (
      <>
        {/* Start Main Content */}
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
			<div className="grid grid-cols-12 gap-x-4">
				{/* Start Intro */}
				<div className="col-span-full 2xl:col-span-7 card p-0">
					<div className="grid grid-cols-12 px-5 sm:px-12 py-11 relative overflow-hidden h-full">
						<div className="col-span-full md:col-span-7 self-center inline-flex flex-col 2xl:block">
							<p className="!leading-none text-sm lg:text-base text-gray-900 dark:text-dark-text">
								Today is <span className="today">Thursday, 25 Jul 2024</span>
							</p>
							<h1 className="text-4xl xl:text-[42px] leading-[1.23] font-semibold mt-3">
								<span className="flex-center justify-start">
									<span className="shrink-0">Welcome Back.</span>
									<span className="select-none hidden md:inline-block animate-hand-wave origin-[70%_70%]">
										👋
									</span>
									<br />
								</span>
								Alex Jionsion
							</h1>
							<a href="create-course" className="btn b-solid btn-primary-solid btn-lg mt-6">
								<i className="ri-add-line text-inherit" />
								Add new course
							</a>
						</div>
						<div className="col-span-full md:col-span-5 flex-col items-center justify-center 2xl:block hidden md:flex">
							<img src={lotiAdmin} alt="online-workshop" className="group-data-[theme-mode=dark]:hidden"/>
							<img src={lotiAdminDark} alt="online-workshop" className="group-data-[theme-mode=light]:hidden"/>
						</div>
						{/* Graphicla Elements */}
						<ul>
							<li className="absolute -top-[30px] left-1/2 animate-spin-slow">
								<img src={graphicalElement} alt="element"/>
							</li>
							<li className="absolute -bottom-[24px] left-1/4 animate-spin-slow">
								<img src={graphicalElement2} alt="element"/>
							</li>
						</ul>
					</div>
				</div>
				{/* End Intro */}
				{/* Start Short Progress Card */}
				<div className="col-span-full 2xl:col-span-5 card">
					<div className="grid grid-cols-12 gap-4">
						{/* Total Revenue Progress Card */}
						<div className="col-span-full sm:col-span-6 p-[10px_16px] dk-border-one rounded-xl h-full">
							<div className="flex-center-between">
								<h6 className="leading-none text-gray-500 dark:text-white font-semibold">Total revenue</h6>
								<div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
							</div>
							<div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
								<div className="pb-8 shrink-0">
									<div className="flex items-center gap-2 mb-3">
										<div className="card-title">
										$
										<SimpleCounter value={30000} />
										</div>
										<div className="flex-center text-primary-500 size-5 rounded-50 border border-primary-500">
											<svg xmlns="http://www.w3.org/2000/svg" width={6} height={6} viewBox="0 0 6 6" fill="none">
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
									<Chart options={revenueOptions.options} series={revenueOptions.series} type="area" height={70} />
								</div>
							</div>
						</div>
						{/* Total Enrollments Progress Card */}
						<div className="col-span-full sm:col-span-6 p-[10px_16px] dk-border-one rounded-xl h-full">
							<div className="flex-center-between">
								<h6 className="leading-none text-gray-500 dark:text-white font-semibold">Total enrollments</h6>
								<div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
							</div>
							<div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
								<div className="pb-8 shrink-0">
									<div className="flex items-center gap-2 mb-3">
										<div className="card-title">
											<SimpleCounter value={21000} />
										</div>
										<div className="flex-center text-danger size-5 rounded-50 border border-danger">
											<svg xmlns="http://www.w3.org/2000/svg" width={6} height={6} viewBox="0 0 6 6" fill="none">
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
									<Chart options={enrollOptions.options} series={enrollOptions.series} type="area" height={70} />
								</div>
							</div>
						</div>
						{/* Total Courses Progress Card */}
						<div className="col-span-full sm:col-span-6 p-[10px_16px] dk-border-one rounded-xl h-full">
							<div className="flex-center-between">
								<h6 className="leading-none text-gray-500 dark:text-white font-semibold">Total courses</h6>
								<div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
							</div>
							<div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
								<div className="pb-8 shrink-0">
									<div className="flex items-center gap-2 mb-3">
										<div className="card-title">
											<SimpleCounter value={25000}/>
										</div>
										<div className="flex-center text-primary-500 size-5 rounded-50 border border-primary-500">
											<svg xmlns="http://www.w3.org/2000/svg" width={6} height={6} viewBox="0 0 6 6" fill="none">
												<path d="M3.38569 1.43565L5.45455 3.44715L6 2.91683L3 0L0 2.91683L0.545456 3.44715L2.6143 1.43565V6H3.38569V1.43565Z" fill="currentColor" />
											</svg>
										</div>
									</div>
									<div className="leading-none text-gray-900 dark:text-dark-text font-semibold">
										<span className="text-primary-500">50% </span>
										Below Target
									</div>
								</div>
								<div className="grow self-center pb-3">
									<Chart options={courseOptions.options} series={courseOptions.series} type="area" height={70} />
								</div>
							</div>
						</div>
						{/* Average rating Progress Card */}
						<div className="col-span-full sm:col-span-6 p-[10px_16px] dk-border-one rounded-xl h-full">
							<div className="flex-center-between">
								<h6 className="leading-none text-gray-500 dark:text-white font-semibold">Average rating</h6>
								<div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
							</div>
							<div className="pt-3 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% flex gap-4 mt-3">
								<div className="pb-8 shrink-0">
									<div className="flex items-center gap-2 mb-3">
										<div className="counter-value card-title">
											<SimpleCounter value={4.5} />
										</div>
										<div className="flex-center text-primary-500 size-5 rounded-50 border border-primary-500">
											<svg xmlns="http://www.w3.org/2000/svg" width={6} height={6} viewBox="0 0 6 6" fill="none">
												<path d="M3.38569 1.43565L5.45455 3.44715L6 2.91683L3 0L0 2.91683L0.545456 3.44715L2.6143 1.43565V6H3.38569V1.43565Z" fill="currentColor"/>
											</svg>
										</div>
									</div>
									<div className="leading-none text-gray-900 dark:text-dark-text font-semibold">
										<span className="text-primary-500">05% </span>
										Below Target
									</div>
								</div>
								<div className="grow self-center pb-3">
									<Chart options={ratingOptions.options} series={ratingOptions.series} type="area" height={70} />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Short Progress Card */}
				{/* Start Average Enrollment Rate Chart */}
				<div className="col-span-full 2xl:col-span-8 card">
					<div className="flex-center-between">
						<h6 className="card-title">Average enrollment rate</h6>
						<select className="form-input form-select">
							<option value="this-month">This Month</option>
							<option value="last-year">Last Year</option>
							<option value="last-month">Last Month</option>
							<option value="last-week">Last Week</option>
						</select>
					</div>
					<Chart options={averageEnrollOptions.options} series={averageEnrollOptions.series} type="area" height={350}/>
				</div>
				{/* End Average Enrollment Rate Chart */}
				{/* Start Top Performing Course */}
				<div className="col-span-full 2xl:col-span-4 card">
					<div className="flex-center-between">
						<h6 className="card-title">Top performing courses</h6>
						<a href="all-course" className="btn b-solid btn-primary-solid btn-sm">See all</a>
					</div>
					{/* Course Table */}
					<div className="overflow-x-auto scrollbar-table">
						<table className="table-auto w-full whitespace-nowrap text-left text-xs text-gray-500 dark:text-dark-text font-semibold leading-none max-h-[350px] smooth-scrollbar" data-scrollbar="true">
							<thead className="border-b border-dashed border-gray-900/60 dark:border-dark-border-three">
								<tr>
									<th className="px-3.5 py-4">Course</th>
									<th className="px-3.5 py-4">Publish on</th>
									<th className="px-3.5 py-4">Enrolled</th>
									<th className="px-3.5 py-4">Price</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-dashed divide-gray-900/60 dark:divide-dark-border-three scroll-content">
								{courses && courses?.map((topCourse, idx) => (
								<tr key={idx}>
									<td className="flex items-center gap-2 px-3.5 py-4">
										<a href={`course-details/${topCourse?.id}`} className="size-10 rounded-50 overflow-hidden">
											<img src={topCourse?.image} alt="thumb" className="size-full object-cover"/>
										</a>
										<div>
											<h6 className="text-heading font-semibold mb-1.5 line-clamp-1">
												<a href={`course-details/${topCourse?.id}`}>{topCourse?.title}</a>
											</h6>
											<p className="font-normal">Author - {topCourse?.instructor}</p>
										</div>
									</td>
									<td className="px-3.5 py-4">{topCourse?.releaseDate}</td>
									<td className="px-3.5 py-4">{topCourse?.totalEnrolled >= 1000
									? `${(topCourse.totalEnrolled / 1000).toFixed(1)}k`
									: topCourse?.totalEnrolled}</td>
									<td className="px-3.5 py-4">${topCourse?.price}</td>
								</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* End Top Performing Course */}
				{/* Start Trending Category */}
				<div className="col-span-full lg:col-span-6 2xl:col-span-4 card px-0 order-2 2xl:order-none">
					<div className="flex-center-between px-6 mb-7">
						<h6 className="card-title">Trending categories</h6>
						<div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">
						30 Days
						</div>
					</div>
					<div className="max-h-[350px] smooth-scrollbar" data-scrollbar>
						<ul className="divide-y divide-gray-200 dark:divide-dark-border-three space-y-5 *:pt-5  px-6">
							{trendCategories && trendCategories.map((trendCategory, inx) => (
								<li key={inx} className="flex-center-between first:pt-0">
									<div className="flex items-center gap-2.5">
										<div className="size-12 rounded-50 bg-primary-200 dark:bg-dark-icon flex-center flex-shrink-0">
											<img src={trendCategory.icon} alt="icon"/>
										</div>
										<div>
											<h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">
												<a href="#" className="truncate">{trendCategory.title}</a>
											</h6>
											<p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{trendCategory.courseQuantity}+ Courses</p>
										</div>
									</div>
									<div className="ms-auto mr-5">
										<Chart options={catrgoryOneOptions.options} series={catrgoryOneOptions.series} type="area" height={30} width={80}/>
									</div>
									<a href="#" className="flex-center size-6 rounded-md bg-primary-200 dark:bg-dark-icon shrink-0">
										<i className="ri-arrow-right-line text-gray-500 dark:text-dark-text text-[14px]" />
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* End Trending Category */}
				{/* Start Learn Activity Chart */}
				<div className="col-span-full 2xl:col-span-5 card">
					<div className="flex-center-between">
						<h6 className="card-title">Learn activity</h6>
						<div className="leading-none shrink-0 text-xs text-gray-900 dark:text-dark-text dk-border-one rounded-full px-2 py-1">30 Days</div>
					</div>
					{/* <div id="learn-activity-chart" className="min-h-80" /> */}
					<Chart options={learnActivity.options} series={learnActivity.series} type="bar" height={380} />
				</div>
				{/* End Learn Activity Chart */}
				{/* Start Support */}
				<div className="col-span-full lg:col-span-6 2xl:col-span-3 card px-0 order-3 2xl:order-none">
					<div className="flex-center-between px-6 mb-7">
						<h6 className="card-title">Support requests</h6>
						<a href="email/mail-box" className="btn b-solid btn-primary-solid btn-sm">See all</a>
					</div>
					<div className="max-h-[350px] smooth-scrollbar" data-scrollbar>
						<ul className="divide-y divide-gray-200 dark:divide-dark-border-three space-y-5 *:pt-5 overflow-x-hidden px-6">
							{email && email.map((support, idx) => (
								<li key={idx} className="flex items-center gap-2.5 first:pt-0">
									<a href={`email/mail-detail/${support?.id}`} className="size-12 rounded-50 flex-shrink-0 overflow-hidden">
										<img src={support?.senderImage} alt="user" />
									</a>
									<div>
										<div className="leading-none text-xs text-gray-500 dark:text-dark-text-two mb-1">{support?.time}</div>
										<h6 className="leading-none text-lg text-heading font-semibold mb-2">
											<a href={`email/mail-detail/${support?.id}`}>{support?.senderName}</a>
										</h6>
										<p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold line-clamp-1">{support?.description}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* End Support */}
			</div>
        </div>
        {/* End Main Content */}
      </>
    );
  }
  