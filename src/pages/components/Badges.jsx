import { useState } from "react";
import Badge from "../../components/ui/Badge";

export default function Badges(){

    // code show
    const [showCode, setShowCode] = useState({
        light: false,
        lightRounded: false,
        outline: false,
        outlineRounded: false,
        solid: false,
        solidRounded: false,
        outlineCounter: false,
        outlineCounterRounded: false,
        solidCounter: false,
        solidCounterRounded: false,
        lightSvg: false,
        lightSvgRounded: false,
        outlineSvg: false,
        outlineSvgRounded: false,
        solidSvg: false,
        solidSvgRounded: false,
        outlineCounterClose: false,
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
                <h2 className="card-title">Badges Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* LIGHT COLOR BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Light Color - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('light')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.light ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.light ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary'} className="badge badge-primary-light"/>
                                <Badge text={'Secondary'} className="badge badge-secondary-light"/>
                                <Badge text={'Danger'} className="badge badge-danger-light"/>
                                <Badge text={'Warning'} className="badge badge-warning-light"/>
                                <Badge text={'Success'} className="badge badge-success-light"/>
                                <Badge text={'Info'} className="badge badge-info-light"/>
                                <Badge text={'Disable'} className="badge badge-disable-light"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.light ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary'} className="badge badge-primary-light"/>
<Badge text={'Secondary'} className="badge badge-secondary-light"/>
<Badge text={'Danger'} className="badge badge-danger-light"/>
<Badge text={'Warning'} className="badge badge-warning-light"/>
<Badge text={'Success'} className="badge badge-success-light"/>
<Badge text={'Info'} className="badge badge-info-light"/>
<Badge text={'Disable'} className="badge badge-disable-light"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED LIGHT COLOR BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Light Color - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('lightRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.lightRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.lightRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary'} className="badge badge-primary-light rounded-full"/>
                                <Badge text={'Secondary'} className="badge badge-secondary-light rounded-full"/>
                                <Badge text={'Danger'} className="badge badge-danger-light rounded-full"/>
                                <Badge text={'Warning'} className="badge badge-warning-light rounded-full"/>
                                <Badge text={'Success'} className="badge badge-success-light rounded-full"/>
                                <Badge text={'Info'} className="badge badge-info-light rounded-full"/>
                                <Badge text={'Disable'} className="badge badge-disable-light rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.lightRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary'} className="badge badge-primary-light rounded-full"/>
<Badge text={'Secondary'} className="badge badge-secondary-light rounded-full"/>
<Badge text={'Danger'} className="badge badge-danger-light rounded-full"/>
<Badge text={'Warning'} className="badge badge-warning-light rounded-full"/>
<Badge text={'Success'} className="badge badge-success-light rounded-full"/>
<Badge text={'Info'} className="badge badge-info-light rounded-full"/>
<Badge text={'Disable'} className="badge badge-disable-light rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE COLOR BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Outline Light Color - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('outline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outline ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary'} className="badge badge-primary-outline b-outline"/>
                                <Badge text={'Secondary'} className="badge badge-secondary-outline b-outline"/>
                                <Badge text={'Danger'} className="badge badge-danger-outline b-outline"/>
                                <Badge text={'Warning'} className="badge badge-warning-outline b-outline"/>
                                <Badge text={'Success'} className="badge badge-success-outline b-outline"/>
                                <Badge text={'Info'} className="badge badge-info-outline b-outline"/>
                                <Badge text={'Disable'} className="badge badge-disable-outline b-outline"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outline ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary'} className="badge badge-primary-outline b-outline"/>
<Badge text={'Secondary'} className="badge badge-secondary-outline b-outline"/>
<Badge text={'Danger'} className="badge badge-danger-outline b-outline"/>
<Badge text={'Warning'} className="badge badge-warning-outline b-outline"/>
<Badge text={'Success'} className="badge badge-success-outline b-outline"/>
<Badge text={'Info'} className="badge badge-info-outline b-outline"/>
<Badge text={'Disable'} className="badge badge-disable-outline b-outline"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED OUTLINE COLOR BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Outline Light Color - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('outlineRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary'} className="badge badge-primary-outline b-outline rounded-full"/>
                                <Badge text={'Secondary'} className="badge badge-secondary-outline b-outline rounded-full"/>
                                <Badge text={'Danger'} className="badge badge-danger-outline b-outline rounded-full"/>
                                <Badge text={'Warning'} className="badge badge-warning-outline b-outline rounded-full"/>
                                <Badge text={'Success'} className="badge badge-success-outline b-outline rounded-full"/>
                                <Badge text={'Info'} className="badge badge-info-outline b-outline rounded-full"/>
                                <Badge text={'Disable'} className="badge badge-disable-outline b-outline rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary'} className="badge badge-primary-outline b-outline rounded-full"/>
<Badge text={'Secondary'} className="badge badge-secondary-outline b-outline rounded-full"/>
<Badge text={'Danger'} className="badge badge-danger-outline b-outline rounded-full"/>
<Badge text={'Warning'} className="badge badge-warning-outline b-outline rounded-full"/>
<Badge text={'Success'} className="badge badge-success-outline b-outline rounded-full"/>
<Badge text={'Info'} className="badge badge-info-outline b-outline rounded-full"/>
<Badge text={'Disable'} className="badge badge-disable-outline b-outline rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* SOLID COLOR BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('solid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solid ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary'} className="badge b-solid badge-primary-solid"/>
                                <Badge text={'Secondary'} className="badge b-solid badge-secondary-solid"/>
                                <Badge text={'Danger'} className="badge b-solid badge-danger-solid"/>
                                <Badge text={'Warning'} className="badge b-solid badge-warning-solid"/>
                                <Badge text={'Success'} className="badge b-solid badge-success-solid"/>
                                <Badge text={'Info'} className="badge b-solid badge-info-solid"/>
                                <Badge text={'Disable'} className="badge b-solid badge-disable-solid"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solid ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary'} className="badge b-solid badge-primary-solid"/>
<Badge text={'Secondary'} className="badge b-solid badge-secondary-solid"/>
<Badge text={'Danger'} className="badge b-solid badge-danger-solid"/>
<Badge text={'Warning'} className="badge b-solid badge-warning-solid"/>
<Badge text={'Success'} className="badge b-solid badge-success-solid"/>
<Badge text={'Info'} className="badge b-solid badge-info-solid"/>
<Badge text={'Disable'} className="badge b-solid badge-disable-solid"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED SOLID COLOR BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Solid Color - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('solidRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary'} className="badge b-solid badge-primary-solid rounded-full"/>
                                <Badge text={'Secondary'} className="badge b-solid badge-secondary-solid rounded-full"/>
                                <Badge text={'Danger'} className="badge b-solid badge-danger-solid rounded-full"/>
                                <Badge text={'Warning'} className="badge b-solid badge-warning-solid rounded-full"/>
                                <Badge text={'Success'} className="badge b-solid badge-success-solid rounded-full"/>
                                <Badge text={'Info'} className="badge b-solid badge-info-solid rounded-full"/>
                                <Badge text={'Disable'} className="badge b-solid badge-disable-solid rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary'} className="badge b-solid badge-primary-solid rounded-full"/>
<Badge text={'Secondary'} className="badge b-solid badge-secondary-solid rounded-full"/>
<Badge text={'Danger'} className="badge b-solid badge-danger-solid rounded-full"/>
<Badge text={'Warning'} className="badge b-solid badge-warning-solid rounded-full"/>
<Badge text={'Success'} className="badge b-solid badge-success-solid rounded-full"/>
<Badge text={'Info'} className="badge b-solid badge-info-solid rounded-full"/>
<Badge text={'Disable'} className="badge b-solid badge-disable-solid rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE COUNTER BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Outline Counter - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('outlineCounter')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineCounter ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineCounter ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary Counter'} className="badge badge-primary-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Secondary Counter'} className="badge badge-secondary-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Danger Counter'} className="badge badge-danger-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Warning Counter'} className="badge badge-warning-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Success Counter'} className="badge badge-success-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Info Counter'} className="badge badge-info-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Disable Counter'} className="badge badge-disable-outline b-outline rounded-lg disable group/b-counter" counter={'8'}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineCounter ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary Counter'} className="badge badge-primary-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Secondary Counter'} className="badge badge-secondary-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Danger Counter'} className="badge badge-danger-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Warning Counter'} className="badge badge-warning-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Success Counter'} className="badge badge-success-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Info Counter'} className="badge badge-info-outline b-outline rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Disable Counter'} className="badge badge-disable-outline b-outline rounded-lg disable group/b-counter" counter={'8'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED OUTLINE COUNTER BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Outline Counter - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('outlineCounterRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineCounterRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineCounterRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary Counter'} className="badge badge-primary-outline b-outline group/b-counter rounded-full" counter={'8'} counterRounded/>
                                <Badge text={'Secondary Counter'} className="badge badge-secondary-outline b-outline group/b-counter rounded-full" counter={'8'} counterRounded/>
                                <Badge text={'Danger Counter'} className="badge badge-danger-outline b-outline group/b-counter rounded-full" counter={'8'} counterRounded/>
                                <Badge text={'Warning Counter'} className="badge badge-warning-outline b-outline group/b-counter rounded-full" counter={'8'} counterRounded/>
                                <Badge text={'Success Counter'} className="badge badge-success-outline b-outline group/b-counter rounded-full" counter={'8'} counterRounded/>
                                <Badge text={'Info Counter'} className="badge badge-info-outline b-outline group/b-counter rounded-full" counter={'8'} counterRounded/>
                                <Badge text={'Disable Counter'} className="badge badge-disable-outline b-outline disable group/b-counter rounded-full" counter={'8'} counterRounded/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineCounterRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary Counter'} className="badge badge-primary-outline b-outline group/b-counter rounded-full" counter={'8'}/>
