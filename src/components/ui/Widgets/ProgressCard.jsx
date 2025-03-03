import SimpleCounter from "../../Counter/Counter";

export default function ProgressCard({icon, studentOne, studentTwo, studentThree, title='sdfdsf', newNotify, totalFriends}){
    return(
        <>
            <div className="card p-6">
                <div className="flex-center-between">
                    <div className="flex gap-5">
                        <div className="shrink-0 inline-flex px-2.5 rounded-lg bg-[#EDE9FF] dark:bg-dark-icon">
                            <img src={icon} alt="chat"/>
                        </div>
                        <div>
                            <h6 className="text-xl font-semibold text-heading">{title}</h6>
                            <a href="#" className="text-sm font-medium text-info">{newNotify} New</a>
                        </div>
                    </div>
                    <a href="#" className="size-10 shrink-0 rounded-full bg-[#EEEDF0] dark:bg-dark-icon relative before:position-center before:font-remix before:text-2xl before:text-gray-500 dark:before:text-dark-text before:content-['\ea6e']"></a>
                </div>
                <div className="flex items-center divide-x divide-[#E2E2E2] dark:divide-dark-border xl:*:px-8 *:px-5 first:*:pl-0 mt-12">
                    <div className="shrink-0">
                        <span className="text-sm font-medium text-gray-500 dark:text-dark-text">Total Friends</span>
                        <h6 className="card-title text-2xl mt-1">
                            <SimpleCounter value={totalFriends}/>
                        </h6>
                    </div>
                    <div className="flex -space-x-2 rtl:space-x-reverse">
                        <img className="size-9 border border-white rounded-full dark:border-gray-800" src={studentOne} alt="student"/>
                        <img className="size-9 border border-white rounded-full dark:border-gray-800" src={studentTwo} alt="student"/>
                        <img className="size-9 border border-white rounded-full dark:border-gray-800" src={studentThree} alt="student"/>
                        <a className="flex-center size-9 text-xs font-bold text-white bg-primary-500 border border-white rounded-full" href="#">+5</a>
                    </div>
                </div>
            </div>
        </>
    )
}