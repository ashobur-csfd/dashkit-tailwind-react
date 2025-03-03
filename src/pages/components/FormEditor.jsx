import { useState } from "react";
import SummerNoteText from "../../components/ui/SummerNoteText";

export default function FormEditor(){

    // code show
    const [showCode, setShowCode] = useState({
        light: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    return (
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">Forms Editor</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* DATA FORM */}
                <div className="col-span-full">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Editor</h3>
                            <button type="button"
                                className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className="ri-code-line text-inherit text-[15px]"></i>
                            </button>
                        </div>
                        <form className="p-6">
                            <div className="mb-4">
                                {/* <textarea className="summernote"></textarea> */}
                                <SummerNoteText/>
                            </div>
                        </form>
                         {/* Prism Code */}
                        <div className="p-6 hidden">
                            <pre>
                                <code className="language-markup">
                                    <form className="p-6">
                                        <div className="mb-4">
                                            <textarea className="summernote"></textarea>
                                        </div>
                                    </form>
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}