
import useApexCharts from "../Charts/useApexCharts";
import lotiEcomLight from "@/assets/images/loti/loti-ecommerce-app.svg"
import lotiEcomDark from "@/assets/images/loti/loti-ecommerce-app-dark.svg"
import SimpleCounter from "../../components/Counter/Counter";
import { countrySales, orderCategories, recentOrders } from "../../data/data";
import { bestShops, orders, productDelivery, productStocks } from "../../data/table";
import Chart from "react-apexcharts";
import FormateDate from "../../components/SimpleComponents/FormateDate";
export default function Ecommerce(){

	const { sellOverviewOption } = useApexCharts();
    const {formattedDate} = FormateDate();

    return(
        <>
        {/* Start Main Content */}
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="grid grid-cols-12 gap-x-4">
            {/* Start Dashboard Header */}
            <div className="col-span-full">
                <div className="card bg-heading dark:bg-primary-500 py-7 xl:mb-[104px]">
                <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between">
                    <div className="shrink-0">
                    <h1 className="text-white text-[25px] leading-none font-semibold flex-center gap-2 justify-start">
                        <span className="shrink-0">Good Day, Orion</span>
                        <span className="select-none hidden md:inline-block animate-hand-wave origin-[70%_70%]">👋</span>
                    </h1>
                    <p className="font-spline_sans text-sm text-dark-text dark:text-white mt-2">Here's what’s updating with your E-shop today</p>
                    </div>
                    <div className="shrink-0">
                    <p className="font-spline_sans text-sm !leading-none text-white today">{formattedDate}</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 px-0 sm:px-6 mt-8 xl:mb-[-116px]">
                    {/* Total Sales Card */}
                    <div className="card col-span-full md:col-span-6 xl:col-span-3 p-5 rounded-20 flex flex-col gap-8 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% mb-0">
                    <div className="flex-center-between">
                        <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Total Sales</h6>
                        <div className="size-11 rounded-lg text-primary-500 dark:text-white bg-primary-200 dark:bg-dark-icon flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={20} viewBox="0 0 28 20" fill="none">
                            <path d="M11.8368 7.46258e-05C11.5116 -0.00425868 11.1907 0.180472 11.0314 0.463643L7.17498 6.98203C5.05589 6.98203 2.91939 6.98203 0.807554 6.98203C0.281816 7.03849 -0.115598 7.62884 0.0305766 8.13622L2.44679 16.5846C2.44936 16.5946 2.45364 16.6028 2.45626 16.6131C2.71303 17.6025 3.14344 18.4554 3.81123 19.0634C4.48584 19.6776 5.39087 20.0022 6.3601 20H20.9142C21.8833 20.003 22.7885 19.6776 23.4631 19.0634C24.1309 18.4554 24.5613 17.6025 24.818 16.6131C24.8196 16.607 24.8165 16.6 24.818 16.5943L24.8275 16.5849L27.2437 8.13653C27.3948 7.59978 26.9301 6.9845 26.372 6.98203H23.9463C23.4657 6.97524 23.0237 7.41038 23.0237 7.89025C23.0237 8.37012 23.4657 8.80525 23.9463 8.79846H25.1686L23.0746 16.1115C23.0713 16.1209 23.0681 16.1303 23.0651 16.14C22.8709 16.9012 22.5696 17.4119 22.2313 17.7199C21.893 18.0279 21.5078 18.1848 20.9142 18.1835H6.3601C5.76664 18.1835 5.38132 18.0279 5.04303 17.7199C4.70473 17.4119 4.40338 16.9013 4.2092 16.14C4.2062 16.1306 4.20304 16.1209 4.19972 16.1115L2.10567 8.79846H20.9142C21.3948 8.80525 21.8368 8.37012 21.8368 7.89025C21.8368 7.41038 21.3948 6.97524 20.9142 6.98203H20.0993L16.2429 0.463643C16.0636 0.144372 15.6768 -0.0447857 15.3143 0.00954427C15.0183 0.0529561 14.7499 0.252134 14.6229 0.522533C14.4959 0.792928 14.5142 1.12639 14.67 1.38133L17.9863 6.98203H9.28797L12.6043 1.38133C12.7708 1.10883 12.7783 0.746804 12.6232 0.467694C12.4681 0.188583 12.1565 0.0032837 11.8368 7.46258e-05ZM5.0525 10.0095C4.57616 10.034 4.16528 10.4894 4.19009 10.965C4.2149 11.4406 4.67092 11.8507 5.14726 11.8259H9.69541C10.176 11.8326 10.618 11.3975 10.618 10.9176C10.618 10.4378 10.176 10.0027 9.69541 10.0095C8.15163 10.0094 6.58885 10.0095 5.0525 10.0095ZM5.0525 12.7341C4.57616 12.7589 4.16528 13.214 4.19009 13.6896C4.2149 14.1652 4.67092 14.5754 5.14726 14.5505H9.69541C10.176 14.5572 10.618 14.1222 10.618 13.6423C10.618 13.1625 10.176 12.7273 9.69541 12.7341C8.15163 12.7341 6.58885 12.7341 5.0525 12.7341Z" fill="currentColor" />
                        </svg>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="card-title text-[32px]">
                        $<SimpleCounter value={280}/>k
                        </div>
                        <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                        <span className="text-lg font-semibold text-primary-500">
                            <i className="ri-arrow-up-line text-inherit font-normal" />
                            2.09%
                        </span>
                        <span className="font-spline_sans text-gray-700 dark:text-dark-text-two"> VS / last week</span>
                        </div>
                    </div>
                    </div>
                    {/* Total Orders Card */}
                    <div className="card col-span-full md:col-span-6 xl:col-span-3 p-5 rounded-20 flex flex-col gap-8 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% mb-0">
                    <div className="flex-center-between">
                        <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Total Orders</h6>
                        <div className="size-11 rounded-lg text-primary-500 dark:text-white bg-primary-200 dark:bg-dark-icon flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M20.97 6.20158L12.72 1.68752C12.4996 1.56572 12.2518 1.50183 12 1.50183C11.7482 1.50183 11.5004 1.56572 11.28 1.68752L3.03 6.20345C2.7944 6.33237 2.59772 6.52217 2.46052 6.75304C2.32331 6.98391 2.25061 7.24739 2.25 7.51595V16.4822C2.25061 16.7508 2.32331 17.0142 2.46052 17.2451C2.59772 17.476 2.7944 17.6658 3.03 17.7947L11.28 22.3106C11.5004 22.4324 11.7482 22.4963 12 22.4963C12.2518 22.4963 12.4996 22.4324 12.72 22.3106L20.97 17.7947C21.2056 17.6658 21.4023 17.476 21.5395 17.2451C21.6767 17.0142 21.7494 16.7508 21.75 16.4822V7.51689C21.7499 7.24785 21.6774 6.98379 21.5402 6.75238C21.403 6.52096 21.206 6.33072 20.97 6.20158ZM12 3.00002L19.5319 7.12502L16.7409 8.65314L9.20813 4.52814L12 3.00002ZM12 11.25L4.46812 7.12502L7.64625 5.38502L15.1781 9.51002L12 11.25ZM3.75 8.43752L11.25 12.5419V20.5847L3.75 16.4831V8.43752ZM20.25 16.4794L12.75 20.5847V12.5456L15.75 10.9041V14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15C16.6989 15 16.8897 14.921 17.0303 14.7803C17.171 14.6397 17.25 14.4489 17.25 14.25V10.0828L20.25 8.43752V16.4785V16.4794Z" fill="currentColor" />
                        </svg>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="card-title text-[32px]">
                        <SimpleCounter value={2352}/>
                        </div>
                        <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                        <span className="text-lg font-semibold text-success">
                            <i className="ri-arrow-up-line text-inherit font-normal" />
                            5.27%
                        </span>
                        <span className="font-spline_sans text-gray-700 dark:text-dark-text-two"> VS / last week</span>
                        </div>
                    </div>
                    </div>
                    {/* Customers Card */}
                    <div className="card col-span-full md:col-span-6 xl:col-span-3 p-5 rounded-20 flex flex-col gap-8 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% mb-0">
                    <div className="flex-center-between">
                        <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Customers</h6>
                        <div className="size-11 rounded-lg text-primary-500 dark:text-white bg-primary-200 dark:bg-dark-icon flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M22.9503 14.1C22.8715 14.1591 22.7818 14.2021 22.6864 14.2265C22.591 14.251 22.4917 14.2564 22.3942 14.2424C22.2967 14.2285 22.2029 14.1955 22.1182 14.1453C22.0334 14.0952 21.9594 14.0288 21.9003 13.95C21.4482 13.3424 20.8598 12.8493 20.1824 12.5107C19.5051 12.172 18.7576 11.997 18.0003 12C17.8528 12 17.7086 11.9565 17.5857 11.8749C17.4628 11.7934 17.3667 11.6774 17.3093 11.5415C17.2704 11.4493 17.2504 11.3501 17.2504 11.25C17.2504 11.1498 17.2704 11.0507 17.3093 10.9584C17.3667 10.8225 17.4628 10.7066 17.5857 10.625C17.7086 10.5435 17.8528 10.5 18.0003 10.5C18.4211 10.4999 18.8335 10.3819 19.1906 10.1592C19.5476 9.93659 19.8351 9.61825 20.0204 9.2404C20.2056 8.86254 20.2812 8.44031 20.2385 8.02167C20.1958 7.60302 20.0365 7.20474 19.7788 6.87207C19.5211 6.53939 19.1753 6.28566 18.7806 6.13969C18.3859 5.99371 17.9582 5.96135 17.546 6.04628C17.1338 6.13121 16.7538 6.33002 16.4489 6.62013C16.1441 6.91024 15.9267 7.28003 15.8215 7.68748C15.7969 7.7829 15.7537 7.87253 15.6945 7.95126C15.6352 8.02998 15.561 8.09627 15.4761 8.14632C15.3913 8.19638 15.2974 8.22923 15.1998 8.24299C15.1022 8.25676 15.0029 8.25117 14.9075 8.22655C14.8121 8.20192 14.7224 8.15875 14.6437 8.09949C14.565 8.04023 14.4987 7.96604 14.4486 7.88116C14.3986 7.79628 14.3657 7.70237 14.352 7.6048C14.3382 7.50723 14.3438 7.4079 14.3684 7.31248C14.5144 6.74747 14.7903 6.22433 15.1741 5.78469C15.5579 5.34505 16.039 5.00105 16.5791 4.78006C17.1192 4.55907 17.7034 4.46719 18.2853 4.51173C18.8672 4.55627 19.4307 4.736 19.9309 5.03662C20.431 5.33724 20.8542 5.75045 21.1666 6.24338C21.479 6.7363 21.672 7.29533 21.7303 7.87599C21.7887 8.45665 21.7107 9.04291 21.5026 9.58812C21.2944 10.1333 20.9619 10.6224 20.5315 11.0165C21.5514 11.4581 22.4379 12.1588 23.1031 13.049C23.1622 13.128 23.2051 13.2179 23.2294 13.3135C23.2537 13.4091 23.2589 13.5086 23.2447 13.6062C23.2305 13.7038 23.1972 13.7977 23.1467 13.8824C23.0962 13.9672 23.0294 14.0411 22.9503 14.1ZM17.899 19.875C17.9533 19.9603 17.9897 20.0558 18.0062 20.1556C18.0226 20.2554 18.0186 20.3575 17.9946 20.4558C17.9705 20.554 17.9268 20.6464 17.8661 20.7273C17.8054 20.8082 17.729 20.876 17.6414 20.9267C17.5539 20.9773 17.4569 21.0097 17.3565 21.0219C17.2561 21.0341 17.1543 21.0258 17.0571 20.9976C16.96 20.9695 16.8695 20.9219 16.7912 20.8579C16.713 20.7938 16.6484 20.7146 16.6015 20.625C16.1291 19.825 15.4562 19.162 14.6493 18.7014C13.8424 18.2409 12.9294 17.9986 12.0003 17.9986C11.0712 17.9986 10.1582 18.2409 9.35126 18.7014C8.54436 19.162 7.87149 19.825 7.39903 20.625C7.35215 20.7146 7.28762 20.7938 7.20932 20.8579C7.13102 20.9219 7.04058 20.9695 6.94344 20.9976C6.84629 21.0258 6.74445 21.0341 6.64403 21.0219C6.54362 21.0097 6.44671 20.9773 6.35914 20.9267C6.27156 20.876 6.19513 20.8082 6.13445 20.7273C6.07376 20.6464 6.03007 20.554 6.00601 20.4558C5.98194 20.3575 5.978 20.2554 5.99441 20.1556C6.01083 20.0558 6.04727 19.9603 6.10153 19.875C6.82866 18.6257 7.93734 17.6425 9.26466 17.07C8.51778 16.4981 7.96887 15.7066 7.6951 14.8067C7.42132 13.9068 7.43644 12.9437 7.73833 12.0528C8.04022 11.1619 8.6137 10.388 9.37816 9.83987C10.1426 9.29175 11.0596 8.99698 12.0003 8.99698C12.9409 8.99698 13.8579 9.29175 14.6224 9.83987C15.3869 10.388 15.9603 11.1619 16.2622 12.0528C16.5641 12.9437 16.5792 13.9068 16.3055 14.8067C16.0317 15.7066 15.4828 16.4981 14.7359 17.07C16.0632 17.6425 17.1719 18.6257 17.899 19.875ZM12.0003 16.5C12.5936 16.5 13.1736 16.324 13.667 15.9944C14.1603 15.6648 14.5449 15.1962 14.7719 14.648C14.999 14.0999 15.0584 13.4967 14.9426 12.9147C14.8269 12.3328 14.5412 11.7982 14.1216 11.3787C13.702 10.9591 13.1675 10.6734 12.5856 10.5576C12.0036 10.4419 11.4004 10.5013 10.8522 10.7283C10.3041 10.9554 9.83552 11.3399 9.50588 11.8333C9.17623 12.3266 9.00028 12.9066 9.00028 13.5C9.00028 14.2956 9.31635 15.0587 9.87896 15.6213C10.4416 16.1839 11.2046 16.5 12.0003 16.5ZM6.75028 11.25C6.75028 11.0511 6.67127 10.8603 6.53061 10.7197C6.38996 10.579 6.1992 10.5 6.00028 10.5C5.57947 10.4999 5.16709 10.3819 4.81 10.1592C4.45292 9.93659 4.16543 9.61825 3.98019 9.2404C3.79495 8.86254 3.71939 8.44031 3.76209 8.02167C3.8048 7.60302 3.96405 7.20474 4.22176 6.87207C4.47947 6.53939 4.82531 6.28566 5.22 6.13969C5.61469 5.99371 6.04241 5.96135 6.45457 6.04628C6.86672 6.13121 7.2468 6.33002 7.55164 6.62013C7.85647 6.91024 8.07383 7.28003 8.17903 7.68748C8.22876 7.88018 8.353 8.04523 8.52442 8.14632C8.69584 8.24742 8.9004 8.27628 9.0931 8.22655C9.28579 8.17682 9.45084 8.05258 9.55194 7.88116C9.65303 7.70974 9.68189 7.50518 9.63216 7.31248C9.48614 6.74747 9.21026 6.22433 8.82648 5.78469C8.4427 5.34505 7.96161 5.00105 7.42149 4.78006C6.88137 4.55907 6.29712 4.46719 5.71524 4.51173C5.13336 4.55627 4.56991 4.736 4.06972 5.03662C3.56952 5.33724 3.14639 5.75045 2.83399 6.24338C2.52159 6.7363 2.32855 7.29533 2.27022 7.87599C2.2119 8.45665 2.2899 9.04291 2.49801 9.58812C2.70613 10.1333 3.03862 10.6224 3.46903 11.0165C2.45024 11.4585 1.5647 12.1592 0.900284 13.049C0.780813 13.2082 0.729448 13.4082 0.757491 13.6053C0.785533 13.8023 0.890686 13.98 1.04982 14.0995C1.20895 14.219 1.40902 14.2704 1.60602 14.2423C1.80302 14.2143 1.98081 14.1091 2.10028 13.95C2.55233 13.3424 3.14073 12.8493 3.81812 12.5107C4.49551 12.172 5.24295 11.997 6.00028 12C6.1992 12 6.38996 11.921 6.53061 11.7803C6.67127 11.6397 6.75028 11.4489 6.75028 11.25Z" fill="currentColor" />
                        </svg>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="card-title text-[32px]">
                            <SimpleCounter value={48254}/>
                        </div>
                        <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                        <span className="text-lg font-semibold text-danger">
                            <i className="ri-arrow-down-line text-inherit font-normal" />
                            1.04%
                        </span>
                        <span className="font-spline_sans text-gray-700 dark:text-dark-text-two"> VS / last week</span>
                        </div>
                    </div>
                    </div>
                    {/* Growth Card */}
                    <div className="card col-span-full md:col-span-6 xl:col-span-3 p-5 rounded-20 flex flex-col gap-8 bg-card-pattern dark:bg-card-pattern-dark bg-no-repeat bg-100% mb-0">
                    <div className="flex-center-between">
                        <h6 className="leading-none text-gray-500 dark:text-dark-text font-semibold">Growth</h6>
                        <div className="size-11 rounded-lg text-primary-500 dark:text-white bg-primary-200 dark:bg-dark-icon flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={20} viewBox="0 0 33 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.396 5.34203H8.67346C8.35929 5.34203 8.11244 5.59308 8.11244 5.90305V10.4501H2.37873C2.07577 10.4501 1.8177 10.7011 1.8177 11.0111V18.878H0.56102C0.246849 18.878 0 19.1304 0 19.439C0 19.7489 0.246849 20 0.56102 20H22.9232C23.2374 20 23.4842 19.7489 23.4842 19.439C23.4842 19.1304 23.2374 18.878 22.9232 18.878H21.8012V15.8709C23.0018 16.056 24.236 15.8737 25.3468 15.3267L29.3075 19.2932C29.6666 19.6466 30.1491 19.8472 30.6428 19.8472C31.1477 19.8472 31.6302 19.6466 31.9892 19.2932V19.2918C32.337 18.9369 32.539 18.4559 32.539 17.9537C32.539 17.4516 32.337 16.9705 31.9892 16.6157L28.0174 12.6507C29.117 10.4374 28.7467 7.67849 26.8953 5.83583C25.5152 4.4501 23.6078 3.89612 21.8011 4.17381V0.56102C21.8011 0.251057 21.5542 0 21.2401 0H14.9566C14.6425 0 14.3956 0.251057 14.3956 0.56102L14.396 5.34203ZM9.23466 6.46407V18.878H14.396V6.46407H9.23466ZM2.9401 11.5723V18.8783H8.11262V11.5723H2.9401ZM15.5181 18.8783H20.6795V15.5851C19.894 15.299 19.1647 14.839 18.5252 14.2092C16.2137 11.8992 16.2137 8.14591 18.5252 5.83612C19.1647 5.20638 19.894 4.74632 20.6795 4.46023V1.12215H15.5181V18.8783ZM27.4117 13.6272C27.2546 13.8291 27.0863 14.0241 26.8956 14.2092C26.716 14.393 26.5253 14.5641 26.3233 14.7184L30.1045 18.4996C30.2391 18.6426 30.4411 18.7254 30.6431 18.7254C30.845 18.7254 31.047 18.6426 31.1929 18.4996V18.4982C31.3387 18.3537 31.4173 18.1587 31.4173 17.954C31.4173 17.7492 31.3387 17.5542 31.1929 17.4084L27.4117 13.6272ZM19.3219 6.63139C21.1957 4.75756 24.2366 4.75756 26.1101 6.63139C27.984 8.50237 27.984 11.5432 26.1101 13.4157C24.2363 15.2881 21.1954 15.2881 19.3219 13.4157C17.4481 11.5433 17.4481 8.50241 19.3219 6.63139Z" fill="currentColor" />
                        </svg>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="card-title text-[32px]">
                        +<SimpleCounter value={30.56}/>%
                        </div>
                        <div className="leading-none text-gray-500 dark:text-dark-text mt-2">
                        <span className="text-lg font-semibold text-success">
                            <i className="ri-arrow-up-line text-inherit font-normal" />
                            4.87%
                        </span>
                        <span className="font-spline_sans text-gray-700 dark:text-dark-text-two"> VS / last week</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Start Dashboard Header */}
            {/* Start Sells Overview */}
            <div className="col-span-full 2xl:col-span-7 card">
                <div className="flex-center-between">
                <h6 className="card-title">Sells Overview</h6>
                <select className="form-input form-select">
                    <option>This Month</option>
                    <option>This Year</option>
                    <option>This Week</option>
                </select>
                </div>
                {/* <div id="sells-overview-chart" /> */}
                <Chart options={sellOverviewOption.options} series={sellOverviewOption.series} type="area" height={340} />
            </div>
            {/* End Sells Overview */}
            {/* Start Recent Order */}
            <div className="col-span-full 2xl:col-span-5 card">
                <div className="flex-center-between">
                <h6 className="card-title">Recent Order</h6>
                <a href="#" className="btn b-solid btn-primary-solid btn-sm">View all</a>
                </div>
                <div className="mt-5">
                {/* Product List Tab */}
                <ul className="flex items-center gap-2 flex-nowrap overflow-y-hidden overscroll-x-auto py-5 dk-border-one !border-x-0">
                    {orderCategories && orderCategories?.map((category, index) => (
                        <li key={index} className="p-2 rounded-lg dk-border-one text-gray-800 dark:text-dark-text hover:bg-primary-500 [&.active]:bg-primary-500 hover:text-white [&.active]:text-white !border-primary-200 [&.active]:border-primary-500 dark:!border-dark-border flex-center shrink-0 gap-2 cursor-pointer ac-transition group/product">
                            <div className="size-6 flex-center bg-primary-200 dark:bg-dark-icon group-hover/product:bg-white group-[.active]/product:bg-white rounded-[4px] shrink-0">
                                <img src={category?.image} alt="product" />
                            </div>
                            <h6 className="text-inherit font-medium leading-none shrink-0 hidden sm:block">{category?.name}</h6>
                        </li>
                    ))}
                </ul>
                {/* Product Content */}
                <div className="mt-0">
                    {/* Tab Content */}
                    <div className="overflow-x-auto scrollbar-table">
                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                        {/* Table Row */}
                        {recentOrders && recentOrders?.map((order, idx) => (
                            <tr key={idx}> 
                                <td className="px-4 py-5 first:pl-0">
                                <div className="flex items-center gap-3">
                                    <a href="#" className="size-12 rounded-lg overflow-hidden shrink-0">
                                    <img src={order?.image} alt="product" />
                                    </a>
                                    <div>
                                    <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">{order?.title}</h6>
                                    <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{order?.item} Items</p>
                                    </div>
                                </div>
                                </td>
                                <td className="px-4 py-5 first:pl-0">{order?.stock}</td>
                                <td className="px-4 py-5 first:pl-0">{order?.totalSell}k</td>
                                <td className="px-4 py-5 first:pl-0">${order?.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    {/* Tab Content */}
                    <div className="hidden">
                    <div>No Product Ordered</div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Recent Order */}
            <div className="col-span-full grid grid-cols-12 gap-x-4">
                <div className="col-span-full 2xl:col-span-7">
                {/* Start Best Shop Seller */}
                <div className="col-span-full 2xl:col-span-7 card">
                    <div className="flex-center-between">
                        <h6 className="card-title">Best Shop Seller</h6>
                        <a href="#" className="btn b-solid btn-primary-solid btn-sm">View all</a>
                    </div>
                    <div className="overflow-x-auto scrollbar-table mt-5">
                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                        <thead className="text-gray-500 dark:text-dark-text">
                        <tr>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Shop</th>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Category</th>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Status</th>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Price</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                            {/* Table Row */}
                            {bestShops && bestShops?.map((product, idx) => (
                                <tr key={idx}> 
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <a href="#" className="size-12 rounded-lg overflow-hidden shrink-0">
                                                <img src={product?.image} alt="product" />
                                            </a>
                                            <div>
                                                <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">{product?.title}</h6>
                                                <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{product?.totalSell}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">{product?.category}</td>
                                    <td className="px-4 py-4">
                                        <span className={`${{'in stock': 'badge-primary-outline','out of stock': 'badge-danger-outline','low stock': 'badge-warning-outline','limited stock': 'badge-warning-outline','available': 'badge-success-outline'}[product?.status] || 'badge-primary-outline'} badge b-outline capitalize`}>
                                            {product?.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">${product?.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                {/* End Best Shop Seller */}
                {/* Start New E-commerce App Banner */}
                <div className="col-span-full 2xl:col-span-7 card">
                    <div className="grid grid-cols-2 gap-24 max-w-full 3xl:max-w-[65%] mx-auto py-[70px]">
                        <div className="col-span-full md:col-auto self-center">
                            <h2 className="text-[20px] text-gray-500 dark:text-dark-text-two">
                            Have You Tried the 
                                <span className="text-heading dark:text-white font-semibold">New E-commerce App?</span>
                            </h2>
                            <div className="flex items-center gap-4 mt-8">
                                <a href="#" className="btn b-solid btn-primary-solid">View App</a>
                                <a href="#" className="btn b-light btn-light-light dark:!text-white dark:!bg-light">New Product</a>
                            </div>
                        </div>
                        <div className="col-span-full md:col-auto self-center flex-center">
                            <img src={lotiEcomLight} alt="loti" className="group-data-[theme-mode=dark]:hidden" />
                            <img src={lotiEcomDark} alt="loti" className="group-data-[theme-mode=light]:hidden" />
                        </div>
                    </div>
                </div>
                {/* End New E-commerce App Banner */}
                </div>
                <div className="col-span-full 2xl:col-span-5">
                {/* Start Countries By Sales */}
                <div className="col-span-full 2xl:col-span-5 card">
                    <div className="flex-center-between">
                        <h6 className="card-title">Countries By Sales</h6>
                        <a href="#" className="btn b-solid btn-primary-solid btn-sm">View all</a>
                    </div>
                    <div className="flex flex-col gap-8 mt-5">
                        <div id="sell-by-country-map" className="h-[350px] grow shrink-0" />
                        <ul className="flex flex-col gap-3">
                            {countrySales && countrySales?.map((country, idx) => (
                                <li key={idx} className="bg-white dark:bg-dark-card-shade flex-center-between px-3 sm:px-6 py-4 shadow-md rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="size-14 rounded-50 overflow-hidden shrink-0">
                                            <img src={country?.image} alt="Customer" />
                                        </div>
                                        <div>
                                            <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">{country?.countryName}</h6>
                                            <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two">{country?.region}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 shrink-0">
                                        <div className="text-xs leading-none text-gray-800 dark:text-dark-text font-semibold self-end">{country?.progress}%</div>
                                        <div className="relative w-[106px] h-2 rounded-full bg-primary-200 dark:bg-dark-icon overflow-hidden">
                                            <div className={`absolute top-0 left-0 bottom-0 bg-primary-500 rounded-full w-[${country?.progress}%]`} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* End Countries By Sales */}
                </div>
            </div>
            {/* Start Product Stock */}
            <div className="col-span-full 2xl:col-span-7 card">
                <div className="flex-center-between">
                    <h6 className="card-title">Product Stock</h6>
                    <a href="#" className="btn b-solid btn-primary-solid btn-sm">View all</a>
                </div>
                <div className="overflow-x-auto scrollbar-table mt-5">
                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                        <thead className="text-gray-500 dark:text-dark-text">
                            <tr>
                                <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Product</th>
                                <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Status</th>
                                <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Category</th>
                                <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Quantity</th>
                                <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                        {/* Table Row */}
                            {productStocks && productStocks?.map((product, idx) => (
                                <tr key={idx}> 
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <a href="#" className="size-12 rounded-lg overflow-hidden shrink-0">
                                                <img src={product?.image} alt="product" />
                                            </a>
                                            <div>
                                                <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">{product?.title}</h6>
                                                <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{product?.totalSell}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={`${{'in stock': 'badge-primary-light','out of stock': 'badge-danger-light','low stock': 'badge-warning-light','limited stock': 'badge-warning-light','available': 'badge-success-light'}[product?.status] || 'badge-primary-light'} badge capitalize`}>{product?.status}</span>
                                    </td>
                                    <td className="px-4 py-4">{product?.category}</td>
                                    <td className="px-4 py-4">{product?.quantity}</td>
                                    <td className="px-4 py-4">${product?.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* End Product Stock */}
            {/* Start Product Delivery */}
            <div className="col-span-full 2xl:col-span-5 card">
                <div className="flex-center-between">
                    <h6 className="card-title">Product Delivery</h6>
                    <a href="#" className="btn b-solid btn-primary-solid btn-sm">View all</a>
                </div>
                <div className="overflow-x-auto scrollbar-table mt-5">
                <table className="table-auto w-full border-separate border-spacing-x-0 border-spacing-y-2 whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                    <thead className="text-gray-500 dark:text-dark-text">
                        <tr>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Customer</th>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Order Date</th>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Status</th>
                            <th className="px-4 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* Table Row */}
                        {productDelivery && productDelivery?.map((delivery, idx) => (
                            <tr key={idx}> 
                                <td className="px-4 py-4 rounded-row-border border-dashed">
                                    <div className="flex items-center gap-3">
                                        <a href="#" className="size-12 rounded-lg overflow-hidden shrink-0">
                                            <img src={delivery?.image} alt="product"/>
                                        </a>
                                        <div>
                                            <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">{delivery?.name}</h6>
                                            <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{delivery?.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 rounded-row-border border-dashed">{delivery?.orderDate}</td>
                                <td className="px-4 py-4 rounded-row-border border-dashed">
                                    <span className={`${{'pending': 'badge-warning-outline','completed': 'badge-success-outline','cancelled': 'badge-danger-outline','in porgress': 'badge-primary-outline'}[delivery?.status] || 'badge-pending-outline'} badge`}>{delivery?.status}</span>
                                </td>
                                <td className="px-4 py-4 rounded-row-border border-dashed">
                                    <div className="relative ml-5">
                                        <button data-popover-target={`td-order-${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                            <i className="ri-more-2-fill text-inherit" />
                                        </button>
                                        <ul id={`td-order-${idx}`} className="popover-target invisible" data-popover>
                                            <li>
                                                <a className="popover-item" href="#">View Profile</a>
                                            </li>
                                            <li>
                                                <a className="popover-item" href="#">Order Details</a>
                                            </li>
                                            <li>
                                                <a className="popover-item" href="#">Cancel Order</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            {/* End Product Delivery */}
            {/* Start Order List Table */}
            <div className="col-span-full">
                <div className="card">
                <div className="flex-center-between">
                    <h6 className="card-title">Order List</h6>
                    <div className="flex items-center gap-3">
                        <form className=" leading-none text-sm relative text-gray-900 dark:text-dark-text">
                            <span className="absolute top-1/2 -translate-y-[40%] left-2.5">
                                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]" />
                            </span>
                            <input type="text" placeholder="Search..." className="form-input pl-[30px]" />
                        </form>
                        <select className="form-input form-select shrink-0 h-11 bg-primary-500 border-none text-white">
                            <option value="name">Name</option>
                            <option value="date">Date</option>
                            <option value="status">Status</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto scrollbar-table mt-5">
                    <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                    <thead className="text-gray-500 dark:text-dark-text">
                        <tr>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Customer</th>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Order ID</th>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Order Date</th>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Quantity</th>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Status</th>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg">Price</th>
                            <th className="p-6 py-4 bg-primary-200 dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg w-10">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-dark-border-three">
                        {/* Table Row */}
                        {orders && orders?.map((order, idx) => (
                            <tr key={idx}> 
                                <td className="p-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <a href="#" className="size-12 rounded-50 overflow-hidden shrink-0 bg-primary-200">
                                            <img src={order?.image} alt="Customer" />
                                        </a>
                                        <div>
                                            <h6 className="leading-none text-heading font-semibold mb-2 line-clamp-1">
                                                <a href="#">{order?.name}</a>
                                            </h6>
                                            <p className="leading-none text-xs text-gray-500 dark:text-dark-text-two font-semibold">{order?.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6 py-4">{order?.orderId}</td>
                                <td className="p-6 py-4">{order?.orderDate}</td>
                                <td className="p-6 py-4">{order?.quantity}</td>
                                <td className="p-6 py-4">
                                    <span className={`${{'pending': 'badge-warning-outline','completed': 'badge-success-outline','cancelled': 'badge-danger-outline','in porgress': 'badge-primary-outline'}[order?.status] || 'badge-pending-outline'} badge b-outline`}>{order?.status}</span>
                                </td>
                                <td className="p-6 py-4">${order?.price}</td>
                                <td className="p-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <a href="#" className="btn-icon btn-primary-icon-light size-7">
                                            <i className="ri-download-cloud-2-line text-inherit text-[13px]" />
                                        </a>
                                        <a href="#" className="btn-icon btn-danger-icon-light size-7">
                                            <i className="ri-delete-bin-line text-inherit text-[13px]" />
                                        </a>
                                        <div className="relative ml-5">
                                            <button data-popover-target={`td-1-${idx}`} data-popover-trigger="click" data-popover-placement="bottom-end" className="size-7 rounded-50 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon">
                                                <i className="ri-more-2-fill text-inherit" />
                                            </button>
                                            <ul id={`td-1-${idx}`} className="popover-target invisible" data-popover>
                                                <li><a className="popover-item" href="#">View Profile</a></li>
                                                <li><a className="popover-item" href="#">Order Details</a></li>
                                                <li><a className="popover-item" href="#">View Analytics</a></li>
                                                <li><a className="popover-item" href="#">Delete Order</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                {/* Start Pagination */}
                <div className="flex-center-between pt-5 border-t border-gray-200 dark:border-dark-border">
                    <div className="font-spline_sans text-sm text-gray-900 dark:text-dark-text">Showing 1 to 8 of 20 entries</div>
                    <ul className="flex items-center gap-1 5 text-gray-500 dark:text-dark-text text-sm font-medium">
                        <li>
                            <a href="javascript:void(0)" className="size-8 dk-border-one rounded-[5px] flex-center bg-primary-500 dark:hover:bg-dark-card-shade hover:bg-transparent text-white hover:text-gray-900 dark:text-dark-text">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 -rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="size-8 dk-border-one rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white">01</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="size-8 dk-border-one rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white active">02</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="size-8 dk-border-one rounded-[5px] flex-center hover:border-none hover:bg-primary-500 hover:text-white [&.active]:bg-primary-500 [&.active]:text-white">03</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="size-8 dk-border-one rounded-[5px] flex-center bg-primary-500 dark:hover:bg-dark-card-shade hover:bg-transparent text-white hover:text-gray-900 dark:text-dark-text">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            {/* End Order List Table */}
            </div>
        </div>
        {/* End Main Content */}
        </>
    )
}