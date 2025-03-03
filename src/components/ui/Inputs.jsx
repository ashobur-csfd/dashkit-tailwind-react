export default function Inputs({basic, basicWithIcon, labelId, labelText, placeholder, className, type, icon, iconClass, value, defaultValue, name}){
    return(
        <>
            {basic && 
            <div>
                <label htmlFor={labelId} className="form-label">{labelText}</label>
                <input type={type} id={labelId} name={name} className={className} placeholder={placeholder ? placeholder : value} defaultValue={defaultValue} autocomplete="off" required />
            </div>}
            {basicWithIcon && 
            <div>
                <label htmlFor={labelId} className="form-label">{labelText}</label>
                <div className="flex">
                    <span className={iconClass}>
                        {icon}
                    </span>
                    <input type={type} value={value} id={labelId} className={className} placeholder={placeholder ? placeholder : labelText} required />
                </div>
            </div>}
        </>
    )
}