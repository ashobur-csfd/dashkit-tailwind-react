export default function InputForm ({basic, lightForm, iconForm, iconFormLight, infoForm, dataForm}){
    return(
        <>
            {basic && 
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="martinahernandezc@gmail.com" autocomplete="off" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-input" placeholder="**********" autocomplete="off" required />
                </div>
                <div className="flex items-center gap-2 select-none mb-6">
                    <input type="checkbox" checked className="check check-primary-solid size-4 before:text-sm before:leading-none"/>
                    <label className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm">Check Out</label>
                </div>
                <button type="submit" className="btn b-solid btn-primary-solid px-5 cursor-pointer">Continue</button>
            </form>}
            {lightForm && 
            <form>
                <div className="mb-4">
                    <label htmlFor="email-2" className="form-label">Email</label>
                    <input type="email" id="email-2" className="form-input bg-[#F8F8FC] dark:bg-dark-card-two" placeholder="martinahernandezc@gmail.com" autocomplete="off" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password-2" className="form-label">Password</label>
                    <input type="password" id="password-2" className="form-input bg-[#F8F8FC] dark:bg-dark-card-two" placeholder="**********" autocomplete="off" required />
                </div>
                <div className="flex items-center gap-2 select-none mb-6">
                    <input type="checkbox" checked className="check check-primary-solid size-4 before:text-sm before:leading-none"/>
                    <label className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm">Check Out</label>
                </div>
                <button type="submit" className="btn b-solid btn-primary-solid px-5 cursor-pointer">Continue</button>
            </form>}
            {iconForm && 
            <form>
                <div className="mb-4">
                    <label htmlFor="email-3" className="block mb-2 font-medium text-gray-500 dark:text-dark-text">Email</label>
                    <div className="flex">
                        <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                            <i className="ri-mail-line text-inherit"></i>
                        </span>
                        <input type="email" id="email-3" className="form-input rounded-l-none" placeholder="martinahernandezc@gmail.com" required />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password-3" className="block mb-2 font-medium text-gray-500 dark:text-dark-text">Password</label>
                    <div className="flex">
                        <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                            <i className="ri-lock-unlock-line"></i>
                        </span>
                        <input type="password" id="password-3" className="form-input rounded-l-none" placeholder="**********" required />
                    </div>
                </div>
                <div className="flex items-center gap-2 select-none mb-6">
                    <input type="checkbox" checked className="check check-primary-solid size-4 before:text-sm before:leading-none"/>
                    <label className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm">Check Out</label>
                </div>
                <button type="submit" className="btn b-solid btn-primary-solid px-5 cursor-pointer">Continue</button>
            </form>}
            {iconFormLight && 
            <form>
                <div className="mb-4">
                    <label htmlFor="email-4" className="block mb-2 font-medium text-gray-500 dark:text-dark-text">Email</label>
                    <div className="flex">
                        <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                            <i className="ri-mail-line text-inherit"></i>
                        </span>
                        <input type="email" id="email-4" className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" placeholder="martinahernandezc@gmail.com" required />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password-4" className="block mb-2 font-medium text-gray-500 dark:text-dark-text">Password</label>
                    <div className="flex">
                        <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                            <i className="ri-lock-unlock-line"></i>
                        </span>
                        <input type="password" id="password-4" className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two" placeholder="**********" required />
                    </div>
                </div>
                <div className="flex items-center gap-2 select-none mb-6">
                    <input type="checkbox" checked className="check check-primary-solid size-4 before:text-sm before:leading-none"/>
                    <label className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm">Check Out</label>
                </div>
                <button type="submit" className="btn b-solid btn-primary-solid px-5 cursor-pointer">Continue</button>
            </form>}
            {infoForm && 
            <form>
                <div className="flex lg:flex-row flex-col gap-x-4">
                    <div className="w-full mb-4">
                        <label htmlFor="full_name" className="form-label">Full Name</label>
                        <input type="text" id="full_name" className="form-input" placeholder="Martina Hernandezc" autocomplete="off" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="address-1" className="form-label">Address</label>
                        <input type="text" id="address-1" className="form-input" />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-x-4">
                    <div className="w-full mb-4">
                        <label htmlFor="email-5" className="form-label">Email</label>
                        <input type="email" id="email-5" className="form-input" placeholder="martinahernandezc@gmail.com" autocomplete="off" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="password-5"
                            className="form-label">Password</label>
                        <input type="password" id="password-5" className="form-input" placeholder="**********" autocomplete="off" required />
                    </div>
                </div>
                <div className="flex items-center gap-2 select-none mb-6">
                    <input type="checkbox" checked className="check check-primary-solid size-4 before:text-sm before:leading-none"/>
                    <label className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm">Check Out</label>
                </div>
                <button type="submit" className="btn b-solid btn-primary-solid px-5 cursor-pointer">Continue</button>
            </form>}
            {dataForm && 
            <form>
                <div className="flex lg:flex-row flex-col gap-x-4">
                    <div className="w-full mb-4">
                        <label htmlFor="full_name_data" className="form-label">Full Name</label>
                        <input type="text" id="full_name_data" className="form-input" placeholder="Savannah Nguyen" autocomplete="off" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="email-6"
                            className="form-label">Email</label>
                        <input type="email" id="email-6" className="form-input" placeholder="martinahernandezc@gmail.com" autocomplete="off" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="password-6"
                            className="form-label">Password</label>
                        <input type="password" id="password-6" className="form-input" placeholder="**********" autocomplete="off" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-x-4 mb-2">
                    <div className="w-full mb-4">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" id="location" className="form-input" />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" id="phone" className="form-input" placeholder="(+33)7 55 55 33 70" autocomplete="off" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" id="state" className="form-input" placeholder="8080 Railroad St." autocomplete="off" required />
                    </div>
                </div>
                <div className="mb-6">
                    <textarea className="summernote"></textarea>
                </div>
                <div className="flex items-center gap-2 select-none mb-6">
                    <input type="checkbox" checked className="check check-primary-solid size-4 before:text-sm before:leading-none"/>
                    <label className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm">Check Out</label>
                </div>
                <button type="submit" className="btn b-solid btn-primary-solid px-5 cursor-pointer">Save & Continue</button>
            </form>}
        </>
    )
}