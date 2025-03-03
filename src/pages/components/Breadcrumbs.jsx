import { useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function Breadcrumbs(){

    // code show
    const [showCode, setShowCode] = useState({
        default: false,
        defaultTwo: false,
        withIcon: false,
        withIconTwo: false,
        outline: false,
        solid: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    const basicBreads=[
        {page: 'home', link: 'home'},
        {page: 'course', link: 'course'},
        {page: 'new course', link: 'new-course'},
        {page: 'update', link: 'update'},
    ]
    const basicIconBreads=[
        {page: 'home', link: 'home', icon: (<i className="ri-home-6-line text-[16px] text-inherit"></i>)},
        {page: 'course', link: 'course', icon: (<i className="ri-article-line text-[16px] text-inherit"></i>)},
        {page: 'wallet', link: 'wallet', icon: (<i className="ri-bank-card-line text-[16px] text-inherit"></i>)},
        {page: 'like wishlist', link: 'like-wishlist', icon: (<i className="ri-heart-2-line text-[16px] text-inherit"></i>)},
    ]
    return (
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">Breadcrumb Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* BREADCRUMB DEFAULT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Breadcrumb Default</h3>
                            <button type="button" onClick={() => toggleCodeView('default')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.default ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.default ? 'hidden': ''}`}>
                            <div className="flex flex-col gap-5">
                                <Breadcrumb breads={basicBreads} basic basicBreads/>
                                <Breadcrumb breads={basicBreads} basic basicDotBreads/>
                                <Breadcrumb breads={basicBreads} basic basicArrowBreads/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.default ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col gap-5">
    <Breadcrumb breads={basicBreads} basic basicBreads/>
    <Breadcrumb breads={basicBreads} basic basicDotBreads/>
    <Breadcrumb breads={basicBreads} basic basicArrowBreads/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* BREADCRUMB DEFAULT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Breadcrumb Default</h3>
                            <button type="button" onClick={() => toggleCodeView('defaultTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.defaultTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.defaultTwo ? 'hidden': ''}`}>
                            <div className="flex flex-col gap-5">
                                <Breadcrumb breads={basicBreads} basicTwo basicRightBreads/>
                                <Breadcrumb breads={basicBreads} basicTwo basicRightDoubleBreads/>
                                <Breadcrumb breads={basicBreads} basicTwo basicNoneBreads/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.defaultTwo ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col gap-5">
    <Breadcrumb breads={basicBreads} basicTwo basicRightBreads/>
    <Breadcrumb breads={basicBreads} basicTwo basicRightDoubleBreads/>
    <Breadcrumb breads={basicBreads} basicTwo basicNoneBreads/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* BREADCRUMB WITH ICON */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Breadcrumb Icon</h3>
                            <button type="button" onClick={() => toggleCodeView('withIcon')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.withIcon ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.withIcon ? 'hidden': ''}`}>
                            <div className="flex flex-col gap-5">
                                <Breadcrumb breads={basicIconBreads} basicIcon basicBreads/>
                                <Breadcrumb breads={basicIconBreads} basicIcon basicDotBreads/>
                                <Breadcrumb breads={basicIconBreads} basicIcon basicArrowBreads/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.withIcon ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col gap-5">
    <Breadcrumb breads={basicIconBreads} basicIcon basicBreads/>
    <Breadcrumb breads={basicIconBreads} basicIcon basicDotBreads/>
    <Breadcrumb breads={basicIconBreads} basicIcon basicArrowBreads/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* BREADCRUMB WITH ICON */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Breadcrumb Icon</h3>
                            <button type="button" onClick={() => toggleCodeView('withIconTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.withIconTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.withIconTwo ? 'hidden': ''}`}>
                            <div className="flex flex-col gap-5">
                                <Breadcrumb breads={basicIconBreads} basicTwoIcon basicRightBreads/>
                                <Breadcrumb breads={basicIconBreads} basicTwoIcon basicRightDoubleBreads/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.withIconTwo ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col gap-5">
    <Breadcrumb breads={basicIconBreads} basicTwoIcon basicRightBreads/>
    <Breadcrumb breads={basicIconBreads} basicTwoIcon basicRightDoubleBreads/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* CUSTOM OUTLINE BREADCRUMB */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Custom Outline Breadcrumb</h3>
                            <button type="button" onClick={() => toggleCodeView('outline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outline ? 'hidden': ''}`}>
                            <div className="flex flex-col gap-5">
                                <Breadcrumb breads={basicIconBreads} custom customBreads/>
                                <Breadcrumb breads={basicIconBreads} custom customBreadsIcon/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.outline ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col gap-5">
    <Breadcrumb breads={basicIconBreads} custom customBreads/>
    <Breadcrumb breads={basicIconBreads} custom customBreadsIcon/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* CUSTOM SOLID BREADCRUMB */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Custom Solid Breadcrumb</h3>
                            <button type="button" onClick={() => toggleCodeView('solid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solid ? 'hidden': ''}`}>
                            <div className="flex flex-col gap-5">
                                <Breadcrumb breads={basicIconBreads} custom customSolidBreads/>
                                <Breadcrumb breads={basicIconBreads} custom customSolidBreadsIcon/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.solid ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<ul className="flex items-center flex-wrap gap-2 *:flex-center *:gap-1.5 leading-none text-gray-900 dark:text-dark-text"> 
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="custom-breadcrumb-solid">
            Home
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="custom-breadcrumb-solid">
            Course
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="custom-breadcrumb-solid">
            Wallet
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb current-page">
        <a href="#" className="custom-breadcrumb-solid">
            Like Wishlist
        </a>
    </li>
</ul>
<ul className="flex items-center flex-wrap gap-2 *:flex-center *:gap-1.5 leading-none text-gray-900 dark:text-dark-text"> 
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="flex-center shrink-0 gap-2 custom-breadcrumb-solid">
            <i className="ri-home-6-line text-[16px] text-inherit"></i>
            Home
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="flex-center shrink-0 gap-2 custom-breadcrumb-solid">
            <i className="ri-article-line text-[16px] text-inherit"></i>
            Course
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="flex-center shrink-0 gap-2 custom-breadcrumb-solid">
            <i className="ri-bank-card-line text-[16px] text-inherit"></i>
            Wallet
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb current-page">
        <a href="#" className="flex-center shrink-0 gap-2 custom-breadcrumb-solid">
            <i className="ri-heart-2-line text-[16px] text-inherit"></i>
            Like Wishlist
        </a>
    </li>
</ul>`}
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