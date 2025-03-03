import { useState } from "react";
import Button from "../../components/ui/Button";

export default function Buttons(){

    // code show
    const [showCode, setShowCode] = useState({
        light: false,
        lightRounded: false,
        solid: false,
        solidRounded: false,
        outline: false,
        outlineRounded: false,
        outlineStatic: false,
        outlineStaticRounded: false,
        solidIcon: false,
        solidIconRounded: false,
        outlineIcon: false,
        outlineIconRounded: false,
        inline: false,
        different: false,
        iconLight: false,
        iconSolid: false,
        customSize: false,
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
                <h2 className="card-title">Buttons Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* LIGHT COLOR BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Light Color - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('light')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.light ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.light ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-light btn-primary-light"/>
                                <Button text={'Secondary'} className="btn b-light btn-secondary-light"/>
                                <Button text={'Danger'} className="btn b-light btn-danger-light"/>
                                <Button text={'Warning'} className="btn b-light btn-warning-light"/>
                                <Button text={'Success'} className="btn b-light btn-success-light"/>
                                <Button text={'Info'} className="btn b-light btn-info-light"/>
                                <Button text={'Disable'} className="btn b-light btn-disable-light"/>
                                <Button text={'Light'} className="btn b-light btn-light-light"/>
                                <Button text={'Pink'} className="btn b-light btn-pink-light"/>
                                <Button text={'Extra'} className="btn b-light btn-extra-light"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.light ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-light btn-primary-light"/>
<Button text={'Secondary'} className="btn b-light btn-secondary-light"/>
<Button text={'Danger'} className="btn b-light btn-danger-light"/>
<Button text={'Warning'} className="btn b-light btn-warning-light"/>
<Button text={'Success'} className="btn b-light btn-success-light"/>
<Button text={'Info'} className="btn b-light btn-info-light"/>
<Button text={'Disable'} className="btn b-light btn-disable-light"/>
<Button text={'Light'} className="btn b-light btn-light-light"/>
<Button text={'Pink'} className="btn b-light btn-pink-light"/>
<Button text={'Extra'} className="btn b-light btn-extra-light"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED LIGHT COLOR BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Light Color - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('lightRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.lightRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.lightRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-light btn-primary-light rounded-full"/>
                                <Button text={'Secondary'} className="btn b-light btn-secondary-light rounded-full"/>
                                <Button text={'Danger'} className="btn b-light btn-danger-light rounded-full"/>
                                <Button text={'Warning'} className="btn b-light btn-warning-light rounded-full"/>
                                <Button text={'Success'} className="btn b-light btn-success-light rounded-full"/>
                                <Button text={'Info'} className="btn b-light btn-info-light rounded-full"/>
                                <Button text={'Disable'} className="btn b-light btn-disable-light rounded-full"/>
                                <Button text={'Light'} className="btn b-light btn-light-light rounded-full"/>
                                <Button text={'Pink'} className="btn b-light btn-pink-light rounded-full"/>
                                <Button text={'Extra'} className="btn b-light btn-extra-light rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.lightRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-light btn-primary-light rounded-full"/>
<Button text={'Secondary'} className="btn b-light btn-secondary-light rounded-full"/>
<Button text={'Danger'} className="btn b-light btn-danger-light rounded-full"/>
<Button text={'Warning'} className="btn b-light btn-warning-light rounded-full"/>
<Button text={'Success'} className="btn b-light btn-success-light rounded-full"/>
<Button text={'Info'} className="btn b-light btn-info-light rounded-full"/>
<Button text={'Disable'} className="btn b-light btn-disable-light rounded-full"/>
<Button text={'Light'} className="btn b-light btn-light-light rounded-full"/>
<Button text={'Pink'} className="btn b-light btn-pink-light rounded-full"/>
<Button text={'Extra'} className="btn b-light btn-extra-light rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* SOLID COLOR BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('solid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solid ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-solid btn-primary-solid"/>
                                <Button text={'Secondary'} className="btn b-solid btn-secondary-solid"/>
                                <Button text={'Danger'} className="btn b-solid btn-danger-solid"/>
                                <Button text={'Warning'} className="btn b-solid btn-warning-solid"/>
                                <Button text={'Success'} className="btn b-solid btn-success-solid"/>
                                <Button text={'Info'} className="btn b-solid btn-info-solid"/>
                                <Button text={'Disable'} className="btn b-solid btn-disable-solid"/>
                                <Button text={'Light'} className="btn b-solid btn-light-solid"/>
                                <Button text={'Pink'} className="btn b-solid btn-pink-solid"/>
                                <Button text={'Extra'} className="btn b-solid btn-extra-solid"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solid ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-solid btn-primary-solid"/>
<Button text={'Secondary'} className="btn b-solid btn-secondary-solid"/>
<Button text={'Danger'} className="btn b-solid btn-danger-solid"/>
<Button text={'Warning'} className="btn b-solid btn-warning-solid"/>
<Button text={'Success'} className="btn b-solid btn-success-solid"/>
<Button text={'Info'} className="btn b-solid btn-info-solid"/>
<Button text={'Disable'} className="btn b-solid btn-disable-solid"/>
<Button text={'Light'} className="btn b-solid btn-light-solid"/>
<Button text={'Pink'} className="btn b-solid btn-pink-solid"/>
<Button text={'Extra'} className="btn b-solid btn-extra-solid"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED SOLID COLOR BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Solid Color - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('solidRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-solid btn-primary-solid rounded-full"/>
                                <Button text={'Secondary'} className="btn b-solid btn-secondary-solid rounded-full"/>
                                <Button text={'Danger'} className="btn b-solid btn-danger-solid rounded-full"/>
                                <Button text={'Warning'} className="btn b-solid btn-warning-solid rounded-full"/>
                                <Button text={'Success'} className="btn b-solid btn-success-solid rounded-full"/>
                                <Button text={'Info'} className="btn b-solid btn-info-solid rounded-full"/>
                                <Button text={'Disable'} className="btn b-solid btn-disable-solid rounded-full"/>
                                <Button text={'Light'} className="btn b-solid btn-light-solid rounded-full"/>
                                <Button text={'Pink'} className="btn b-solid btn-pink-solid rounded-full"/>
                                <Button text={'Extra'} className="btn b-solid btn-extra-solid rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-solid btn-primary-solid rounded-full"/>
<Button text={'Secondary'} className="btn b-solid btn-secondary-solid rounded-full"/>
<Button text={'Danger'} className="btn b-solid btn-danger-solid rounded-full"/>
<Button text={'Warning'} className="btn b-solid btn-warning-solid rounded-full"/>
<Button text={'Success'} className="btn b-solid btn-success-solid rounded-full"/>
<Button text={'Info'} className="btn b-solid btn-info-solid rounded-full"/>
<Button text={'Disable'} className="btn b-solid btn-disable-solid rounded-full"/>
<Button text={'Light'} className="btn b-solid btn-light-solid rounded-full"/>
<Button text={'Pink'} className="btn b-solid btn-pink-solid rounded-full"/>
<Button text={'Extra'} className="btn b-solid btn-extra-solid rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none"> Outline - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('outline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outline ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-outline btn-primary-outline"/>
                                <Button text={'Secondary'} className="btn b-outline btn-secondary-outline"/>
                                <Button text={'Danger'} className="btn b-outline btn-danger-outline"/>
                                <Button text={'Warning'} className="btn b-outline btn-warning-outline"/>
                                <Button text={'Success'} className="btn b-outline btn-success-outline"/>
                                <Button text={'Info'} className="btn b-outline btn-info-outline"/>
                                <Button text={'Disable'} className="btn b-outline btn-disable-outline"/>
                                <Button text={'Light'} className="btn b-outline btn-light-outline"/>
                                <Button text={'Pink'} className="btn b-outline btn-pink-outline"/>
                                <Button text={'Extra'} className="btn b-outline btn-extra-outline"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outline ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-outline btn-primary-outline"/>
<Button text={'Secondary'} className="btn b-outline btn-secondary-outline"/>
<Button text={'Danger'} className="btn b-outline btn-danger-outline"/>
<Button text={'Warning'} className="btn b-outline btn-warning-outline"/>
<Button text={'Success'} className="btn b-outline btn-success-outline"/>
<Button text={'Info'} className="btn b-outline btn-info-outline"/>
<Button text={'Disable'} className="btn b-outline btn-disable-outline"/>
<Button text={'Light'} className="btn b-outline btn-light-outline"/>
<Button text={'Pink'} className="btn b-outline btn-pink-outline"/>
<Button text={'Extra'} className="btn b-outline btn-extra-outline"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED OUTLINE BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none"> Rounded Outline - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('outlineRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-outline btn-primary-outline rounded-full"/>
                                <Button text={'Secondary'} className="btn b-outline btn-secondary-outline rounded-full"/>
                                <Button text={'Danger'} className="btn b-outline btn-danger-outline rounded-full"/>
                                <Button text={'Warning'} className="btn b-outline btn-warning-outline rounded-full"/>
                                <Button text={'Success'} className="btn b-outline btn-success-outline rounded-full"/>
                                <Button text={'Info'} className="btn b-outline btn-info-outline rounded-full"/>
                                <Button text={'Disable'} className="btn b-outline btn-disable-outline rounded-full"/>
                                <Button text={'Light'} className="btn b-outline btn-light-outline rounded-full"/>
                                <Button text={'Pink'} className="btn b-outline btn-pink-outline rounded-full"/>
                                <Button text={'Extra'} className="btn b-outline btn-extra-outline rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-outline btn-primary-outline rounded-full"/>
<Button text={'Secondary'} className="btn b-outline btn-secondary-outline rounded-full"/>
<Button text={'Danger'} className="btn b-outline btn-danger-outline rounded-full"/>
<Button text={'Warning'} className="btn b-outline btn-warning-outline rounded-full"/>
<Button text={'Success'} className="btn b-outline btn-success-outline rounded-full"/>
<Button text={'Info'} className="btn b-outline btn-info-outline rounded-full"/>
<Button text={'Disable'} className="btn b-outline btn-disable-outline rounded-full"/>
<Button text={'Light'} className="btn b-outline btn-light-outline rounded-full"/>
<Button text={'Pink'} className="btn b-outline btn-pink-outline rounded-full"/>
<Button text={'Extra'} className="btn b-outline btn-extra-outline rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE STATIC BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none"> Outline Static - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('outlineStatic')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineStatic ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineStatic ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-outline-static btn-primary-outline"/>
                                <Button text={'Secondary'} className="btn b-outline-static btn-secondary-outline"/>
                                <Button text={'Danger'} className="btn b-outline-static btn-danger-outline"/>
                                <Button text={'Warning'} className="btn b-outline-static btn-warning-outline"/>
                                <Button text={'Success'} className="btn b-outline-static btn-success-outline"/>
                                <Button text={'Info'} className="btn b-outline-static btn-info-outline"/>
                                <Button text={'Disable'} className="btn b-outline-static btn-disable-outline"/>
                                <Button text={'Light'} className="btn b-outline-static btn-light-outline"/>
                                <Button text={'Pink'} className="btn b-outline-static btn-pink-outline"/>
                                <Button text={'Extra'} className="btn b-outline-static btn-extra-outline"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineStatic ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-outline-static btn-primary-outline"/>
<Button text={'Secondary'} className="btn b-outline-static btn-secondary-outline"/>
<Button text={'Danger'} className="btn b-outline-static btn-danger-outline"/>
<Button text={'Warning'} className="btn b-outline-static btn-warning-outline"/>
<Button text={'Success'} className="btn b-outline-static btn-success-outline"/>
<Button text={'Info'} className="btn b-outline-static btn-info-outline"/>
<Button text={'Disable'} className="btn b-outline-static btn-disable-outline"/>
<Button text={'Light'} className="btn b-outline-static btn-light-outline"/>
<Button text={'Pink'} className="btn b-outline-static btn-pink-outline"/>
<Button text={'Extra'} className="btn b-outline-static btn-extra-outline"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED OUTLINE STATIC BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Outline Static - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('outlineStaticRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineStaticRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineStaticRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-outline-static btn-primary-outline rounded-full"/>
                                <Button text={'Secondary'} className="btn b-outline-static btn-secondary-outline rounded-full"/>
                                <Button text={'Danger'} className="btn b-outline-static btn-danger-outline rounded-full"/>
                                <Button text={'Warning'} className="btn b-outline-static btn-warning-outline rounded-full"/>
                                <Button text={'Success'} className="btn b-outline-static btn-success-outline rounded-full"/>
                                <Button text={'Info'} className="btn b-outline-static btn-info-outline rounded-full"/>
                                <Button text={'Disable'} className="btn b-outline-static btn-disable-outline rounded-full"/>
                                <Button text={'Light'} className="btn b-outline-static btn-light-outline rounded-full"/>
                                <Button text={'Pink'} className="btn b-outline-static btn-pink-outline rounded-full"/>
                                <Button text={'Extra'} className="btn b-outline-static btn-extra-outline rounded-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineStaticRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-outline-static btn-primary-outline rounded-full"/>
<Button text={'Secondary'} className="btn b-outline-static btn-secondary-outline rounded-full"/>
<Button text={'Danger'} className="btn b-outline-static btn-danger-outline rounded-full"/>
<Button text={'Warning'} className="btn b-outline-static btn-warning-outline rounded-full"/>
<Button text={'Success'} className="btn b-outline-static btn-success-outline rounded-full"/>
<Button text={'Info'} className="btn b-outline-static btn-info-outline rounded-full"/>
<Button text={'Disable'} className="btn b-outline-static btn-disable-outline rounded-full"/>
<Button text={'Light'} className="btn b-outline-static btn-light-outline rounded-full"/>
<Button text={'Pink'} className="btn b-outline-static btn-pink-outline rounded-full"/>
<Button text={'Extra'} className="btn b-outline-static btn-extra-outline rounded-full"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* SOLID COLOR ICON BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color Icon - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('solidIcon')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidIcon ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidIcon ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-solid btn-primary-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'amr btn'} className={'btn b-solid btn-primary-solid'} />
                                <Button text={'Secondary'} className="btn b-solid btn-secondary-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Danger'} className="btn b-solid btn-danger-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Warning'} className="btn b-solid btn-warning-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Success'} className="btn b-solid btn-success-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Info'} className="btn b-solid btn-info-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Disable'} className="btn b-solid btn-disable-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Light'} className="btn b-solid btn-light-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Pink'} className="btn b-solid btn-pink-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Extra'} className="btn b-solid btn-extra-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidIcon ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-solid btn-primary-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Secondary'} className="btn b-solid btn-secondary-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Danger'} className="btn b-solid btn-danger-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Warning'} className="btn b-solid btn-warning-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Success'} className="btn b-solid btn-success-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Info'} className="btn b-solid btn-info-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Disable'} className="btn b-solid btn-disable-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Light'} className="btn b-solid btn-light-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Pink'} className="btn b-solid btn-pink-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Extra'} className="btn b-solid btn-extra-solid" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED SOLID COLOR ICON BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color Icon - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('solidIconRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solidIconRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.solidIconRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-solid btn-primary-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Secondary'} className="btn b-solid btn-secondary-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Danger'} className="btn b-solid btn-danger-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Warning'} className="btn b-solid btn-warning-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Success'} className="btn b-solid btn-success-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Info'} className="btn b-solid btn-info-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Disable'} className="btn b-solid btn-disable-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Light'} className="btn b-solid btn-light-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Pink'} className="btn b-solid btn-pink-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Extra'} className="btn b-solid btn-extra-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.solidIconRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-solid btn-primary-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Secondary'} className="btn b-solid btn-secondary-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Danger'} className="btn b-solid btn-danger-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Warning'} className="btn b-solid btn-warning-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Success'} className="btn b-solid btn-success-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Info'} className="btn b-solid btn-info-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Disable'} className="btn b-solid btn-disable-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Light'} className="btn b-solid btn-light-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Pink'} className="btn b-solid btn-pink-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Extra'} className="btn b-solid btn-extra-solid rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE ICON BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none"> Outline Icon - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('outlineIcon')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineIcon ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineIcon ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-outline btn-primary-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Secondary'} className="btn b-outline btn-secondary-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Danger'} className="btn b-outline btn-danger-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Warning'} className="btn b-outline btn-warning-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Success'} className="btn b-outline btn-success-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Info'} className="btn b-outline btn-info-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Disable'} className="btn b-outline btn-disable-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Light'} className="btn b-outline btn-light-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Pink'} className="btn b-outline btn-pink-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Extra'} className="btn b-outline btn-extra-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineIcon ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-outline btn-primary-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Secondary'} className="btn b-outline btn-secondary-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Danger'} className="btn b-outline btn-danger-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Warning'} className="btn b-outline btn-warning-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Success'} className="btn b-outline btn-success-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Info'} className="btn b-outline btn-info-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Disable'} className="btn b-outline btn-disable-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Light'} className="btn b-outline btn-light-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Pink'} className="btn b-outline btn-pink-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Extra'} className="btn b-outline btn-extra-outline" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* ROUNDED OUTLINE ICON BUTTON  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Outline Icon - Button</h3>
                            <button type="button" onClick={() => toggleCodeView('outlineIconRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outlineIconRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outlineIconRounded ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-outline btn-primary-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Secondary'} className="btn b-outline btn-secondary-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Danger'} className="btn b-outline btn-danger-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Warning'} className="btn b-outline btn-warning-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Success'} className="btn b-outline btn-success-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Info'} className="btn b-outline btn-info-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Disable'} className="btn b-outline btn-disable-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Light'} className="btn b-outline btn-light-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Pink'} className="btn b-outline btn-pink-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                                <Button text={'Extra'} className="btn b-outline btn-extra-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outlineIconRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-outline btn-primary-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Secondary'} className="btn b-outline btn-secondary-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Danger'} className="btn b-outline btn-danger-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Warning'} className="btn b-outline btn-warning-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Success'} className="btn b-outline btn-success-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Info'} className="btn b-outline btn-info-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Disable'} className="btn b-outline btn-disable-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Light'} className="btn b-outline btn-light-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Pink'} className="btn b-outline btn-pink-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>
