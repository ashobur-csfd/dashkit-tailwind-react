export default function CompletedCourseCard({primary, secondary, title="complete course", amount="28", growAmount="+4.6%", date=""}){
    return(
        <>
            <div className="w-full p-6 lg:p-5 xl:p-6 rounded-15 bg-[#F2ECFF] dark:bg-dark-card-two">
                <div className="flex items-center gap-3">
                    <div className={`before:font-remix before:text-3xl ${primary && `before:text-primary-500 before:content-['\\f3e9']` || secondary && `before:text-[#1FBF98] before:content-['\\f3e9']`}`}></div>
                    <h6 className="text-base lg:text-sm xl:text-base font-semibold text-heading capitalize">{title}</h6>
                </div>
                <div className="flex-center-between mt-10">
                    <span className="text-3xl lg:text-2xl xl:text-3xl font-bold text-[#323232] dark:text-dark-text">{amount}</span>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill={`${primary && "#795DED" || secondary && "#1FBF98"}`} d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
                        <span className={`text-xs font-bold ${primary && 'text-primary-500' || secondary && 'text-[#1FBF98]'}`}>{growAmount}</span>
                        <span className="text-sm font-semibold text-gray-500 dark:text-dark-text">{date}</span>
                    </div>
                </div>
            </div>
        </>
    )
}