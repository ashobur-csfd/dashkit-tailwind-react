import { useState } from "react";
import logo from "@/assets/images/logo/logo-text.svg"
import logoSm from "@/assets/images/logo/logo-icon.svg"
import profile from "@/assets/images/user/profile-img.png"
import user_2 from "@/assets/images/user/user-2.png"
import user_6 from "@/assets/images/user/user-6.png"
import flagUSA from "@/assets/images/flag/us.svg";
import { languages, notifications } from "../../data/data";
import Nav from "../../components/ui/Nav";
export default function Navbars(){

    // code show
    const [showCode, setShowCode] = useState({
        nav_1: false,
        nav_2: false,
        nav_3: false,
        nav_4: false,
        nav_5: false,
        nav_6: false,
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
                <h2 className="card-title">Nav-Bar Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* NAV - BAR STYLE 1 */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Nav - Bar Style : 01</h3>
                            <button type="button" onClick={()=>toggleCodeView('nav_1')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.nav_1 ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.nav_1 ? 'hidden':''}`}>
                            <div>
                                <Nav id={'one'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} basic />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.nav_1 ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Nav id={'one'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} basic />
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* NAV - BAR STYLE 2 */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Nav - Bar Style : 02</h3>
                            <button type="button" onClick={()=>toggleCodeView('nav_2')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.nav_2 ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.nav_2 ? 'hidden':''}`}>
                            <div>
                                <Nav id={'two'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} basic roundedFull/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.nav_2 ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Nav id={'two'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} basic roundedFull/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* NAV - BAR STYLE 3 */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Style : 03</h3>
                            <button type="button" onClick={()=>toggleCodeView('nav_3')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.nav_3 ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.nav_3 ? 'hidden':''}`}>
                            <div>
                                <Nav id={'three'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} profile={profile} flagUSA={flagUSA} languages={languages} secondNav/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.nav_3 ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Nav id={'three'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} profile={profile} flagUSA={flagUSA} languages={languages} secondNav/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* NAV - BAR STYLE 4 */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Style : 04</h3>
                            <button type="button" onClick={()=>toggleCodeView('nav_4')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.nav_4 ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.nav_4 ? 'hidden':''}`}>
                            <div>
                                <Nav id={'four'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} profile={profile} flagUSA={flagUSA} languages={languages} thirdNav/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.nav_4 ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Nav id={'four'} logo={logo} logoSm={logoSm} notifications={notifications} user_2={user_2} profile={profile} flagUSA={flagUSA} languages={languages} thirdNav/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* NAV - BAR STYLE 5 */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Style : 05</h3>
                            <button type="button" onClick={()=>toggleCodeView('nav_5')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.nav_5 ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.nav_5 ? 'hidden':''}`}>
                            <div>
                                <Nav id={'five'} logo={logo} logoSm={logoSm} notifications={notifications} user_6={user_6} profile={profile} flagUSA={flagUSA} languages={languages} fifthNav/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.nav_5 ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Nav id={'five'} logo={logo} logoSm={logoSm} notifications={notifications} user_6={user_6} profile={profile} flagUSA={flagUSA} languages={languages} fifthNav/>
</div>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* NAV - BAR STYLE 6 */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Style : 06</h3>
                            <button type="button" onClick={()=>toggleCodeView('nav_6')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.nav_6 ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.nav_6 ? 'hidden':''}`}>
                            <div>
                                <Nav id={'six'} logo={logo} logoSm={logoSm} notifications={notifications} user_6={user_6} profile={profile} flagUSA={flagUSA} languages={languages} sixthNav/>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.nav_6 ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <Nav id={'six'} logo={logo} logoSm={logoSm} notifications={notifications} user_6={user_6} profile={profile} flagUSA={flagUSA} languages={languages} sixthNav/>
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