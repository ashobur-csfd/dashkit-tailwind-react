import { useState } from "react";
import Pagination from "../../components/ui/Pagination";

export default function Paginations(){

    // code show
    const [showCode, setShowCode] = useState({
        basic: false,
        basicTwo: false,
        basicShadow: false,
        basicTwoShadow: false,
        numberRounded: false,
        rotate: false,
        countNumber: false,
        differentArrow: false,
        stylefill: false,
        styleStock: false,
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
                <h2 className="card-title">Paginations</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                {/* BASIC PAGINATIONS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Paginations</h3>
                            <button type="button" onClick={() => toggleCodeView('basic')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basic ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.basic ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4, 5]}
                            basicPagination
                            leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.basic ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5]}
basicPagination
leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit"></i>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* BASIC PAGINATIONS 2 */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('basicTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basicTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.basicTwo ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4, 5]}
                            basicPagination
                            leftPagiIcon={<i className="ri-arrow-left-double-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-double-line text-inherit"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.basicTwo ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5]}
basicPagination
leftPagiIcon={<i className="ri-arrow-left-double-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-double-line text-inherit"></i>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* BASIC PAGINATIONS WITH SHADOW */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Paginations - with Shadow</h3>
                            <button type="button" onClick={()=>toggleCodeView('basicShadow')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basicShadow ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.basicShadow ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4, 5]}
                            basicPagination
                            leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit"></i>}
                            shadow="shadow-paginate-shadow"
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.basicShadow ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5]}
basicPagination
leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit"></i>}
shadow="shadow-paginate-shadow"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* PAGINATIONS OTHER COLOR WITH SHADOW */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Other Color - With Shadow</h3>
                            <button type="button" onClick={()=>toggleCodeView('basicTwoShadow')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basicTwoShadow ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.basicTwoShadow ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4, 5]}
                            basicPagination
                            leftPagiIcon={<i className="ri-arrow-left-double-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-double-line text-inherit"></i>}
                            shadow="shadow-paginate-shadow"
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.basicTwoShadow ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5]}
basicPagination
leftPagiIcon={<i className="ri-arrow-left-double-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-double-line text-inherit"></i>}
shadow="shadow-paginate-shadow"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* ROUNDED NUMBER PAGINATIONS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rounded Number Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('numberRounded')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.numberRounded ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.numberRounded ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4, 5, 10]}
                            currentPage={3}
                            roundedPagination
                            onPageChange={(page) => console.log("Page changed to:", page)}
                            leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.numberRounded ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5, 10]}
currentPage={3}
roundedPagination
onPageChange={(page) => console.log("Page changed to:", page)}
leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit"></i>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* ROTATE PAGINATIONS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Rotate Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('rotate')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.rotate ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.rotate ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4, 5, 10]}
                            currentPage={3}
                            rotatePagination
                            onPageChange={(page) => console.log("Page changed to:", page)}
                            leftPagiIcon={<span className="-rotate-45"><i className="ri-arrow-left-line text-inherit"></i></span>}
                            rightPagiIcon={<span className="-rotate-45"><i className="ri-arrow-right-line text-inherit"></i></span>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.rotate ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5, 10]}
currentPage={3}
rotatePagination
onPageChange={(page) => console.log("Page changed to:", page)}
leftPagiIcon={<span className="-rotate-45"><i className="ri-arrow-left-line text-inherit"></i></span>}
rightPagiIcon={<span className="-rotate-45"><i className="ri-arrow-right-line text-inherit"></i></span>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* COUNT NUMBER PAGINATIONS pp */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Count Number Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('countNumber')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.countNumber ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.countNumber ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3]}
                            currentPage={3}
                            countNumberPagination
                            onPageChange={(page) => console.log("Page changed to:", page)}
                            leftPagiIcon={<i className="ri-arrow-left-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-line text-inherit"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.countNumber ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3]}
currentPage={3}
countNumberPagination
onPageChange={(page) => console.log("Page changed to:", page)}
leftPagiIcon={<i className="ri-arrow-left-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-line text-inherit"></i>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* DIFFERENT ARROW PAGINATIONS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Different Arrow Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('differentArrow')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.differentArrow ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.differentArrow ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3, 4]}
                            currentPage={3}
                            differentPagination
                            onPageChange={(page) => console.log("Page changed to:", page)}
                            leftPagiIcon={<i className="ri-arrow-left-line text-inherit"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-line text-inherit"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.differentArrow ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3, 4, 5, 6]}
currentPage={3}
differentPagination
onPageChange={(page) => console.log("Page changed to:", page)}
leftPagiIcon={<i className="ri-arrow-left-line text-inherit"></i>}
rightPagiIcon={<i className="ri-arrow-right-line text-inherit"></i>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* NEW STYLE PAGINATIONS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">New Style Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('stylefill')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.stylefill ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.stylefill ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3]}
                            currentPage={3}
                            newPagination
                            onPageChange={(page) => console.log("Page changed to:", page)}
                            leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit text-4xl"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit text-4xl"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.stylefill ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3]}
currentPage={3}
newPagination
onPageChange={(page) => console.log("Page changed to:", page)}
leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit text-4xl"></i>}
rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit text-4xl"></i>}
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* NEW STYLE STOCK PAGINATIONS */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">New Style - Stock Paginations</h3>
                            <button type="button" onClick={()=>toggleCodeView('styleStock')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.styleStock ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.styleStock ? 'hidden' : ''}`}>
                            <Pagination
                            pages={[1, 2, 3]}
                            currentPage={3}
                            newStockPagination
                            onPageChange={(page) => console.log("Page changed to:", page)}
                            leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit text-[30px]"></i>}
                            rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit text-4xl"></i>}
                            />
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.styleStock ? '' : 'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<Pagination
pages={[1, 2, 3]}
currentPage={3}
newStockPagination
onPageChange={(page) => console.log("Page changed to:", page)}
leftPagiIcon={<i className="ri-arrow-left-s-line text-inherit text-[30px]"></i>}
rightPagiIcon={<i className="ri-arrow-right-s-line text-inherit text-4xl"></i>}
/>`}
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