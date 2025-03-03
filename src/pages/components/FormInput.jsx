import { useState } from "react";
import Inputs from "../../components/ui/Inputs";

export default function FormInput(){

    // code show
    const [showCode, setShowCode] = useState({
        basic: false,
        radius: false,
        groupOne: false,
        groupTwo: false,
        groupThree: false,
        groupFour: false,
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
                <h2 className="card-title">Forms Input Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                {/* BASIC INPUT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Inputs</h3>
                            <button type="button" onClick={()=>toggleCodeView('basic')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basic ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.basic ? 'hidden':''}`}>
                            <div>
                                <Inputs basic labelId={'first_name'} labelText={'First name'} className="form-input" type='text'/>
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.basic ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Inputs basic labelId={'first_name'} labelText={'First name'} className="form-input" type='text'/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* BASIC Radius */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Radius Basic Inputs</h3>
                            <button type="button" onClick={()=>toggleCodeView('radius')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.radius ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.radius ? 'hidden':''}`}>
                            <div>
                                <Inputs basic labelId={'last_name'} labelText={'Last name'} className="form-input bg-[#F8F8FC] dark:bg-dark-card-two" type='text'/>
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.radius ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Inputs basic labelId={'last_name'} labelText={'Last name'} className="form-input bg-[#F8F8FC] dark:bg-dark-card-two" type='text'/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* INPUT GROUP */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Input Group</h3>
                            <button type="button" onClick={()=>toggleCodeView('groupOne')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.groupOne ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.groupOne ? 'hidden':''}`}>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='date' iconClass="form-input-group input-icon" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='time' value={'16:30'} iconClass="form-input-group input-icon" icon={(<i className="ri-time-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon" icon={(<i className="ri-mail-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon" icon={(<i className="ri-links-fill text-inherit"></i>)}/>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.groupOne ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`{/* single item */}
<Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='date' iconClass="form-input-group input-icon" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='time' value={'16:30'} iconClass="form-input-group input-icon" icon={(<i className="ri-time-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon" icon={(<i className="ri-mail-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon" icon={(<i className="ri-links-fill text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* INPUT GROUP */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Input Group</h3>
                            <button type="button" onClick={()=>toggleCodeView('groupTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.groupTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.groupTwo ? 'hidden':''}`}>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none" type='date' iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none" type='time' value={'16:30'} iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-time-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-mail-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-links-fill text-inherit"></i>)}/>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.groupTwo ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`{/* single item */}
<Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none" type='date' iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none" type='time' value={'16:30'} iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-time-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-mail-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon bg-[#F8F8FC] dark:bg-dark-card-two" icon={(<i className="ri-links-fill text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* INPUT GROUP DARK */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Input Group</h3>
                            <button type="button" onClick={()=>toggleCodeView('groupThree')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.groupThree ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.groupThree ? 'hidden':''}`}>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='date' iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='time' value={'16:30'} iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-time-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-mail-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-links-fill text-inherit"></i>)}/>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.groupThree ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`{/* single item */}
<Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='date' iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='time' value={'16:30'} iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-time-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-mail-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none bg-[#F8F8F8] dark:bg-dark-card-two" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon !text-gray-900 dark:text-dark-text" icon={(<i className="ri-links-fill text-inherit"></i>)}/>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* INPUT GROUP DARK */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Input Group</h3>
                            <button type="button" onClick={()=>toggleCodeView('groupFour')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.groupFour ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.groupFour ? 'hidden':''}`}>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none" type='date' iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none" type='time' value={'16:30'} iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-time-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-mail-line text-inherit"></i>)}/>
                            {/* single item */}
                            <Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-links-fill text-inherit"></i>)}/>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.groupFour ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`{/* single item */}
<Inputs basicWithIcon labelText={'Date'} className="form-input rounded-l-none" type='date' iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-calendar-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Time'} className="form-input rounded-l-none" type='time' value={'16:30'} iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-time-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type Email'} className="form-input rounded-l-none" type='email' placeholder="example@gmail.com" iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-mail-line text-inherit"></i>)}/>

{/* single item */}
<Inputs basicWithIcon labelText={'Type URL'} className="form-input rounded-l-none" type='url' placeholder="http://example.com" iconClass="form-input-group input-icon bg-[#F8F8F8] dark:bg-dark-card !text-gray-900 dark:text-dark-text" icon={(<i className="ri-links-fill text-inherit"></i>)}/>`}
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