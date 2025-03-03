import { useState } from "react";
import Slider from "../../components/ui/Slider";

export default function RangeSlider(){

    // code show
    const [showCode, setShowCode] = useState({
        progressOne: false,
        progressTwo: false,
        progressThree: false,
        progressFour: false,
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
                    <h2 className="card-title">Range Slider</h2>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                    {/* PROGRESS BAR 1 */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Progress bar</h3>
                                <button type="button" onClick={()=>toggleCodeView('progressOne')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.progressOne ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 space-y-4 ${showCode.progressOne ? 'hidden':''}`}>
                                <div className="border dark:border-dark-border rounded-10 p-6 space-y-10">
                                    <label className="block mb-[50px] font-medium text-gray-500 dark:text-white">Progressing</label>
                                    {/* First Slider */}
                                    <Slider
                                        initialValue={65}
                                        showTooltip={true}
                                        onChange={(val) => console.log("Slider Value: ", val)}
                                    />
                                    {/* Second Slider */}
                                    <Slider
                                        initialValue={40}
                                        showTooltip={false}
                                        onChange={(val) => console.log("Slider Value: ", val)}
                                    />
                                    {/* Third Slider */}
                                    {/* <div className="relative w-full max-w-full flex-center range-wrapper">
                                        <div className="w-full h-2.5 bg-[#ECEBF0] dark:bg-progress-bar-bg-dark rounded-full overflow-hidden">
                                            <div className="size-full bg-[#BABABA] range-line"></div>
                                        </div>
                                        <div className="size-[18px] bg-[#BABABA] border border-[#E2E2E2] rounded-full absolute range-handler"></div>
                                        <input type="range" className="range-input" min="0" max="100" value="75" step="1"/>
                                    </div> */}
                                    {/* Gray Styled Slider */}
                                    <Slider
                                    initialValue={50}
                                    sliderType="gray"
                                    />
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.progressOne ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<label className="block mb-[50px] font-medium text-gray-500 dark:text-white">Progressing</label>
{/* First Slider */}
<Slider
    initialValue={65}
    showTooltip={true}
    onChange={(val) => console.log("Slider Value: ", val)}
/>
{/* Second Slider */}
<Slider
    initialValue={40}
    showTooltip={false}
    onChange={(val) => console.log("Slider Value: ", val)}
/>
{/* Third Slider */}
{/* <div className="relative w-full max-w-full flex-center range-wrapper">
    <div className="w-full h-2.5 bg-[#ECEBF0] dark:bg-progress-bar-bg-dark rounded-full overflow-hidden">
        <div className="size-full bg-[#BABABA] range-line"></div>
    </div>
    <div className="size-[18px] bg-[#BABABA] border border-[#E2E2E2] rounded-full absolute range-handler"></div>
    <input type="range" className="range-input" min="0" max="100" value="75" step="1"/>
</div> */}
{/* Gray Styled Slider */}
<Slider
initialValue={50}
sliderType="gray"
/>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* PROGRESS BAR 2 */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Progress bar</h3>
                                <button type="button" onClick={()=>toggleCodeView('progressTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.progressTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.progressTwo ? 'hidden':''}`}>
                                <div className="border dark:border-dark-border rounded-10 p-6 space-y-8">
                                    <label className="block mb-[47px] font-medium text-gray-500 dark:text-dark-text">Progressing (%)</label>
                                    {/* First Slider */}
                                    <div className="flex items-center leading-none gap-x-3 range-wrapper">
                                        <div className="w-full">
                                            <Slider
                                                initialValue={73}
                                                showTooltip={true}
                                                onChange={(val) => console.log("Slider Value: ", val)}
                                            />
                                        </div>
                                        <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
                                            <span className="range-number">73</span> %
                                        </div>
                                    </div>
                                    {/* Second Slider */}
                                    <div className="flex items-center gap-x-3 range-wrapper">
                                        <div className="w-full">
                                            <Slider
                                                initialValue={90}
                                                showTooltip={false}
                                                onChange={(val) => console.log("Slider Value: ", val)}
                                            />
                                        </div>
                                        <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text"><span className="range-number">90</span>%</div>
                                    </div>
                                    {/* Third Slider */}
                                    <div className="flex items-center gap-x-3 range-wrapper">
                                        <div className="w-full">
                                            <Slider
                                                initialValue={50}
                                                showTooltip={false}
                                                onChange={(val) => console.log("Slider Value: ", val)}
                                            />
                                        </div>
                                        <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
                                            <span className="range-number">50</span>%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.progressTwo ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`{/* First Slider */}
<div className="flex items-center leading-none gap-x-3 range-wrapper">
    <div className="w-full">
        <Slider
            initialValue={73}
            showTooltip={true}
            onChange={(val) => console.log("Slider Value: ", val)}
        />
    </div>
    <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
        <span className="range-number">73</span> %
    </div>
</div>
{/* Second Slider */}
<div className="flex items-center gap-x-3 range-wrapper">
    <div className="w-full">
        <Slider
            initialValue={90}
            showTooltip={false}
            onChange={(val) => console.log("Slider Value: ", val)}
        />
    </div>
    <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text"><span className="range-number">90</span>%</div>
</div>
{/* Third Slider */}
<div className="flex items-center gap-x-3 range-wrapper">
    <div className="w-full">
        <Slider
            initialValue={50}
            showTooltip={false}
            onChange={(val) => console.log("Slider Value: ", val)}
        />
    </div>
    <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
        <span className="range-number">50</span>%
    </div>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* PROGRESS BAR 3 */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Progress bar</h3>
                                <button type="button" onClick={()=>toggleCodeView('progressThree')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.progressThree ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.progressThree ? 'hidden':''}`}>
                                <div className="border dark:border-dark-border rounded-10 p-6 space-y-10">
                                    <label className="block mb-[50px] font-medium text-gray-500 dark:text-white">Progressing</label>
                                    <div className="gap-x-3">
                                        {/* Slider with Increment/Decrement */}
                                        <Slider
                                        initialValue={70}
                                        showIncrementDecrement={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.progressThree ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`{/* Slider with Increment/Decrement */}
<Slider
initialValue={70}
showIncrementDecrement={true}
/>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* PROGRESS BAR 4 */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Progress bar</h3>
                                <button type="button" onClick={()=>toggleCodeView('progressFour')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.progressFour ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.progressFour ? 'hidden':''}`}>
                                <div className="border dark:border-dark-border rounded-10 p-6 space-y-10">
                                    <label className="block mb-[50px] font-medium text-gray-500 dark:text-white">Progressing</label>
                                    <div className="gap-x-3">
                                        {/* Slider with Increment/Decrement */}
                                        <Slider
                                        initialValue={70}
                                        lightDark={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.progressFour ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`{/* Slider with Increment/Decrement */}
<Slider
initialValue={70}
lightDark={true}
/>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* PRICING BAR 1 pending... */}
                    <div className="col-span-full lg:col-span-6 hidden">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Pricing Range</h3>
                                <button type="button" className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className="ri-code-line text-inherit text-[15px]"></i>
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="border dark:border-dark-border rounded-10 p-6 space-y-10">
                                    <label className="block mb-[50px] font-medium text-gray-500 dark:text-white">Price Range</label>
                                    {/* Price Range Max & Min */}
                                    <Slider
                                    sliderType="price"
                                    min={1000}
                                    max={5000}
                                    initialValue={3000}
                                    />
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className="p-6 hidden">
                                <pre>
                                    <code className="language-markup">
{`{/* Price Range Max & Min */}
<Slider
    sliderType="price"
    min={1000}
    max={5000}
    initialValue={3000}
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

