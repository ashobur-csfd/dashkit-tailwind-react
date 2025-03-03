import React from 'react';

export default function Rating({ user, groupName, promptText, defaultValue, startType, readonly }){
    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                {user && <img src={user} alt="user" className="size-9 rounded-full" />}
                {promptText && <p className="shrink-0 font-medium text-gray-500 dark:text-dark-text">{promptText}</p>}
            </div>
            <div className="flex flex-row-reverse justify-end items-center">
                {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                        <input 
                            type="radio"
                            className="peer/rate rate-input"
                            name={groupName}
                            value={value}
                            defaultChecked={value === defaultValue}
                        />
                        <label className={`rate-label ${(startType === 'stock') && `before:content-['\\f18b']`} ${readonly && 'readonly-rate'} peer-checked/rate:text-[#ECBC38] peer-hover/rate:text-[#ECBC38]`}></label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