<Badge text={'Secondary Counter'} className="badge badge-secondary-outline b-outline group/b-counter rounded-full" counter={'8'}/>
<Badge text={'Danger Counter'} className="badge badge-danger-outline b-outline group/b-counter rounded-full" counter={'8'}/>
<Badge text={'Warning Counter'} className="badge badge-warning-outline b-outline group/b-counter rounded-full" counter={'8'}/>
<Badge text={'Success Counter'} className="badge badge-success-outline b-outline group/b-counter rounded-full" counter={'8'}/>
<Badge text={'Info Counter'} className="badge badge-info-outline b-outline group/b-counter rounded-full" counter={'8'}/>
<Badge text={'Disable Counter'} className="badge badge-disable-outline b-outline disable group/b-counter rounded-full" counter={'8'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* SOLID COLOR COUNTER BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color Number Counter - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('solidCounter')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidCounter ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidCounter ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary Counter'} className="badge badge-primary-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Secondary Counter'} className="badge badge-secondary-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Danger Counter'} className="badge badge-danger-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Warning Counter'} className="badge badge-warning-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Success Counter'} className="badge badge-success-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Info Counter'} className="badge badge-info-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
                                <Badge text={'Disable Counter'} className="badge badge-disable-solid b-solid rounded-lg disable group/b-counter" counter={'8'}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidCounter ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary Counter'} className="badge badge-primary-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Secondary Counter'} className="badge badge-secondary-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Danger Counter'} className="badge badge-danger-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Warning Counter'} className="badge badge-warning-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Success Counter'} className="badge badge-success-solid b-solid rounded-lg group/b-counter" counter={'8'}/>
