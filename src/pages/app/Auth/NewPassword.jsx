import lotiAuth from '@/assets/images/loti/loti-auth.svg'
import lotiDarkAuth from '@/assets/images/loti/loti-auth.svg'
import { useState } from 'react'
import Button from '../../../components/ui/Button'

export default function NewPassword(){

    const [isShow, setIsShow] = useState(true)

    return(
        <>
        <div className="main-content m-4">
            <div className="grid grid-cols-12 gap-y-7 sm:gap-7 card px-4 sm:px-10 2xl:px-[70px] py-15 lg:items-center lg:min-h-[calc(100vh_-_32px)]">
                {/* Start Overview Area */}
                <div className="col-span-full lg:col-span-6">
                    <div className="flex flex-col items-center justify-center gap-10 text-center">
                        <div className="hidden sm:block">
                            <img src={lotiAuth} alt="loti" className="group-data-[theme-mode=dark]:hidden"/>
                            <img src={lotiDarkAuth} alt="loti" className="group-data-[theme-mode=light]:hidden"/>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-[28px] leading-none font-semibold text-heading">
                                Welcome back!
                            </h3>
                            <p className="font-medium text-gray-500 dark:text-dark-text mt-4 px-[10%]">
                                Whether you're launching a stunning online store  optimizing your our object-oriented 
                            </p>
                        </div>
                    </div>
                </div>
                {/* End Overview Area */}

                {/* Start Form Area */}
                <div className="col-span-full lg:col-span-6 w-full lg:max-w-[600px]">
                    <div className="border border-form dark:border-dark-border p-5 md:p-10 rounded-20 md:rounded-30">
                        <h3 className="text-xl md:text-[28px] leading-none font-semibold text-heading">
                            Create a New Password
                        </h3>
                        <p className="font-medium text-gray-500 dark:text-dark-text mt-4">
                            Welcome Back! Log in to your account
                        </p>
                        <form action="../student-profile.html" className="leading-none mt-8">
                            <div className="mt-5">
                                <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                <div className="relative">
                                    <input type={isShow ? 'password' : 'text'} id="oldPassword" placeholder="Old Password" required className="form-input px-4 py-3.5 rounded-lg"/>
                                    <label onClick={() => setIsShow(!isShow)} htmlFor="" className="size-8 rounded-md flex-center hover:bg-gray-200 dark:hover:bg-dark-icon foucs:bg-gray-200 dark:foucs:bg-dark-icon position-center left-[95%]">
                                        <input type="checkbox" className="peer/it" hidden/>
                                        <i className={`${isShow ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-500 dark:text-dark-text peer-checked/it:before:content-['\\ecb5']`}></i>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-5 mb-7">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <div className="relative">
                                    <input type={isShow ? 'password' : 'text'} id="newPassword" placeholder="New Password" required className="form-input px-4 py-3.5 rounded-lg"/>
                                    <label onClick={() => setIsShow(!isShow)} htmlFor="" className="size-8 rounded-md flex-center hover:bg-gray-200 dark:hover:bg-dark-icon foucs:bg-gray-200 dark:foucs:bg-dark-icon position-center left-[95%]">
                                        <input type="checkbox" className="peer/it" hidden/>
                                        <i className={`${isShow ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-500 dark:text-dark-text peer-checked/it:before:content-['\\ecb5']`}></i>
                                    </label>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <Button type="submit" text={'Confirm Password'} className="btn b-solid btn-primary-solid w-full" />
                        </form>
                        <div className="text-gray-900 dark:text-dark-text font-medium leading-none mt-5">
                            Back to /
                            <Button link={'sign-in'} text={' Sign in'} className="text-primary-500 font-semibold"/>
                        </div>
                    </div>
                </div>
                {/* End Form Area */}
            </div>
        </div>
        </>
    )
}