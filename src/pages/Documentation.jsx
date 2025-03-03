import { useState } from "react";

export default function Documentation(){

    return (
        <>
            <div className="main-content px-4 ac-transition">
                <div className="grid grid-cols-12 gap-x-4">
                    {/* Documentation Link */}
                    <div className="col-span-3 hidden md:block">
                        <div className="card p-3 sticky top-4">
                            <h5 className="card-title my-3">Getting Started</h5>
                            <ul className="divide-y divide-dashed divide-gray-200 dark:divide-dark-border-three space-y-0.5 *:pt-0.5"> 
                                <li className="first:pt-0">
                                    <a href="#" className="text-sm text-gray-900 dark:text-dark-text font-medium leading-none px-3 py-2 flex rounded-md hover:bg-primary-200 dark:hover:bg-dark-icon hover:text-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-dark-icon [&.active]:text-primary-500 active">Introduction</a>
                                </li>
                                <li className="first:pt-0">
                                    <a href="#" className="text-sm text-gray-900 dark:text-dark-text font-medium leading-none px-3 py-2 flex rounded-md hover:bg-primary-200 dark:hover:bg-dark-icon hover:text-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-dark-icon [&.active]:text-primary-500">Installation</a>
                                </li>
                                <li className="first:pt-0">
                                    <a href="#" className="text-sm text-gray-900 dark:text-dark-text font-medium leading-none px-3 py-2 flex rounded-md hover:bg-primary-200 dark:hover:bg-dark-icon hover:text-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-dark-icon [&.active]:text-primary-500">Compiled Files</a>
                                </li>
                                <li className="first:pt-0">
                                    <a href="#" className="text-sm text-gray-900 dark:text-dark-text font-medium leading-none px-3 py-2 flex rounded-md hover:bg-primary-200 dark:hover:bg-dark-icon hover:text-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-dark-icon [&.active]:text-primary-500">File Structure</a>
                                </li>
                                <li className="first:pt-0">
                                    <a href="#" className="text-sm text-gray-900 dark:text-dark-text font-medium leading-none px-3 py-2 flex rounded-md hover:bg-primary-200 dark:hover:bg-dark-icon hover:text-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-dark-icon [&.active]:text-primary-500">Resources & assets</a>
                                </li>
                                <li className="first:pt-0">
                                    <a href="#" className="text-sm text-gray-900 dark:text-dark-text font-medium leading-none px-3 py-2 flex rounded-md hover:bg-primary-200 dark:hover:bg-dark-icon hover:text-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-dark-icon [&.active]:text-primary-500">Changelog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Documentation Details */}
                    <div className="col-span-full md:col-span-9">
                        <div className="col-span-full">
                            {/* Start Banner Area */}
                            <div className="bg-doc-hero bg-primary-600 ac-bg rounded-20 overflow-hidden flex-center flex-col px-4 py-16 mb-4">
                                <h2 className="text-2xl md:text-3xl xl:text-[42px] font-semibold text-white !leading-none mb-4">
                                    Introduction
                                </h2>
                                {/* Breadcrumb */}
                                <ul className="flex items-center gap-6 *:leading-none *:relative *:after:absolute *:after:font-remix *:after:content-['\ea6e'] *:after:text-white *:after:text-[16px] *:after:top-1/2 *:after:-translate-y-1/2 *:after:-right-5">
                                    <li className="last:after:hidden"><a href="#" className="text-sm leading-none text-white">Documentation</a></li>
                                    <li className="last:after:hidden"><a href="#" className="text-sm leading-none text-white">Guide</a></li>
                                    <li className="last:after:hidden"><a href="#" className="text-sm leading-none text-white">Start</a></li>
                                </ul>
                            </div>
                            {/* End Banner Area */}

                            <div className="card">
                                <article className="mt-6 first:mt-0">
                                    <h5 className="card-title text-[25px] select-none">Introduction</h5>
                                    <p className="font-spline_sans text-gray-500 dark:text-dark-text text-[15px] leading-[1.62] mt-3">
                                        Dashkit UI is beautifully designed, expertly crafted components UI kit for building a high-quality website and web apps using web technologies — HTML, CSS, and JavaScript — with integrations of the world’s most popular framework Bootstrap. Guide will help you get started with a Geeks Theme, including how to run, customize, update, and integrate your theme!
                                    </p>
                                    <p className="font-spline_sans text-gray-500 dark:text-dark-text text-[15px] leading-[1.62] mt-3">
                                        Amet luctus venenatis lectus magna fringilla urna porttitor. Est placerat in egestas erat imperdiet. Pretium quam vulputate dignissim suspendisse in est ante. In mollis nunc sed id semper risus in. Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </article>
                                <div className="bg-primary-200 dark:bg-dark-icon p-4 rounded-15 mt-6">
                                    <p className="font-spline_sans text-gray-500 dark:text-dark-text text-[15px] leading-[1.62]">
                                        <span className="font-semibold">Note:</span> We highly recommend to check out The Guide an official Bootstrap Theme guidelines by Bootstrap core team. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Neque vitae tempus quam pellentesque nec. 
                                    </p>
                                </div>
                                <article className="mt-6 first:mt-0">
                                    <h5 className="card-title text-[25px]">Setting up local development</h5>
                                    <p className="font-spline_sans text-gray-500 dark:text-dark-text text-[15px] leading-[1.62] mt-3">
                                        Dashkit is built using modern development toolset. Setting up local development Like Gulp, Node js, SASS & Bootstrap SCSS. Tempus iaculis urna id volutpat. Vitae auctor eu augue ut. Neque volutpat ac tincidunt vitae semper quis lectus. Netus et malesuada fames ac turpis egestas cursus turpis massa.
                                    </p>
                                </article>
                                <article className="mt-6 first:mt-0">
                                    <h5 className="card-title text-[25px]">Customize your theme</h5>
                                    <p className="font-spline_sans text-gray-500 dark:text-dark-text text-[15px] leading-[1.62] mt-3">
                                        Morbi enim nunc faucibus a pellentesque sit. Lectus urna duis convallis convallis tellus id interdum. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Ornare massa eget egestas purus viverra accumsan in nisl nisi. In fermentum et sollicitudin ac orci. Dolor purus non enim praesent elementum facilisis. Vel facilisis volutpat est velit egestas dui id ornare. Porttitor lacus luctus accumsan tortor posuere. 
                                    </p>
                                </article>
                                <article className="mt-6 first:mt-0">
                                    <h5 className="card-title text-[25px]">Customize your theme</h5>
                                    <p className="font-spline_sans text-gray-500 dark:text-dark-text text-[15px] leading-[1.62] mt-3">
                                        Amet luctus venenatis lectus magna fringilla urna porttitor. Est placerat in egestas erat imperdiet. Pretium quam vulputate dignissim suspendisse in est ante. In mollis nunc sed id semper risus in. Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}