import SimpleCounter from "../../Counter/Counter";
import Chart from "react-apexcharts";

export default function BalanceCard({cardName, title, subTitle, chart, icon}){

    return(
        <>
        <div className="col-span-full sm:col-span-6 lg:col-span-4 p-3 sm:p-7 dk-border-one rounded-xl h-full">
            <h6 className="leading-none text-gray-900 dark:text-dark-text capitalize">{cardName}</h6>
            <div className="pt-3 flex gap-3.5 mt-1.5 overflow-hidden">
                <div className="grow shrink-0">
                    <div className="flex items-center gap-2 mb-2.5">
                        <div className="card-title text-[42px]">
                            $<SimpleCounter value={title}/>
                        </div>
                        <div className="flex-center text-danger size-7 rounded-50 border border-danger">
                            {(icon == 'down') && <i className="ri-arrow-down-line text-inherit"></i> || (icon == 'up') && <i className="ri-arrow-up-line text-inherit"></i> || icon}
                        </div>
                    </div>
                    <div className="leading-none text-gray-500 dark:text-dark-text">
                        {subTitle}
                    </div>
                </div>
                <div className="self-center">
                    {chart && (
                        <Chart
                            options={chart.options}
                            series={chart.series}
                            type="area"
                            height={80}
                        />
                    )}
                </div>
            </div>
        </div>
        </>
    )
}