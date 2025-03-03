export default function Pagination({ basicPagination, roundedPagination, pages, leftPagiIcon, rightPagiIcon, shadow, currentPage, onPageChange, rotatePagination, countNumberPagination, differentPagination, newPagination, newStockPagination }) {
    return (
        <>
        {basicPagination && <div>
            <ul className={`inline-flex items-center h-10 text-base font-spline_sans divide-x dark:divide-dark-border ${shadow ? 'shadow-paginate-shadow':'dk-border-one'}`}>
                {/* Left Pagination Icon */}
                <li>
                    <a href="#" className="paginate px-3 text-primary-500">
                    {leftPagiIcon}
                    </a>
                </li>
        
                {/* Page Numbers */}
                {pages.map((page, index) => (
                    <li key={index}>
                    <a href="#" className={`paginate ${index === 3 ? 'active' : ''}`}>
                        {page}
                    </a>
                    </li>
                ))}
        
                {/* Right Pagination Icon */}
                <li>
                    <a href="#" className="paginate px-3 text-primary-500">
                    {rightPagiIcon}
                    </a>
                </li>
            </ul>
        </div>}
        {roundedPagination &&
        <div>
            <ul className="inline-flex items-center -space-x-px h-10 text-base font-spline_sans">
                {/* Left Pagination Icon */}
                <li>
                    <a href="#" className="paginate rounded-full size-10 text-primary-500" onClick={() => onPageChange(currentPage - 1)}>
                    {leftPagiIcon}
                    </a>
                </li>
                {/* Render the pages dynamically */}
                {pages.map((page, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className={`paginate rounded-full size-10 ${currentPage === page ? 'active' : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                {/* "More" disabled button */}
                {pages.length > 5 && (
                    <li>
                        <button disabled type="button" className="px-1.5 rotate-90 text-disable">
                            <i className="ri-more-2-fill text-inherit"></i>
                        </button>
                    </li>
                )}
                {/* Right Pagination Icon */}
                <li>
                    <a href="#" className="paginate rounded-full size-10 px-3 text-primary-500" onClick={() => onPageChange(currentPage + 1)}>
                    {rightPagiIcon}
                    </a>
                </li>
            </ul>
        </div>
        }
        {rotatePagination && 
        <div>
            <ul className="inline-flex items-center space-x-1 h-10 text-base font-spline_sans">
                {/* Left Pagination Icon */}
                <li>
                    <a href="#" className="paginate rounded-md size-10 rotate-45 text-primary-500" onClick={() => onPageChange(currentPage - 1)}>
                    {leftPagiIcon}
                    </a>
                </li>
                {/* Render the pages dynamically */}
                {pages.map((page, index) => (
                    <li key={index} className="paginate rounded-md size-10 rotate-45">
                        <a
                            href="#"
                            className={`-rotate-45 ${currentPage === page ? 'active' : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                {/* "More" disabled button */}
                {pages.length > 5 && (
                    <li>
                        <button disabled type="button" className="px-1.5 rotate-90 text-disable">
                            <i className="ri-more-2-fill text-inherit"></i>
                        </button>
                    </li>
                )}
                {/* Right Pagination Icon */}
                <li>
                    <a href="#" className="paginate rounded-md size-10 rotate-45 text-primary-500" onClick={() => onPageChange(currentPage + 1)}>
                    {rightPagiIcon}
                    </a>
                </li>
            </ul>
        </div>
        }
        {countNumberPagination &&
            <div className="flex justify-between items-center font-spline_sans">
                <div className="flex items-center font-urbanist font-medium">
                    <a href="#" className="text-gray-500 dark:text-dark-text">
                        <i className="ri-arrow-left-s-line text-inherit text-2xl"></i>
                    </a>
                    <span className="ml-4 text-gray-500 dark:text-dark-text">Page</span>
                    <select className="form-input p-0 pl-1 mx-2 w-12 h-10">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option selected value="3">10</option>
                    </select>
                    <span className="mr-4 text-gray-500 dark:text-dark-text">Of / {pages?.length}</span>
                    <a href="#" className="text-gray-500 dark:text-dark-text">
                        <i className="ri-arrow-right-s-line text-inherit text-2xl"></i>
                    </a>
                </div>
                <ul className="flex mx-4 gap-x-2">
                    {/* Page Numbers */}
                    {pages.map((page, index) => (
                        <li key={index}>
                            <a href="#" className={`count-paginate ${index === 3 ? 'active' : ''}`}>
                                {page < 10 ? `0${page}`: page}
                            </a>
                        </li>
                    ))}
                    {/* Right Pagination Icon */}
                    <li>
                        <a href="#" className="count-paginate text-primary-500">
                        {rightPagiIcon}
                        </a>
                    </li>
                </ul>
            </div>
        }
        {differentPagination &&
            <div>
                <ul className="inline-flex items-center h-10 text-base font-spline_sans dk-border-one divide-x dark:divide-dark-border rounded-full overflow-hidden">
                    {/* Left Pagination Icon */}
                    <li>
                        <a href="#" className="paginate text-primary-500" onClick={() => onPageChange(currentPage - 1)}>
                        {leftPagiIcon}
                        </a>
                    </li>
                    {/* Render the pages dynamically */}
                    {pages.map((page, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className={`paginate ${currentPage === page ? 'active' : ''}`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                    {/* "More" disabled button */}
                    {pages.length > 3 && (
                        <li>
                            <button disabled type="button" className="px-1.5 rotate-90 text-disable">
                                <i className="ri-more-2-fill text-inherit"></i>
                            </button>
                        </li>
                    )}
                    {/* Right Pagination Icon */}
                    <li>
                        <a href="#" className="paginate text-primary-500" onClick={() => onPageChange(currentPage + 1)}>
                        {rightPagiIcon}
                        </a>
                    </li>
                </ul>
            </div>
        }
        {newPagination &&
            <div className="flex items-center gap-x-2">
                {/* Left Pagination Icon */}
                <a href="#" className="paginate rounded-full size-16 bg-[#F3F3F3] dark:bg-dark-card-shade text-primary-500">
                    {leftPagiIcon}
                </a>
                <ul className="inline-flex items-center space-x-2 p-3 text-base font-spline_sans rounded-full bg-[#F3F3F3] dark:bg-dark-card-shade">
                    {pages.map((page, index) => (
                        <li key={index}>
                        <a href="#" className={`paginate rounded-full size-10 bg-white dark:bg-dark-icon shadow-paginate-shadow ${index === 2 ? 'active' : ''}`}>
                            {page}
                        </a>
                        </li>
                    ))}
                    {/* "More" disabled button */}
                    {pages.length > 5 && (
                        <li>
                            <button disabled type="button" className="px-1.5 rotate-90 text-disable">
                                <i className="ri-more-2-fill text-inherit"></i>
                            </button>
                        </li>
                    )}
                    {/* "More" disabled button */}
                    {pages.length > 2 && (
                        <li>
                            <button disabled type="button" className="paginate rounded-full size-10 bg-white dark:bg-dark-icon rotate-90 shadow-paginate-shadow">
                                <i className="ri-more-2-fill text-inherit"></i>
                            </button>
                        </li>
                    )}
                    <li>
                    <a href="#" className="paginate rounded-full size-10 bg-white dark:bg-dark-icon">10</a>
                    </li>
                </ul>
                <a href="#" className="paginate rounded-full size-16 bg-[#F3F3F3] dark:bg-dark-card-shade px-3 text-primary-500">
                    {rightPagiIcon}
                </a>
        </div>
        }
        {newStockPagination &&
            <div>
                <ul className="inline-flex items-center space-x-1 p-3 text-base font-spline_sans rounded-full shadow-paginate-shadow">
                    {/* Left Pagination Icon */}
                    <li>
                        <a href="#" className="paginate hover:bg-transparent border border-transparent hover:border-primary-500 rounded-full size-10 text-primary-500 hover:text-primary-500" onClick={() => onPageChange(currentPage - 1)}>
                        {leftPagiIcon}
                        </a>
                    </li>
                    {/* Render the pages dynamically */}
                    {pages.map((page, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className={`stock-paginate ${currentPage === page ? 'active' : ''}`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                    {/* "More" disabled button */}
                    {pages.length > 2 && (
                        <li>
                            <button disabled type="button" className="stock-paginate text-disable rotate-90">
                                <i className="ri-more-2-fill text-inherit"></i>
                            </button>
                        </li>
                    )}
                    {/* Right Pagination Icon */}
                    <li>
                        <a href="#" className="stock-paginate">10</a>
                    </li>
                    <li>
                        <a href="#" className="paginate [&.active]:border-primary-500 [&.active]:bg-transparent [&.active]:text-primary-500 hover:bg-transparent border border-transparent hover:border-primary-500 hover:text-primary-500 rounded-full size-10 px-3 text-primary-500" onClick={() => onPageChange(currentPage + 1)}>
                        {rightPagiIcon}
                        </a>
                    </li>
                </ul>
            </div>
        }
      </>
    );
  }
  

