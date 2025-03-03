import { paymentInfo } from "../../../data/payment"
import invoice from '@/assets/images/payment-invoice.pdf'

export default function PaymentHistory(){
    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card p-0 overflow-hidden">
                <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                    <div>
                        <h6 className="card-title">Payment History ({paymentInfo.length})</h6>
                        <p className="card-description">
                            See history of your payment plan invoice
                        </p>
                    </div>
                    <select className="form-input form-select self-end sm:self-auto">
                        <option value="last-year">Last Year</option>
                        <option value="last-month">Last Month</option>
                        <option value="last-week">Last Week</option>
                    </select>
                </div>
                <div>
                    {/* Start Payment Information Table */}
                    <div className="overflow-x-auto scrollbar-table">
                        <table className="table-auto w-full whitespace-nowrap text-left text-gray-900 dark:text-dark-text font-medium leading-none">
                            <thead className="border-b-[0.5px] border-gray-200 dark:border-dark-border text-gray-500 dark:text-dark-text font-semibold">
                                <tr>
                                    <th className="px-7 py-6">Payment ID</th>
                                    <th className="px-7 py-6">Date</th>
                                    <th className="px-7 py-6">Code</th>
                                    <th className="px-7 py-6">Amount</th>
                                    <th className="px-7 py-6">Invoice</th>
                                    <th className="px-7 py-4 w-10">More</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                                {paymentInfo && paymentInfo?.slice(0, 6)?.map((payment, idx) => (
                                    <tr key={idx} className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-dark-text group/tr"> 
                                        <td className="flex items-center gap-2 px-7 py-6">
                                            <i className="ri-bank-card-line text-2xl text-inherit"></i>
                                            <div className="flex items-center">
                                                <h6 className="text-lg leading-none text-heading font-bold">
                                                    <a href="#">#{payment?.id}</a>
                                                </h6>
                                                <p>({payment?.method})</p>
                                            </div>
                                        </td>
                                        <td className="px-7 py-6">{payment?.dateTime}</td>
                                        <td className="px-7 py-6">{payment?.code}</td>
                                        <td className="px-7 py-6">${payment?.price}</td>
                                        <td className="px-7 py-6">
                                            <a href={invoice} download className="size-8 flex-center rounded-50 bg-primary-200 dark:bg-dark-icon">
                                                <i className="ri-download-cloud-2-line text-primary-500"></i>
                                            </a>
                                        </td>
                                        <td className="px-7 py-6">
                                            <div className="relative">
                                                <button data-popover-target={`payHistory${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                    <i className="ri-more-2-fill text-inherit"></i>
                                                </button>
                                                <ul id={`payHistory${idx}`} className="popover-target invisible" data-popover>
                                                    <li>
                                                        <a className="popover-item" href="#">See</a>
                                                    </li>
                                                    <li>
                                                        <a className="popover-item" href="#">Share</a>
                                                    </li>
                                                    <li>
                                                        <a className="popover-item" href="#">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* End Payment Information Table */}

                    {/* Start Pagination */}
                    <div className="px-3 sm:px-6 py-4 border-t border-gray-200 dark:border-dark-border">
                        <div className="flex-center-between mt-4">
                            <div className="leading-none text-xs font-semibold text-gray-900 dark:text-dark-text">Showing 4 of 20 entries</div>
                            <ul className="flex items-center gap-1 5 *:text-xs *:text-gray-900 dark:text-dark-text">
                                <li>
                                    <a href="#" className="size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white">01</a>
                                </li>
                                <li>
                                    <a href="#" className="size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white">02</a>
                                </li>
                                <li>
                                    <a href="#" className="size-6 border-[0.5px] border-gray-900/50 rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white">03</a>
                                </li>
                                <li>
                                    <a href="#" className="size-6 border-[0.5px] border-transparent hover:border-gray-900/50 rounded-[5px] flex-center bg-primary-500 hover:bg-transparent text-white hover:text-gray-900 dark:text-dark-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                            <path d="M10.9593 5L1 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.94254 1L10.9595 4.99967L6.94254 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Pagination */}
                </div>
            </div>
        </div>
        </>
    )
}