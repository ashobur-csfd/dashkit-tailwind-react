import { Outlet } from "react-router-dom";
import { filesMenu } from "../../../../data/data";

export default function FileManager(){
    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="grid grid-cols-12 gap-x-4">
                {/* File Navigation Bar */}
                <div className="col-span-full lg:col-span-3">
                    <div className="card px-0 py-6 flex flex-col lg:min-h-screen">
                        <div className="px-6 pb-6">
                            <h6 className="card-title">File Manager</h6>
                            <a href="#" className="btn b-solid btn-primary-solid w-full mt-7">
                                <span>Create New</span>
                                <i className="ri-add-line text-inherit"></i>
                            </a>
                        </div>
                        <div className="max-h-[calc(100vh_-_400px)] smooth-scrollbar" data-scrollbar>
                            <ul className="text-sm leading-none">
                                {filesMenu && filesMenu?.map((menu, idx) => (
                                    <li key={idx} className="relative">
                                        <a href="my-file" target="_self" className="relative font-semibold flex items-center gap-3 text-gray-500 dark:text-dark-text hover:bg-primary-200/50 dark:hover:bg-dark-icon [&.active]:bg-primary-200/50 dark:[&.active]:bg-dark-icon px-5 py-3 group/li">
                                            {(menu?.icon == 'file') && 
                                            <i className="ri-folder-4-line text-gray-900 dark:text-dark-text font-normal group-hover/li:text-primary-500 group-[.active]/li:text-primary-500"></i>
                                            || (menu?.icon == 'drive') && 
                                            <i className="ri-drive-line text-gray-900 dark:text-dark-text font-normal group-hover/li:text-primary-500 group-[.active]/li:text-primary-500"></i>
                                            || (menu?.icon == 'star') && 
                                            <i className="ri-star-line text-gray-900 dark:text-dark-text font-normal group-hover/li:text-primary-500 group-[.active]/li:text-primary-500"></i>
                                            || (menu?.icon == 'dropbox') && 
                                            <i className="ri-dropbox-line text-gray-900 dark:text-dark-text font-normal group-hover/li:text-primary-500 group-[.active]/li:text-primary-500"></i>
                                            || (menu?.icon == 'share') && 
                                            <i className="ri-share-line text-gray-900 dark:text-dark-text font-normal group-hover/li:text-primary-500 group-[.active]/li:text-primary-500"></i>
                                            || (menu?.icon == 'delete') && 
                                            <i className="ri-delete-bin-6-line text-gray-900 dark:text-dark-text font-normal group-hover/li:text-primary-500 group-[.active]/li:text-primary-500"></i>
                                            }
                                            <span>{menu?.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>                                                       
                        {/* Free Space */}
                        <div className="px-6 pt-7 mt-auto border-t border-gray-200 dark:border-dark-border">
                            <h6 className="leading-none font-semibold text-primary-500 bg-primary-200 dark:bg-dark-icon px-3 py-2 rounded-lg text-center">Free Space</h6>
                            <div className="mt-5">
                                <h6 className="leading-none font-semibold text-gray-500 dark:text-dark-text">Storage</h6>
                                <div className="flex flex-col gap-2 mt-3.5">
                                    <div className="relative max-w-full h-2.5 rounded-full bg-progress-bar-bg dark:bg-progress-bar-bg-dark overflow-hidden">
                                        <div className="absolute top-0 left-0 bottom-0 bg-progress-bar rounded-full w-[40%]"></div>
                                    </div>
                                    <div className="text-xs leading-none text-gray-500 dark:text-dark-text">7.02 GB (40%) of 15 GB used</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
        </>
    )
}