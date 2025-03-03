import { useState } from "react";
import { email } from "../../../../data/data";

export default function MailBox(){

    const [checkAll, setCheckAll] = useState(false)
    const [emails, setEmails] = useState(email)

    const handleDelete = () => {
        if(checkAll){
            setEmails([])
            setCheckAll(false)
        }
    }

    return(
        <>
            {/* All Email Table */}
            <div className="col-span-full lg:col-span-9">
                <div className="card p-0 max-h-full overflow-hidden">
                    <div className="px-4 sm:px-7 py-5 bg-gray-200/30 dark:bg-dark-card-two">
                        <div className="flex items-center gap-1 -translate-x-1">
                            <div className="size-8 flex-center">
                                <input onClick={() => setCheckAll(!checkAll)} type="checkbox" id="checkboxAllEmail" checked={checkAll} className="size-4 cursor-pointer bg-transparent border-2 border-gray-900 rounded-sm appearance-none relative after:position-center after:size-4 checked:border-none checked:after:bg-checked" />
                            </div>
                            <button type="button" onClick={() => window.location.reload()} className="size-8 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-gray-700" onclick="window.location.href=window.location.href">
                                <i className="ri-loop-right-line text-gray-500 dark:text-dark-text-two text-lg" />
                            </button>
                            <button type="button" onClick={handleDelete} data-modal-target="deleteEmail" data-modal-toggle="deleteEmail" className="size-8 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-gray-700">
                                <i className="ri-delete-bin-line text-gray-500 dark:text-dark-text-two text-lg" />
                            </button>
                            <div className="relative">
                                <button data-popover-target="topMore" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-8 flex-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-gray-700">
                                    <i className="ri-more-2-fill text-gray-500 dark:text-dark-text-two text-lg" />
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
                        </div>
                    </div>
                    <div className="py-2.5">
                        <div className="h-[calc(100vh_-_theme('spacing.header')_*_3.3)] xl:h-[calc(100vh_-_theme('spacing.header')_*_3.5)] smooth-scrollbar" data-scrollbar>
                            <div className="overflow-x-auto scrollbar-table">
                                <table className="w-full whitespace-nowrap">
                                    <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                        {emails && emails?.map((mail, idx) => (
                                            <tr key={idx} className="hover:bg-primary-200/50 has-[:checked]:bg-primary-200/50 dark:hover:bg-dark-icon dark:has-[:checked]:bg-dark-icon group/mail group/mail unread">
                                                <td className="px-3.5 py-5 first:pl-5 sm:first:pl-8 last:pr-4 sm:last:pr-7 w-20">
                                                    <div className="flex items-center gap-3">
                                                        <input type="checkbox" checked={checkAll} className="checkboxEmail size-4 cursor-pointer bg-transparent border-2 border-gray-900 rounded-sm appearance-none relative after:position-center after:size-4 checked:border-none checked:after:bg-checked" />
                                                        {/* Star Mail */}
                                                        <input type="checkbox" className="appearance-none border-none size-4 relative cursor-pointer before:position-center before:font-remix before:text-lg before:text-gray-900 dark:text-dark-text before:content-['\f18b'] checked:before:text-star-mail checked:before:content-['\f186']" />
                                                        {/* Book Mark */}
                                                        <i className="ri-bookmark-line text-gray-900" />
                                                    </div>
                                                </td>
                                                <td className="relative px-3.5 py-5 mailBox first:pl-5 sm:first:pl-8 last:pr-4 sm:last:pr-7">
                                                    <div className="grid items-center grid-cols-12 gap-3 ">
                                                        <div className="col-span-4 md:col-span-3">
                                                            <a href={`mail-detail/${mail?.id}`} className="text-gray-900 dark:text-dark-text-two group-[.unread]/mail:text-heading dark:group-[.unread]/mail:text-white font-semibold block truncate before:inset-0 before:absolute">
                                                                {mail?.subject} 
                                                            </a>
                                                        </div>
                                                        <div className="col-span-8 md:col-span-9">
                                                            <p className="font-spline_sans text-sm text-gray-900 dark:text-dark-text-two group-[.unread]/mail:text-gray-500 dark:group-[.unread]/mail:text-white truncate">
                                                                {mail?.description} 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-3.5 py-5 first:pl-5 sm:first:pl-8 last:pr-4 sm:last:pr-7 text-xs text-gray-900 dark:text-dark-text-two group-[.unread]/mail:text-heading dark:group-[.unread]/mail:text-white text-end w-20">{mail?.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Pagination */}
                        <div className="px-6 py-4">
                            <div className="flex items-center font-spline_sans leading-none text-sm text-heading">
                                <button type="button" className="flex items-center gap-1 px-2 py-1 disabled:text-gray-900 dark:text-dark-text group/pg" disabled>
                                    <span>Back</span>
                                    <i className="ri-arrow-left-line text-heading group-[:disabled]/pg:text-gray-900 dark:text-dark-text" />
                                </button>
                                <div className="text-gray-500 dark:text-dark-text">1-10 of 230</div>
                                <button type="button" className="flex items-center gap-1 px-2 py-1 disabled:text-gray-900 dark:text-dark-text group/pg">
                                    <i className="ri-arrow-right-line text-heading group-[:disabled]/pg:text-gray-900 dark:text-dark-text" />
                                    <span>Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}