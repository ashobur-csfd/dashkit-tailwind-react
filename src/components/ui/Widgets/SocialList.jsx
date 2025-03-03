import SimpleCounter from "../../Counter/Counter";

export default function SocialList({user, tiktok, facebook, title, subTitle, growAmount, growIcon}){
    return(
        <>
        <div className="flex-center-between">
            <div className="flex items-center gap-2 md:gap-5">
                <div className={`size-12 shrink-0 rounded-lg ${user && "bg-[#D9FAF2] before:content-['\\ede2'] before:text-[#01DDA5]" || tiktok && "bg-[#FDEAEB] before:content-['\\f372'] before:text-black" || facebook && "bg-[#E7F1FF] before:content-['\\ecbc'] before:text-[#1877F2]"} dark:bg-dark-icon relative before:font-remix before:text-2xl before:position-center`}></div>
                <div className="truncate">
                    <h6 className="text-sm md:text-xl font-semibold text-gray-500 dark:text-dark-text">{title}</h6>
                    <span className="text-xs md:text-sm font-medium text-gray-900 dark:text-dark-text">{subTitle}</span>
                </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <span className="text-sm md:text-xl font-semibold text-gray-500 dark:text-dark-text">
                    <SimpleCounter value={growAmount}/>
                </span>
                {growIcon}
            </div>
        </div>
        </>
    )
}