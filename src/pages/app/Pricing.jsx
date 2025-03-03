export default function Pricing(){
    return(
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card p-0 overflow-hidden">
                    <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                        <div>
                            <h6 className="card-title">Plans & Pricing</h6>
                        </div>
                        <select className="form-input form-select self-end sm:self-auto">
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                    {/* Start Pricing Card */}
                    <div className="p-7 xl:p-15 ">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="col-span-full sm:col-auto dk-border-one p-5 xl:p-10 rounded-20 h-max hover:border-primary-500 group/pc ac-transition">
                                <h6 className="sm:text-lg !leading-none text-heading font-semibold">Starter</h6>
                                <div className="text-[42px] leading-none text-heading dark:text-dark-text font-extrabold mt-3 mb-8">
                                    $19.00
                                    <sub className="text-base leading-none font-medium text-gray-900 dark:text-dark-text relative bottom-1">/ Month</sub>
                                </div>
                                <button className="dk-border-one text-heading dark:text-dark-text flex-center w-full py-3.5 rounded-full hover:!bg-primary-500 group-hover/pc:text-white group-hover/pc:bg-primary-400 group-hover/pc:translate-y-[44px] xl:group-hover/pc:translate-y-[64px] ac-transition">Choose Plan</button>
                            </div>
                            <div className="col-span-full sm:col-auto dk-border-one p-5 xl:p-10 rounded-20 h-max hover:border-primary-500 group/pc ac-transition">
                                <div className="sm:text-lg !leading-none text-primary-500 dark:text-dark-text font-semibold bg-primary-200 dark:bg-dark-icon px-5 py-1.5 rounded-full w-max mb-5">Popular</div>
                                <h6 className="sm:text-lg !leading-none text-heading font-semibold">Team</h6>
                                <div className="text-[42px] leading-none text-heading dark:text-dark-text font-extrabold mt-3 mb-8">
                                    $67.00
                                    <sub className="text-base leading-none font-medium text-gray-900 dark:text-dark-text relative bottom-1">/ Month</sub>
                                </div>
                                <button className="dk-border-one text-heading dark:text-dark-text flex-center w-full py-3.5 rounded-full hover:!bg-primary-500 group-hover/pc:text-white group-hover/pc:bg-primary-400 group-hover/pc:translate-y-[44px] xl:group-hover/pc:translate-y-[64px] ac-transition">Choose Plan</button>
                            </div>
                            <div className="col-span-full sm:col-auto dk-border-one p-5 xl:p-10 rounded-20 h-max hover:border-primary-500 group/pc ac-transition">
                                <h6 className="sm:text-lg !leading-none text-heading font-semibold">Premium</h6>
                                <div className="text-[42px] leading-none text-heading dark:text-dark-text font-extrabold mt-3 mb-8">
                                    $67.00
                                    <sub className="text-base leading-none font-medium text-gray-900 dark:text-dark-text relative bottom-1">/ Month</sub>
                                </div>
                                <button className="dk-border-one text-heading dark:text-dark-text flex-center w-full py-3.5 rounded-full hover:!bg-primary-500 group-hover/pc:text-white group-hover/pc:bg-primary-400 group-hover/pc:translate-y-[44px] xl:group-hover/pc:translate-y-[64px] ac-transition">Choose Plan</button>
                            </div>
                        </div>
                    </div>
                    {/* End Pricing Card */}

                    <div className="overflow-x-auto bg-gray-200/30 dark:bg-dark-card-two mb-7 rounded-t-30">
                        <table className="table-auto w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-semibold leading-none">
                            <thead className="border-b-[0.5px] border-gray-200 dark:border-dark-border">
                                <tr>
                                    <th className="px-7 py-4">Feature</th>
                                    <th className="px-7 py-4">Starter</th>
                                    <th className="px-7 py-4">Team</th>
                                    <th className="px-7 py-4">Premium</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                <tr> 
                                    <td className="px-7 py-4">Unlimited Course</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">Own Analytics Platfrom</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">Unlimited Course</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">Chat Support</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">Add New Course</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">Learning 3 Month free</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">Unlimited Users</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available no"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                                <tr> 
                                    <td className="px-7 py-4">All Resources</td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                    <td className="px-7 py-4">
                                        <i className="ri-mix is-available yes"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}