<Button text={'Extra'} className="btn b-outline btn-extra-outline rounded-full" icon={(<i className="ri-arrow-right-s-line text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* INLINE BUTTONS  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Inline - Link Buttons</h3>
                            <button type="button" onClick={() => toggleCodeView('inline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.inline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.inline ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Link Button'} className="btn btn-link" link={'#'}/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.inline ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
                                    {`<Button text={'Link Button'} className="btn btn-link" link={'#'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* DIFFERENT BUTTON SIZES  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Different button sizes</h3>
                            <button type="button" onClick={() => toggleCodeView('different')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.different ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.different ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Small'} className="btn b-solid btn-danger-solid btn-sm"/>
                                <Button text={'Default'} className="btn b-solid btn-danger-solid"/>
                                <Button text={'Large'} className="btn b-solid btn-danger-solid btn-lg"/>
                                <Button text={'Extra Large'} className="btn b-solid btn-danger-solid btn-xl"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.different ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Small'} className="btn b-solid btn-danger-solid btn-sm"/>
<Button text={'Default'} className="btn b-solid btn-danger-solid"/>
<Button text={'Large'} className="btn b-solid btn-danger-solid btn-lg"/>
<Button text={'Extra Large'} className="btn b-solid btn-danger-solid btn-xl"/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* LIGHT ICON BUTTONS  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Icon - Buttons</h3>
                            <button type="button" onClick={() => toggleCodeView('iconLight')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.iconLight ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.iconLight ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-apps-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-secondary-icon-light" icon={(<i className="ri-chat-3-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-message-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-danger-icon-light" icon={(<i className="ri-notification-3-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-folder-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-secondary-icon-light" icon={(<i className="ri-calendar-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-link text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-stack-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-secondary-icon-light" icon={(<i className="ri-fingerprint-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-information-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-customer-service-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-logout-circle-r-line text-inherit"></i>)} />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.iconLight ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-apps-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-secondary-icon-light" icon={(<i className="ri-chat-3-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-message-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-danger-icon-light" icon={(<i className="ri-notification-3-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-folder-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-secondary-icon-light" icon={(<i className="ri-calendar-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-link text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-stack-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-secondary-icon-light" icon={(<i className="ri-fingerprint-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-information-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-primary-icon-light" icon={(<i className="ri-customer-service-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon btn-warning-icon-light" icon={(<i className="ri-logout-circle-r-line text-inherit"></i>)} />`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* SOLID ICON BUTTONS .....................pending.............  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Icon - Buttons</h3>
                            <button type="button" onClick={() => toggleCodeView('iconSolid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.iconSolid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.iconSolid ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-apps-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-secondary-icon-solid" icon={(<i className="ri-chat-3-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-message-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-danger-icon-solid" icon={(<i className="ri-notification-3-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-folder-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-secondary-icon-solid" icon={(<i className="ri-calendar-2-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-link text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-stack-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-secondary-icon-solid" icon={(<i className="ri-fingerprint-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-information-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-customer-service-line text-inherit"></i>)} />
                                <Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-logout-circle-r-line text-inherit"></i>)} />
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.iconSolid ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-apps-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-secondary-icon-solid" icon={(<i className="ri-chat-3-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-message-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-danger-icon-solid" icon={(<i className="ri-notification-3-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-folder-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-secondary-icon-solid" icon={(<i className="ri-calendar-2-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-link text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-stack-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-secondary-icon-solid" icon={(<i className="ri-fingerprint-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-information-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-primary-icon-solid" icon={(<i className="ri-customer-service-line text-inherit"></i>)} />
<Button link={'#'} className="btn-icon b-solid btn-warning-icon-solid" icon={(<i className="ri-logout-circle-r-line text-inherit"></i>)} />`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* CUSTOM SIZE BUTTONS  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Custom size - Buttons</h3>
                            <button type="button" onClick={() => toggleCodeView('commmon')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.commmon ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.commmon ? 'hidden' : ''}`}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <Button text={'Primary'} className="btn b-solid btn-primary-solid btn-lg w-full"/>
                                <Button text={'Secondary'} className="btn b-solid btn-secondary-solid btn-lg w-full"/>
                                <Button text={'Danger'} className="btn b-solid btn-danger-solid btn-lg w-full"/>
                                <Button text={'Warning'} className="btn b-solid btn-warning-solid btn-lg w-full"/>
                                <Button text={'Success'} className="btn b-solid btn-success-solid btn-lg w-full"/>
                                <Button text={'Info'} className="btn b-solid btn-info-solid btn-lg w-full"/>
                                <Button text={'Disable'} className="btn b-solid btn-disable-solid btn-lg w-full"/>
                                <Button text={'Light'} className="btn b-solid btn-light-solid btn-lg w-full"/>
                                <Button text={'Pink'} className="btn b-solid btn-pink-solid btn-lg w-full"/>
                                <Button text={'Extra'} className="btn b-solid btn-extra-solid btn-lg w-full"/>
                            </div>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.commmon ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Button text={'Primary'} className="btn b-solid btn-primary-solid btn-lg w-full"/>
<Button text={'Secondary'} className="btn b-solid btn-secondary-solid btn-lg w-full"/>
<Button text={'Danger'} className="btn b-solid btn-danger-solid btn-lg w-full"/>
<Button text={'Warning'} className="btn b-solid btn-warning-solid btn-lg w-full"/>
<Button text={'Success'} className="btn b-solid btn-success-solid btn-lg w-full"/>
<Button text={'Info'} className="btn b-solid btn-info-solid btn-lg w-full"/>
<Button text={'Disable'} className="btn b-solid btn-disable-solid btn-lg w-full"/>
<Button text={'Light'} className="btn b-solid btn-light-solid btn-lg w-full"/>
<Button text={'Pink'} className="btn b-solid btn-pink-solid btn-lg w-full"/>
<Button text={'Extra'} className="btn b-solid btn-extra-solid btn-lg w-full"/>`}
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