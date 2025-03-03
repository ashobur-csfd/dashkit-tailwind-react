import { useState } from 'react';
import FaqAccordion from '../../components/FaqAccordion';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null); // Track which FAQ item is open

    const faqData = [
        {
            question: "What is Dashkit Platform Name?",
            answer: "Web design and development encompass a spectrum of processes involved in creating and maintaining websites. These aspects are closely intertwined and interdependent. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget gravida cum sociis natoque penatibus. Tellus orci ac auctor augue mauris augue neque gravida in."
        },
        {
            question: "How does the Dashkit platform work?",
            answer: "Dashkit simplifies the process of designing and developing websites with a user-friendly interface and comprehensive tools. It integrates web development technologies to provide seamless management of web projects."
        },
        {
            question: "Can I customize my project with Dashkit?",
            answer: "Yes, Dashkit allows full customization of projects, from design elements to functional components, ensuring you can build tailored solutions."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index); // Close if clicked again, else open
    };

    return (
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card p-0 overflow-hidden">
                    <div className="px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                        <h6 className="card-title">FAQs</h6>
                    </div>
                    <div className="sm:m-5 bg-[#F9F8FF] dark:bg-dark-card-two sm:rounded-20">
                        <div className="py-16">
                            <div className="grid grid-cols-12 mb-10 px-2 sm:p-0">
                                <div className="col-span-full sm:col-start-4 sm:col-span-6 text-center">
                                    <h2 className="text-xl sm:text-3xl leading-[1.31] font-semibold text-heading">
                                        Most People Frequently Asked Questions
                                    </h2>
                                </div>
                            </div>
                            {/* Start Faq Accordion */}
                            <div className="container max-w-screen-xl">
                                <div className="lg:px-[5%]">
                                    <div className="faq-accordion flex flex-col gap-2.5">
                                        {faqData.map((faq, index) => (
                                            <FaqAccordion
                                                key={index}
                                                question={faq.question}
                                                answer={faq.answer}
                                                isOpen={openIndex === index}
                                                onToggle={() => handleToggle(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End Faq Accordion */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
