export default function FileUp({basic, basicTwo, uploadProgress, failed, success, zip, simple, urlUpload, iconUpload, advance, thumbnail, mainFile, dragDrop, uploadFile}){

    const handleUpload = (e) =>{
        console.log(e.target)
    }
    
    return(
        <>
            {basic && 
            <div className="file-container md:p-6 p-4 rounded-lg border border-input-border dark:border-dark-border block">
                <div className="flex-center-between">
                    <span className="flex items-center md:gap-4 gap-3">
                        <span className="shrink-0">
                            <img src={zip} alt="icon"/>
                        </span>
                        <label htmlFor="file-1">
                            <input type="file" id="file-1" name="file-progress" onChange={(e) => handleUpload(e)} hidden className="file-src"/>
                            <span className="file-name mb-3 font-semibold text-gray-500 dark:text-dark-text">Design-UI-Kit.zip</span>
                            {uploadProgress &&
                            <span className="flex gap-2 items-center text-sm text-gray-900 dark:text-dark-text-two">
                                    <span>23.7 mb</span> | <span>67%</span> <span className="size-1 rounded-full bg-[#7D7D7D]"></span> <span>8 sec left</span>
                            </span>
                            || failed &&
                            <span className="flex gap-2 items-center text-sm text-danger">Upload failed</span>
                            || success &&
                            <span className="flex gap-2 items-center text-sm text-success">Uploaded Successfully</span>
                            }
                        </label>
                    </span>
                    {success ? 
                    <span className="text-success duration-200"><i className="ri-checkbox-circle-fill text-inherit text-2xl"></i></span>
                    :
                    <button className="text-gray-900 dark:text-dark-text hover:text-danger duration-200">
                        <i className="ri-delete-bin-6-line text-inherit text-2xl"></i>
                    </button>
                    }
                </div>
                {uploadProgress && <div className="w-full h-1.5 rounded-full bg-[#E2E2E2] dark:bg-progress-bar-bg-dark md:mt-8 mt-6">
                    <span className="w-[67%] h-full bg-primary-500 rounded-full block"></span>
                </div>
                }
            </div>}
            {basicTwo && 
                <div className="file-container file-input-label bg-[#F8F8FC] dark:bg-dark-card-two text-[#727175] dark:text-dark-text">
                <span className={`px-3 hover:bg-primary-200 dark:hover:bg-dark-icon rounded-lg rounded-r-none border-r border-input-border dark:border-dark-border flex-center before:font-remix before:text-xl text-sm duration-200 ${iconUpload && `before:content-['\\f24e']`}`}>
                    {simple && 'Choose File' || urlUpload && <i className="ri-folder-video-line text-inherit"></i>}
                </span>
                <span className="p-2.5">
                    <input type={urlUpload ? "url" : "file"} className="hidden file-src" required />
                    <span className="file-name text-sm">No file choose</span>
                </span>
            </div>}
            {advance &&
                <label htmlFor="thumbnail" className={`file-container text-xs leading-none font-semibold mb-3 cursor-pointer flex flex-col items-center justify-center gap-2.5 dk-border-one border-dashed rounded-10 ${thumbnail && 'ac-bg aspect-[4/1.5]' || mainFile && 'aspect-[4/1.5]' || dragDrop && 'aspect-[4/2]'}`}>
                    <input type="file" id="thumbnail" hidden className={`${thumbnail && 'img-src' || 'file-src'} peer/file`}/>
                    <span className={`flex-center flex-col ${thumbnail ? 'peer-[.uploaded]/file:hidden' : ''}`}>
                        <span className="size-10 md:size-15 flex-center bg-primary-200 dark:bg-dark-icon rounded-50">
                            <img src={uploadFile} alt="icon" className="dark:brightness-200 dark:contrast-100 w-1/2 sm:w-auto"/>
                        </span>
                        <span className={`${mainFile && 'file-name' || dragDrop && 'file-name text-xl'} mt-2 text-gray-500 dark:text-dark-text`}>{dragDrop ? 'Drag and drop a file here or' : 'Choose file'}</span>
                        {dragDrop &&
                            <>
                                <span className="cursor-pointer text-sm text-primary-500 before:text-lg font-spline_sans before:font-remix before:pr-px before:content-['\f24e'] btn b-outline btn-primary-outline py-2.5 px-[18px] mt-4">Click to upload</span>
                                <span className="text-sm text-gray-900 dark:text-dark-text-two mt-2">Maximus file size is 13 MB</span>
                            </>
                        }
                    </span>
                </label>
            }
        </>
    )
}

{/* <label htmlFor="file-6" className="file-container text-xs leading-none font-semibold mb-3 cursor-pointer aspect-[4/1.5] flex flex-col items-center justify-center gap-2.5 dk-border-one border-dashed rounded-10">
    <input type="file" id="file-6" hidden className="peer/file file-src"/>
    <span className="flex-center flex-col">
        <span className="size-10 md:size-15 flex-center bg-primary-200 dark:bg-dark-icon rounded-50">
            <img src={uploadFile} alt="icon" className="dark:brightness-200 dark:contrast-100 w-1/2 sm:w-auto"/>
        </span>
        <span className="file-name text-gray-500 dark:text-dark-text mt-2">Choose file</span>
    </span>
</label> */}

{/* <label htmlFor="drag-drop" className="file-container text-xs leading-none font-semibold mb-3 cursor-pointer aspect-[4/2] flex flex-col items-center justify-center gap-2.5 dk-border-one border-dashed rounded-10">
    <input type="file" id="drag-drop" hidden className="peer/file file-src"/>
    <span className="flex-center flex-col">
        <span className="size-10 md:size-15 flex-center bg-primary-200 dark:bg-dark-icon rounded-50">
                <img src={uploadFile} alt="icon" className="dark:brightness-200 dark:contrast-100 w-1/2 sm:w-auto"/>
        </span>
        <span className="file-name mt-2 text-xl font-semibold text-gray-500 dark:text-dark-text">Drag and drop a file here or</span>
        <span className="cursor-pointer text-sm text-primary-500 before:text-lg font-spline_sans before:font-remix before:pr-px before:content-['\f24e'] btn b-outline btn-primary-outline py-2.5 px-[18px] mt-4">Click to upload</span>
        <span className="text-sm text-gray-900 dark:text-dark-text-two mt-2">Maximus file size is 13 MB</span>
    </span>
</label> */}