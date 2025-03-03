import { blogs } from "../../data/data";

export default function Blog(){
    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card p-0 overflow-hidden">
                <div className="px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                    <h6 className="card-title">Latest news & article</h6>
                </div>
                <div className="grid grid-cols-12 gap-x-5 gap-y-6 p-3 sm:p-7">
                    {blogs && blogs?.map((blog, idx) => (
                        <div key={idx} className="col-span-full sm:col-span-6 lg:col-span-4">
                            <div className="bg-blog dark:bg-dark-card-two rounded-20">
                                <div className="p-5 md:p-7 pb-0 -mb-[10%] relative z-[1]">
                                    <div className="flex items-center gap-2.5">
                                        {/* Blog Category */}
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                                <path opacity="0.2" d="M16.2016 6.0001L12.7801 11.1331C12.7252 11.2153 12.6509 11.2827 12.5638 11.3292C12.4767 11.3758 12.3794 11.4002 12.2806 11.4001H1.20156C1.04243 11.4001 0.88982 11.3369 0.777299 11.2244C0.664777 11.1118 0.601562 10.9592 0.601562 10.8001V1.2001C0.601562 1.04097 0.664777 0.888356 0.777299 0.775834C0.88982 0.663312 1.04243 0.600098 1.20156 0.600098H12.2806C12.3794 0.600034 12.4767 0.624372 12.5638 0.67095C12.6509 0.717529 12.7252 0.784906 12.7801 0.867098L16.2016 6.0001Z" fill="#795DED"/>
                                                <path d="M16.6995 5.667L13.275 0.53475C13.166 0.370368 13.018 0.235514 12.8442 0.14221C12.6704 0.048906 12.4762 5.08264e-05 12.279 0H1.2C0.88174 0 0.576515 0.126428 0.351472 0.351472C0.126428 0.576515 0 0.88174 0 1.2V10.8C0 11.1183 0.126428 11.4235 0.351472 11.6485C0.576515 11.8736 0.88174 12 1.2 12H12.279C12.4761 11.9996 12.6701 11.9507 12.8438 11.8576C13.0175 11.7645 13.1656 11.63 13.275 11.466L16.6973 6.333C16.7634 6.23462 16.7989 6.11887 16.7993 6.00034C16.7997 5.88181 16.765 5.76582 16.6995 5.667ZM12.279 10.8H1.2V1.2H12.279L15.4785 6L12.279 10.8Z" fill="#795DED"/>
                                            </svg>
                                            <div className="font-spline_sans text-sm leading-none text-gray-500 dark:text-dark-text">{blog?.meta?.category}</div>
                                        </div>
                                        {/* Blog Post Date */}
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                <path opacity="0.2" d="M11.5709 1.8463V4.154H1.39844V1.8463C1.39844 1.7239 1.44715 1.6065 1.53387 1.51995C1.62058 1.43339 1.73819 1.38477 1.86082 1.38477H11.1085C11.2311 1.38477 11.3487 1.43339 11.4354 1.51995C11.5221 1.6065 11.5709 1.7239 11.5709 1.8463Z" fill="#795DED"/>
                                                <path d="M11.106 0.923077H9.71886V0.461538C9.71886 0.339131 9.67015 0.221737 9.58343 0.135181C9.49672 0.0486262 9.37911 0 9.25648 0C9.13385 0 9.01624 0.0486262 8.92952 0.135181C8.84281 0.221737 8.7941 0.339131 8.7941 0.461538V0.923077H4.17027V0.461538C4.17027 0.339131 4.12156 0.221737 4.03484 0.135181C3.94813 0.0486262 3.83052 0 3.70789 0C3.58526 0 3.46765 0.0486262 3.38093 0.135181C3.29422 0.221737 3.24551 0.339131 3.24551 0.461538V0.923077H1.85836C1.6131 0.923077 1.37788 1.02033 1.20445 1.19344C1.03102 1.36655 0.933594 1.60134 0.933594 1.84615V11.0769C0.933594 11.3217 1.03102 11.5565 1.20445 11.7296C1.37788 11.9027 1.6131 12 1.85836 12H11.106C11.3513 12 11.5865 11.9027 11.7599 11.7296C11.9333 11.5565 12.0308 11.3217 12.0308 11.0769V1.84615C12.0308 1.60134 11.9333 1.36655 11.7599 1.19344C11.5865 1.02033 11.3513 0.923077 11.106 0.923077ZM3.24551 1.84615V2.30769C3.24551 2.4301 3.29422 2.54749 3.38093 2.63405C3.46765 2.7206 3.58526 2.76923 3.70789 2.76923C3.83052 2.76923 3.94813 2.7206 4.03484 2.63405C4.12156 2.54749 4.17027 2.4301 4.17027 2.30769V1.84615H8.7941V2.30769C8.7941 2.4301 8.84281 2.54749 8.92952 2.63405C9.01624 2.7206 9.13385 2.76923 9.25648 2.76923C9.37911 2.76923 9.49672 2.7206 9.58343 2.63405C9.67015 2.54749 9.71886 2.4301 9.71886 2.30769V1.84615H11.106V3.69231H1.85836V1.84615H3.24551ZM11.106 11.0769H1.85836V4.61538H11.106V11.0769Z" fill="#795DED"/>
                                            </svg>
                                            <div className="font-spline_sans text-sm leading-none text-gray-500 dark:text-dark-text">{blog?.meta?.publishDate}</div>
                                        </div>
                                    </div>
                                    {/* Blog Title */}
                                    <h4 className="text-xl md:text-[28px] leading-[1.14] font-semibold text-heading my-4 line-clamp-1">
                                        <a href={`blog-detail/${blog?.id}`}>{blog?.title}</a>
                                    </h4>
                                    <a href={`blog-detail/${blog?.id}`} className="btn b-outline btn-primary-outline btn-sm">Learn More</a>
                                </div>
                                <div className="image-mask image-mask-blog">
                                    <img src={blog?.image} alt="blog-thumb"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Start Pagination */}
                <div className="flex-center-between border-t-[0.5px] border-gray-200 dark:border-dark-border px-3 sm:px-7 py-4">
                    <div className="leading-none text-xs font-semibold text-gray-900 dark:text-dark-text">Showing 4 of 20 entries</div>
                    <ul className="flex items-center gap-1 5 *:text-xs *:text-gray-900 dark:text-dark-text">
                        <li>
                            <a href="#" className="size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white">01</a>
                        </li>
                        <li>
                            <a href="#" className="size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white">02</a>
                        </li>
                        <li>
                            <a href="#" className="size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white">03</a>
                        </li>
                        <li>
                            <a href="#" className="size-6 border-[0.5px] border-transparent hover:border-gray-900/50 rounded-[5px] flex-center bg-primary-500 hover:bg-transparent text-white hover:text-gray-900 dark:text-dark-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                    <path d="M10.9593 5L1 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.94254 1L10.9595 4.99967L6.94254 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* End Pagination */}
            </div>
        </div>
        </>
    )
}