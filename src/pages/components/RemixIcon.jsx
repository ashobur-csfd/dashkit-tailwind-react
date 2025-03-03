import { useState } from "react";

export default function RemixIcon(){

    // code show
    const [showCode, setShowCode] = useState({
        icons: false,
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
                    <h2 className="card-title">Icons</h2>
                </div>
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Basic Icons</h3>
                        <button type="button" onClick={()=>toggleCodeView('icons')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.icons ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.icons ? 'hidden':''}`}>
                        <h6 className="mb-4 text-gray-500 dark:text-dark-text font-medium">Simple Icons (2500+)</h6>
                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-home-4-line">
                                <i className="ri-home-4-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-arrow-right-line">
                                <i className="ri-arrow-right-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-arrow-left-line">
                                <i className="ri-arrow-left-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-building-line">
                                <i className="ri-building-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-bank-line">
                                <i className="ri-bank-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-mail-line">
                                <i className="ri-mail-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-cloud-line">
                                <i className="ri-cloud-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-award-line">
                                <i className="ri-award-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-pie-chart-line">
                                <i className="ri-pie-chart-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-briefcase-2-line">
                                <i className="ri-briefcase-2-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-calendar-line">
                                <i className="ri-calendar-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-bookmark-line">
                                <i className="ri-bookmark-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-global-line">
                                <i className="ri-global-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-customer-service-2-line">
                                <i className="ri-customer-service-2-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-printer-line">
                                <i className="ri-printer-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-stack-line">
                                <i className="ri-stack-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-question-answer-line">
                                <i className="ri-question-answer-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-ball-pen-line">
                                <i className="ri-ball-pen-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-brush-2-line">
                                <i className="ri-brush-2-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-scissors-line">
                                <i className="ri-scissors-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-eraser-line">
                                <i className="ri-eraser-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-pencil-ruler-2-line">
                                <i className="ri-pencil-ruler-2-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-tools-line">
                                <i className="ri-tools-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-layout-line">
                                <i className="ri-layout-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-braces-line">
                                <i className="ri-braces-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-phone-line">
                                <i className="ri-phone-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-database-2-line">
                                <i className="ri-database-2-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-save-line">
                                <i className="ri-save-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-airplay-line">
                                <i className="ri-airplay-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-logout-box-r-line">
                                <i className="ri-logout-box-r-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-gps-line">
                                <i className="ri-gps-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-file-copy-line">
                                <i className="ri-file-copy-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-file-line">
                                <i className="ri-file-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-file-zip-line">
                                <i className="ri-file-zip-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-folder-2-line">
                                <i className="ri-folder-2-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-wallet-line">
                                <i className="ri-wallet-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-vip-crown-line">
                                <i className="ri-vip-crown-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-trophy-line">
                                <i className="ri-trophy-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-coupon-line">
                                <i className="ri-coupon-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-shopping-bag-line">
                                <i className="ri-shopping-bag-line text-inherit"></i>
                            </div>
                            <div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-gift-line">
                                <i className="ri-gift-line text-inherit"></i>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <a href="https://remixicon.com/" target="_blank" className="btn b-solid btn-primary-solid btn-sm">Remix Icons Library</a>
                        </div>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.icons ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-home-4-line">
    <i className="ri-home-4-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-arrow-right-line">
    <i className="ri-arrow-right-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-arrow-left-line">
    <i className="ri-arrow-left-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-building-line">
    <i className="ri-building-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-bank-line">
    <i className="ri-bank-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-mail-line">
    <i className="ri-mail-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-cloud-line">
    <i className="ri-cloud-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-award-line">
    <i className="ri-award-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-pie-chart-line">
    <i className="ri-pie-chart-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-briefcase-2-line">
    <i className="ri-briefcase-2-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-calendar-line">
    <i className="ri-calendar-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-bookmark-line">
    <i className="ri-bookmark-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-global-line">
    <i className="ri-global-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-customer-service-2-line">
    <i className="ri-customer-service-2-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-printer-line">
    <i className="ri-printer-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-stack-line">
    <i className="ri-stack-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-question-answer-line">
    <i className="ri-question-answer-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-ball-pen-line">
    <i className="ri-ball-pen-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-brush-2-line">
    <i className="ri-brush-2-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-scissors-line">
    <i className="ri-scissors-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-eraser-line">
    <i className="ri-eraser-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-pencil-ruler-2-line">
    <i className="ri-pencil-ruler-2-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-tools-line">
    <i className="ri-tools-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-layout-line">
    <i className="ri-layout-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-braces-line">
    <i className="ri-braces-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-phone-line">
    <i className="ri-phone-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-database-2-line">
    <i className="ri-database-2-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-save-line">
    <i className="ri-save-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-airplay-line">
    <i className="ri-airplay-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-logout-box-r-line">
    <i className="ri-logout-box-r-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-gps-line">
    <i className="ri-gps-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-file-copy-line">
    <i className="ri-file-copy-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-file-line">
    <i className="ri-file-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-file-zip-line">
    <i className="ri-file-zip-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-folder-2-line">
    <i className="ri-folder-2-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-wallet-line">
    <i className="ri-wallet-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-vip-crown-line">
    <i className="ri-vip-crown-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-trophy-line">
    <i className="ri-trophy-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-coupon-line">
    <i className="ri-coupon-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-shopping-bag-line">
    <i className="ri-shopping-bag-line text-inherit"></i>
</div>
<div className="flex-center text-lg border rounded-md size-12 border-input-border dark:border-dark-border text-gray-500 dark:text-dark-text" title="ri-gift-line">
    <i className="ri-gift-line text-inherit"></i>
</div>`}
                            </code>
                        </pre>
                    </div>
                    {/* Prism Code */}
                </div>
            </div>
        </>
    )
}