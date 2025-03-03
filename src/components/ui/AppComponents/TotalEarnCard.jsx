import SimpleCounter from "../../Counter/Counter";
import Chart from "react-apexcharts";

export default function TotalEarnCard({cardName, course, chart}){

    return(
        <>
        <div className="card p-5">
            <div className="flex-center-between">
                <h6 className="card-title">{cardName}</h6>
                <select className="form-input form-select">
                    <option value="this-month">This Month</option>
                    <option value="last-year">Last Year</option>
                    <option value="last-month">Last Month</option>
                    <option value="last-week">Last Week</option>
                </select>
            </div>
            <div className="card-title text-[42px] mt-3 mb-5">
                $<SimpleCounter value={course}/>
            </div>
            {/* <div id="courseEarning"></div> */}
            {chart && (
                <Chart
                    options={chart?.options}
                    series={chart?.series}
                    type="area"
                    height={120}
                />
            )}
        </div>
        </>
    )
}