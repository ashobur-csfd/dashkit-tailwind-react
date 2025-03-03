import zip from '@/assets/images/icons/zip-file.svg';
import uploadFile from '@/assets/images/icons/upload-file.svg';
import { useState } from 'react';
import FileUp from '../../components/ui/FileUp';

export default function FileUpload(){

    // code show
    const [showCode, setShowCode] = useState({
        basicFile: false,
        inputFile: false,
        boxFile: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    return (
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">File Uploads Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                {/* FILE INPUT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">File Input</h3>
                            <button type="button" onClick={()=>toggleCodeView('basicFile')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basicFile ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-6 ${showCode.basicFile ? 'hidden':''}`}>
                            {/* single item */}
                            <div>
                                <p className="form-label">Upload Input</p>
                                <FileUp basic uploadProgress zip={zip}/>
                            </div>
                            {/* single item */}
                            <div>
                                <p className="form-label">Upload Input</p>
                                <FileUp basic failed zip={zip}/>
                            </div>
                            {/* single item */}
                            <div>
                                <p className="form-label">Upload Input</p>
                                <FileUp basic success zip={zip}/>
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.basicFile ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div>
    <p className="form-label">Upload Input</p>
        <FileUp uploadProgress zip={zip}/>
    </div>
    {/* single item */}
    <div>
        <p className="form-label">Upload Input</p>
        <FileUp failed zip={zip}/>
    </div>
    {/* single item */}
    <div>
        <p className="form-label">Upload Input</p>
        <FileUp success zip={zip}/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">File Input</h3>
                            <button type="button" onClick={()=>toggleCodeView('inputFile')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.inputFile ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-6 ${showCode.inputFile ? 'hidden':''}`}>
                            {/* single item */}
                            <div>
                                <p className="form-label">File Input</p>
                                <FileUp basicTwo simple/>
                            </div>
                            {/* single item */}
                            <div>
                                <p className="form-label">File Input</p>
                                <FileUp basicTwo iconUpload/>
                            </div>
                            {/* single item */}
                            <div>
                                <label className="form-label">Demo Video URL</label>
                                <FileUp basicTwo urlUpload/>
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.inputFile ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`{/* single item */}
<div>
    <p className="form-label">File Input</p>
    <FileUp basicTwo simple/>
</div>
{/* single item */}
<div>
    <p className="form-label">File Input</p>
    <FileUp basicTwo iconUpload/>
</div>
{/* single item */}
<div>
    <label className="form-label">Demo Video URL</label>
    <FileUp basicTwo urlUpload/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* FILE UPLOAD INPUTS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">File Input</h3>
                            <button type="button" onClick={()=>toggleCodeView('boxFile')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.boxFile ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-6 ${showCode.boxFile ? 'hidden':''}`}>
                            {/* single item */}
                            <div className="col-span-full sm:col-span-4">
                                <p className="form-label">Thumbnail (400x250)</p>
                                <FileUp advance thumbnail uploadFile={uploadFile}/>
                            </div>
                            {/* single item */}
                            <div className="col-span-full sm:col-span-4">
                                <p className="form-label">Main course file</p>
                                <FileUp advance mainFile uploadFile={uploadFile}/>
                            </div>
                            {/* single item */}
                            <div className="col-span-full sm:col-span-4">
                                <p className="form-label">Main course file</p>
                                <FileUp advance dragDrop uploadFile={uploadFile}/>
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.boxFile ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`{/* single item */}
<div className="col-span-full sm:col-span-4">
    <p className="form-label">Thumbnail (400x250)</p>
    <FileUp advance thumbnail uploadFile={uploadFile}/>
</div>
{/* single item */}
<div className="col-span-full sm:col-span-4">
    <p className="form-label">Main course file</p>
    <FileUp advance mainFile uploadFile={uploadFile}/>
</div>
{/* single item */}
<div className="col-span-full sm:col-span-4">
    <p className="form-label">Main course file</p>
    <FileUp advance dragDrop uploadFile={uploadFile}/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
            </div>
        </div>
    )
}