<Badge text={'Disable Counter'} className="badge badge-disable-solid b-solid rounded-lg disable group/b-counter" counter={'8'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED SOLID COLOR COUNTER BADGE  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Solid Color Number Counter - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('solidCounterRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidCounterRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidCounterRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary Counter'} className="badge badge-primary-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
                                <Badge text={'Secondary Counter'} className="badge badge-secondary-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
                                <Badge text={'Danger Counter'} className="badge badge-danger-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
                                <Badge text={'Warning Counter'} className="badge badge-warning-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
                                <Badge text={'Success Counter'} className="badge badge-success-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
                                <Badge text={'Info Counter'} className="badge badge-info-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
                                <Badge text={'Disable Counter'} className="badge badge-disable-solid b-solid rounded-full disable group/b-counter" counter={'8'} counterRounded/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidCounterRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary Counter'} className="badge badge-primary-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
<Badge text={'Secondary Counter'} className="badge badge-secondary-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
<Badge text={'Danger Counter'} className="badge badge-danger-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
<Badge text={'Warning Counter'} className="badge badge-warning-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
<Badge text={'Success Counter'} className="badge badge-success-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
<Badge text={'Info Counter'} className="badge badge-info-solid b-solid rounded-full group/b-counter" counter={'8'} counterRounded/>
<Badge text={'Disable Counter'} className="badge badge-disable-solid b-solid rounded-full disable group/b-counter" counter={'8'} counterRounded/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* LIGHT COLOR BADGE WITH SVG ICON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Light Color - Badges with (SVG) icon</h3>
                            <button type="button" onClick={()=>toggleCodeView('lightSvg')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.lightSvg ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.lightSvg ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Notification'} className="badge badge-primary-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Bookmarks'} className="badge badge-secondary-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Back to Home'} className="badge badge-danger-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Person'} className="badge badge-warning-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Wishlist'} className="badge badge-warning-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Comments'} className="badge badge-primary-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload'} className="badge badge-primary-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Downloads'} className="badge badge-primary-light rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload Disable'} className="badge badge-disable-light rounded-lg disable" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.lightSvg ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Notification'} className="badge badge-primary-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
