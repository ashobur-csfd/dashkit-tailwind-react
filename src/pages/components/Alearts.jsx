import user from '@/assets/images/profile/profile.png';
import { useEffect, useState } from 'react';
import Aleart from '../../components/ui/Aleart';

export default function Alearts(){

    // code show
    const [showCode, setShowCode] = useState({
        aleartSolid: false,
        aleartSolidRounded: false,
        aleartOutline: false,
        aleartOutlineRounded: false,
        aleartSvg: false,
        aleartSvgRounded: false,
        aleartSvgOutline: false,
        aleartSvgOutlineRounded: false,
        aleartImage: false,
        aleartImageRounded: false,
        aleartImageOutline: false,
        aleartImageOutlineRounded: false,
        aleartBgSolid: false,
        aleartBGSolidRounded: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    useEffect(() => {
        document.querySelectorAll(".close-button").forEach((button) => {
            button.addEventListener("click", function () {
              this.parentNode.classList.add("hidden");
            });
        });
    }, [])

    return(
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card">
            <h2 className="card-title">Alerts Component</h2>
        </div>
        <div className="grid grid-cols-12 gap-x-4">
             {/* SOLID DEFAULT COLOR ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Solid Defaults  - Color Alerts</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartSolid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartSolid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartSolid ? 'hidden':''}`}>
                        <Aleart content={'A solid default Primary color aleart !'} className="aleart aleart-primary-light"/>
                        <Aleart content={'A solid default Secondary color aleart !'} className="aleart aleart-secondary-light"/>
                        <Aleart content={'A solid default Danger color aleart !'} className="aleart aleart-danger-light"/>
                        <Aleart content={'A solid default Warning color aleart !'} className="aleart aleart-warning-light"/>
                        <Aleart content={'A solid default Success color aleart !'} className="aleart aleart-success-light"/>
                        <Aleart content={'A solid default Info color aleart !'} className="aleart aleart-info-light"/>
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartSolid ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart content={'A solid default Primary color aleart !'} className="aleart aleart-primary-light"/>
<Aleart content={'A solid default Secondary color aleart !'} className="aleart aleart-secondary-light"/>
<Aleart content={'A solid default Danger color aleart !'} className="aleart aleart-danger-light"/>
<Aleart content={'A solid default Warning color aleart !'} className="aleart aleart-warning-light"/>
<Aleart content={'A solid default Success color aleart !'} className="aleart aleart-success-light"/>
<Aleart content={'A solid default Info color aleart !'} className="aleart aleart-info-light"/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* SOLID DEFAULT COLOR ROUNDED-FULL ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Rounded Solid Defaults  - Color Alerts</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartSolidRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartSolidRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartSolidRounded ? 'hidden':''}`}>
                        <Aleart content={'A solid rounded default Primary color aleart !'} className="aleart aleart-primary-light rounded-full"/>
                        <Aleart content={'A solid rounded default Secondary color aleart !'} className="aleart aleart-secondary-light rounded-full"/>
                        <Aleart content={'A solid rounded default Danger color aleart !'} className="aleart aleart-danger-light rounded-full"/>
                        <Aleart content={'A solid rounded default Warning color aleart !'} className="aleart aleart-warning-light rounded-full"/>
                        <Aleart content={'A solid rounded default Success color aleart !'} className="aleart aleart-success-light rounded-full"/>
                        <Aleart content={'A solid rounded default Info color aleart !'} className="aleart aleart-info-light rounded-full"/>
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartSolidRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart content={'A solid rounded default Primary color aleart !'} className="aleart aleart-primary-light rounded-full"/>
<Aleart content={'A solid rounded default Secondary color aleart !'} className="aleart aleart-secondary-light rounded-full"/>
<Aleart content={'A solid rounded default Danger color aleart !'} className="aleart aleart-danger-light rounded-full"/>
<Aleart content={'A solid rounded default Warning color aleart !'} className="aleart aleart-warning-light rounded-full"/>
<Aleart content={'A solid rounded default Success color aleart !'} className="aleart aleart-success-light rounded-full"/>
<Aleart content={'A solid rounded default Info color aleart !'} className="aleart aleart-info-light rounded-full"/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* OUTLINE ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Outline Input - Color Alerts</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartOutline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartOutline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartOutline ? 'hidden':''}`}>
                        <Aleart content={'A outline Primary color aleart !'} className="aleart a-outline aleart-primary-outline"/>
                        <Aleart content={'A outline Secondary color aleart !'} className="aleart a-outline aleart-secondary-outline"/>
                        <Aleart content={'A outline Danger color aleart !'} className="aleart a-outline aleart-danger-outline"/>
                        <Aleart content={'A outline Warning color aleart !'} className="aleart a-outline aleart-warning-outline"/>
                        <Aleart content={'A outline Sucess color aleart !'} className="aleart a-outline aleart-success-outline"/>
                        <Aleart content={'A outline Info color aleart !'} className="aleart a-outline aleart-info-outline"/>
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartOutline ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart content={'A outline Primary color aleart !'} className="aleart a-outline aleart-primary-outline"/>
<Aleart content={'A outline Secondary color aleart !'} className="aleart a-outline aleart-secondary-outline"/>
<Aleart content={'A outline Danger color aleart !'} className="aleart a-outline aleart-danger-outline"/>
<Aleart content={'A outline Warning color aleart !'} className="aleart a-outline aleart-warning-outline"/>
<Aleart content={'A outline Sucess color aleart !'} className="aleart a-outline aleart-success-outline"/>
<Aleart content={'A outline Info color aleart !'} className="aleart a-outline aleart-info-outline"/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* ROUNDED OUTLINE ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Rounded Outline - Color Alerts</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartOutlineRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartOutlineRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartOutlineRounded ? 'hidden':''}`}>
                        <Aleart content={'A outline rounded Primary color aleart !'} className="aleart a-outline aleart-primary-outline rounded-full"/>
                        <Aleart content={'A outline rounded Secondary color aleart !'} className="aleart a-outline aleart-secondary-outline rounded-full"/>
                        <Aleart content={'A outline rounded Danger color aleart !'} className="aleart a-outline aleart-danger-outline rounded-full"/>
                        <Aleart content={'A outline rounded Warning color aleart !'} className="aleart a-outline aleart-warning-outline rounded-full"/>
                        <Aleart content={'A outline rounded Success color aleart !'} className="aleart a-outline aleart-success-outline rounded-full"/>
                        <Aleart content={'A outline rounded Inofo color aleart !'} className="aleart a-outline aleart-info-outline rounded-full"/>
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartOutlineRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart content={'A outline rounded Primary color aleart !'} className="aleart a-outline aleart-primary-outline rounded-full"/>
<Aleart content={'A outline rounded Secondary color aleart !'} className="aleart a-outline aleart-secondary-outline rounded-full"/>
<Aleart content={'A outline rounded Danger color aleart !'} className="aleart a-outline aleart-danger-outline rounded-full"/>
<Aleart content={'A outline rounded Warning color aleart !'} className="aleart a-outline aleart-warning-outline rounded-full"/>
<Aleart content={'A outline rounded Success color aleart !'} className="aleart a-outline aleart-success-outline rounded-full"/>
<Aleart content={'A outline rounded Inofo color aleart !'} className="aleart a-outline aleart-info-outline rounded-full"/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* DEFAULT COLOR SVG ICON ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Alerts with SVG - Icon</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartSvg')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartSvg ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartSvg ? 'hidden':''}`}>
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A default Danger color with SVG icon aleart !'}
                            className="aleart aleart-danger-light"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A default Warning color with SVG icon aleart !'}
                            className="aleart aleart-warning-light"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            )}
                            content={'A default Success color with SVG icon aleart !'}
                            className="aleart aleart-success-light"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            )}
                            content={'A default Info color with SVG icon aleart !'}
                            className="aleart aleart-info-light"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartSvg ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    )}
    content={'A default Danger color with SVG icon aleart !'}
    className="aleart aleart-danger-light"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    )}
    content={'A default Warning color with SVG icon aleart !'}
    className="aleart aleart-warning-light"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )}
    content={'A default Success color with SVG icon aleart !'}
    className="aleart aleart-success-light"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    )}
    content={'A default Info color with SVG icon aleart !'}
    className="aleart aleart-info-light"
/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* DEFAULT COLOR ROUNDED SVG ICON ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Rounded Alerts with SVG - Icon</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartSvgRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartSvgRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartSvgRounded ? 'hidden':''}`}>
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A default Rounded Danger color with SVG icon aleart !'}
                            className="aleart aleart-danger-light rounded-full"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A default Rounded Warning color with SVG icon aleart !'}
                            className="aleart aleart-warning-light rounded-full"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            )}
                            content={'A default Rounded Success color with SVG icon aleart !'}
                            className="aleart aleart-success-light rounded-full"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            )}
                            content={'A default Rounded Info color with SVG icon aleart !'}
                            className="aleart aleart-info-light rounded-full"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartSvgRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    )}
    content={'A default Rounded Danger color with SVG icon aleart !'}
    className="aleart aleart-danger-light rounded-full"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    )}
    content={'A default Rounded Warning color with SVG icon aleart !'}
    className="aleart aleart-warning-light rounded-full"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )}
    content={'A default Rounded Success color with SVG icon aleart !'}
    className="aleart aleart-success-light rounded-full"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    )}
    content={'A default Rounded Info color with SVG icon aleart !'}
    className="aleart aleart-info-light rounded-full"
/>`} 
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* OUTLINE ALEART WITH SVG ICON  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Outline Alerts with SVG - Icon</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartSvgOutline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartSvgOutline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartSvgOutline ? 'hidden':''}`}>
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A outline Danger color with SVG icon aleart !'}
                            className="aleart a-outline aleart-danger-outline"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A outline Warning color with SVG icon aleart !'}
                            className="aleart a-outline aleart-warning-outline"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            )}
                            content={'A outline Success color with SVG icon aleart !'}
                            className="aleart a-outline aleart-success-outline"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            )}
                            content={'A outline Info color with SVG icon aleart !'}
                            className="aleart a-outline aleart-info-outline"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartSvgOutline ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    )}
    content={'A outline Danger color with SVG icon aleart !'}
    className="aleart a-outline aleart-danger-outline"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    )}
    content={'A outline Warning color with SVG icon aleart !'}
    className="aleart a-outline aleart-warning-outline"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )}
    content={'A outline Success color with SVG icon aleart !'}
    className="aleart a-outline aleart-success-outline"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    )}
    content={'A outline Info color with SVG icon aleart !'}
    className="aleart a-outline aleart-info-outline"
/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* OUTLINE ROUNDED ALEART WITH SVG ICON  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Rounded Outline Alerts with SVG - Icon</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartSvgOutlineRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartSvgOutlineRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartSvgOutlineRounded ? 'hidden':''}`}>
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A outline rounded Danger color with SVG icon aleart !'}
                            className="aleart a-outline aleart-danger-outline rounded-full"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                </svg>
                            )}
                            content={'A outline rounded Warning color with SVG icon aleart !'}
                            className="aleart a-outline aleart-warning-outline rounded-full"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            )}
                            content={'A outline rounded Success color with SVG icon aleart !'}
                            className="aleart a-outline aleart-success-outline rounded-full"
                        />
                        <Aleart 
                            icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            )}
                            content={'A outline rounded Info color with SVG icon aleart !'}
                            className="aleart a-outline aleart-info-outline rounded-full"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartSvgOutlineRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    )}
    content={'A outline rounded Danger color with SVG icon aleart !'}
    className="aleart a-outline aleart-danger-outline rounded-full"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    )}
    content={'A outline rounded Warning color with SVG icon aleart !'}
    className="aleart a-outline aleart-warning-outline rounded-full"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )}
    content={'A outline rounded Success color with SVG icon aleart !'}
    className="aleart a-outline aleart-success-outline rounded-full"
/>
<Aleart 
    icon={(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    )}
    content={'A outline rounded Info color with SVG icon aleart !'}
    className="aleart a-outline aleart-info-outline rounded-full"
/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* ALEART WITH IMAGE  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Alerts with  - Image</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartImage')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartImage ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartImage ? 'hidden':''}`}>
                        <Aleart 
                            img={user}
                            content={'A default Danger color with Image aleart !'}
                            className="aleart aleart-danger-light aleart-image"
                        />
                        <Aleart 
                            img={user}
                            content={'A default Warning color with Image aleart !'}
                            className="aleart aleart-warning-light aleart-image"
                        />
                        <Aleart 
                            img={user}
                            content={'A default Success color with Image aleart !'}
                            className="aleart aleart-success-light aleart-image"
                        />
                        <Aleart 
                            img={user}
                            content={'A default Info color with Image aleart !'}
                            className="aleart aleart-info-light aleart-image"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartImage ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    img={user}
    content={'A default Danger color with Image aleart !'}
    className="aleart aleart-danger-light aleart-image"
/>
<Aleart 
    img={user}
    content={'A default Warning color with Image aleart !'}
    className="aleart aleart-warning-light aleart-image"
/>
<Aleart 
    img={user}
    content={'A default Success color with Image aleart !'}
    className="aleart aleart-success-light aleart-image"
/>
<Aleart 
    img={user}
    content={'A default Info color with Image aleart !'}
    className="aleart aleart-info-light aleart-image"
/>`} 
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* ALEART ROUNDED WITH IMAGE  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Rounded Alerts with  - Image</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartImageRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartImageRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartImageRounded ? 'hidden':''}`}>
                        <Aleart 
                            img={user}
                            content={'A default rounded Danger color with Image aleart !'}
                            className="aleart aleart-danger-light aleart-image rounded-full"
                        />
                        <Aleart 
                            img={user}
                            content={'A default rounded Warning color with Image aleart !'}
                            className="aleart aleart-warning-light aleart-image rounded-full"
                        />
                        <Aleart 
                            img={user}
                            content={'A default rounded Success color with Image aleart !'}
                            className="aleart aleart-success-light aleart-image rounded-full"
                        />
                        <Aleart 
                            img={user}
                            content={'A default rounded Info color with Image aleart !'}
                            className="aleart aleart-info-light aleart-image rounded-full"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartImageRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    img={user}
    content={'A default rounded Danger color with Image aleart !'}
    className="aleart aleart-danger-light aleart-image rounded-full"
/>
<Aleart 
    img={user}
    content={'A default rounded Warning color with Image aleart !'}
    className="aleart aleart-warning-light aleart-image rounded-full"
/>
<Aleart 
    img={user}
    content={'A default rounded Success color with Image aleart !'}
    className="aleart aleart-success-light aleart-image rounded-full"
/>
<Aleart 
    img={user}
    content={'A default rounded Info color with Image aleart !'}
    className="aleart aleart-info-light aleart-image rounded-full"
/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* OUTLINE ALEART WITH IMAGE  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Outline Alerts with image</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartImageOutline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartImageOutline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartImageOutline ? 'hidden':''}`}>
                        <Aleart 
                            img={user}
                            content={'A outline Danger color with Image aleart !'}
                            className="aleart a-outline aleart-danger-outline aleart-image"
                        />
                        <Aleart 
                            img={user}
                            content={'A outline Warning color with Image aleart !'}
                            className="aleart a-outline aleart-warning-outline aleart-image"
                        />
                        <Aleart 
                            img={user}
                            content={'A outline Success color with Image aleart !'}
                            className="aleart a-outline aleart-success-outline aleart-image"
                        />
                        <Aleart 
                            img={user}
                            content={'A outline Info color with Image aleart !'}
                            className="aleart a-outline aleart-info-outline aleart-image"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartImageOutline ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    img={user}
    content={'A outline Danger color with Image aleart !'}
    className="aleart a-outline aleart-danger-outline aleart-image"
/>
<Aleart 
    img={user}
    content={'A outline Warning color with Image aleart !'}
    className="aleart a-outline aleart-warning-outline aleart-image"
/>
<Aleart 
    img={user}
    content={'A outline Success color with Image aleart !'}
    className="aleart a-outline aleart-success-outline aleart-image"
/>
<Aleart 
    img={user}
    content={'A outline Info color with Image aleart !'}
    className="aleart a-outline aleart-info-outline aleart-image"
/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* OUTLINE ALEART ROUNDED WITH IMAGE  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Outline Rounded Alerts with - Image</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartImageOutlineRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartImageOutlineRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartImageOutlineRounded ? 'hidden':''}`}>
                        <Aleart 
                            img={user}
                            content={'A outline rounded Danger color with Image aleart !'}
                            className="aleart a-outline aleart-danger-outline aleart-image rounded-full"
                        />
                        <Aleart 
                            img={user}
                            content={'A outline rounded Warning color with Image aleart !'}
                            className="aleart a-outline aleart-warning-outline aleart-image rounded-full"
                        />
                        <Aleart 
                            img={user}
                            content={'A outline rounded Success color with Image aleart !'}
                            className="aleart a-outline aleart-success-outline aleart-image rounded-full"
                        />
                        <Aleart 
                            img={user}
                            content={'A outline rounded Info color with Image aleart !'}
                            className="aleart a-outline aleart-info-outline aleart-image rounded-full"
                        />
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartImageOutlineRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart 
    img={user}
    content={'A outline rounded Danger color with Image aleart !'}
    className="aleart a-outline aleart-danger-outline aleart-image rounded-full"
/>
<Aleart 
    img={user}
    content={'A outline rounded Warning color with Image aleart !'}
    className="aleart a-outline aleart-warning-outline aleart-image rounded-full"
/>
<Aleart 
    img={user}
    content={'A outline rounded Success color with Image aleart !'}
    className="aleart a-outline aleart-success-outline aleart-image rounded-full"
/>
<Aleart 
    img={user}
    content={'A outline rounded Info color with Image aleart !'}
    className="aleart a-outline aleart-info-outline aleart-image rounded-full"
/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* SOLID COLOR ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Solid Defaults - Color Alerts</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartBgSolid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartBgSolid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartBgSolid ? 'hidden':''}`}>
                        <Aleart content={'A solid Primary color with Image aleart !'} className="aleart aleart-primary-solid"/>
                        <Aleart content={'A solid Secondary color with Image aleart !'} className="aleart aleart-secondary-solid"/>
                        <Aleart content={'A solid Danger color with Image aleart !'} className="aleart aleart-danger-solid"/>
                        <Aleart content={'A solid Warning color with Image aleart !'} className="aleart aleart-warning-solid"/>
                        <Aleart content={'A solid Success color with Image aleart !'} className="aleart aleart-success-solid"/>
                        <Aleart content={'A solid Info color with Image aleart !'} className="aleart aleart-info-solid"/>
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartBgSolid ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart content={'A solid Primary color with Image aleart !'} className="aleart aleart-primary-solid"/>
<Aleart content={'A solid Secondary color with Image aleart !'} className="aleart aleart-secondary-solid"/>
<Aleart content={'A solid Danger color with Image aleart !'} className="aleart aleart-danger-solid"/>
<Aleart content={'A solid Warning color with Image aleart !'} className="aleart aleart-warning-solid"/>
<Aleart content={'A solid Success color with Image aleart !'} className="aleart aleart-success-solid"/>
<Aleart content={'A solid Info color with Image aleart !'} className="aleart aleart-info-solid"/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
             {/* SOLID COLOR ROUNDED ALEART  */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Rounded Solid - Color Alerts</h3>
                        <button type="button" onClick={() => toggleCodeView('aleartBGSolidRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.aleartBGSolidRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 space-y-4 ${showCode.aleartBGSolidRounded ? 'hidden':''}`}>
                        <Aleart content={'A solid rounded Primary color with Image aleart !'} className="aleart aleart-primary-solid rounded-full"/>
                        <Aleart content={'A solid rounded Secondary with Image aleart !'} className="aleart aleart-secondary-solid rounded-full"/>
                        <Aleart content={'A solid rounded Danger color with Image aleart !'} className="aleart aleart-danger-solid rounded-full"/>
                        <Aleart content={'A solid rounded Warning color with Image aleart !'} className="aleart aleart-warning-solid rounded-full"/>
                        <Aleart content={'A solid rounded Success color with Image aleart !'} className="aleart aleart-success-solid rounded-full"/>
                        <Aleart content={'A solid rounded Info color with Image aleart !'} className="aleart aleart-info-solid rounded-full"/>
                    </div>
                     {/* Prism Code  */}
                    <div className={`p-6 ${showCode.aleartBGSolidRounded ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
{`<Aleart content={'A solid rounded Primary color with Image aleart !'} className="aleart aleart-primary-solid rounded-full"/>
<Aleart content={'A solid rounded Secondary with Image aleart !'} className="aleart aleart-secondary-solid rounded-full"/>
<Aleart content={'A solid rounded Danger color with Image aleart !'} className="aleart aleart-danger-solid rounded-full"/>
<Aleart content={'A solid rounded Warning color with Image aleart !'} className="aleart aleart-warning-solid rounded-full"/>
<Aleart content={'A solid rounded Success color with Image aleart !'} className="aleart aleart-success-solid rounded-full"/>
<Aleart content={'A solid rounded Info color with Image aleart !'} className="aleart aleart-info-solid rounded-full"/>`}
                            </code>
                        </pre>
                    </div>
                     {/* Prism Code  */}
                </div>
            </div>
        </div>
    </div>
    )
}