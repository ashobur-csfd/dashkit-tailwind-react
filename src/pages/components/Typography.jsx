import { useState } from "react";

export default function Typography(){

    // code show
    const [showCode, setShowCode] = useState({
        typography: false,
        display: false,
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
                    <h2 className="card-title">Typography Component</h2>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                    {/* HTML - HEADING */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">HTML - Heading</h3>
                                <button type="button" onClick={()=>toggleCodeView('typography')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.typography ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.typography ? 'hidden':''}`}>
                                <div className="divide-y divide-[#EEE] *:py-4 first:*:pt-0 last:*:pb-0">
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box">h1</div>
                                        <h1 className="md:text-5xl text-[22px] font-medium text-heading">Typography heading</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box">h2</div>
                                        <h2 className="md:text-[40px] text-xl font-medium text-heading">Typography heading</h2>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box">h3</div>
                                        <h3 className="md:text-4xl text-lg font-medium text-heading">Typography heading</h3>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box">h4</div>
                                        <h4 className="md:text-[28px] font-medium text-heading">Typography heading</h4>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box">h5</div>
                                        <h5 className="md:text-xl text-sm font-medium text-heading">Typography heading</h5>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box">h6</div>
                                        <h6 className="md:text-base text-xs font-medium text-heading">Typography heading</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.typography ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<h1 className="md:text-5xl text-[22px] font-medium text-heading">Typography heading</h1>
<h2 className="md:text-[40px] text-xl font-medium text-heading">Typography heading</h2>
<h3 className="md:text-4xl text-lg font-medium text-heading">Typography heading</h3>
<h4 className="md:text-[28px] font-medium text-heading">Typography heading</h4>
<h5 className="md:text-xl text-sm font-medium text-heading">Typography heading</h5>
<h6 className="md:text-base text-xs font-medium text-heading">Typography heading</h6>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* DISPLAY - HEADING */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Display - Heading</h3>
                                <button type="button" onClick={()=>toggleCodeView('display')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.display ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.display ? 'hidden':''}`}>
                                <div className="divide-y divide-[#EEE] *:py-7 first:*:pt-0 last:*:pb-0">
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box md:text-[32px] text-2xl font-medium">D1</div>
                                        <h1 className="md:text-[86px] text-4xl text-heading">Display - 01</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box md:text-[32px] text-2xl font-medium">D2</div>
                                        <h2 className="md:text-[70px] text-3xl text-heading">Display - 02</h2>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box md:text-[32px] text-2xl font-medium">D3</div>
                                        <h3 className="md:text-[52px] text-[28px] text-heading">Display - 03</h3>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box md:text-[32px] text-2xl font-medium">D4</div>
                                        <h4 className="md:text-[44px] text-2xl text-heading">Display - 04</h4>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box md:text-[32px] text-2xl font-medium">D5</div>
                                        <h5 className="md:text-4xl text-[22px] text-heading">Display - 05</h5>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="typo-box md:text-[32px] text-2xl font-medium">D6</div>
                                        <h6 className="md:text-2xl text-xl text-heading">Display - 06</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.display ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<h1 className="md:text-[86px] text-4xl text-heading">Display - 01</h1>
<h2 className="md:text-[70px] text-3xl text-heading">Display - 02</h2>
<h3 className="md:text-[52px] text-[28px] text-heading">Display - 03</h3>
<h4 className="md:text-[44px] text-2xl text-heading">Display - 04</h4>
<h5 className="md:text-4xl text-[22px] text-heading">Display - 05</h5>
<h6 className="md:text-2xl text-xl text-heading">Display - 06</h6>`}
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