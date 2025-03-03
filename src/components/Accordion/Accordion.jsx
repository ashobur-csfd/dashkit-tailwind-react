import { useState } from "react";

export default function Accordion({ data, style }){

    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return(
        <>
            {style == 'basic' && data.map((accordion, index) => (
            <div key={index} className={`overflow-hidden ${activeAccordion === index ? "open" : ""} has-[.open]:bg-[#F7F8F9] dark:has-[.open]:bg-dark-card-two`}>
                <button
                    onClick={() => toggleAccordion(index)}
                    className={`com-accordion-button chevron peer/accord-btn [&.chevron]:after:content-['\\ea13'] [&.open]:after:content-['\\f1af'] overflow-hidden ${activeAccordion === index ? "open" : ""}`}
                >
                    <span>{accordion.title}</span>
                </button>
                <div className={`bg-white dark:bg-dark-card p-4 ${activeAccordion === index ? "block" : "hidden"} peer-[.open]/accord-btn:block rounded-b-lg duration-300`}>
                    <div className="text-sm text-gray-500 dark:text-dark-text">
                        {accordion.content}
                    </div>
                </div>
            </div>
            ))}
            {style == 'another' && data.map((accordion, index) => (
            <div key={index} className={`overflow-hidden ${activeAccordion === index ? "open" : ""} has-[.open]:bg-[#F7F8F9] dark:has-[.open]:bg-dark-card-two`}>
                <button onClick={() => toggleAccordion(index)} className={`com-accordion-button chevron peer/accord-btn [&.chevron]:after:content-['\\ea78'] overflow-hidden ${activeAccordion === index ? "open" : ""}`}>
                    <span>{accordion.title}</span>
                </button>
                <div className="bg-white dark:bg-dark-card p-4 hidden peer-[.open]/accord-btn:block rounded-b-lg duration-300">
                    <div className="text-sm text-gray-500 dark:text-dark-text">
                        {accordion?.content}
                    </div>
                </div>
            </div>
            ))}
            {style == 'basic number' && data.map((accordion, index) => (
            <div key={index} className={`overflow-hidden ${activeAccordion === index ? "open" : ""} has-[.open]:bg-[#F7F8F9] dark:has-[.open]:bg-dark-card-two`}>
                <button onClick={() => toggleAccordion(index)} className={`com-accordion-button chevron peer/accord-btn [&.chevron]:after:content-['\\ea13'] [&.open]:after:content-['\\f1af'] overflow-hidden ${activeAccordion === index ? "open" : ""}`}>
                    <span>{(style == 'basic number')&& index + 1} - {accordion?.title}</span>
                </button>
                <div className="bg-white dark:bg-dark-card p-4 hidden peer-[.open]/accord-btn:block rounded-b-lg duration-300">
                    <div className="text-sm text-gray-500 dark:text-dark-text">
                        {accordion?.content}
                    </div>
                </div>
            </div>
            ))}
            {style == '#number' && data.map((accordion, index) => (
                <div key={index} className={`overflow-hidden ${activeAccordion === index ? "open" : ""} has-[.open]:bg-[#F7F8F9] dark:has-[.open]:bg-dark-card-two`}>
                <button onClick={() => toggleAccordion(index)} className={`com-accordion-button chevron peer/accord-btn [&.chevron]:after:content-['\\ea78'] overflow-hidden ${activeAccordion === index ? "open" : ""}`}>
                    <span>#{(style == '#number') && index + 1}. {accordion?.title}</span>
                </button>
                <div className="bg-white dark:bg-dark-card p-4 hidden peer-[.open]/accord-btn:block rounded-b-lg duration-300">
                    <div className="text-sm text-gray-500 dark:text-dark-text">
                        {accordion?.content}
                    </div>
                </div>
            </div>
            ))}
            {style == 'basic number dot' && data.map((accordion, index) => (
            <div key={index} className={`overflow-hidden ${activeAccordion === index ? "open" : ""} has-[.open]:bg-[#F7F8F9] dark:has-[.open]:bg-dark-card-two`}>
                <button onClick={() => toggleAccordion(index)} className={`com-accordion-button chevron peer/accord-btn [&.chevron]:after:content-['\\ea13'] [&.open]:after:content-['\\f1af'] overflow-hidden ${activeAccordion === index ? "open" : ""}`}>
                    <span>{style == 'basic number dot' && index + 1} . {accordion?.title}</span>
                </button>
                <div className="bg-white dark:bg-dark-card p-4 hidden peer-[.open]/accord-btn:block rounded-b-lg duration-300">
                    <div className="text-sm text-gray-500 dark:text-dark-text">
                        {accordion?.content}
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}
