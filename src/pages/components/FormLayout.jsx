import { useState } from "react";
import InputForm from "../../components/ui/InputForm";

export default function FormLayout(){

    // code show
    const [showCode, setShowCode] = useState({
        basicForm: false,
        lightForm: false,
        iconForm: false,
        iconFormLight: false,
        infoForm: false,
        dataForm: false,
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
            <h2 className="card-title">Form Layout</h2>
        </div>
        <div className="grid grid-cols-12 gap-x-4">
            {/* FORM */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">From</h3>
                        <button type="button" onClick={()=>toggleCodeView('basicForm')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.basicForm ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.basicForm ? 'hidden':''}`}>
                        <InputForm basic/>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.basicForm ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
                                {`<InputForm basic/>`}
                            </code>
                        </pre>
                    </div>
                    {/* Prism Code */}
                </div>
            </div>
            {/* FORM WITH LIGHT COLOR */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Form with light color</h3>
                        <button type="button" onClick={()=>toggleCodeView('lightForm')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.lightForm ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.lightForm ? 'hidden':''}`}>
                        <InputForm lightForm/>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.lightForm ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
                                {`<InputForm lightForm/>`}
                            </code>
                        </pre>
                    </div>
                    {/* Prism Code */}
                </div>
            </div>
            {/* FORM WITH ICON */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Form with icon</h3>
                        <button type="button" onClick={()=>toggleCodeView('iconForm')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.iconForm ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.iconForm ? 'hidden':''}`}>
                        <InputForm iconForm/>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.iconForm ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
                                {`<InputForm iconForm/>`}
                            </code>
                        </pre>
                    </div>
                    {/* Prism Code */}
                </div>
            </div>
            {/* FORM WITH ICON LIGHT COLOR */}
            <div className="col-span-full lg:col-span-6">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Form with icon light color</h3>
                        <button type="button" onClick={()=>toggleCodeView('iconFormLight')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.iconFormLight ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.iconFormLight ? 'hidden':''}`}>
                        <InputForm iconFormLight/>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.iconFormLight ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
                                {`<InputForm iconFormLight/>`}
                            </code>
                        </pre>
                    </div>
                    {/* Prism Code */}
                </div>
            </div>
            {/* INFO FORM */}
            <div className="col-span-full">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Info From</h3>
                        <button type="button" onClick={()=>toggleCodeView('infoForm')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.infoForm ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.infoForm ? 'hidden':''}`}>
                        <InputForm infoForm/>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.infoForm ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
                                {`<InputForm infoForm/>`}
                            </code>
                        </pre>
                    </div>
                    {/* Prism Code */}
                </div>
            </div>
            {/* DATA FORM */}
            <div className="col-span-full">
                <div className="card p-0">
                    <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                        <h3 className="text-lg card-title leading-none">Data From</h3>
                        <button type="button" onClick={()=>toggleCodeView('dataForm')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                            <span className="shrink-0">View Code</span>
                            <i className={`${showCode.dataForm ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                        </button>
                    </div>
                    <div className={`p-6 ${showCode.dataForm ? 'hidden':''}`}>
                        <InputForm dataForm/>
                    </div>
                    {/* Prism Code */}
                    <div className={`p-6 ${showCode.dataForm ? '':'hidden'}`}>
                        <pre>
                            <code className="language-markup">
                                {`<InputForm dataForm/>`}
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