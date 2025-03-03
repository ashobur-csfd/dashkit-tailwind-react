import Button from "../../../../components/ui/Button";
import Inputs from "../../../../components/ui/Inputs";

export default function ComposeMail(){
    return(
        <>   
            {/* Compose Email Form */}
            <div className="col-span-full lg:col-span-9">
                <div className="card p-0 max-h-full overflow-hidden">
                    <div className="p-4 sm:px-7 py-5 bg-gray-200/30 dark:bg-dark-card-two flex-center-between">
                        <a href="mail-box" className="flex items-center gap-1">
                            <i className="ri-arrow-left-line text-2xl text-heading dark:text-dark-text"></i>
                            <h6 className="card-title dark:text-dark-text">Write Message</h6>
                        </a>
                        <a href="mail-box" className="size-8 text-heading dark:text-dark-text-two hover:bg-gray-200 dark:hover:bg-dark-icon rounded-lg flex-center">
                            <i className="ri-close-line text-2xl text-inherit"></i>
                        </a>
                    </div>
                    <form action="#" className="p-4 sm:p-7">
                        <div className="mb-4">
                            <label className="sr-only">TO</label>
                            <input type="text" id="choices-input" value="dashkit@gmail.com" className="bg-transparent"/>
                        </div>
                        <div className="mb-4">
                            <Inputs basic labelId="subject" labelText placeholder="Subject" className="form-input px-4 py-3.5 rounded-lg" type="text" name="subject"/>
                        </div>
                        <div className="mb-4">
                            <textarea className="summernote"></textarea>
                        </div>
                        <Button type="submit" text="Send Email" className="btn b-solid btn-primary-solid"/>
                    </form>
                </div>
            </div>
        </>
    )
}