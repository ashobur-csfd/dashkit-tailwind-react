import { useState } from 'react';

export default function Badge({ className, text, counter, counterRounded, icon = null, counterCloseBtn }) {
    const [isVisible, setIsVisible] = useState(true);
    
    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <span className={className}>
                    {text}
                    {counter && (
                        <span className={`badge-counter ${counterRounded && 'rounded-full'}`}>{counter}</span>
                    )}
                    {icon && (
                        <span className="badge-icon">{icon}</span>
                    )}
                    {counterCloseBtn && (
                        <>
                            <span className="badge-counter">{counterCloseBtn}</span>
                            <button className="close-button" onClick={handleClose}>
                                <i className="ri-close-line aleart-close"></i>
                            </button>
                        </>
                    )}
                </span>
            )}
        </>
    );
}
