import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { email } from "../../../../data/data";

export default function MailDetail(){

    const [mail, setMail] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        if (email) {
        const mailData = email.find((mail) => mail?.id === id);
        setMail(mailData);
        }
    }, [id, email]);

    return(
        <>
            {/* View Email */}
            <div className="col-span-full lg:col-span-9">
                <div className="card p-0 max-h-full">
                    <div className="p-4 sm:px-7 py-5 bg-gray-200/30 dark:bg-dark-card-two">
                        <a href="/email/mail-box" className="inline-flex items-center gap-1">
                            <i className="ri-arrow-left-line text-2xl text-heading dark:text-dark-text"></i>
                            <h6 className="card-title dark:text-dark-text">{mail?.subject}</h6>
                        </a>
                    </div>
                    {/* Email Header */}
                    <div className="px-4 py-5 sm:px-7 border-b border-gray-200 dark:border-dark-border">
                        <div className="flex-center-between flex-col-reverse sm:flex-row items-end gap-4 sm:gap-[10%]">
                            <div className="flex items-center gap-4 self-start">
                                <a href="#" className="size-12 rounded-50 relative shrink-0">
                                    <img src={mail?.senderImage} alt="student" className="size-full rounded-50"/>
                                    {/* Active */}
                                    <div className="absolute bottom-0.5 -right-0.5 size-3 border-2 border-white dark:border-dark-border rounded-50 bg-secondary"></div>
                                </a>
                                <div>
                                    <h6 className="text-heading font-semibold line-clamp-1">
                                        <a href="#">{mail?.senderName}</a>
                                    </h6>
                                    <div className="font-spline_sans leading-none text-heading dark:text-dark-text-two mt-1">
                                        {mail?.time}
                                        <span className="relative text-sm -top-0.5">⭐</span>  
                                        <span className="text-gray-500 dark:text-dark-text capitalize">{mail?.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 self-end sm:self-auto">
                                <div className="flex items-center gap-1.5">
                                    {/* Download Email */}
                                    <button type="button" className="size-6 flex-center rounded-md text-gray-900 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-darkicon">
                                        <i className="ri-download-2-line text-inherit"></i>
                                    </button>
                                    {/* Start Email */}
                                    <div className="size-6 flex-center rounded-md text-gray-900 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-darkicon">
                                        <input type="checkbox" className="appearance-none border-none size-4 relative cursor-pointer before:position-center before:font-remix before:text-lg before:text-gray-900 dark:before:text-dark-text before:content-['\f18b'] checked:before:text-star-mail checked:before:content-['\f186']"/>
                                    </div>
                                    {/* Print Email */}
                                    <button type="button" className="size-6 flex-center rounded-md text-gray-900 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-darkicon">
                                        <i className="ri-printer-line text-inherit"></i>
                                    </button>
                                    {/* Delete Email */}
                                    <button type="button" data-modal-target="deleteEmail" data-modal-toggle="deleteEmail" className="size-6 flex-center rounded-md text-gray-900 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-darkicon">
                                        <i className="ri-delete-bin-line text-inherit"></i>
                                    </button>
                                </div>
                                <div className="relative">
                                    <button data-popover-target="moreEmail" data-popover-trigger="click" data-popover-placement="bottom-start" id="student1" type="button" className="size-6 flex-center rounded-md text-gray-900 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-icon focus:bg-gray-200 dark:focus:bg-darkicon">
                                        <i className="ri-more-2-fill text-gray-500 dark:text-dark-text text-lg"></i>
                                    </button>
                                    <ul id="moreEmail" className="popover-target invisible" data-popover>
                                        <li>
                                            <a className="popover-item" href="#">More one</a>
                                        </li>
                                        <li>
                                            <a className="popover-item" href="#">More two</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Email Body */}
                    <div className="font-spline_sans pt-15 pb-7 px-4 sm:px-[10%]">
                        <p className="text-gray-500 dark:text-dark-text">Hello There!🔥</p>
                        <p className="mt-5 text-gray-500 dark:text-dark-text">
                            {mail?.description}
                        </p>
                        <div className="grid grid-cols-12 mt-5 mb-15">
                            <div className="col-span-3"></div>
                        </div>
                        <div className="mt-5 text-gray-500 dark:text-dark-text pb-5 border-b border-dashed border-gray-200 dark:border-dark-border-three">
                            <p>Best Regards,</p>
                            <p>{mail?.senderName}</p>
                            <p>UIX Designer at <a href="#" className="text-primary-500 underline">Design.tu</a></p>
                        </div>
                        <div className="mt-5">
                            <span className="sr-only">Attatchment File</span>
                            <h6 className="text-heading font-semibold">One Attachment File</h6>
                            <div className="flex gap-4 flex-wrap mt-5">
                                <a href={mail?.attachFile} download className="p-2.5 rounded-10 dk-border-one flex items-center gap-4">
                                    <span className="size-10 bg-primary-200 flex-center rounded-md">
                                        <i className="ri-file-text-line text-primary-500"></i>
                                    </span>
                                    <span className="leading-none text-left">
                                        <span className="text-gray-900 dark:text-dark-text">Portfolio.zip</span>
                                        <span className="font-urbanist text-xs text-heading dark:text-dark-text-two font-semibold uppercase">5.32MB</span>
                                    </span>
                                    <span className="size-5 rounded-sm hover:bg-gray-200 dark:hover:bg-dark-icon text-gray-900 dark:text-dark-text flex-center">
                                        <i className="ri-download-2-line text-inherit"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-4">
                            <span className="sr-only">Action Buton</span>
                            <button className="btn b-solid btn-primary-solid">
                                <i className="ri-reply-all-line text-inherit"></i>
                                <span>Replay</span>
                            </button>
                            <button className="btn b-outline btn-primary-outline">
                                <i className="ri-download-2-line -rotate-90 text-inherit"></i>
                                <span>Forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}