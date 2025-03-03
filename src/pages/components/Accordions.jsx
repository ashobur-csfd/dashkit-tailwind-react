import { useState } from "react"
import Accordion from "../../components/Accordion/Accordion";

export default function Accordions(){

    // code show
    const [showCode, setShowCode] = useState({
        basic: false,
        anotherStyle: false,
        basicNumber: false,
        numberStyle: false,
        basicAccordion: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    // accordion data....
    const basicAccordion = [
        { title: "Example Accordion?", 
            content: (
                <>
                  Web design and development encompass a spectrum <span className="font-semibold">involved in creating and</span>{" "}
                  <span className="text-primary-500 font-semibold">maintaining websites.</span> Aspects are{" "}
                  <span className="text-danger">closely intertwined</span> and interdependent.
                </>
              )
         },
        { title: "Need information idea?", 
            content: (
                <>
                  Web design and development encompass a spectrum <span className="font-semibold">involved in creating and</span>{" "}
                  <span className="text-primary-500 font-semibold">maintaining websites.</span> Aspects are{" "}
                  <span className="text-danger">closely intertwined</span> and interdependent.
                </>
              )
         },
        { title: "Do you have any questions?", 
            content: (
                <>
                  Web design and development encompass a spectrum <span className="font-semibold">involved in creating and</span>{" "}
                  <span className="text-primary-500 font-semibold">maintaining websites.</span> Aspects are{" "}
                  <span className="text-danger">closely intertwined</span> and interdependent.
                </>
              )
         }
    ];

    return(
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card">
                    <h2 className="card-title">Accordions Component</h2>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                     {/* BASIC  */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Basic</h3>
                                <button type="button" onClick={()=>toggleCodeView('basic')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.basic ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.basic ? 'hidden': ''}`}>
                                <div className="flex flex-col divide-y dark:divide-dark-border rounded-lg border border-[#EFEFEF] dark:border-dark-border">
                                    <Accordion data={basicAccordion} style={'basic'}/>
                                </div>
                            </div>
                             {/* Prism Code  */}
                            <div className={`p-6 ${showCode.basic ? '': 'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex flex-col divide-y dark:divide-dark-border rounded-lg border border-[#EFEFEF] dark:border-dark-border">
    <Accordion data={basicAccordion} style={'basic'}/>
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code  */}
                        </div>
                    </div>
                     {/* ANOTHER STYLE  */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Another Style</h3>
                                <button type="button" onClick={()=>toggleCodeView('anotherStyle')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.anotherStyle ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.anotherStyle ? 'hidden': ''}`}>
                                <div className="flex flex-col divide-y dark:divide-dark-border rounded-lg border border-[#EFEFEF] dark:border-dark-border">
                                     <Accordion data={basicAccordion} style={'another'} />
                                </div>
                            </div>
                             {/* Prism Code  */}
                            <div className={`p-6 ${showCode.anotherStyle ? '': 'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex flex-col divide-y dark:divide-dark-border rounded-lg border border-[#EFEFEF] dark:border-dark-border">
    <Accordion data={basicAccordion} style={'another'} />
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code  */}
                        </div>
                    </div>
                     {/* BASIC NUMBER  */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Basic Number</h3>
                                <button type="button" onClick={()=>toggleCodeView('basicNumber')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.basicNumber ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.basicNumber ? 'hidden': ''}`}>
                                <div className="flex flex-col gap-2.5 *:rounded-lg *:border *:border-[#EFEFEF] dark:*:border-dark-border">
                                     <Accordion data={basicAccordion} style={'basic number'} />
                                </div>
                            </div>
                             {/* Prism Code  */}
                            <div className={`p-6 ${showCode.basicNumber ? '': 'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex flex-col gap-2.5 *:rounded-lg *:border *:border-[#EFEFEF] dark:*:border-dark-border">
    <Accordion data={basicAccordion} style={'basic number'} />
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code  */}
                        </div>
                    </div>
                     {/* NUMBER STYLE  */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Number Style</h3>
                                <button type="button" onClick={()=>toggleCodeView('numberStyle')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.numberStyle ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.numberStyle ? 'hidden':''}`}>
                                <div className="flex flex-col gap-2.5 *:rounded-lg *:border *:border-[#EFEFEF] dark:*:border-dark-border">
                                     <Accordion data={basicAccordion} style={'#number'} />
                                </div>
                            </div>
                             {/* Prism Code  */}
                            <div className={`p-6 ${showCode.numberStyle ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex flex-col gap-2.5 *:rounded-lg *:border *:border-[#EFEFEF] dark:*:border-dark-border">
    <Accordion data={basicAccordion} style={'#number'} />
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code  */}
                        </div>
                    </div>
                     {/* BASIC ACCORDION  */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Basic Accordion</h3>
                                <button type="button" onClick={()=>toggleCodeView('basicAccordion')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.basicAccordion ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.basicAccordion ? 'hidden':''}`}>
                                <div className="flex flex-col divide-y dark:divide-dark-border rounded-lg border border-[#EFEFEF] dark:border-dark-border">
                                    <Accordion data={basicAccordion} style={'basic number dot'} />
                                </div>
                            </div>
                             {/* Prism Code  */}
                            <div className={`p-6 ${showCode.basicAccordion ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex flex-col divide-y dark:divide-dark-border rounded-lg border border-[#EFEFEF] dark:border-dark-border">
    <Accordion data={basicAccordion} style={'basic number dot'} />
</div>`}
                                    </code>
                                </pre>
                            </div>
                             {/* Prism Code  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}