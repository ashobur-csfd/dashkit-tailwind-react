import { useState } from "react";
import user from "@/assets/images/user/profile-img.png"
import Rating from "../../components/ui/Rating";

export default function Ratings(){

    // code show
    const [showCode, setShowCode] = useState({
        basic: false,
        outline: false,
        profile: false,
        profileReadonly: false,
        profileReadTwo: false,
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
                <h2 className="card-title">Rating Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* BASIC RATING  */}
                <div className="col-span-full lg:col-span-6 xl:col-span-4">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Rating</h3>
                            <button type="button" onClick={()=>toggleCodeView('basic')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basic ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.basic ? 'hidden':''}`}>
                            <Rating user={null} groupName={'rating1'} promptText = "Don’t forget to rate us:" defaultValue={3} startType={'fill'}/>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.basic ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Rating user={null} groupName={'rating1'} promptText = "Don’t forget to rate us:" defaultValue={3} startType={'fill'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* OUTLINE RATING  */}
                <div className="col-span-full lg:col-span-6 xl:col-span-4">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Outline Rating</h3>
                            <button type="button" onClick={()=>toggleCodeView('outline')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.outline ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.outline ? 'hidden':''}`}>
                            <Rating user={null} groupName={'rating2'} promptText = "Don’t forget to rate us:" defaultValue={3} startType={'stock'}/>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.outline ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Rating user={null} groupName={'rating2'} promptText = "Don’t forget to rate us:" defaultValue={3} startType={'stock'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* PROFILE RATING  */}
                <div className="col-span-full lg:col-span-full xl:col-span-4">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Profile Rating</h3>
                            <button type="button" onClick={()=>toggleCodeView('profile')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.profile ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.profile ? 'hidden':''}`}>
                            <Rating user={user} groupName={'rating3'} promptText = "Don’t forget to rate us:" defaultValue={4} startType={'fill'}/>
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.profile ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Rating user={user} groupName={'rating3'} promptText = "Don’t forget to rate us:" defaultValue={4} startType={'fill'}/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* PROFILE RATING READONLY  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Profile Rating Readonly</h3>
                            <button type="button" onClick={()=>toggleCodeView('profileReadonly')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.profileReadonly ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.profileReadonly ? 'hidden':''}`}>
                            <div>
                                <div className="flex item-center gap-3">
                                    <span className="text-[35px] font-semibold text-[#1F1F1F] dark:text-dark-text">4.0/5</span>
                                    {/* Rating  */}
                                    <Rating groupName={'readonly1'} defaultValue={4} startType={'fill'} readonly={true}/>
                                </div>
                                <p className="text-sm font-medium text-gray-500 dark:text-dark-text mb-5">2,399 total ratings</p>
                                <div className="flex items-center mt-4">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text">5 - star</span>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[100%] h-2.5 bg-[#ECBC38] rounded-full"></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">100%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text">4 - star</span>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[80%] h-2.5 bg-[#ECBC38] rounded-full"></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">80%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text">3 - star</span>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[60%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">60%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text">2 - star</span>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[40%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">40%</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text">1 - star</span>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[20%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">20%</span>
                                </div> 
                            </div>  
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.profileReadonly ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <div className="flex item-center gap-3">
        <span className="text-[35px] font-semibold text-[#1F1F1F] dark:text-dark-text">4.0/5</span>
        {/* Rating  */}
        <Rating groupName={'readonly1'} defaultValue={4} startType={'fill'} readonly={true}/>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-dark-text mb-5">2,399 total ratings</p>
    <div className="flex items-center mt-4">
        <div className="flex items-center gap-2 shrink-0">
            <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
            <span className="text-sm font-medium text-gray-500 dark:text-dark-text">5 - star</span>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[100%] h-2.5 bg-[#ECBC38] rounded-full"></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">100%</span>
    </div>
    <div className="flex items-center mt-4">
        <div className="flex items-center gap-2 shrink-0">
            <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
            <span className="text-sm font-medium text-gray-500 dark:text-dark-text">4 - star</span>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[80%] h-2.5 bg-[#ECBC38] rounded-full"></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">80%</span>
    </div>
    <div className="flex items-center mt-4">
        <div className="flex items-center gap-2 shrink-0">
            <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
            <span className="text-sm font-medium text-gray-500 dark:text-dark-text">3 - star</span>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[60%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">60%</span>
    </div>
    <div className="flex items-center mt-4">
        <div className="flex items-center gap-2 shrink-0">
            <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
            <span className="text-sm font-medium text-gray-500 dark:text-dark-text">2 - star</span>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[40%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">40%</span>
    </div>
    <div className="flex items-center mt-4">
        <div className="flex items-center gap-2 shrink-0">
            <div className="size-6 flex-center dk-border-one rounded-md text-star-mail before:font-remix before:content-['\f186']"></div>
            <span className="text-sm font-medium text-gray-500 dark:text-dark-text">1 - star</span>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[20%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">20%</span>
    </div> 
</div> `}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code  */}
                    </div>
                </div>
                 {/* PROFILE RATING  */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Profile Rating</h3>
                            <button type="button" onClick={()=>toggleCodeView('profileReadTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.profileReadTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.profileReadTwo ? 'hidden':''}`}>
                            <div>
                                <div className="flex item-center gap-3">
                                    <span className="text-[35px] font-semibold text-[#1F1F1F] dark:text-dark-text">4.0/5</span>
                                    {/* Rating  */}
                                    <Rating groupName={'readonly2'} defaultValue={4} startType={'fill'} readonly={true}/>
                                </div>
                                <p className="text-sm font-medium text-gray-500 dark:text-dark-text mb-5">2,399 total ratings</p>
                                <div className="flex items-center mt-3">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="font-semibold text-gray-500 dark:text-dark-text">0.5</span>
                                         {/* Rating  */}
                                        <div className="flex gap-1 items-center">
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                        </div>
                                         {/* Rating  */}
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[100%] h-2.5 bg-[#ECBC38] rounded-full"></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">100%</span>
                                </div>
                                <div className="flex items-center mt-3">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.4</span>
                                         {/* Rating  */}
                                        <div className="flex gap-1 items-center">
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate"></span>
                                            <span className="readonly-rate no-rate"></span>
                                        </div>
                                         {/* Rating  */}
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[80%] h-2.5 bg-[#ECBC38] rounded-full"></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">80%</span>
                                </div>
                                <div className="flex items-center mt-3">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.3</span>
                                             {/* Rating  */}
                                            <div className="flex gap-1 items-center">
                                                <span className="readonly-rate"></span>
                                                <span className="readonly-rate"></span>
                                                <span className="readonly-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                            </div>
                                             {/* Rating  */}
                                        </div>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[60%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">60%</span>
                                </div>
                                <div className="flex items-center mt-3">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.2</span>
                                             {/* Rating  */}
                                            <div className="flex gap-1 items-center">
                                                <span className="readonly-rate"></span>
                                                <span className="readonly-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                            </div>
                                             {/* Rating  */}
                                        </div>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[40%] h-2.5 bg-[#ECBC38] rounded-full"></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">40%</span>
                                </div>
                                <div className="flex items-center mt-3">
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.1</span>
                                             {/* Rating  */}
                                            <div className="flex gap-1 items-center">
                                                <span className="readonly-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                                <span className="readonly-rate no-rate"></span>
                                            </div>
                                             {/* Rating  */}
                                        </div>
                                    </div>
                                    <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
                                        <div className="w-[20%] h-2.5 bg-[#ECBC38] rounded-full"></div>
                                    </div>
                                    <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">20%</span>
                                </div>
                            </div>   
                        </div>
                         {/* Prism Code  */}
                        <div className={`p-6 ${showCode.profileReadTwo ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <div className="flex item-center gap-3">
        <span className="text-[35px] font-semibold text-[#1F1F1F] dark:text-dark-text">4.0/5</span>
        {/* Rating  */}
        <Rating groupName={'readonly2'} defaultValue={4} startType={'fill'} readonly={true}/>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-dark-text mb-5">2,399 total ratings</p>
    <div className="flex items-center mt-3">
        <div className="flex items-center gap-2 shrink-0">
            <span className="font-semibold text-gray-500 dark:text-dark-text">0.5</span>
                {/* Rating  */}
            <div className="flex gap-1 items-center">
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
            </div>
                {/* Rating  */}
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[100%] h-2.5 bg-[#ECBC38] rounded-full"></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">100%</span>
    </div>
    <div className="flex items-center mt-3">
        <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.4</span>
                {/* Rating  */}
            <div className="flex gap-1 items-center">
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
                <span className="readonly-rate"></span>
                <span className="readonly-rate no-rate"></span>
            </div>
                {/* Rating  */}
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[80%] h-2.5 bg-[#ECBC38] rounded-full"></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">80%</span>
    </div>
    <div className="flex items-center mt-3">
        <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.3</span>
                    {/* Rating  */}
                <div className="flex gap-1 items-center">
                    <span className="readonly-rate"></span>
                    <span className="readonly-rate"></span>
                    <span className="readonly-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                </div>
                    {/* Rating  */}
            </div>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[60%] h-2.5 bg-[#ECBC38] rounded-full" ></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">60%</span>
    </div>
    <div className="flex items-center mt-3">
        <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.2</span>
                    {/* Rating  */}
                <div className="flex gap-1 items-center">
                    <span className="readonly-rate"></span>
                    <span className="readonly-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                </div>
                    {/* Rating  */}
            </div>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[40%] h-2.5 bg-[#ECBC38] rounded-full"></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">40%</span>
    </div>
    <div className="flex items-center mt-3">
        <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">0.1</span>
                    {/* Rating  */}
                <div className="flex gap-1 items-center">
                    <span className="readonly-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                    <span className="readonly-rate no-rate"></span>
                </div>
                    {/* Rating  */}
            </div>
        </div>
        <div className="w-full h-2.5 mx-4 bg-gray-200 dark:bg-progress-bar-bg-dark rounded-full">
            <div className="w-[20%] h-2.5 bg-[#ECBC38] rounded-full"></div>
        </div>
        <span className="w-6 text-sm font-medium text-gray-500 dark:text-dark-text">20%</span>
    </div>
</div>`} 
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