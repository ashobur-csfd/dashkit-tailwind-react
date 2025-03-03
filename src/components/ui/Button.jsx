export default function Button({text, className, icon, iconLeft, link, btnType, ...rest}){
    return (
        <>
            {!link && 
            <button type={btnType} className={className && className} {...rest}>
                {iconLeft && iconLeft}
                {text && text}
                {icon && icon}
            </button>}
            {link && 
            <a href={link} className={className && className} {...rest}>
                {iconLeft && iconLeft}
                {text && text}
                {icon && icon}
            </a>}
        </>
    )
}