import supportImg from '@/assets/images/loti/loti-support.svg'

export default function Support(){

    return (
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="bg-white dark:bg-dark-card rounded-20">
                    {/* Start Banner Area */}
                    <div className="bg-primary-500 rounded-20">
                        <div className="container max-w-screen-2xl grid lg:grid-cols-2 overflow-hidden items-center">
                            <div className="px-5 lg:px-15 xl:px-20 py-24">
                                <h2 className="text-2xl md:text-3xl xl:text-[34px] 3xl:text-[42px] font-semibold text-white !leading-[1.23] mb-2">How Can We Help You?</h2>
                                <p className="font-spline_sans text-sm text-[#E2E2E2] mb-6">
                                    Explore a topic or question, browse through our FAQs and guides, and feel free to 
                                    reach out to us for personalized support
                                </p>
                                <form action="#" className="relative">
                                    <input type="text" placeholder="Enter a question or Keyword..." required className="form-input h-[52px] bg-transparent text-[#E2E2E2] placeholder:text-[#E2E2E2] border-[#A18AFF] pr-14 leading-none focus:border-white"/>
                                    <button type="submit" className="size-10 bg-white rounded-10 flex-center absolute top-1/2 -translate-y-1/2 right-1.5">
                                        <i className="ri-search-line text-primary-500"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="px-5 lg:px-15 xl:px-20 self-end hidden lg:block">
                                <img src={supportImg} alt="lotti" className="ms-auto"/>
                            </div>
                        </div>
                    </div>
                    {/* End Banner Area */}

                    {/* Start Feature Area */}
                    <div className="container max-w-screen-xl py-10">
                        <div className="px-4 lg:px-[5%] flex flex-col sm:flex-row gap-4">
                            <div className="bg-[#F9F8FF] dark:bg-dark-card-two rounded-20 text-center p-7 border-b-2 border-primary-500 dark:border-dark-border flex items-center flex-col gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                    <path d="M22.5 0C18.0499 0 13.6998 1.3196 9.99968 3.79193C6.29957 6.26426 3.41569 9.77828 1.71272 13.8896C0.00974893 18.001 -0.435826 22.525 0.432341 26.8895C1.30051 31.2541 3.44343 35.2632 6.59011 38.4099C9.73679 41.5566 13.7459 43.6995 18.1105 44.5677C22.475 45.4358 26.999 44.9902 31.1104 43.2873C35.2217 41.5843 38.7357 38.7004 41.2081 35.0003C43.6804 31.3002 45 26.9501 45 22.5C44.9934 16.5347 42.6207 10.8155 38.4026 6.5974C34.1845 2.37927 28.4653 0.00661713 22.5 0ZM22.5 40C19.0388 40 15.6554 38.9736 12.7775 37.0507C9.89967 35.1278 7.65665 32.3947 6.33212 29.197C5.00758 25.9992 4.66103 22.4806 5.33627 19.0859C6.01151 15.6912 7.67822 12.573 10.1256 10.1256C12.5731 7.67821 15.6913 6.0115 19.0859 5.33626C22.4806 4.66102 25.9993 5.00757 29.197 6.33211C32.3947 7.65664 35.1278 9.89966 37.0507 12.7775C38.9736 15.6554 40 19.0388 40 22.5C39.995 27.1398 38.1497 31.5881 34.8689 34.8689C31.5881 38.1497 27.1398 39.995 22.5 40ZM20 23.3333V12.5C20 11.837 20.2634 11.2011 20.7322 10.7322C21.2011 10.2634 21.837 10 22.5 10C23.163 10 23.7989 10.2634 24.2678 10.7322C24.7366 11.2011 25 11.837 25 12.5V23.3333C25 23.9964 24.7366 24.6323 24.2678 25.1011C23.7989 25.5699 23.163 25.8333 22.5 25.8333C21.837 25.8333 21.2011 25.5699 20.7322 25.1011C20.2634 24.6323 20 23.9964 20 23.3333ZM25.8333 31.6667C25.8333 32.3259 25.6378 32.9704 25.2716 33.5186C24.9053 34.0667 24.3847 34.494 23.7756 34.7463C23.1665 34.9986 22.4963 35.0646 21.8497 34.9359C21.2031 34.8073 20.6092 34.4899 20.143 34.0237C19.6768 33.5575 19.3593 32.9636 19.2307 32.317C19.1021 31.6704 19.1681 31.0001 19.4204 30.391C19.6727 29.782 20.0999 29.2614 20.6481 28.8951C21.1963 28.5288 21.8407 28.3333 22.5 28.3333C23.3841 28.3333 24.2319 28.6845 24.857 29.3096C25.4821 29.9348 25.8333 30.7826 25.8333 31.6667Z" fill="#795DED"/>
                                </svg>
                                <h5 className="text-[25px] leading-none font-semibold text-heading">FAQs</h5>
                                <p className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">
                                    Specific feature or service that's not available in business change discovering.
                                </p>
                            </div>
                            <div className="bg-[#F9F8FF] dark:bg-dark-card-two rounded-20 text-center p-7 border-b-2 border-primary-500 dark:border-dark-border flex items-center flex-col gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                                    <path d="M10 13.2175C10 12.5602 10.2634 11.9299 10.7322 11.4651C11.2011 11.0003 11.837 10.7392 12.5 10.7392H32.5C33.163 10.7392 33.7989 11.0003 34.2678 11.4651C34.7366 11.9299 35 12.5602 35 13.2175C35 13.8748 34.7366 14.5051 34.2678 14.9699C33.7989 15.4347 33.163 15.6958 32.5 15.6958H12.5C11.837 15.6958 11.2011 15.4347 10.7322 14.9699C10.2634 14.5051 10 13.8748 10 13.2175ZM12.5 23.9567H32.5C33.163 23.9567 33.7989 23.6956 34.2678 23.2308C34.7366 22.7661 35 22.1357 35 21.4784C35 20.8211 34.7366 20.1908 34.2678 19.726C33.7989 19.2612 33.163 19.0001 32.5 19.0001H12.5C11.837 19.0001 11.2011 19.2612 10.7322 19.726C10.2634 20.1908 10 20.8211 10 21.4784C10 22.1357 10.2634 22.7661 10.7322 23.2308C11.2011 23.6956 11.837 23.9567 12.5 23.9567ZM45 4.13047V35.522C45 35.9445 44.8909 36.3599 44.6833 36.7289C44.4757 37.0979 44.1764 37.4081 43.8139 37.6302C43.4513 37.8522 43.0375 37.9786 42.6117 37.9975C42.1859 38.0164 41.7624 37.9271 41.3812 37.738L35.8333 34.9892L30.2854 37.738C29.9381 37.9103 29.555 38 29.1667 38C28.7783 38 28.3952 37.9103 28.0479 37.738L22.5 34.9892L16.9521 37.738C16.6048 37.9103 16.2217 38 15.8333 38C15.445 38 15.0619 37.9103 14.7146 37.738L9.16667 34.9892L3.61875 37.738C3.23762 37.9271 2.81406 38.0164 2.3883 37.9975C1.96254 37.9786 1.54872 37.8522 1.18614 37.6302C0.823554 37.4081 0.524249 37.0979 0.31665 36.7289C0.109051 36.3599 4.9975e-05 35.9445 0 35.522V4.13047C0 3.035 0.438987 1.9844 1.22039 1.20979C2.00179 0.435173 3.0616 0 4.16667 0H40.8333C41.9384 0 42.9982 0.435173 43.7796 1.20979C44.561 1.9844 45 3.035 45 4.13047ZM40 4.95656H5V31.5113L8.04792 30.0016C8.39524 29.8294 8.77828 29.7396 9.16667 29.7396C9.55505 29.7396 9.93809 29.8294 10.2854 30.0016L15.8333 32.7505L21.3812 30.0016C21.7286 29.8294 22.1116 29.7396 22.5 29.7396C22.8884 29.7396 23.2714 29.8294 23.6187 30.0016L29.1667 32.7505L34.7146 30.0016C35.0619 29.8294 35.445 29.7396 35.8333 29.7396C36.2217 29.7396 36.6048 29.8294 36.9521 30.0016L40 31.5113V4.95656Z" fill="#795DED"/>
                                </svg>
                                <h5 className="text-[25px] leading-none font-semibold text-heading">Guides & Resource</h5>
                                <p className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">
                                    Specific feature or service that's not available in business change discovering.
                                </p>
                            </div>
                            <div className="bg-[#F9F8FF] dark:bg-dark-card-two rounded-20 text-center p-7 border-b-2 border-primary-500 dark:border-dark-border flex items-center flex-col gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="38" viewBox="0 0 43 38" fill="none">
                                    <path d="M36.7748 6.31136C33.7718 3.30746 29.9391 1.25743 25.7625 0.421141C21.5859 -0.415148 17.2536 -3.37362e-05 13.3147 1.61386C9.37572 3.22775 6.00758 5.96775 3.63719 9.48651C1.26681 13.0053 0.00091786 17.1444 0 21.379V32.4597C0 33.9291 0.587265 35.3383 1.6326 36.3773C2.67794 37.4163 4.09572 38 5.57405 38H8.75923C10.2376 38 11.6553 37.4163 12.7007 36.3773C13.746 35.3383 14.3333 33.9291 14.3333 32.4597V24.5449C14.3333 23.0756 13.746 21.6664 12.7007 20.6273C11.6553 19.5883 10.2376 19.0046 8.75923 19.0046H4.94498C5.5215 15.049 7.512 11.432 10.5521 8.81581C13.5923 6.19959 17.4787 4.75913 21.4999 4.7581H21.6273C25.6307 4.77513 29.494 6.22424 32.5106 8.84032C35.5272 11.4564 37.4953 15.0645 38.0549 19.0046H34.2406C32.7623 19.0046 31.3445 19.5883 30.2992 20.6273C29.2538 21.6664 28.6666 23.0756 28.6666 24.5449V32.4597C28.6666 33.9291 29.2538 35.3383 30.2992 36.3773C31.3445 37.4163 32.7623 38 34.2406 38H37.4258C38.1578 38 38.8826 37.8567 39.5589 37.5783C40.2352 37.2998 40.8496 36.8917 41.3672 36.3773C41.8848 35.8628 42.2954 35.2521 42.5755 34.5799C42.8557 33.9077 42.9998 33.1872 42.9998 32.4597V21.379C43.0108 18.5839 42.4665 15.8141 41.3983 13.2285C40.3301 10.6429 38.7589 8.29222 36.7748 6.31136ZM8.75923 23.7535C8.97042 23.7535 9.17296 23.8369 9.32229 23.9853C9.47163 24.1337 9.55552 24.335 9.55552 24.5449V32.4597C9.55552 32.6696 9.47163 32.8709 9.32229 33.0193C9.17296 33.1678 8.97042 33.2512 8.75923 33.2512H5.57405C5.36286 33.2512 5.16032 33.1678 5.01099 33.0193C4.86166 32.8709 4.77776 32.6696 4.77776 32.4597V23.7535H8.75923ZM38.2221 32.4597C38.2221 32.6696 38.1382 32.8709 37.9888 33.0193C37.8395 33.1678 37.637 33.2512 37.4258 33.2512H34.2406C34.0294 33.2512 33.8269 33.1678 33.6775 33.0193C33.5282 32.8709 33.4443 32.6696 33.4443 32.4597V24.5449C33.4443 24.335 33.5282 24.1337 33.6775 23.9853C33.8269 23.8369 34.0294 23.7535 34.2406 23.7535H38.2221V32.4597Z" fill="#795DED"/>
                                </svg>
                                <h5 className="text-[25px] leading-none font-semibold text-heading">Contact Us</h5>
                                <p className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">
                                    Specific feature or service that's not available in business change discovering.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area */}

                    {/* Start Faq Accordion Area */}
                    <div className="sm:m-5 bg-[#F9F8FF] dark:bg-dark-card-two sm:rounded-20 px-4">
                        <div className="py-16">
                            <div className="grid grid-cols-12 mb-10 sm:p-0">
                                <div className="col-span-full sm:col-start-5 sm:col-span-4 text-center">
                                    <h2 className="text-xl sm:text-3xl leading-[1.31] font-semibold text-heading">
                                        Most People Frequently Asked Questions
                                    </h2>
                                </div>
                            </div>
                            <div className="container max-w-screen-xl">
                                <div className="lg:px-[5%]">
                                    <div className="faq-accordion flex flex-col gap-2.5">
                                        {/* Signle Accordion Item */}
                                        <div className="faq-accordion-item bg-white dark:bg-dark-card border border-[#E4E4E4] dark:border-dark-border rounded-20 has-[.open]:border-primary-300 dark:has-[.open]:border-dark-border">
                                            <button className="faq-accordion-button com-accordion-button text-xl sm:text-3xl px-4 sm:px-10 py-3 sm:py-7 w-full text-left chevron peer/faq-btn">
                                                <span className="text-base sm:card-title">
                                                    What is Dashkit Platform Name?
                                                </span>
                                            </button>
                                            <div className="accordion-body px-4 sm:px-10 pb-3 sm:pb-7 hidden peer-[.open]/faq-btn:block">
                                                <div className="font-spline_sans text-sm leading-[1.42] text-gray-500 dark:text-dark-text">
                                                    Web design and development encompass a spectrum of processes involved in creating and maintaining websites. 
                                                    These aspects are closely intertwined and interdependent. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. 
                                                    Eget gravida cum sociis natoque penatibus. Tellus orci ac auctor augue mauris augue neque gravida in.
                                                </div>
                                            </div>
                                        </div>
                                        {/* Signle Accordion Item */}
                                        <div className="faq-accordion-item bg-white dark:bg-dark-card border border-[#E4E4E4] dark:border-dark-border rounded-20 has-[.open]:border-primary-300 dark:has-[.open]:border-dark-border">
                                            <button className="faq-accordion-button com-accordion-button text-xl sm:text-3xl px-4 sm:px-10 py-3 sm:py-7 w-full text-left chevron peer/faq-btn open">
                                                <span className="text-base sm:card-title">
                                                    What is Dashkit Platform Name?
                                                </span>
                                            </button>
                                            <div className="accordion-body px-4 sm:px-10 pb-3 sm:pb-7 hidden peer-[.open]/faq-btn:block">
                                                <div className="font-spline_sans text-sm leading-[1.42] text-gray-500 dark:text-dark-text">
                                                    Web design and development encompass a spectrum of processes involved in creating and maintaining websites. 
                                                    These aspects are closely intertwined and interdependent. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. 
                                                    Eget gravida cum sociis natoque penatibus. Tellus orci ac auctor augue mauris augue neque gravida in.
                                                </div>
                                            </div>
                                        </div>
                                        {/* Signle Accordion Item */}
                                        <div className="faq-accordion-item bg-white dark:bg-dark-card border border-[#E4E4E4] dark:border-dark-border rounded-20 has-[.open]:border-primary-300 dark:has-[.open]:border-dark-border">
                                            <button className="faq-accordion-button com-accordion-button text-xl sm:text-3xl px-4 sm:px-10 py-3 sm:py-7 w-full text-left chevron peer/faq-btn">
                                                <span className="text-base sm:card-title">
                                                    What is Dashkit Platform Name?
                                                </span>
                                            </button>
                                            <div className="accordion-body px-4 sm:px-10 pb-3 sm:pb-7 hidden peer-[.open]/faq-btn:block">
                                                <div className="font-spline_sans text-sm leading-[1.42] text-gray-500 dark:text-dark-text">
                                                    Web design and development encompass a spectrum of processes involved in creating and maintaining websites. 
                                                    These aspects are closely intertwined and interdependent. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. 
                                                    Eget gravida cum sociis natoque penatibus. Tellus orci ac auctor augue mauris augue neque gravida in.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Faq Accordion Area */}

                    {/* Start Contact Area */}
                    <div className="container max-w-screen-xl px-4 py-10">
                        <div className="lg:px-[5%]">
                            <div className="text-center">
                                <h2 className="text-xl sm:text-3xl leading-[1.31] font-semibold text-heading">
                                    Leave a Comment
                                </h2>
                                <p className="font-medium text-gray-500 dark:text-dark-text leading-normal mt-2">
                                    Your email address remains confidential and won't be published.
                                </p>
                            </div>
                            <form action="#" method="post" className="mt-7 pt-0.5 grow">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <label htmlFor="fullName" className="form-label">Full Name *</label>
                                        <input type="text" id="fullName" placeholder="Type Name" className="form-input" required/>
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <label htmlFor="email" className="form-label">E-mail *</label>
                                        <input type="email" id="email" placeholder="Type Email" className="form-input" required/>
                                    </div>
                                    <div className="col-span-full">
                                        <label className="form-label">Comment *</label>
                                        <textarea rows="5" className="form-input h-auto" required></textarea>
                                        <div className="flex items-center gap-2 mt-3.5">
                                            <input type="checkbox" name="agreeTermCondition" id="agreeTermCondition" className="accent-primary-500"/>
                                            <label htmlFor="agreeTermCondition" className="form-label mb-0">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn b-solid btn-primary-solid btn-lg mt-5">
                                    Post Comment
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* End Contact Area */}
                    <div className="bg-[#F8F8F8] dark:bg-dark-card-two px-4 py-10 rounded-15 mt-10">
                    </div>
                </div>
            </div>
        </>
    )
}