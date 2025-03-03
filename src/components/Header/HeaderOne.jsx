import profile from "@/assets/images/user/profile-img.png";
import flagUSA from "@/assets/images/flag/us.svg";
import logo from "@/assets/images/logo/logo-text.svg";
import logoDark from "@/assets/images/logo/logo-text-dark.svg";
import { useEffect, useState } from "react";
import { DrawerAppSettings } from "../Drawer/DrawerAppSettings";
import { languages, notifications } from "../../data/data";
import { useLocation } from "react-router-dom";
import 'flowbite';

export default function HeaderOne() {
  const [isOpen, setIsOpen] = useState(false);
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

  const currentLocation = useLocation()

  return (
    <>
    {(currentLocation?.pathname !== "/documentation") ? 
    <header className="header px-4 sm:px-6 h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-white dark:bg-dark-card rounded-none xl:rounded-15 flex items-center mb-4 xl:m-4 group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_32px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_32px)] ac-transition">
        <div className="flex-center-between grow">
            {/* Header Left */}
            <div className="flex items-center gap-4">
                <div className="menu-hamburger-container flex-center">
                    <button type="button" id="app-menu-hamburger" className="menu-hamburger hidden xl:block" onClick={toggleMenuHamburger}/>
                    <button type="button" className="menu-hamburger block xl:hidden" data-drawer-target="app-menu-drawer" data-drawer-show="app-menu-drawer"aria-controls="app-menu-drawer"/>
                </div>
                <div className="w-56 md:w-72 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
                    <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                        <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]" />
                    </span>
                    <input type="text" name="header-search" placeholder="Search..." className="bg-transparent pl-[36px] pr-12 py-4 dk-border-one rounded-full w-full font-spline_sans focus:outline-none focus:border-primary-500"/>
                    <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                        <i className="ri-command-line text-[12px]" />
                        <span>+</span>
                        <span>k</span>
                    </span>
                </div>
            </div>
            {/* Header Right */}
            <div className="flex items-center gap-1 sm:gap-3">
                {/* Dark Light Button */}
                <button type="button" className="themeMode size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={toggleThemeMode}>
                    <i className="ri-contrast-2-line text-[22px] dark:text-dark-text-two dark:before:!content-['\f1bf']" />
                </button>
                {/* Settings Button */}
                <button onClick={() => setIsOpen(true)} type="button" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                    <i className="ri-settings-3-line text-[22px] dark:text-dark-text-two animate-spin-slow" />
                </button>
                <DrawerAppSettings isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* Notification Button */}
                <div className="relative">
                <button type="button" data-popover-target="dropdownNotification" data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                    <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two" />
                    <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownNotification" className="!-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                    <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">Notifications</div>
                    <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                        {notifications && notifications?.slice(0,2).map((notify, idx) => (
                            <a key={idx} href={notify?.link} className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                <div className="flex-shrink-0">
                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">
                                    New message from
                                    <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>
                                    : "{notify?.massage}"
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <a href="/notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">View all</a>
                </div>
                </div>
                {/* Language Select Button */}
                <div className="relative">
                    <button type="button" data-popover-target="dropdownLanguage" data-popover-trigger="click" data-popover-placement="bottom-end" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                        <img src={flagUSA} alt="flag" className="size-5 rounded-sm" title="English" />
                    </button>
                    {/* Dropdown */}
                    <div id="dropdownLanguage" className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade">
                        {languages && languages?.map((language, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full" data-lang="en" title="English">
                                <img src={language?.image} alt="flag" className="object-cover size-4 rounded-50"/>
                                <h6 className="font-medium text-gray-500 dark:text-white">{language?.name}</h6>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Border */}
                <div className="w-[1px] h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-[#EEE] dark:bg-dark-border hidden sm:block"/>
                {/* User Profile Button */}
                <div className="relative">
                    <button type="button" data-popover-target="dropdownProfile" data-popover-trigger="click" data-popover-placement="bottom-end" className="text-gray-500 dark:text-dark-text flex items-center gap-2 sm:pr-4 relative after:absolute after:right-0 after:font-remix after:content-['\ea4e'] after:text-[18px] after:hidden sm:after:block">
                        <img src={profile} alt="user-img" className="size-7 sm:size-9 rounded-50" />
                        <span className="font-semibold leading-none text-lg capitalize hidden sm:block">alex..</span>
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdownProfile" className="invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                        <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                            <div className="font-medium ">Alex Janson</div>
                            <div className="truncate">alex2425@gmail.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <a href="/" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="account-setting" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="sign-in" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    :
    <header className="header px-4 sm:px-6 h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-white dark:bg-dark-card rounded-none xl:rounded-15 flex items-center mb-4 xl:m-4 ac-transition">
        <div className="flex-center-between grow">
            {/* Header Left */}
            <div className="flex items-center gap-4">
                <div className="flex items-center shrink-0">
                    <a href="/" className="">
                        <img src={logo} alt="logo" className="group-data-[theme-mode=dark]:hidden"/>
                        <img src={logoDark} alt="logo" className="group-data-[theme-mode=light]:hidden"/>
                    </a>
                </div>
            </div>
            {/* Header Right */}
            <div className="flex items-center gap-1 sm:gap-3">
                {/* Header Search */}
                <div className="w-56 md:w-72 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
                    <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                        <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                    </span>
                    <input type="text" name="header-search" placeholder="Search..." className="bg-transparent pl-[36px] pr-12 py-4 dk-border-one rounded-full w-full font-spline_sans focus:outline-none focus:border-primary-500"/> 
                    <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                        <i className="ri-command-line text-[12px]"></i><span>+</span><span>k</span>
                    </span>
                </div>
                {/* Dark Light Button */}
                <button type="button" onClick={toggleThemeMode} className="themeMode size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onclick="toggleThemeMode()">
                    <i className="ri-contrast-2-line text-[22px] dark:text-dark-text-two dark:before:!content-['\f1bf']"></i>
                </button>
                {/* Settings Button */}
                <button type="button" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" data-drawer-target="app-setting-drawer" data-drawer-show="app-setting-drawer" data-drawer-placement="right" aria-controls="app-setting-drawer">
                    <i className="ri-settings-3-line text-[22px] dark:text-dark-text-two animate-spin-slow"></i>
                </button>
                {/* Notification Button */}
                <div className="relative">
                    <button type="button" data-popover-target="dropdownNotification" data-popover-trigger="click" data-popover-placement="bottom-end" className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                        <i className="ri-notification-3-line text-[22px] dark:text-dark-text-two"></i>
                        <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">0</span>
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdownNotification" className="!-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four">
                        <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">Notifications</div>
                        <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                            {notifications && notifications?.slice(0,2).map((notify, idx) => (
                            <a key={idx} href={notify?.link} className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon">
                                <div className="flex-shrink-0">
                                    <img className="size-10 rounded-50" src={notify?.image} alt="user"/>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">
                                        New message from
                                        <span className="font-semibold text-gray-900 dark:text-white"> {notify?.studentName}</span>
                                        : "{notify?.massage}"
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">{notify?.moment}</div>
                                </div>
                            </a>
                            ))}
                        </div>
                        <a href="notification" className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">View all</a>
                    </div>
                </div>
                {/* Language Select Button */}
                <div className="relative">
                    <button type="button" data-popover-target="dropdownLanguage" data-popover-trigger="click" data-popover-placement="bottom-end" className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                        <img src={flagUSA} alt="flag" className="size-5 rounded-sm" title="English"/>
                    </button>
                    {/* Dropdown */}
                    <div id="dropdownLanguage" className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade">
                        {languages && languages?.map((language, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full" data-lang="en" title="English">
                            <img src={language?.image} alt="flag" className="object-cover size-4 rounded-50"/>
                            <h6 className="font-medium text-gray-500 dark:text-white">{language?.name}</h6>
                        </a>
                        ))}
                    </div>
                </div>
                {/* Border */}
                <div className="w-[1px] h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-[#EEE] dark:bg-dark-border hidden sm:block"></div>
                {/* User Profile Button */}
                <div className="relative">
                    <button type="button" data-popover-target="dropdownProfile" data-popover-trigger="click" data-popover-placement="bottom-end" className="text-gray-500 dark:text-dark-text flex items-center gap-2 sm:pr-4 relative after:absolute after:right-0 after:font-remix after:content-['\ea4e'] after:text-[18px] after:hidden sm:after:block">
                        <img src={profile} alt="user-img" className="size-7 sm:size-9 rounded-50"/>
                        <span className="font-semibold leading-none text-lg capitalize hidden sm:block">alex..</span>
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdownProfile" className="invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four">
                        <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                            <div className="font-medium ">Alex Janson</div>
                            <div className="truncate">alex2425@gmail.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <a href="/" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="account-setting" className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white">Settings</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="sign-in" className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    }
    </>
  );
}








