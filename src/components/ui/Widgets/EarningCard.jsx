import SimpleCounter from "../../Counter/Counter";

export default function EarningCard({earningVrSolid, earningVrLight, earningHrSolid, earningHrLight, title, subTitle, mainIcon, growIcon, growPercent}){
    return(
        <>
        {(earningHrSolid || earningHrLight) && <div className="flex-center-between bg-[#F6F4FE] dark:bg-dark-card-two px-4 md:px-6 py-[30px] rounded-15">
            <div className="flex items-center gap-2 md:gap-5">
                <div className={`flex-center size-10 rounded-full ${earningHrSolid && 'bg-primary-500' || earningHrLight && 'bg-[#E1DAFC]'} dark:bg-dark-icon`}>
                    <img className={`size-6  ${earningHrSolid && 'brightness-[50]'}`} src={mainIcon} alt="bitcoin"/>
                </div>
                <div>
                    <h6 className="text-sm font-medium text-gray-500 dark:text-dark-text">{subTitle}</h6>
                    <div className="card-title text-2xl mt-1">
                        $<SimpleCounter value={title}/>K
                    </div>
                </div>
            </div>
            <div className={`flex items-center gap-2 px-2 py-1.5 rounded-full ${earningHrSolid && 'bg-primary-500 text-white' || earningHrLight && 'bg-[#E1DAFC] text-primary-500'} dark:bg-dark-icon leading-none`}>
                <img className={`size-4 ${earningHrSolid && 'brightness-[50]'}`} src={growIcon} alt="trend-up"/>
                <span className="text-xs font-bold">{growPercent}</span>
            </div>
        </div>}
        {(earningVrSolid || earningVrLight) &&
        <div className="md:w-auto w-full flex flex-col justify-center items-center text-center bg-[#F6F4FE] dark:bg-dark-card-two px-6 py-[30px] rounded-15">
            <div className={`flex-center size-10 rounded-full ${earningVrSolid && 'bg-primary-500 text-white' || earningVrLight && 'bg-[#E1DAFC] text-primary-500'} dark:bg-dark-icon`}>
                <img className={`size-6  ${earningVrSolid && 'brightness-[50]'}`} src={mainIcon} alt="bitcoin"/>
            </div>
            <div>
                <h6 className="text-sm font-medium text-gray-500 dark:text-dark-text my-2.5 leading-none">{subTitle}</h6>
                <div className="card-title text-2xl mt-1 leading-none">
                    $<SimpleCounter value={title}/>K
                </div>
            </div>
        </div>
        }
        </>
    )
}