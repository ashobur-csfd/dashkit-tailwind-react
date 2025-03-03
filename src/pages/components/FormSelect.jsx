import { useState } from "react";
import SelectInput from "../../components/ui/SelectInput";

export default function FormSelect(){

    // code show
    const [showCode, setShowCode] = useState({
        basicSelect: false,
        basicSelectTwo: false,
        advancedSelect: false,
        advancedSelectTwo: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    const categories = [
        {option: "Create a New", value: "category-one"},
        {option: "Details Here", value: "category-two"},
        {option: "Default Option", value: "category-three"},
    ]
    return (
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">Form Select Component</h2>
            </div>
            {/* INIT SELECT2 CLASS */}
            <div className="select2-container--default" hidden>
                <div className="select2-dropdown select2-search--dropdown">
                    <div className="select2-search__field select2-results__option--selected"></div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                {/* BASIC SELECT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Select</h3>
                            <button type="button" onClick={()=>toggleCodeView('basicSelect')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basicSelect ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.basicSelect ? 'hidden':''}`}>
                            <div className="flex flex-col">
                                {/* <SelectInput basic labelText={'Title Hare'} options={categories}/> */}
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.basicSelect ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col">
    <SelectInput basic labelText={'Title Hare'} options={categories}/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* BASIC SELECT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Basic Select</h3>
                            <button type="button" onClick={()=>toggleCodeView('basicSelectTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.basicSelectTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 space-y-4 ${showCode.basicSelectTwo ? 'hidden':''}`}>
                            <div className="flex flex-col">
                                {/* <SelectInput basic labelText={'Title Hare'} options={categories}/> */}
                            </div>
                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.basicSelectTwo ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
{`<div className="flex flex-col">
    <SelectInput basic labelText={'Title Hare'} options={categories}/>
</div>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* ADVANCE SELECT */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Advance Select</h3>
                            <button type="button" onClick={()=>toggleCodeView('advancedSelect')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.advancedSelect ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.advancedSelect ? 'hidden':''}`}>
                        <SelectInput
  labelText="Select multiple options"
  multiAdvance={true}
  options={[
    { value: "1", option: "Option 1" },
    { value: "2", option: "Option 2" },
    { value: "3", option: "Option 3" },
    { value: "4", option: "Option 4" },
  ]}
/>

                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.advancedSelect ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
                                    {`<SelectInput advanced  options={categories}/>`}
                                </code>
                            </pre>
                        </div>
                        {/* Prism Code */}
                    </div>
                </div>
                {/* ADVANCE SELECT WITH REMOVE */}
                <div className="col-span-full lg:col-span-6">
                    <div className="card p-0">
                        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                            <h3 className="text-lg card-title leading-none">Advance Select With Remove</h3>
                            <button type="button" onClick={()=>toggleCodeView('advancedSelectTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.advancedSelectTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className={`p-6 ${showCode.advancedSelectTwo ? 'hidden':''}`}>
                        <SelectInput
  labelText="Select multiple options"
  multiAdvance={true}
  options={[
    { value: "1", option: "Option 1" },
    { value: "2", option: "Option 2" },
    { value: "3", option: "Option 3" },
    { value: "4", option: "Option 4" },
  ]}
/>

                        </div>
                        {/* Prism Code */}
                        <div className={`p-6 ${showCode.advancedSelectTwo ? '':'hidden'}`}>
                            <pre>
                                <code className="language-markup">
                                   {`<SelectInput multiAdvance  options={categories}/>`}
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