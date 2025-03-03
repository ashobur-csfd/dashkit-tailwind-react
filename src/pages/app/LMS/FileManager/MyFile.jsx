import FileSmallUp from "../../../../components/ui/AppComponents/FileSmallUp"
import { myFiles } from "../../../../data/data"

export default function MyFile(){
    return(
        <>
        {/* File Manager OverVie */}
        <div className="col-span-full lg:col-span-9">
            <div className="grid grid-cols-12 gap-x-4">
                <FileSmallUp percent={'70'}/>
                {/* All Files */}
                <div className="col-span-full xl:col-span-9">
                    <div className="card">
                        <h6 className="card-title">All Documents</h6>
                        <div className="flex flex-wrap gap-4 mt-7">
                            {myFiles && myFiles?.map((file, idx) => (
                                <a href="#" className="flex-center size-[90px] dk-border-one rounded-lg">
                                    <i className="ri-file-3-line text-primary-500 text-[40px]"></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Recent File */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="p-6">
                            <h6 className="card-title">All Documents</h6>
                        </div>
                        <div className="overflow-x-auto scrollbar-table">
                            <table className="table-auto w-full whitespace-nowrap text-left text-gray-900 dark:text-dark-text font-medium leading-none">
                                <thead className="border-b-[0.5px] border-gray-200 dark:border-dark-border text-gray-500 dark:text-dark-text font-semibold">
                                    <tr>
                                        <th className="px-7 py-6">Name</th>
                                        <th className="px-7 py-6">File Size</th>
                                        <th className="px-7 py-6">Reason Suggested</th>
                                        <th className="px-7 py-4 w-10">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                    {myFiles && myFiles?.map((file, idx) => (
                                        <tr key={idx} className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-dark-text group/tr"> 
                                            <td className="flex items-center gap-2 px-7 py-6">
                                                <i className="ri-folder-4-line text-2xl text-inherit"></i>
                                                <h6 className="leading-none text-gray-500 dark:text-dark-text font-bold">{file?.name}</h6>
                                            </td>
                                            <td className="px-7 py-6 ">{file?.size}</td>
                                            <td className="px-7 py-6">You Opened {file?.date}</td>
                                            <td className="px-7 py-6">
                                                <div className="relative">
                                                    <button data-popover-target={`file${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                        <i className="ri-more-2-fill text-inherit"></i>
                                                    </button>
                                                    <ul id={`file${idx}`} className="popover-target invisible" data-popover>
                                                        <li>
                                                            <a className="popover-item" href="#">Copy</a>
                                                        </li>
                                                        <li>
                                                            <a className="popover-item" href="#">Open</a>
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
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}