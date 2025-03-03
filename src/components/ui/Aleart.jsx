export default function Aleart ({className, content, icon, img}){
    return(
        <>
            <div className={className}>
                <div className="flex-center gap-2.5">
                    {img && <img src={img} alt="user" className="size-8 rounded-50"/>}
                    {icon && icon}
                    {content}
                </div>
                <button className="close-button">
                    <i className="ri-close-line text-inherit"></i>
                </button>
            </div>
        </>
    )
}
