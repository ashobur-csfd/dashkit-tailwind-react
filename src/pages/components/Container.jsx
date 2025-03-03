import { useState } from "react";
import lessIcon from '@/assets/images/icons/less.png'
import geterIcon from '@/assets/images/icons/geter.png'

export default function Container(){

    // code show
    const [showCode, setShowCode] = useState({
        container: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    return (
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card">
                    <h2 className="card-title">Container Component</h2>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                    {/* CONTAINERS BREAKPOINT */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Containers Breakpoints</h3>
                                <button type="button" onClick={()=>toggleCodeView('container')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.container ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.container ? 'hidden':''}`}>
                                <div className="overflow-x-auto">
                                    <table className="table-auto border-collapse dk-border-one w-full whitespace-nowrap text-left text-gray-900 dark:text-dark-text-two font-medium leading-none">
                                        <thead className="border-b-[0.5px] border-gray-200 dark:border-dark-border text-gray-500 dark:text-dark-text font-medium">
                                            <tr>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Breakpoints</th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Small 
                                                    <span className="mt-2 text-sm font-medium flex items-center gap-1">
                                                        <img src={lessIcon} alt="arrow"/>
                                                        640px
                                                    </span>
                                                </th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Medium 
                                                    <span className="mt-2 text-sm font-medium flex items-center gap-1">
                                                        <img src={geterIcon} alt="arrow"/>
                                                        768px
                                                    </span>
                                                </th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">Larger 
                                                    <span className="mt-2 text-sm font-medium flex items-center gap-1">
                                                        <img src={geterIcon} alt="arrow"/>
                                                        1024px
                                                    </span>
                                                </th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">XL 
                                                    <span className="mt-2 text-sm font-medium flex items-center gap-1">
                                                        <img src={geterIcon} alt="arrow"/>
                                                        1280px
                                                    </span>
                                                </th>
                                                <th className="p-6 py-4 bg-[#F2F4F9] dark:bg-dark-card-two dk-border-one">2XL 
                                                    <span className="mt-2 text-sm font-medium flex items-center gap-1">
                                                        <img src={geterIcon} alt="arrow"/>
                                                        1536px
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                            <tr>
                                                <td className="p-6 py-4 dk-border-one text-[#D63384]">sm</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">640px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">768px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1024px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1280px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1536px</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 py-4 dk-border-one text-[#D63384]">md</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">768px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1024px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1280px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1536px</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 py-4 dk-border-one text-[#D63384]">lg</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one">768px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1024px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1280px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1536px</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 py-4 dk-border-one text-[#D63384]">xl</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one">1024px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1280px</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1536px</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 py-4 dk-border-one text-[#D63384]">2xl</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one">100%</td>
                                                <td className="p-6 py-4 dk-border-one text-gray-500 dark:text-dark-text">1536px</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.container ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`Sorry we can't show this table`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}