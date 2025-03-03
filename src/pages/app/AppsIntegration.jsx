import { useState } from "react";
import { appIntegration } from "../../data/data";
import connectBtn from '@/assets/images/icons/app-plug.svg'


export default function AppsIntegration(){

    const [isGrid, setGrid] = useState('list')

    return(
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className={`card p-0 overflow-hidden ${(isGrid == 'grid') ? 'bg-transparent' : ''} `}>
                    <div className={`flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 ${(isGrid == 'grid') ? 'bg-[#f9f9f9] mb-4 rounded-2xl' : 'bg-gray-200/30'} dark:bg-dark-card-two`}>
                        <div>
                            <h6 className="card-title">All Integrations & Apps</h6>
                            <p className="card-description">
                                Connect all channels to leverage the best performance.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="text-gray-500 dark:text-dark-text leading-none font-medium">View :</div>
                            <button onClick={()=>setGrid('list')} className={`size-7 sm:size-10 flex-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-icon ${(isGrid == 'list') && 'active'} [&.active]:bg-gray-200 dark:[&.active]:bg-dark-icon duration-300`}>
                                <i className="ri-list-unordered text-gray-500 dark:text-dark-text text-lg"></i>
                            </button>
                            <button onClick={()=>setGrid('grid')} className={`size-7 sm:size-10 flex-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-icon ${(isGrid == 'grid') && 'active' } [&.active]:bg-gray-200 dark:[&.active]:bg-dark-icon duration-300`}>
                                <i className="ri-layout-grid-line text-gray-500 dark:text-dark-text text-lg"></i>
                            </button>
                        </div>
                    </div>
                    {/* Start Connected App List */}
                    {(isGrid == 'list') && <ul className="py-2.5 *:px-7 *:py-5 divide-y divide-gray-200 dark:divide-dark-border-three">
                        {appIntegration && appIntegration?.map((app, idx) => (
                            <>
                            <li key={idx} className="flex-center-between flex-col sm:flex-row hover:bg-primary-200/50 dark:hover:bg-dark-icon gap-4 sm:gap-[10%]">
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="size-10 shrink-0">
                                        <img src={app?.image} alt="app-logo"/>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h6 className="leading-none font-semibold text-heading">
                                            {app?.name}/
                                            <span className="font-medium text-gray-500 dark:text-dark-text"> {app?.category}</span>
                                        </h6>
                                        <p className="card-description">
                                            {app?.description}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" className="btn b-outline btn-light-outline group/plug">
                                    <img src={connectBtn} alt="plug" className="group-[:hover]/plug:brightness-200"/>
                                    <span>Connect</span>
                                </button>
                            </li>
                            </>
                        ))}
                    </ul>}
                    {(isGrid == 'grid') && <ul className="*:p-7 *:rounded-15 grid grid-cols-12 gap-4 mb-4">
                        {appIntegration && appIntegration?.map((app, idx) => (
                            <>
                                <li className="col-span-full sm:col-span-4 flex-center-between flex-col items-start bg-white dark:bg-dark-card gap-4">
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="size-10 shrink-0">
                                            <img src={app?.image} alt="app-logo"/>
                                        </div>
                                        <div className="text-left">
                                            <h6 className="leading-none font-semibold text-heading">
                                                {app?.name}/
                                                <span className="font-medium text-gray-500 dark:text-dark-text"> {app?.category}</span>
                                            </h6>
                                            <p className="card-description">
                                                {app?.description}
                                            </p>
                                        </div>
                                    </div>
                                    <button type="button" className="btn b-outline btn-light-outline group/plug">
                                        <img src={connectBtn} alt="plug" className="group-[:hover]/plug:brightness-200"/>
                                        <span>Connect</span>
                                    </button>
                                </li>
                            </>
                        ))}
                    </ul>}
                    {/* End Connected App List */}
                </div>
            </div>
        </>
    )
}

