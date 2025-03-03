import deleteImg from '@/assets/images/icons/delete-record.png';
import { loggedDevices } from '../../data/data';

export default function LogDevice(){
    return(
    <>
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card p-0 overflow-hidden">
            <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                <div>
                    <h6 className="card-title">Logged Devices</h6>
                    <p className="card-description">
                        List of all devices used to access this account.
                    </p>
                </div>
            </div>
            {/* Start Login Device Table */}
            <div className="overflow-x-auto scrollbar-table">
                <table className="table-auto w-full whitespace-nowrap text-left text-gray-900 dark:text-dark-text font-medium leading-none">
                    <thead className="border-b-[0.5px] border-gray-200 dark:border-dark-border text-gray-500 dark:text-dark-text font-semibold">
                        <tr>
                            <th className="px-7 py-6">Device Name</th>
                            <th className="px-7 py-6">Browser</th>
                            <th className="px-7 py-6">Location</th>
                            <th className="px-7 py-6">Last Logged</th>
                            <th className="px-7 py-6">Status</th>
                            <th className="px-7 py-6">Action</th>
                            <th className="px-7 py-4 w-10">More</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                        {loggedDevices && loggedDevices?.map((device, idx) => (
                            <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-dark-text group/tr"> 
                                <td className="flex items-center gap-2 px-7 py-6">
                                    <i className={`ri-mix log-device-type text-2xl text-inherit ${{'desktop':'desktop', 'laptop':'laptop', 'tablet':'tablet', 'mobile':'mobile', }[device?.type] || 'desktop'}`}></i>
                                    <h6 className="text-lg leading-none text-heading font-bold">
                                        <a href="#">{device?.name}</a>
                                    </h6>
                                </td>
                                <td className="px-7 py-6 ">{device?.browser}</td>
                                <td className="px-7 py-6">{device?.location}</td>
                                <td className="px-7 py-6">{device?.lastTime}</td>
                                <td className="px-7 py-6">
                                    <div className={`ri-mix is-verified ${device?.status ? 'verified':'unverified'}`} title={`${device?.status ? 'Verified':'Unverified'}`}></div>
                                </td>
                                <td className="px-7 py-6">
                                    <button type="button" data-modal-target="deleteDevice" data-modal-toggle="deleteDevice" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                                        <i className="ri-delete-bin-6-line text-[16px] text-gray-500 dark:text-dark-text"></i>
                                    </button>
                                </td>
                                <td className="px-7 py-6">
                                    <div className="relative">
                                        <button data-popover-target={`device${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                                            <i className="ri-more-2-fill text-inherit"></i>
                                        </button>
                                        <ul id={`device${idx}`} className="popover-target invisible" data-popover>
                                            <li>
                                                <a className="popover-item" href="#">See</a>
                                            </li>
                                            <li>
                                                <a className="popover-item" href="#">Share</a>
                                            </li>
                                            <li>
                                                <a className="popover-item" href="#">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* End Login Device Table */}
            {/* Start Pagination */}
            <div className="px-3 sm:px-6 py-4 border-t border-gray-200 dark:border-dark-border">
                <div className="flex-center-between mt-4">
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
            </div>
            {/* End Pagination */}
        </div>
        {/* Start Delete Device Modal */}
        <div id="deleteDevice" tabindex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-modal flex-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white dark:bg-dark-card-shade rounded-lg shadow">
                    <button type="button" data-modal-hide="deleteDevice" className="absolute top-3 end-2.5 hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg size-8 flex-center">
                        <i className="ri-close-line text-gray-500 dark:text-dark-text text-xl leading-none"></i>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <img src={deleteImg} alt="delete" className="block h-12 mx-auto"/>
                        <div className="mt-5 text-center">
                            <h5 className="mb-1">Are you sure?</h5>
                            <p className="text-gray-500 dark:text-dark-text">Are you certain you want to log out from this device?</p>
                            <div className="flex justify-center gap-2 mt-6">
                                <button type="reset" data-modal-hide="deleteDevice" className="btn b-light btn-danger-light btn-sm">Cancel</button>
                                <button type="submit" data-modal-hide="deleteDevice" className="btn b-solid btn-danger-solid btn-sm">Yes, Delete It!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Delete Device Modal */}
    </div>
    </>
    )
}