/>
<Badge text={'Bookmarks'} className="badge badge-secondary-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Back to Home'} className="badge badge-danger-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Person'} className="badge badge-warning-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Wishlist'} className="badge badge-warning-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Comments'} className="badge badge-primary-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload'} className="badge badge-primary-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Downloads'} className="badge badge-primary-light rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload Disable'} className="badge badge-disable-light rounded-lg disable" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED LIGHT COLOR BADGE WITH SVG ICON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Light Color - Badges with (SVG) icon</h3>
                            <button type="button" onClick={()=>toggleCodeView('lightSvgRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.lightSvgRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.lightSvgRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Notification'} className="badge badge-primary-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Bookmarks'} className="badge badge-secondary-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Back to Home'} className="badge badge-danger-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Person'} className="badge badge-warning-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Wishlist'} className="badge badge-warning-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Comments'} className="badge badge-primary-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload'} className="badge badge-primary-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Downloads'} className="badge badge-primary-light rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload Disable'} className="badge badge-disable-light rounded-full disable" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.lightSvgRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Notification'} className="badge badge-primary-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
/>
<Badge text={'Bookmarks'} className="badge badge-secondary-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Back to Home'} className="badge badge-danger-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Person'} className="badge badge-warning-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Wishlist'} className="badge badge-warning-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Comments'} className="badge badge-primary-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload'} className="badge badge-primary-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Downloads'} className="badge badge-primary-light rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload Disable'} className="badge badge-disable-light rounded-full disable" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE BADGE WITH SVG ICON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Outline - Badges with (SVG) icon</h3>
                            <button type="button" onClick={()=>toggleCodeView('outlineSvg')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineSvg ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineSvg ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Notification'} className="badge badge-primary-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Bookmarks'} className="badge badge-secondary-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Back to Home'} className="badge badge-danger-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Person'} className="badge badge-warning-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Wishlist'} className="badge badge-warning-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Comments'} className="badge badge-primary-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload'} className="badge badge-primary-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Downloads'} className="badge badge-primary-outline b-outline rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload Disable'} className="badge badge-disable-outline b-outline rounded-lg disable" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineSvg ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Notification'} className="badge badge-primary-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
/>
<Badge text={'Bookmarks'} className="badge badge-secondary-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Back to Home'} className="badge badge-danger-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Person'} className="badge badge-warning-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Wishlist'} className="badge badge-warning-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Comments'} className="badge badge-primary-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload'} className="badge badge-primary-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Downloads'} className="badge badge-primary-outline b-outline rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload Disable'} className="badge badge-disable-outline b-outline rounded-lg disable" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE ROUNDED BADGE WITH SVG ICON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Outline - Badges with (SVG) icon</h3>
                            <button type="button" onClick={()=>toggleCodeView('outlineSvgRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineSvgRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineSvgRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Notification'} className="badge badge-primary-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Bookmarks'} className="badge badge-secondary-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Back to Home'} className="badge badge-danger-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Person'} className="badge badge-warning-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Wishlist'} className="badge badge-warning-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Comments'} className="badge badge-primary-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload'} className="badge badge-primary-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Downloads'} className="badge badge-primary-outline b-outline rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload Disable'} className="badge badge-disable-outline b-outline rounded-full disable" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineSvgRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Notification'} className="badge badge-primary-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
/>
<Badge text={'Bookmarks'} className="badge badge-secondary-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Back to Home'} className="badge badge-danger-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Person'} className="badge badge-warning-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Wishlist'} className="badge badge-warning-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Comments'} className="badge badge-primary-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload'} className="badge badge-primary-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Downloads'} className="badge badge-primary-outline b-outline rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload Disable'} className="badge badge-disable-outline b-outline rounded-full disable" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* Solid COLOR BADGE WITH SVG ICON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color - Badges with (SVG) icon</h3>
                            <button type="button" onClick={()=>toggleCodeView('solidSvg')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidSvg ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidSvg ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Notification'} className="badge badge-primary-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Bookmarks'} className="badge badge-secondary-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Back to Home'} className="badge badge-danger-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Person'} className="badge badge-warning-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Wishlist'} className="badge badge-warning-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Comments'} className="badge badge-primary-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload'} className="badge badge-primary-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Downloads'} className="badge badge-primary-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Timeline'} className="badge badge-disable-solid b-solid rounded-lg" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload Disable'} className="badge badge-disable-solid b-solid rounded-lg disable" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidSvg ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Notification'} className="badge badge-primary-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
