import { useState } from "react";

export default function Slider({ min = 0,
    max = 100,
    step = 1,
    initialValue = 50,
    showTooltip = false,
    showIncrementDecrement = false,
    lightDark = false,
    showMinMax = false,
    label,
    sliderType = "default", // 'default', 'price', 'gray', 'tooltip'
    onChange, }){

    const [value, setValue] = useState(initialValue);
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

    const handleValueChange = (e) => {
      const val = Number(e.target.value);
      setValue(val);
      if (onChange) onChange(val);
    };

    const handleIncrement = () => setValue((prev) => Math.min(max, prev + step));
    const handleDecrement = () => setValue((prev) => Math.max(min, prev - step));
    return(
        <>
        <div className="space-y-2">
          {label&&<label className="block font-medium text-gray-500 dark:text-white">{label}</label>}

          {sliderType === "price" ? (
            // Price Range Slider Variant
            <div className="relative w-full max-w-full flex-center range-wrapper">
              <div className="w-full h-2.5 bg-[#ECEBF0] dark:bg-progress-bar-bg-dark rounded-full overflow-hidden">
                <span
                  className="slider-line h-full absolute bg-primary-500"
                  style={{ left: `${(minVal / max) * 100}%`, width: `${((maxVal - minVal) / max) * 100}%` }}
                ></span>
              </div>
              <div className="size-[18px] bg-white border border-primary-500 rounded-full absolute range-handler" style={{ left: `${(minVal / max) * 100}%` }}>
                <div className="tooltip bg-primary-500 text-white">
                  <span>{minVal}</span>
                </div>
              </div>
              <div className="size-[18px] bg-white border border-primary-500 rounded-full absolute range-handler" style={{ left: `${(maxVal / max) * 100}%` }}>
                <div className="tooltip bg-primary-500 text-white">
                  <span>{maxVal}</span>
                </div>
              </div>
              <input type="range" className="range-input" min={min} max={max} value={minVal} onChange={(e) => setMinVal(Number(e.target.value))} />
              <input type="range" className="range-input" min={min} max={max} value={maxVal} onChange={(e) => setMaxVal(Number(e.target.value))} />
            </div>
          ) : (
            // General Slider
            <div className="flex-center gap-x-3">
              {showIncrementDecrement ? (
                <button className="text-[#979797]" onClick={handleDecrement}>
                  <i className="ri-subtract-line text-inherit"></i>
                </button>
              ):
              (lightDark && <span className="text-[#979797]">
                <i className="ri-contrast-2-line text-inherit"></i>
              </span>)}

              <div className="relative w-full max-w-full flex-center range-wrapper">
                <div className="w-full h-2.5 bg-[#ECEBF0] dark:bg-progress-bar-bg-dark rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 range-line" style={{ width: `${value}%` }}></div>
                </div>
                <div className="size-[18px] bg-white border border-primary-500 rounded-full absolute range-handler" style={{ left: `${value - 1}%` }}>
                  {showTooltip && (
                    <div className="tooltip bg-primary-500 text-white">
                      <span>{value}%</span>
                    </div>
                  )}
                </div>
                <input type="range" className="range-input" min={min} max={max} value={value} step={step} onChange={handleValueChange} />
              </div>

              {showIncrementDecrement ? (
                <button className="text-[#979797]" onClick={handleIncrement}>
                  <i className="ri-add-line text-inherit"></i>
                </button>
              ):
              (lightDark && <span className="text-[#979797]">
                <i className="ri-sun-line text-inherit"></i>
              </span>)}
            </div>
          )}

          {showMinMax && (
            <div className="flex justify-between text-gray-500 dark:text-dark-text">
              <span>{min}</span>
              <span>{max}</span>
            </div>
          )}
        </div>
        </>
    )
}