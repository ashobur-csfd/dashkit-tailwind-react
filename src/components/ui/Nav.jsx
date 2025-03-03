import { useEffect, useState } from "react";

export default function Nav({id, logo, logoSm, notifications, user_2, user_6, profile, flagUSA, languages, basic, secondNav, thirdNav, fifthNav, sixthNav, roundedFull=false}){

    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme-mode") === "dark");
    const [isSmDrawer, setIsSmDrawer] = useState(() => localStorage.getItem("sidebar-size") === "sm");
  
    useEffect(() => {
      // Apply theme and sidebar size on load
      document.documentElement.classList.toggle("dark", isDarkMode);
      document.documentElement.setAttribute("data-theme-mode", isDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("sm", isSmDrawer);
      document.documentElement.setAttribute("data-sidebar-size", isSmDrawer ? "sm" : "lg");
    }, [isDarkMode, isSmDrawer]);
  
    // Toggle theme and save to localStorage
    const toggleThemeMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      localStorage.setItem("theme-mode", newMode ? "dark" : "light");
    };
  
    // Toggle sidebar size and save to localStorage
    const toggleMenuHamburger = () => {
      const newSize = !isSmDrawer;
      setIsSmDrawer(newSize);
      localStorage.setItem("sidebar-size", newSize ? "sm" : "lg");
    };

    return(
        <>
            {basic && 
                <header className={`px-4 py-2 sm:py-0 rounded-xl ac-transition group/header ${roundedFull ? '[&.header-one-rounded]:bg-[#F0F1F8] dark:[&.header-one-rounded]:bg-dark-card-two [&.header-one-rounded]:rounded-full header-one-rounded' : '[&.header-one]:bg-[#F0F1F8] dark:[&.header-one]:bg-dark-card-two [&.header-one]:rounded-xl header-one'}`}>
                    <div className="flex-center-between grow">
                        <div className="flex items-center">
                                {/* Header Left */}
                            <div className="menu-hamburger-container flex-center">
                                <button type="button" className="menu-hamburger block md:hidden" data-drawer-target="app-menu-drawer" data-drawer-show="app-menu-drawer" aria-controls="app-menu-drawer"></button>
                            </div>
                            <a href="#" className="hidden md:block">
                                <img src={logo} alt="logo"/>
                            </a>
                            <a href="#" className="block md:hidden">
                                <img src={logoSm} alt="logo"/>
                            </a>
                        </div>
                            {/* Header Right */}
                        <div className="flex items-center gap-3 sm:gap-3">
                            <div className="w-24 md:w-64 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
                                <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                                    <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                </span>
                                <input type="text" name="header-search" placeholder="Search..." className="bg-transparent pl-[36px] pr-12 py-4 dk-border-one group-[.header-one]/header:rounded-xl group-[.header-one-rounded]/header:!rounded-full w-full font-spline_sans focus:outline-none focus:border-primary-500"/>
                                <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                                    <i className="ri-command-line text-[12px]"></i><span>+</span><span>k</span>
                                </span>
                            </div>
                                {/* Create Button */}
                            <button className="btn b-solid btn-primary-solid px-6 group-[.header-one-rounded]/header:rounded-full hidden lg:block">
                                <i className="ri-add-large-line text-inherit"></i> Create
                            </button>
                                {/* Notification Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownNotification-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                    <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two"></i>
                                    <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                                </button>
                                    {/* Dropdown menu */}
                                <div id={`dropdownNotification-${id}`} className="absolute !-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                                    <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        Notifications
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                                        {notifications && notifications?.slice(0,2).map((notify, idx) => (
                                            <a key={idx} href="/notification" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                                <div className="flex-shrink-0">
                                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                                </div>
                                                <div className="w-full ps-3">
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">New message from <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>: "{notify?.massage}"</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        View all
                                    </a>
                                </div>
                            </div>
                                {/* Border */}
                            <div className="w-[1px] h-20 mx-2 bg-[#E7E7E9] dark:bg-dark-border hidden sm:block"></div>
                                {/* User Profile Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownProfile-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="flex items-center gap-2 sm:pr-3 relative after:absolute after:right-0 after:text-[18px] after:hidden sm:after:block">
                                    <img src={user_2} alt="user-img" className="size-7 sm:size-9 rounded-50"/>
                                    <span className="leading-none text-lg text-gray-500 dark:text-dark-text font-semibold capitalize hidden sm:block">Jerome Bell</span>
                                </button>
                                    {/* Dropdown menu */}
                                <div id={`dropdownProfile-${id}`} className="absolute invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                                    <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                                        <div className="font-medium ">Jerome Bell</div>
                                        <div className="truncate">jerome2024@gmail.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
            {secondNav && 
                <header className="px-4 py-2 sm:py-0 [&.header-two]:bg-[#F1F1F5] dark:[&.header-two]:bg-dark-card-two rounded-xl [&.header-two-rounded]:rounded-full ac-transition group/header header-two">
                    <div className="flex-center-between grow">
                        <div className="flex items-center">
                                {/* Header Left */}
                            <div className="menu-hamburger-container flex-center">
                                <button type="button" className="menu-hamburger block md:hidden" data-drawer-target="app-menu-drawer" data-drawer-show="app-menu-drawer" aria-controls="app-menu-drawer"></button>
                            </div>
                            <a href="#" className="hidden md:block">
                                <img src={logo} alt="logo"/>
                            </a>
                            <a href="#" className="block md:hidden">
                                <img src={logoSm} alt="logo"/>
                            </a>
                        </div>
                            {/* Header Right */}
                        <div className="flex items-center gap-0.5 sm:gap-3">
                                {/* Dark Light Button */}
                            <button type="button" className="themeMode size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full" onClick={toggleThemeMode}>
                                <i className="ri-contrast-2-line text-[22px] dark:text-dark-text-two dark:before:!content-['\f1bf']"></i>
                            </button>
                                {/* Settings Button */}
                            <button type="button" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full" data-drawer-target="app-setting-drawer" data-drawer-show="app-setting-drawer" data-drawer-placement="right" aria-controls="app-setting-drawer">
                                <i className="ri-settings-3-line text-[22px] dark:text-dark-text-two animate-spin-slow"></i>
                            </button>
                                {/* Notification Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownNotification-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full">
                                    <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two"></i>
                                    <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                                </button>
                                    {/* Dropdown menu */}
                                <div id={`dropdownNotification-${id}`} className="absolute !-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                                    <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        Notifications
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                                        {notifications && notifications?.slice(0,2).map((notify, idx) => (
                                            <a key={idx} href="/notification" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                                <div className="flex-shrink-0">
                                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                                </div>
                                                <div className="w-full ps-3">
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">New message from <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>: "{notify?.massage}"</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        View all
                                    </a>
                                </div>
                            </div>
                                {/* Language Select Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownLanguage-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full">
                                    <img src={flagUSA} alt="flag" className="size-5 rounded-full" title="English"/>
                                </button>
                                {/* Dropdown */}
                                <div id={`dropdownLanguage-${id}`} className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade">
                                    {languages && languages?.map((language, idx) => (
                                        <a key={idx} href="#" className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full" data-lang="en" title="English">
                                        <img src={language?.image} alt="flag" className="object-cover size-4 rounded-50"/>
                                        <h6 className="font-medium text-gray-500 dark:text-white">{language?.name}</h6>
                                    </a>
                                    ))}
                                </div>
                            </div>
                                {/* Border */}
                            <div className="w-[1px] h-20 mx-2 bg-[#E7E7E9] dark:bg-dark-border hidden sm:block"></div>
                                {/* User Profile Button */}
                            <div className="relative">
                                <button type="button" data-popover-target="dropdownProfile-3" data-popover-trigger="click" data-popover-placement="bottom-end" className="flex items-center sm:gap-2 group-[.header-two-rounded]/header:sm:pr-4 relative after:absolute after:right-0 after:font-remix group-[.header-two-rounded]/header:after:content-['\ea4e'] after:text-[18px] after:hidden sm:after:block">
                                    <img src={profile} alt="user-img" className="size-7 sm:size-9 rounded-50"/>
                                    <span>
                                        <span className="leading-none text-left text-lg text-gray-500 dark:text-dark-text font-semibold capitalize hidden group-[.header-two-rounded]/header:sm:block">Theres...</span>
                                        <span className="leading-none mt-1 text-left text-sm text-gray-900 dark:text-dark-text font-medium capitalize hidden group-[.header-two-rounded]/header:sm:block">Account Setting</span>
                                    </span>
                                </button>
                                    {/* Dropdown menu */}
                                <div id="dropdownProfile-3" className="absolute invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                                    <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                                        <div className="font-medium ">Theresa Webb</div>
                                        <div className="truncate">theresa2024@gmail.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
            {thirdNav &&
                <header className="px-4 py-2 sm:py-0 [&.header-two]:bg-[#F1F1F5] dark:[&.header-two]:bg-dark-card-two rounded-xl [&.header-two-rounded]:rounded-full ac-transition group/header header-two header-two-rounded">
                    <div className="flex-center-between grow">
                        <div className="flex items-center">
                            {/* Header Left */}
                            <div className="menu-hamburger-container flex-center">
                                <button type="button" className="menu-hamburger block md:hidden" data-drawer-target="app-menu-drawer" data-drawer-show="app-menu-drawer" aria-controls="app-menu-drawer"></button>
                            </div>
                            <a href="#" className="hidden md:block">
                                <img src={logo} alt="logo"/>
                            </a>
                            <a href="#" className="block md:hidden">
                                <img src={logoSm} alt="logo"/>
                            </a>
                        </div>
                        {/* Header Right */}
                        <div className="flex items-center gap-0.5 sm:gap-3">
                            {/* Dark Light Button */}
                            <button type="button" className="themeMode size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full" onClick={toggleThemeMode}>
                                <i className="ri-contrast-2-line text-[22px] dark:text-dark-text-two dark:before:!content-['\f1bf']"></i>
                            </button>
                            {/* Settings Button */}
                            <button type="button" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full" data-drawer-target="app-setting-drawer" data-drawer-show="app-setting-drawer" data-drawer-placement="right" aria-controls="app-setting-drawer">
                                <i className="ri-settings-3-line text-[22px] dark:text-dark-text-two animate-spin-slow"></i>
                            </button>
                            {/* Notification Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownNotification-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full">
                                    <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two"></i>
                                    <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                                </button>
                                {/* Dropdown menu */}
                                <div id={`dropdownNotification-${id}`} className="absolute !-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                                    <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        Notifications
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                                        {notifications && notifications?.slice(0,2).map((notify, idx) => (
                                            <a key={idx} href="/notification" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                                <div className="flex-shrink-0">
                                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                                </div>
                                                <div className="w-full ps-3">
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">New message from <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>: "{notify?.massage}"</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        View all
                                    </a>
                                </div>
                            </div>
                            {/* Language Select Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownLanguage-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-two-rounded]/header:rounded-full">
                                    <img src={flagUSA} alt="flag" className="size-5 rounded-full" title="English"/>
                                </button>
                                {/* Dropdown */}
                                <div id={`dropdownLanguage-${id}`} className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade">
                                    {languages && languages?.map((language, idx) => (
                                        <a key={idx} href="#" className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full" data-lang="en" title="English">
                                        <img src={language?.image} alt="flag" className="object-cover size-4 rounded-50"/>
                                        <h6 className="font-medium text-gray-500 dark:text-white">{language?.name}</h6>
                                    </a>
                                    ))}
                                </div>
                            </div>
                            {/* Border */}
                            <div className="w-[1px] h-20 mx-2 bg-[#E7E7E9] dark:bg-dark-border hidden sm:block"></div>
                            {/* User Profile Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownProfile-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="flex items-center sm:gap-2 group-[.header-two-rounded]/header:sm:pr-4 relative after:absolute after:right-0 after:font-remix group-[.header-two-rounded]/header:after:content-['\ea4e'] after:text-[18px] after:hidden sm:after:block">
                                    <img src={profile} alt="user-img" className="size-7 sm:size-9 rounded-50"/>
                                    <span>
                                        <span className="leading-none text-left text-lg text-gray-500 dark:text-dark-text font-semibold capitalize hidden group-[.header-two-rounded]/header:sm:block">Theres...</span>
                                        <span className="leading-none mt-1 text-left text-sm text-gray-900 dark:text-dark-text font-medium capitalize hidden group-[.header-two-rounded]/header:sm:block">Account Setting</span>
                                    </span>
                                </button>
                                {/* Dropdown menu */}
                                <div id={`dropdownProfile-${id}`} className="absolute invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                                    <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                                        <div className="font-medium ">Theresa Webb</div>
                                        <div className="truncate">theresa2024@gmail.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
            {fifthNav &&
                <header className="px-4 py-2 sm:py-0 [&.header-three]:bg-[#F0F1F8] dark:[&.header-three]:bg-dark-card-two rounded-xl [&.header-three-rounded]:rounded-full ac-transition group/header header-three">
                    <div className="flex-center-between grow">
                        <div className="flex items-center gap-4">
                            {/* Header Left */}
                            <div>
                                <button type="button" className="menu-hamburger hidden xl:block hover:border-[#E7E7E9] rounded-xl group-[.header-three-rounded]/header:rounded-full"></button>
                                <button type="button" className="menu-hamburger hover:border-[#E7E7E9] rounded-xl group-[.header-three-rounded]/header:rounded-full block xl:hidden" data-drawer-target="app-menu-drawer" data-drawer-show="app-menu-drawer" aria-controls="app-menu-drawer"></button>
                            </div>
                            <a href="#" className="hidden">
                                <img src={logo} alt="logo"/>
                            </a>
                            <a href="#" className="hidden">
                                <img src={logoSm} alt="logo"/>
                            </a>
                            <div className="w-24 md:w-64 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
                                <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                                    <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                </span>
                                <input type="text" name="header-search" placeholder="Search..." className="bg-transparent pl-[36px] pr-12 py-4 dk-border-one group-[.header-three]/header:rounded-xl group-[.header-three-rounded]/header:!rounded-full w-full font-spline_sans focus:outline-none focus:border-primary-500"/>
                                <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                                    <i className="ri-command-line text-[12px]"></i><span>+</span><span>k</span>
                                </span>
                            </div>
                        </div>
                        {/* Header Right */}
                        <div className="flex items-center gap-1 sm:gap-3">
                            {/* Dark Light Toggle Button */}
                            <div className="hidden">
                                <label htmlFor="toggleTheme" className="cursor-pointer">
                                <span className="relative">
                                    {/* toggle input */}
                                    <input type="checkbox" id="toggleTheme" className="sr-only peer/draft" onClick={toggleThemeMode}/>
                                    {/* toggle line */}
                                    <span className="toggle-dark-btn group-[.header-three]/header:rounded-xl group-[.header-three-rounded]/header:!rounded-full before:content-['\f1bf'] after:content-['\ef75'] before:text-gray-900 after:text-gray-900"></span>
                                    {/* toggle dot */}
                                    <span className="toggle-dark-dot group-[.header-three]/header:rounded-lg group-[.header-three-rounded]/header:!rounded-full before:content-['\f1bc'] peer-checked/draft:before:content-['\ef72'] before:text-primary-500 peer-checked/draft:before:text-primary-500"></span>
                                </span>
                                </label>
                            </div>
                            {/* Settings Button */}
                            <button type="button" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-three-rounded]/header:rounded-full" data-drawer-target="app-setting-drawer" data-drawer-show="app-setting-drawer" data-drawer-placement="right" aria-controls="app-setting-drawer">
                                <i className="ri-settings-3-line text-[22px] dark:text-dark-text-two animate-spin-slow"></i>
                            </button>
                            {/* Notification Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownNotification-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-three-rounded]/header:rounded-full">
                                    <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two"></i>
                                    <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                                </button>
                                {/* Dropdown menu */}
                                <div id={`dropdownNotification-${id}`} className="absolute !-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                                    <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        Notifications
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                                        {notifications && notifications?.slice(0,2).map((notify, idx) => (
                                            <a key={idx} href="/notification" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                                <div className="flex-shrink-0">
                                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                                </div>
                                                <div className="w-full ps-3">
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">New message from <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>: "{notify?.massage}"</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        View all
                                    </a>
                                </div>
                            </div>
                            {/* Language Select Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownLanguage-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-three-rounded]/header:rounded-full">
                                    <img src={flagUSA} alt="flag" className="size-5 rounded-full" title="English"/>
                                </button>
                                {/* Dropdown */}
                                <div id={`dropdownLanguage-${id}`} className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade">
                                    {languages && languages?.map((language, idx) => (
                                        <a key={idx} href="#" className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full" data-lang="en" title="English">
                                        <img src={language?.image} alt="flag" className="object-cover size-4 rounded-50"/>
                                        <h6 className="font-medium text-gray-500 dark:text-white">{language?.name}</h6>
                                    </a>
                                    ))}
                                </div>
                            </div>
                            {/* Border */}
                            <div className="w-[1px] h-20 mx-2 bg-[#E7E7E9] dark:bg-dark-border hidden sm:block"></div>
                            {/* User Profile Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownProfile-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="flex items-center lg:gap-2 lg:pr-4 relative after:absolute after:right-0 after:font-remix after:content-['\ea4e'] after:text-[18px] after:hidden lg:after:block">
                                    <img src={user_6} alt="user-img" className="size-7 sm:size-9 rounded-50"/>
                                    <span>
                                        <span className="leading-none text-left text-lg text-gray-500 dark:text-dark-text font-semibold capitalize hidden lg:block">Jenny...</span>
                                        <span className="leading-none mt-1 text-left text-sm text-gray-900 dark:text-dark-text font-medium capitalize hidden lg:block">Account Setting</span>
                                    </span>
                                </button>
                                {/* Dropdown menu */}
                                <div id={`dropdownProfile-${id}`} className="absolute invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                                    <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                                        <div className="font-medium">Jenny Wilson</div>
                                        <div className="truncate">jenny2024@gmail.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
            {sixthNav &&
                <header className="px-4 py-2 sm:py-0 [&.header-three]:bg-[#F0F1F8] dark:[&.header-three]:bg-dark-card-two rounded-xl [&.header-three-rounded]:rounded-full ac-transition group/header header-three header-three-rounded">
                    <div className="flex-center-between grow">
                        <div className="flex items-center gap-4">
                            {/* Header Left */}
                            <div>
                                <button type="button" onClick={toggleMenuHamburger} className="menu-hamburger hidden xl:block hover:border-[#E7E7E9] rounded-xl group-[.header-three-rounded]/header:rounded-full"></button>
                                <button type="button" onClick={toggleMenuHamburger} className="menu-hamburger hover:border-[#E7E7E9] rounded-xl group-[.header-three-rounded]/header:rounded-full block xl:hidden" data-drawer-target="app-menu-drawer" data-drawer-show="app-menu-drawer" aria-controls="app-menu-drawer"></button>
                            </div>
                            <a href="#" className="hidden">
                                <img src={logo} alt="logo"/>
                            </a>
                            <a href="#" className="hidden">
                                <img src={logoSm} alt="logo"/>
                            </a>
                            <div className="w-24 md:w-64 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
                                <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                                    <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                </span>
                                <input type="text" name="header-search" placeholder="Search..." className="bg-transparent pl-[36px] pr-12 py-4 dk-border-one group-[.header-three]/header:rounded-xl group-[.header-three-rounded]/header:!rounded-full w-full font-spline_sans focus:outline-none focus:border-primary-500"/>
                                <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                                    <i className="ri-command-line text-[12px]"></i><span>+</span><span>k</span>
                                </span>
                            </div>
                        </div>
                        {/* Header Right */}
                        <div className="flex items-center gap-1 sm:gap-3">
                            {/* Dark Light Toggle Button */}
                            <div className="hidden">
                                <label htmlFor="toggleThemeRounded" className="cursor-pointer">
                                <span className="relative">
                                    {/* toggle input */}
                                    <input type="checkbox" id="toggleThemeRounded" className="sr-only peer/draft" onClick={toggleThemeMode}/>
                                    {/* toggle line */}
                                    <span className="toggle-dark-btn group-[.header-three]/header:rounded-xl group-[.header-three-rounded]/header:!rounded-full before:content-['\f1bf'] after:content-['\ef75'] before:text-gray-900 after:text-gray-900"></span>
                                    {/* toggle dot */}
                                    <span className="toggle-dark-dot group-[.header-three]/header:rounded-lg group-[.header-three-rounded]/header:!rounded-full before:content-['\f1bc'] peer-checked/draft:before:content-['\ef72'] before:text-primary-500 peer-checked/draft:before:text-primary-500"></span>
                                </span>
                                </label>
                            </div>
                            {/* Settings Button */}
                            <button type="button" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-three-rounded]/header:rounded-full" data-drawer-target="app-setting-drawer" data-drawer-show="app-setting-drawer" data-drawer-placement="right" aria-controls="app-setting-drawer">
                                <i className="ri-settings-3-line text-[22px] dark:text-dark-text-two animate-spin-slow"></i>
                            </button>
                            {/* Notification Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownNotification-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-three-rounded]/header:rounded-full">
                                    <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two"></i>
                                    <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                                </button>
                                {/* Dropdown menu */}
                                <div id={`dropdownNotification-${id}`} className="absolute !-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                                    <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        Notifications
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                                        {notifications && notifications?.slice(0,2).map((notify, idx) => (
                                            <a key={idx} href="/notification" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                                <div className="flex-shrink-0">
                                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                                </div>
                                                <div className="w-full ps-3">
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">New message from <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>: "{notify?.massage}"</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                                        View all
                                    </a>
                                </div>
                            </div>
                            {/* Language Select Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownLanguage-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md group-[.header-three-rounded]/header:rounded-full">
                                    <img src={flagUSA} alt="flag" className="size-5 rounded-full" title="English"/>
                                </button>
                                {/* Dropdown */}
                                <div id={`dropdownLanguage-${id}`} className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade">
                                    {languages && languages?.map((language, idx) => (
                                        <a key={idx} href="#" className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full" data-lang="en" title="English">
                                        <img src={language?.image} alt="flag" className="object-cover size-4 rounded-50"/>
                                        <h6 className="font-medium text-gray-500 dark:text-white">{language?.name}</h6>
                                    </a>
                                    ))}
                                </div>
                            </div>
                            {/* Border */}
                            <div className="w-[1px] h-20 mx-2 bg-[#E7E7E9] dark:bg-dark-border hidden sm:block"></div>
                            {/* User Profile Button */}
                            <div className="relative">
                                <button type="button" data-popover-target={`dropdownProfile-${id}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="flex items-center lg:gap-2 lg:pr-4 relative after:absolute after:right-0 after:font-remix after:content-['\ea4e'] after:text-[18px] after:hidden lg:after:block">
                                    <img src={user_6} alt="user-img" className="size-7 sm:size-9 rounded-50"/>
                                    <span>
                                        <span className="leading-none text-left text-lg text-gray-500 dark:text-dark-text font-semibold capitalize hidden lg:block">Jenny...</span>
                                        <span className="leading-none mt-1 text-left text-sm text-gray-900 dark:text-dark-text font-medium capitalize hidden lg:block">Account Setting</span>
                                    </span>
                                </button>
                                {/* Dropdown menu */}
                                <div id={`dropdownProfile-${id}`} className="absolute invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                                    <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                                        <div className="font-medium">Jenny Wilson</div>
                                        <div className="truncate">jenny2024@gmail.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
        </>
    )
}