/>
<Badge text={'Bookmarks'} className="badge badge-secondary-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Back to Home'} className="badge badge-danger-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Person'} className="badge badge-warning-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Wishlist'} className="badge badge-warning-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Comments'} className="badge badge-primary-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload'} className="badge badge-primary-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Downloads'} className="badge badge-primary-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Timeline'} className="badge badge-disable-solid b-solid rounded-lg" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload Disable'} className="badge badge-disable-solid b-solid rounded-lg disable" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED Solid COLOR BADGE WITH SVG ICON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Solid Color - Badges with (SVG) icon</h3>
                            <button type="button" onClick={()=>toggleCodeView('solidSvgRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidSvgRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidSvgRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Notification'} className="badge badge-primary-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Bookmarks'} className="badge badge-secondary-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Back to Home'} className="badge badge-danger-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Person'} className="badge badge-warning-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Wishlist'} className="badge badge-warning-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Comments'} className="badge badge-primary-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload'} className="badge badge-primary-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Downloads'} className="badge badge-primary-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Timeline'} className="badge badge-disable-solid b-solid rounded-full" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                                <Badge text={'Upload Disable'} className="badge badge-disable-solid b-solid rounded-full disable" 
                                    icon={(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
                                        </svg>
                                    )}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidSvgRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Notification'} className="badge badge-primary-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9V9.75C6.00304 11.9746 5.17901 14.121 3.68802 15.772C5.42102 16.412 7.24802 16.857 9.14302 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14302 17.082M14.857 17.082C15.0011 17.5319 15.037 18.0094 14.9616 18.4757C14.8863 18.942 14.7019 19.384 14.4234 19.7656C14.145 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85509 20.1472 9.57664 19.7656C9.29819 19.384 9.11379 18.942 9.03844 18.4757C8.96309 18.0094 8.99892 17.5319 9.14302 17.082M3.12402 7.5C3.40599 5.82497 4.15782 4.26444 5.29202 3M18.708 3C19.8422 4.26444 20.5941 5.82497 20.876 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
/>
<Badge text={'Bookmarks'} className="badge badge-secondary-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM19 19.9645V4H5V19.9645L12 16.8412L19 19.9645ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Back to Home'} className="badge badge-danger-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Person'} className="badge badge-warning-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Wishlist'} className="badge badge-warning-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Comments'} className="badge badge-primary-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload'} className="badge badge-primary-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Downloads'} className="badge badge-primary-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Timeline'} className="badge badge-disable-solid b-solid rounded-full" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="currentColor"/>
        </svg>
    )}
/>
<Badge text={'Upload Disable'} className="badge badge-disable-solid b-solid rounded-full disable" 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z" fill="currentColor"/>
        </svg>
    )}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE COUNTER BADGE WITH CROSS  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Outline Counter - Badges</h3>
                            <button type="button" onClick={()=>toggleCodeView('outlineCounterClose')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineCounterClose ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineCounterClose ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge text={'Primary Counter'} className="badge badge-primary-outline b-outline rounded-lg group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                                <Badge text={'Secondary Counter'} className="badge badge-secondary-outline b-outline rounded-lg group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                                <Badge text={'Danger Counter'} className="badge badge-danger-outline b-outline rounded-lg group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                                <Badge text={'Warning Counter'} className="badge badge-warning-outline b-outline rounded-lg group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                                <Badge text={'Success Counter'} className="badge badge-success-outline b-outline rounded-lg group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                                <Badge text={'Info Counter'} className="badge badge-info-outline b-outline rounded-lg group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                                <Badge text={'Disable Counter'} className="badge badge-disable-outline b-outline rounded-lg disable group/b-counter"
                                    counterCloseBtn={'8'}
                                />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineCounterClose ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Badge text={'Primary Counter'} className="badge badge-primary-outline b-outline rounded-lg group/b-counter"
    counterCloseBtn={'8'}
/>
<Badge text={'Secondary Counter'} className="badge badge-secondary-outline b-outline rounded-lg group/b-counter"
    counterCloseBtn={'8'}
/>
<Badge text={'Danger Counter'} className="badge badge-danger-outline b-outline rounded-lg group/b-counter"
    counterCloseBtn={'8'}
/>
<Badge text={'Warning Counter'} className="badge badge-warning-outline b-outline rounded-lg group/b-counter"
    counterCloseBtn={'8'}
/>
<Badge text={'Success Counter'} className="badge badge-success-outline b-outline rounded-lg group/b-counter"
    counterCloseBtn={'8'}
/>
<Badge text={'Info Counter'} className="badge badge-info-outline b-outline rounded-lg group/b-counter"
    counterCloseBtn={'8'}
/>
<Badge text={'Disable Counter'} className="badge badge-disable-outline b-outline rounded-lg disable group/b-counter"
    counterCloseBtn={'8'}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}