import user_1 from "@/assets/images/user/user-1.png";
import user_8 from "@/assets/images/user/user-8.png";

export default function ChatBox(){

    return(
        <>
            {/* Start Chat Area */}
            <div className="w-full">
                <div className="h-[calc(100vh_-_theme('spacing.header')_*_1.4)] xl:h-[calc(100vh_-_theme('spacing.header')_*_1.6)]">
                    <div className="card p-0 overflow-hidden">
                        <div className="flex flex-col">
                            <div className="px-4 sm:px-6 py-5 bg-gray-200/30 dark:bg-dark-card-two ">
                                <div className="flex-center-between">
                                    <a href="#" className="relative text-gray font-medium flex items-center gap-2.5 text-gray-900 dark:text-dark-text group/chat online">
                                        <div className="size-12 rounded-50 shrink-0 relative">
                                            <img src={user_1} alt="student" className="size-12 rounded-50"/>
                                            <div className="absolute bottom-0.5 right-0.5 size-2.5 rounded-50 border-2 border-white dark:border-dark-border group-[.offline]/chat:bg-[#94A3B8] group-[.online]/chat:bg-secondary"></div>
                                        </div>
                                        <div>
                                            <h6 className="leading-none text-heading font-semibold"></h6>
                                            <p className="font-spline_sans font-light mt-1 text-sm leading-none text-gray-900 dark:text-dark-text">Online</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-1">
                                        <button type="button" className="size-10 rounded-50 flex-center bg-white dark:bg-dark-icon dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700">
                                            <i className="ri-phone-line text-gray-900 dark:text-dark-text text-lg"></i>
                                        </button>
                                        <button type="button" className="size-10 rounded-50 flex-center bg-white dark:bg-dark-icon dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700">
                                            <i className="ri-video-off-line text-gray-900 dark:text-dark-text text-lg"></i>
                                        </button>
                                        <button type="button" data-modal-target="deleteEmail" data-modal-toggle="deleteEmail" className="size-10 rounded-50 flex-center bg-white dark:bg-dark-icon dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700">
                                            <i className="ri-delete-bin-line text-gray-900 dark:text-dark-text text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-body grow">
                                <div className="h-[calc(100vh_-_theme('spacing.header')_*_3.6)] xl:h-[calc(100vh_-_theme('spacing.header')_*_3.85)] smooth-scrollbar" data-scrollbar>
                                    <ul className="flex flex-col gap-3 px-6 pt-3">
                                        <li className="flex chat-message group/item [&.right]:justify-end">
                                            <div className="flex gap-3">
                                                <a href="#" className="flex-center self-end rounded-50 size-9 bg-slate-100 shrink-0 group-[.right]/item:order-2">
                                                    <img src={user_1} alt="client" className="object-cover rounded-full h-9"/>
                                                </a>
                                                <div className="grow flex flex-col group-[.right]/item:items-end gap-1 group-[.right]/item:order-1">
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                Hello! Good Morning ✋
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end">11:27 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="1" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="1" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex chat-message group/item [&.right]:justify-end right">
                                            <div className="flex gap-3">
                                                <a href="#" className="flex-center self-end rounded-50 size-9 bg-slate-100 shrink-0 group-[.right]/item:order-2">
                                                    <img src={user_8} alt="client" className="object-cover rounded-full h-9"/>
                                                </a>
                                                <div className="grow flex flex-col group-[.right]/item:items-end gap-1 group-[.right]/item:order-1">
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                Hey! I am fine. what about your branding new business project?
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end">11:35 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="2" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="2" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex chat-message group/item [&.right]:justify-end">
                                            <div className="flex gap-3">
                                                <a href="#" className="flex-center self-end rounded-50 size-9 bg-slate-100 shrink-0 group-[.right]/item:order-2">
                                                    <img src={user_1} alt="client" className="object-cover rounded-full h-9"/>
                                                </a>
                                                <div className="grow flex flex-col group-[.right]/item:items-end gap-1 group-[.right]/item:order-1">
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                Are you free today, than we are start to discuss my project.
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end">11:35 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="3" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="3" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex chat-message group/item [&.right]:justify-end right">
                                            <div className="flex gap-3">
                                                <a href="#" className="flex-center self-end rounded-50 size-9 bg-slate-100 shrink-0 group-[.right]/item:order-2">
                                                    <img src={user_8} alt="client" className="object-cover rounded-full h-9"/>
                                                </a>
                                                <div className="grow flex flex-col group-[.right]/item:items-end gap-1 group-[.right]/item:order-1">
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                Ok, No problem, Today I am free at 9:00 PM
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end hidden">11:35 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="4" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="4" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                You can knock me.
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end hidden">11:35 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="5" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="5" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex chat-message group/item [&.right]:justify-end">
                                            <div className="flex gap-3">
                                                <a href="#" className="flex-center self-end rounded-50 size-9 bg-slate-100 shrink-0 group-[.right]/item:order-2">
                                                    <img src={user_1} alt="client" className="object-cover rounded-full h-9"/>
                                                </a>
                                                <div className="grow flex flex-col group-[.right]/item:items-end gap-1 group-[.right]/item:order-1">
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                Thank you! I will call you this time.
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end hidden">11:35 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="6" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="6" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1 group/msg">
                                                        <div className="flex flex-col gap-1 group-[.right]/item:order-2">
                                                            <div className="relative px-4 py-2.5 font-spline_sans text-sm text-gray-500 dark:text-dark-text bg-white dark:bg-dark-icon dk-border-one rounded-full rounded-bl-none 2xl:max-w-sm group-[.right]/item:border-none group-[.right]/item:bg-primary-500 group-[.right]/item:text-white group-[.right]/item:rounded-bl-full group-[.right]/item:rounded-br-none group-[.right]/item:order-2">
                                                                I'll knock you.
                                                            </div>
                                                            <div className="font-spline_sans text-xs leading-none text-gray-900 dark:text-dark-text group-[.right]/item:order-2 group-[.right]/item:self-end hidden">11:35 AM</div>
                                                        </div>
                                                        <div className="relative dropdown shrink-0 group-[.right]/item:order-1">
                                                            <button data-popover-target="7" data-popover-trigger="click" data-popover-placement="bottom-start" type="button" className="size-5 flex-center opacity-0 group-hover/msg:opacity-100">
                                                                <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                                            </button>
                                                            <ul id="7" className="popover-target invisible" data-popover>
                                                                <li>
                                                                    <a className="popover-item" href="#">Reply</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Forward</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Copy</a>
                                                                </li>
                                                                <li>
                                                                    <a className="popover-item" href="#">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex p-6 gap-3">
                                <div className="flex items-center gap-1">
                                    <button type="button" className="size-8 h-11 rounded-lg flex-center bg-white dark:bg-dark-icon hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700">
                                        <i className="ri-mic-line text-gray-900 dark:text-dark-text text-lg"></i>
                                    </button>
                                    <button type="button" className="size-8 h-11 rounded-lg flex-center bg-white dark:bg-dark-icon hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700">
                                        <i className="ri-link text-gray-900 dark:text-dark-text text-lg"></i>
                                    </button>
                                </div>
                                <div className="grow">
                                    <form className="min-w-full leading-none text-sm relative text-gray-900 dark:text-dark-text">
                                        <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                            <i className="ri-emotion-happy-line text-gray-900 dark:text-dark-text text-[16px]"></i>
                                        </span>
                                        <input type="text" placeholder="Type a Message" className="form-input pl-[30px]"/>
                                    </form>
                                </div>
                                <button type="submit" className="btn b-solid btn-primary-solid btn-sm !rounded-lg">
                                    <i className="ri-send-plane-line text-inherit"></i>
                                    <span className="font-medium">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}