
const FaqAccordion = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className={`faq-accordion-item bg-white dark:bg-dark-card border border-[#E4E4E4] dark:border-dark-border rounded-20 ${isOpen ? 'border-primary-300 dark:border-dark-border' : ''}`}>
            <button
                className="faq-accordion-button text-xl sm:text-3xl px-4 sm:px-10 py-3 sm:py-7 w-full text-left flex justify-between items-center peer"
                onClick={onToggle}
            >
                <span className="text-base sm:card-title">
                    {question}
                </span>
                {/* Icon for toggle (Remix) */}
                {isOpen ? (
                    <i className="ri-arrow-up-s-line text-gray-500 dark:text-dark-text" />
                ) : (
                    <i className="ri-arrow-down-s-line text-gray-500 dark:text-dark-text" />
                )}
            </button>
            <div className={`accordion-body px-4 sm:px-10 pb-3 sm:pb-7 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="font-spline_sans text-sm leading-[1.42] text-gray-500 dark:text-dark-text">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FaqAccordion;
