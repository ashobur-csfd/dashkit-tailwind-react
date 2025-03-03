export default function Breadcrumb ({basic, basicTwo, basicIcon, basicTwoIcon, custom, breads, basicBreads, basicDotBreads, basicArrowBreads, basicRightBreads, basicRightDoubleBreads, basicNoneBreads, customBreads, customBreadsIcon, customSolidBreads, customSolidBreadsIcon}){
    return(
        <>
            <ul className={`flex items-center flex-wrap gap-1.5 *:flex-center *:gap-1.5 leading-none text-gray-900 dark:text-dark-text ${basicNoneBreads && '!gap-0'}`}>
                {basic && breads?.map((bread, idx) => (
                    <li
                    key={idx}
                    className={`text-primary-500 after:font-remix after:flex-center after:text-gray-900 after:size-5 
                        ${
                        basicDotBreads 
                            && `after:font-thin after:content-['\\f3c1'] after:text-[6px]`
                            || basicArrowBreads
                            && `after:font-thin after:content-['\\ea6d'] `
                            || basicBreads && `after:font-thin after:content-['/']`
                        }
                        after:translate-y-[1.4px] last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two capitalize ${
                        idx === breads.length - 1 ? 'current-page' : ''
                        }`}
                    >
                    <a href={!(idx === breads.length - 1) && bread?.link}>{bread?.page}</a>
                    </li>
                ))}
                {basicTwo && breads?.map((bread, idx) => (
                    <li
                    key={idx}
                    className={`text-primary-500 after:font-remix after:flex-center after:text-gray-900 after:size-5 
                        ${basicRightBreads
                        && `after:font-thin after:content-['\\ea6e']`
                        || basicRightDoubleBreads
                        && `after:font-thin after:content-['\\f2e5']`
                        || basicNoneBreads && `after:font-thin after:content-[''] !gap-0`
                        }
                        after:translate-y-[1.4px] last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two capitalize ${
                        idx === breads.length - 1 ? 'current-page' : ''
                        }`}
                    >
                    <a href={!(idx === breads.length - 1) && bread?.link}>{bread?.page}</a>
                    </li>
                ))}
                {basicIcon && breads?.map((bread, idx) => (
                    <>
                    <li
                    key={idx}
                    className={`text-primary-500 after:font-remix after:flex-center after:text-gray-900 after:size-5 
                        ${
                        basicDotBreads 
                            && `after:font-thin after:content-['\\f3c1'] after:text-[6px]`
                            || basicArrowBreads
                            && `after:font-thin after:content-['\\ea6d'] `
                            || basicBreads && `after:font-thin after:content-['/']`
                        }
                        after:translate-y-[1.4px] last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two capitalize ${
                        idx === breads.length - 1 ? 'current-page' : ''
                        }`}
                    >
                    <a href={!(idx === breads.length - 1) && bread?.link} className="flex-center shrink-0 gap-2 text-inherit">
                            {bread?.icon}
                            {bread?.page}
                        </a>
                    </li>
                    </>
                ))}
                {basicTwoIcon && breads?.map((bread, idx) => (
                    <>
                    <li
                    key={idx}
                    className={`text-primary-500 after:font-remix after:flex-center after:text-gray-900 after:size-5 
                        ${basicRightBreads
                        && `after:font-thin after:content-['\\ea6e']`
                        || basicRightDoubleBreads
                        && `after:font-thin after:content-['\\f2e5']`
                        || basicNoneBreads && `after:font-thin after:content-[''] !gap-0`
                        }
                        after:translate-y-[1.4px] last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two capitalize ${
                        idx === breads.length - 1 ? 'current-page' : ''
                        }`}
                    >
                    <a href={!(idx === breads.length - 1) && bread?.link} className="flex-center shrink-0 gap-2 text-inherit">
                            {bread?.icon}
                            {bread?.page}
                        </a>
                    </li>
                    </>
                ))}
                {custom && breads?.map((bread, idx) => (
                    <>
                    <li className={`text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb ${
                        idx === breads.length - 1 ? 'current-page' : ''
                        }`}>
                        <a
                        href="#"
                        className={`
                            ${customSolidBreads || customSolidBreadsIcon ? 'custom-breadcrumb-solid' : 'custom-breadcrumb-outline'}
                            capitalize gap-2
                            ${customBreadsIcon ? 'flex-center shrink-0 text-inherit' : ''}
                        `}
                        >
                        {(customBreadsIcon || customSolidBreadsIcon) && bread?.icon}
                        {bread?.page}
                        </a>

                    </li>
                    </>
                ))}
            </ul>
        </>
    )
}


<ul className="flex items-center flex-wrap gap-2 *:flex-center *:gap-1.5 leading-none text-gray-900 dark:text-dark-text"> 
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="custom-breadcrumb-solid">
            Home
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="custom-breadcrumb-solid">
            Course
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb">
        <a href="#" className="custom-breadcrumb-solid">
            Wallet
        </a>
    </li>
    <li className="text-primary-500 last:after:hidden [&.current-page]:text-gray-500 dark:[&.current-page]:text-dark-text-two group/cb current-page">
        <a href="#" className="custom-breadcrumb-solid">
            Like Wishlist
        </a>
    </li>
</ul>