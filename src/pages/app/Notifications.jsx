import { useState } from "react";
import { notifications } from "../../data/data";
import remove from "@/assets/images/icons/delete-record.png";
export default function Notifications() {
    // const [selectCheckbox, setSelectCheckbox] = useState(false)

    const [checkAll, setCheckAll] = useState(false)
    const [notification, setNotification] = useState(notifications)

    const handleDelete = () => {
        if(checkAll){
            setNotification([])
            setCheckAll(false)
        }
    }

    return(
        <>
        <div>
            {/* Start Main Content */}
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card p-0">
                <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                    <div>
                        <h6 className="card-title">All Notifications</h6>
                        <p className="card-description">
                            See your all notification here
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="size-8 flex-center">
                            <input type="checkbox" checked={checkAll} onClick={() => setCheckAll(!checkAll)}  id="checkboxAllNotification" className="size-4 cursor-pointer bg-transparent border-2 border-gray-500 dark:border-dark-text rounded-sm appearance-none relative after:position-center after:content-['\eb7b'] after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-gray-500 dark:after:text-dark-text"/>
                        </div>
                        <button type="button" onClick={() => window.location.reload()} className="size-8 flex-center rounded-md text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                            <i className="ri-loop-right-line text-lg text-inherit" />
                        </button>
                        <button type="button" data-modal-target="deleteNotification" data-modal-toggle="deleteNotification" className="size-8 flex-center rounded-md text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                            <i className="ri-delete-bin-line text-lg text-inherit" />
                        </button>
                        <div className="relative">
                            <button data-popover-target="topMore" data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-8 flex-center rounded-md text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                                <i className="ri-more-2-fill text-lg text-inherit" />
                            </button>
                            <ul id="topMore" className="popover-target invisible" data-popover>
                                <li>
                                    <a className="popover-item" href="#">More one</a>
                                </li>
                                <li>
                                    <a className="popover-item" href="#">More two</a>
                                </li>
                                <li>
                                    <a className="popover-item" href="#">More three</a>
                                </li>
                                <li>
                                    <a className="popover-item" href="#">More four</a>
                                </li>
                            </ul>
                        </div>
                        <select className="form-input form-select">
                            <option value="last-week">Last Week</option>
                            <option value="last-two-week">Last Two Week</option>
                            <option value="last-month">Last Month</option>
                            <option value="all">all notification</option>
                        </select>
                    </div>
                </div>
                {/* Start Notification List */}
                <ul className="*:flex-center-between *:px-7 *:py-5 divide-y divide-gray-200 dark:divide-dark-border-three py-4">
                    {notification && notification.map((notify, idx) => (
                        <li key={idx} className="flex-col-reverse sm:flex-row hover:bg-primary-200/50 dark:hover:bg-dark-icon group/noti gap-4 sm:gap-[10%]">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-50 relative shrink-0">
                                    <img src={notify?.image} alt="student" className="size-full rounded-50" />
                                    {/* Badge */}
                                    <div className="absolute -bottom-1 -right-1 size-6 rounded-50 border-2 bg-primary-500 z-10 border-white flex-center">
                                        <i className="ri-chat-4-line text-[10px] text-white font-medium" />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-heading font-semibold line-clamp-1">{notify?.name}&nbsp;
                                        <span className="text-gray-500 dark:text-dark-text font-medium">
                                            added new comments your 
                                            <a href="#" className="inline-block text-primary-500 font-semibold">&nbsp;{notify?.courseName} Course {idx + 3}&nbsp;</a> 
                                            to {notify?.date}
                                        </span>
                                    </h6>
                                    <div className="font-spline_sans leading-none text-heading dark:text-dark-text-two mt-1">
                                        {notify?.time}
                                        <span className="relative text-sm -top-0.5">⭐ </span>  
                                        <a href="#" className="text-gray-500 dark:text-dark-text underline hover:text-primary-400">{notify?.courseName} Course 2024</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 self-end sm:self-auto">
                                <div className="flex invisible group-hover/noti:visible items-center gap-2 has-[:checked]:visible">
                                    <div className="size-6 flex-center">
                                        <input type="checkbox" checked={checkAll} className="checkboxNotification size-3.5 cursor-pointer bg-transparent border-[1.5px] border-gray-500 rounded-sm appearance-none relative after:position-center after:content-['\eb7b'] after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-gray-500 dark:after:text-dark-text" />
                                    </div>
                                    <button type="button" onClick={() => window.location.reload()} className="size-6 flex-center rounded-md text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                                        <i className="ri-loop-right-line text-sm text-inherit" />
                                    </button>
                                    <button type="button" data-modal-target="deleteNotification" data-modal-toggle="deleteNotification" className="size-6 flex-center rounded-md text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                                        <i className="ri-delete-bin-line text-sm text-inherit" />
                                    </button>
                                </div>
                                <div className="relative">
                                    <button data-popover-target={`moreThis-${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" type="button" className="size-6 flex-center rounded-md text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-dark-icon">
                                        <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg" />
                                    </button>
                                    <ul id={`moreThis-${idx}`} className="popover-target invisible" data-popover>
                                        <li>
                                            <a className="popover-item" href="#">More one</a>
                                        </li>
                                        <li>
                                            <a className="popover-item" href="#">More two</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* End Notification List */}
                </div>
            </div>
            {/* End Main Content */}
            {/* Start Delete Notification Modal */}
            <div id="deleteNotification" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-modal flex-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white dark:bg-dark-card-shade rounded-lg shadow">
                        <button type="button" data-modal-hide="deleteNotification" className="absolute top-3 end-2.5 hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg size-8 flex-center">
                        <i className="ri-close-line text-gray-500 dark:text-dark-text text-xl leading-none" />
                        </button>
                        <div className="p-4 md:p-5 text-center">
                        <img src={remove} alt="delete" className="block h-12 mx-auto" />
                        <div className="mt-5 text-center">
                            <h5 className="mb-1">Are you sure?</h5>
                            <p className="text-gray-500 dark:text-dark-text">Are you certain you want to delete all Notification ?</p>
                            <div className="flex justify-center gap-2 mt-6">
                            <button type="reset" data-modal-hide="deleteNotification" className="btn b-light btn-danger-light btn-sm">Cancel</button>
                            <button type="submit" onClick={handleDelete} data-modal-hide="deleteNotification" className="btn b-solid btn-danger-solid btn-sm">Yes, Delete It!</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Delete Notification Modal */}
            </div>

        </>
    )
}