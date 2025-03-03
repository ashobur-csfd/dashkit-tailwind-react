import { useState } from "react";

export default function Checkboxs(){

    // code show
    const [showCode, setShowCode] = useState({
        solid: false,
        solidRounded: false,
        outline: false,
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
                    <h2 className="card-title">Checkbox & Radio Component</h2>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                     {/* SOLID COLOR CHECKBOX */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Default Checkbox</h3>
                                <button type="button" onClick={()=>toggleCodeView('solid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.solid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 space-y-4 ${showCode.solid ? 'hidden': ''}`}>
                                <div className="flex gap-5 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-1" type="checkbox" checked className="check check-primary-solid"/>
                                        <label htmlFor="check-s-1" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-2" type="checkbox" className="check check-secondary-solid"/>
                                        <label htmlFor="check-s-2" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-3" type="checkbox" checked className="check check-warning-solid"/>
                                        <label htmlFor="check-s-3" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-4" type="checkbox" className="check check-danger-solid"/>
                                        <label htmlFor="check-s-4" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-5" type="checkbox" checked className="check check-info-solid"/>
                                        <label htmlFor="check-s-5" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-6" type="checkbox" className="check check-success-solid"/>
                                        <label htmlFor="check-s-6" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-s-7" type="checkbox" checked className="check check-success-solid" disabled/>
                                        <label htmlFor="check-s-7" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
                                    </div>
                                </div>
                            </div>
                             {/* Prism Code */}
                            <div className={`p-6 ${showCode.solid ? '': 'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex items-center gap-2">
    <input id="check-s-1" type="checkbox" checked className="check check-primary-solid"/>
    <label htmlFor="check-s-1" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-s-2" type="checkbox" className="check check-secondary-solid"/>
    <label htmlFor="check-s-2" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-s-3" type="checkbox" checked className="check check-warning-solid"/>
    <label htmlFor="check-s-3" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-s-4" type="checkbox" className="check check-danger-solid"/>
    <label htmlFor="check-s-4" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-s-5" type="checkbox" checked className="check check-info-solid"/>
    <label htmlFor="check-s-5" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-s-6" type="checkbox" className="check check-success-solid"/>
    <label htmlFor="check-s-6" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-s-7" type="checkbox" checked className="check check-success-solid" disabled/>
    <label htmlFor="check-s-7" className="leading-none font-medium text-gray-500 dark:text-dark-text">Default Check Box</label>
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code */}
                        </div>
                    </div>
                     {/* ROUNDED SOLID COLOR CHECKBOX */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Rounded Checkbox</h3>
                                <button type="button" onClick={()=>toggleCodeView('solidRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.solidRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 space-y-4 ${showCode.solidRounded ? 'hidden': ''}`}>
                                <div className="flex gap-5 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <input id="check-rs-1" type="checkbox" className="check check-primary-solid rounded-full"/>
                                        <label htmlFor="check-rs-1" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-rs-2" type="checkbox" checked className="check check-secondary-solid rounded-full"/>
                                        <label htmlFor="check-rs-2" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-rs-3" type="checkbox" className="check check-warning-solid rounded-full"/>
                                        <label htmlFor="check-rs-3" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-rs-4" type="checkbox" checked className="check check-danger-solid rounded-full"/>
                                        <label htmlFor="check-rs-4" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-rs-5" type="checkbox" className="check check-info-solid rounded-full"/>
                                        <label htmlFor="check-rs-5" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-rs-6" type="checkbox" checked className="check check-success-solid rounded-full"/>
                                        <label htmlFor="check-rs-6" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
                                    </div>
                                </div>
                            </div>
                             {/* Prism Code */}
                            <div className={`p-6 ${showCode.solidRounded ? '': 'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex items-center gap-2">
    <input id="check-rs-1" type="checkbox" className="check check-primary-solid rounded-full"/>
    <label htmlFor="check-rs-1" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-rs-2" type="checkbox" checked className="check check-secondary-solid rounded-full"/>
    <label htmlFor="check-rs-2" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-rs-3" type="checkbox" className="check check-warning-solid rounded-full"/>
    <label htmlFor="check-rs-3" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-rs-4" type="checkbox" checked className="check check-danger-solid rounded-full"/>
    <label htmlFor="check-rs-4" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-rs-5" type="checkbox" className="check check-info-solid rounded-full"/>
    <label htmlFor="check-rs-5" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-rs-6" type="checkbox" checked className="check check-success-solid rounded-full"/>
    <label htmlFor="check-rs-6" className="leading-none font-medium text-gray-500 dark:text-dark-text">Rounded Check Box</label>
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code */}
                        </div>
                    </div>
                     {/* OUTLINE COLOR CHECKBOX */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Outline Checkbox</h3>
                                <button type="button" onClick={()=>toggleCodeView('outline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.outline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 space-y-4 ${showCode.outline ? 'hidden': ''}`}>
                                <div className="flex gap-5 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <input id="check-o-1" type="checkbox" checked className="check check-primary-outline"/>
                                        <label htmlFor="check-o-1" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-o-2" type="checkbox" checked className="check check-secondary-outline"/>
                                        <label htmlFor="check-o-2" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-o-3" type="checkbox" checked className="check check-warning-outline"/>
                                        <label htmlFor="check-o-3" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-o-4" type="checkbox" checked className="check check-danger-outline"/>
                                        <label htmlFor="check-o-4" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input id="check-o-5" type="checkbox" checked className="check check-info-outline"/>
                                        <label htmlFor="check-o-5" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input disabled id="check-o-6" type="checkbox" className="check check-success-outline"/>
                                        <label htmlFor="check-o-6" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
                                    </div>
                                </div>
                            </div>
                             {/* Prism Code */}
                            <div className={`p-6 ${showCode.outline ? '': 'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex items-center gap-2">
    <input id="check-o-1" type="checkbox" checked className="check check-primary-outline"/>
    <label htmlFor="check-o-1" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-o-2" type="checkbox" checked className="check check-secondary-outline"/>
    <label htmlFor="check-o-2" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-o-3" type="checkbox" checked className="check check-warning-outline"/>
    <label htmlFor="check-o-3" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-o-4" type="checkbox" checked className="check check-danger-outline"/>
    <label htmlFor="check-o-4" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input id="check-o-5" type="checkbox" checked className="check check-info-outline"/>
    <label htmlFor="check-o-5" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
</div>
<div className="flex items-center gap-2">
    <input disabled id="check-o-6" type="checkbox" className="check check-success-outline"/>
    <label htmlFor="check-o-6" className="leading-none font-medium text-gray-500 dark:text-dark-text">Outline Check Box</label>
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