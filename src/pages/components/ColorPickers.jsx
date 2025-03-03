import { useEffect, useState } from "react";

export default function ColorPickers(){

    // code show
    const [showCode, setShowCode] = useState({
        light: false,
        solid: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    // COLOR PICKER
    useEffect(() => {
        if (document.getElementById("color-picker")) {
            document.getElementById("color-picker").addEventListener("change", () => {
              document.querySelector(".color-value").textContent =
                document.getElementById("color-picker").value;
            });
          }
          if (document.querySelectorAll(".color-picker")) {
            document.querySelectorAll(".color-picker").forEach((picker) => {
              const updateColor = () => {
                const newColor = picker.value;
                picker.closest("label").style.backgroundColor = newColor;
              };
          
              updateColor();
              picker.addEventListener("input", updateColor); // Use "input" event for immediate color change
            });
          }
    }, [])

    return (
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">Color Specifications Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                 {/* LIGHT COLOR */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Light Color</h3>
                            <button type="button" onClick={() => toggleCodeView('light')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.light ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.light ? 'hidden':''}`}>
                            <div className="flex gap-4 flex-wrap">
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-1" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#EAE9EF" id="color-light-1" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-1" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#25265E" id="color-solid-1" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-2" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#F1F0F5" id="color-light-2" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-2" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#787A93" id="color-solid-2" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-3" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#F2EBFD" id="color-light-3" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-3" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#7541EE" id="color-solid-3" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-4" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#EBEFFA" id="color-light-4" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-4" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#2F61D4" id="color-solid-4" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-5" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#ECF7FB" id="color-light-5" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-5" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#3FB7DC" id="color-solid-5" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-6" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#E9F9EF" id="color-light-6" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-6" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#2DC86D" id="color-solid-6" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-7" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#FFF0ED" id="color-light-7" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-7" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#FF7052" id="color-solid-7" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-8" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#FFF9E6" id="color-light-8" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-8" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#FFC801" id="color-solid-8" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-9" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#F5FEEB" id="color-light-9" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-9" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#9FF23A" id="color-solid-9" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-10" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#E6FCFE" id="color-light-10" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-10" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#04E6F7" id="color-solid-10" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-11" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#FFF3FF" id="color-light-11" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-11" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#FB88FF" id="color-solid-11" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-light-12" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#EEFBFA" id="color-light-12" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-solid-12" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#55D8D1" id="color-solid-12" className="color-picker color-input"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.light ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
                                    {`Sorry we can't show code`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* SOLID COLOR */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Solid Color</h3>
                            <button type="button" onClick={() => toggleCodeView('solid')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.solid ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.solid ? 'hidden':''}`}>
                            <div className="flex gap-4 flex-wrap">
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-13" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#25265E" id="color-solid-13" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-13" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#EAE9EF" id="color-light-13" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-14" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#787A93" id="color-solid-14" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-14" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#F1F0F5" id="color-light-14" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-15" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#7541EE" id="color-solid-15" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-15" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#F2EBFD" id="color-light-15" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-16" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#2F61D4" id="color-solid-16" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-16" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#EBEFFA" id="color-light-16" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-17" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#3FB7DC" id="color-solid-17" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-17" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#ECF7FB" id="color-light-17" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-18" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#2DC86D" id="color-solid-18" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-18" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#E9F9EF" id="color-light-18" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-19" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#FF7052" id="color-solid-19" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-19" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#FFF0ED" id="color-light-19" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-20" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#FFC801" id="color-solid-20" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-20" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#FFF9E6" id="color-light-20" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-21" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#9FF23A" id="color-solid-21" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-21" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#F5FEEB" id="color-light-21" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-22" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#04E6F7" id="color-solid-22" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-22" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#E6FCFE" id="color-light-22" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-23" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#FB88FF" id="color-solid-23" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-23" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#FFF3FF" id="color-light-23" className="color-picker color-input"/>
                                    </label>
                                </div>
                                 {/* single item  */}
                                <div className="w-20 *:rounded-lg">
                                    <label htmlFor="color-solid-24" className="pickcolor w-full h-14 block mb-1 relative cursor-pointer">
                                        <input type="color" value="#55D8D1" id="color-solid-24" className="color-picker color-input"/>
                                    </label>
                                    <label htmlFor="color-light-24" className="pickcolor w-full h-5 block !rounded-tr-none relative cursor-pointer">
                                        <input type="color" value="#EEFBFA" id="color-light-24" className="color-picker color-input"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`p-6 ${showCode.solid ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
                                   {`Sorry we can't show code`}
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