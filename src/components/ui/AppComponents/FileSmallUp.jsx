import uploadImg from "@/assets/images/icons/upload-file.svg"

export default function FileSmallUp({percent}){
    return(
        <>
        {/* Upload File */}
        <div className="col-span-full xl:col-span-3 card">
            <label htmlFor="main-file-src" className="file-container bg-transparent text-xs leading-none font-semibold mb-3 cursor-pointer aspect-[4/1.5] flex flex-col items-center justify-center gap-2.5 border border-dashed border-gray-900 rounded-10">
                <input type="file" id="main-file-src" hidden className="peer/file file-src"/>
                <span className="flex-center flex-col">
                    <img src={uploadImg} alt="file-icon" className="size-8"/>
                    <span className="file-name text-gray-500 dark:text-dark-text mt-2">Choose file</span>
                </span>
            </label>
            <div>
                <h6 className="leading-none font-semibold text-gray-500 dark:text-dark-text" hidden>Uploading 1 File <span className="text-primary-500">60%</span></h6>
                <div className="flex flex-col gap-2 mt-4">
                    <div className="text-xs leading-none text-gray-900 dark:text-dark-text flex-center-between">
                        <p>Project-bg.pdf</p>
                        <p className="uppercase">7mb</p>
                    </div>
                    <div className="relative max-w-full h-1.5 rounded-full bg-progress-bar-bg dark:bg-progress-bar-bg-dark overflow-hidden">
                        <div className={`absolute top-0 left-0 bottom-0 bg-progress-bar rounded-full w-[${percent}%]`}></div>
                    </div>
                </div>
                <div className="items-center gap-2 mt-3" hidden>
                    <span className="sr-only">pause upload</span>
                    <input type="checkbox" className="appearance-none size-5 relative cursor-pointer before:position-center before:font-remix before:text-[20px] before:leading-none before:text-gray-900 dark:text-dark-text before:content-['\efd6'] checked:before:content-['\f009']"/>
                    <button type="reset" className="leading-none">
                        <i className="ri-close-circle-line text-[20px] text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}