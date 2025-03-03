import { Outlet } from "react-router-dom";
import { chatUsers } from "../../../../data/chat";

export default function ChatLayout(){

    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Start Chat List */}
                <div className="w-full sm:w-72 lg:w-80 shrink-0">
                    <div className="card mb-0 px-0 py-6 h-[calc(100vh_-_theme('spacing.header')_*_1.4)] xl:h-[calc(100vh_-_theme('spacing.header')_*_1.6)]">
                        <div className="px-6 pb-6">
                            <h6 className="card-title">Chats</h6>
                            <form className="min-w-full leading-none text-sm relative text-gray-900 dark:text-dark-text mt-6">
                                <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                    <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                                </span>
                                <input type="text" placeholder="Search..." className="form-input pl-[30px]"/>
                            </form>
                        </div>
                        <div className="max-h-[calc(100vh_-_theme('spacing.header')_*_3.4)] smooth-scrollbar" data-scrollbar>
                            <ul className="leading-none">
                                {chatUsers && chatUsers?.map((user, idx) => (
                                    <li key={idx} className="relative">
                                        {/* if active use 'current' class and if online use 'online' class */}
                                        <a href='chat-box' className={`relative text-gray font-medium flex items-center gap-2.5 text-gray-900 dark:text-dark-text hover:bg-primary-200/50 dark:hover:bg-dark-icon/50 hover:text-primary-500 [&.current]:bg-primary-200/50 dark:[&.current]:bg-dark-icon/50 px-5 py-3 group/chat ${user?.status && 'online'}`}>
                                            <div className="size-12 rounded-50 shrink-0 relative">
                                                <img src={user?.image} alt="student" className="size-12 rounded-50"/>
                                                <div className="absolute bottom-0.5 right-0.5 size-2.5 rounded-50 border-2 border-white dark:border-dark-border bg-danger group-[.offline]/chat:bg-[#94A3B8] group-[.online]/chat:bg-secondary"></div>
                                            </div>
                                            <div>
                                                <h6 className="leading-none text-heading font-semibold">{user?.name}</h6>
                                                <p className="font-spline_sans font-light mt-1 text-sm leading-none text-gray-900 dark:text-dark-text group-[.unread]/chat:font-semibold group-[.unread]/chat:text-heading dark:group-[.unread]/chat:text-dark-text-two line-clamp-1">{user?.message}</p>
                                            </div>
                                        </a>
                                        <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text absolute top-5 right-5">{user?.activity}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
        </>
    )
}