import SimpleCounter from "../../Counter/Counter";
import Chart from "react-apexcharts";

export default function IncreasePieChart({chart, subtitle='increase', mainAmount, progress, className}){

    return(
        <>
            <div className="flex justify-between">
                <div className="w-full">
                    <h6 className="font-medium text-gray-500 dark:text-dark-text">{subtitle}</h6>
                    <div className="text-xl xl:text-[32px] font-bold text-heading dark:text-white mt-6 md:mt-11 md:mb-1">$
                        <SimpleCounter value={mainAmount}/>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-dark-text">$<span>{mainAmount}</span></div>
                </div>
                <Chart options={chart.options} series={chart.series} type="donut" height={260}/>
            </div>
            <div className="inline-flex items-center divide-x *:px-3 xl:*:px-6 first:*:pl-0 divide-[#E8E4FC] dark:divide-dark-border">
                {progress?.map((item, idx) => (
                    <div key={idx}>
                        <div className="relative pl-2.5 before:position-center before:left-0 before:size-2 before:rounded-full before:bg-[#88A4FF] text-sm font-medium text-gray-500 dark:text-dark-text">{item?.status}</div>
                        <div className="text-xl font-bold text-[#323232] dark:text-dark-text">
                            <SimpleCounter value={item?.amount}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}