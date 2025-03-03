import { useEffect, useState } from "react";
import { notifications } from "../../data/data";

export default function Drawers(){

    // code show
    const [showCode, setShowCode] = useState({
        leftTop: false,
        rightBottom: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    // random colors notify
    const colors = ["orange", "primary-500", "gray-500"];
    const [colorTheme, setColorTheme] = useState([]);

    useEffect(() => {
        if (notifications) {
        // Generate a random color for each notification
        const randomColors = notifications.map(() =>
            colors[Math.floor(Math.random() * colors.length)]
        );
        setColorTheme(randomColors);
        }
    }, [notifications]);

    return (
        <>
        {/* SIDE OF CANVAS */}
        {/* Left canvas */}
        <div id="left-of-canvas" className="side-canvas dark:bg-dark-card left-0 h-screen -translate-x-full duration-500" tabindex="-1" aria-labelledby="left-of-canvas">
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] dark:bg-dark-card-two border-b border-dashed dark:border-dark-border">
                <h3 className="text-lg font-semibold">All Notifications</h3>
                <button type="button" data-drawer-hide="left-of-canvas" aria-controls="left-of-canvas" className="hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg size-8 flex-center" >
                    <i className="ri-close-line text-gray-500 dark:text-dark-text"></i>
                </button>
            </div>
            <ul className="flex flex-col divide-y divide-[#F1F1F1] divide-opacity-95 h-[calc(100vh_-_18px_*_3.53)] xl:h-[calc(100vh_-_18px_*_3.73)] smooth-scrollbar" data-scrollbar>
                {notifications && notifications?.map((notify, idx) => (
                    <li key={idx}>
                        <a href="/notification" className="flex items-center gap-x-5 p-4 hover:bg-primary-200/50 dark:hover:bg-dark-icon">
                            <div className="relative">
                                <img className="size-12 rounded-50" src={notify?.image} alt="user"/>
                                <div className={`absolute -bottom-1 -right-1 size-6 rounded-50 border-2 bg-${colorTheme[idx]} z-10 border-white flex-center`}>
                                    <i className="ri-notification-2-line text-[10px] text-white font-medium"></i>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-1 font-semibold text-heading">
                                    {notify?.studentName}
                                    <span className="font-medium text-sm text-gray-900 dark:text-dark-text">want to connect</span>
                                </h6>
                                <div className="font-spline_sans text-sm text-gray-500 dark:text-dark-text">{notify?.moment}</div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
            {/* Top canvas */}
        <div id="top-of-canvas" className="side-canvas dark:bg-dark-card -translate-y-full w-full h-[280px] duration-500" tabindex="-1" aria-labelledby="top-of-canvas">
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] dark:bg-dark-card-two border-b border-dashed dark:border-dark-border">
                <h3 className="text-lg font-semibold">Of Canvas Top</h3>
                <button type="button" data-drawer-hide="top-of-canvas" aria-controls="top-of-canvas" className="hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg size-8 flex-center" >
                    <i className="ri-close-line text-gray-500 dark:text-dark-text"></i>
                </button>
            </div>
        </div>
            {/* Right canvas */}
        <div id="right-of-canvas" className="side-canvas dark:bg-dark-card right-0 h-screen translate-x-full duration-500" tabindex="-1" aria-labelledby="right-of-canvas">
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] dark:bg-dark-card-two border-b border-dashed dark:border-dark-border">
                <h3 className="text-lg font-semibold">All Notifications</h3>
                <button type="button" data-drawer-hide="right-of-canvas" aria-controls="right-of-canvas" className="hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg size-8 flex-center" >
                    <i className="ri-close-line text-gray-500 dark:text-dark-text"></i>
                </button>
            </div>
            <ul className="flex flex-col divide-y divide-[#F1F1F1] divide-opacity-95 h-[calc(100vh_-_18px_*_3.53)] xl:h-[calc(100vh_-_18px_*_3.73)] smooth-scrollbar" data-scrollbar>
                {notifications && notifications?.map((notify, idx) => (
                    <li key={idx}>
                        <a href="/notification" className="flex items-center gap-x-5 p-4 hover:bg-primary-200/50 dark:hover:bg-dark-icon">
                            <div className="relative">
                                <img className="size-12 rounded-50" src={notify?.image} alt="user"/>
                                <div className={`absolute -bottom-1 -right-1 size-6 rounded-50 border-2 bg-${colorTheme[idx]} z-10 border-white flex-center`}>
                                    <i className="ri-notification-2-line text-[10px] text-white font-medium"></i>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-1 font-semibold text-heading">
                                    {notify?.studentName}
                                    <span className="font-medium text-sm text-gray-900 dark:text-dark-text">want to connect</span>
                                </h6>
                                <div className="font-spline_sans text-sm text-gray-500 dark:text-dark-text">{notify?.moment}</div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
            {/* Down canvas */}
        <div id="down-of-canvas" className="side-canvas dark:bg-dark-card translate-y-full w-full h-[280px] duration-500" tabindex="-1" aria-labelledby="down-of-canvas">
            <div className="flex items-center justify-between p-4 bg-[#FAFAFA] dark:bg-dark-card-two border-b border-dashed dark:border-dark-border">
                <h3 className="text-lg font-semibold">Of Canvas Bottom</h3>
                <button type="button" data-drawer-hide="down-of-canvas" aria-controls="down-of-canvas" className="hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg size-8 flex-center" >
                    <i className="ri-close-line text-gray-500 dark:text-dark-text"></i>
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">Of Canvas - Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* LEFT & TOP - BAR */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Left & Right - Bar</h3>
                            <button type="button" onClick={() => toggleCodeView('leftTop')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.leftTop ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.leftTop ? 'hidden' : ''}`}>
                             {/* left & right canvas */}
                            <div className="flex items-center gap-3 flex-wrap">
                                <button data-drawer-target="left-of-canvas" data-drawer-show="left-of-canvas" data-drawer-placement="left" aria-controls="left-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to left side canvas</button>
                                <button data-drawer-target="top-of-canvas" data-drawer-show="top-of-canvas" data-drawer-placement="top" aria-controls="top-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to top-bar canvas</button>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.leftTop ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex items-center gap-3 flex-wrap">
    <button data-drawer-target="left-of-canvas" data-drawer-show="left-of-canvas" data-drawer-placement="left" aria-controls="left-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to left side canvas</button>
    <button data-drawer-target="top-of-canvas" data-drawer-show="top-of-canvas" data-drawer-placement="top" aria-controls="top-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to top-bar canvas</button>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* RIGHT & DOWN - BAR */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Right & Down - Bar</h3>
                            <button type="button" onClick={() => toggleCodeView('rightBottom')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.rightBottom ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.rightBottom ? 'hidden' : ''}`}>
                             {/* left & right canvas */}
                            <div className="flex items-center gap-3 flex-wrap">
                                <button data-drawer-target="right-of-canvas" data-drawer-show="right-of-canvas" data-drawer-placement="right" aria-controls="right-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to right side canvas</button>
                                <button data-drawer-target="down-of-canvas" data-drawer-show="down-of-canvas" data-drawer-placement="bottom" aria-controls="down-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to down-bar canvas</button>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.rightBottom ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex items-center gap-3 flex-wrap">
    <button data-drawer-target="right-of-canvas" data-drawer-show="right-of-canvas" data-drawer-placement="right" aria-controls="right-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to right side canvas</button>
    <button data-drawer-target="down-of-canvas" data-drawer-show="down-of-canvas" data-drawer-placement="bottom" aria-controls="down-of-canvas" className="btn b-solid btn-primary-solid px-8">Enable to down-bar canvas</button>
</div>`}
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