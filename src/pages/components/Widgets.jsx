import { useState } from "react";
import bitcoin from '@/assets/images/icons/bitcoin.svg'
import trendUp from '@/assets/images/icons/trend-up.svg'
import chatIcon from '@/assets/images/icons/chat.svg'
import progressIcon from '@/assets/images/icons/progress.svg'
import whatsappIcon from '@/assets/images/icons/whatsapp.svg'
import videoIcon from "@/assets/images/icons/Video.svg"
import student1 from "@/assets/images/student/student-1.png"
import student2 from "@/assets/images/student/student-2.png"
import student3 from "@/assets/images/student/student-3.png"


import Chart from "react-apexcharts";
import useApexCharts from "../Charts/useApexCharts";
import SimpleCounter from "../../components/Counter/Counter";
import Slider from "../../components/ui/Slider";
import EarningCard from "../../components/ui/Widgets/EarningCard";
import SocialList from "../../components/ui/Widgets/SocialList";
import CompletedCourseCard from "../../components/ui/Widgets/CompletedCourseCard";
import IncreasePieChart from "../../components/ui/Widgets/IncreasePieChart";
import ProgressCard from "../../components/ui/Widgets/ProgressCard";

export default function Widgets(){

    const { widgetStackedColumn, pieDonutchart1, doubleSplineArea, widgetSplineArea } = useApexCharts();

    // code show
    const [showCode, setShowCode] = useState({
        lightWidget: false,
        differWidget: false,
        socialMedia: false,
        chartWidget: false,
        videoWidget: false,
        courseWidget: false,
        pieChartWidget: false,
        growthChart: false,
        growthChartSignle: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    const progress = [{status:'complete', amount:'734'}, {status:'pending', amount:'19'}, {status:'canceled', amount:'24'}]

    return (
        <>
            <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
                <div className="card">
                    <h2 className="card-title">UI - Widgets</h2>
                </div>
                <div className="grid grid-cols-12 gap-x-4">
                    {/* LIGHT COLOR - WIDGETS */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Light Color - Widgets</h3>
                                <button type="button" onClick={()=>toggleCodeView('lightWidget')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.lightWidget ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.lightWidget ? 'hidden':''}`}>                              
                                <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col items-start gap-4">
                                    <div className="w-full space-y-4">
                                        <EarningCard earningHrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
                                        <EarningCard earningHrLight mainIcon={bitcoin} growIcon={trendUp} title={13600} subTitle={'Earnings'} growPercent={'+5%'}/>
                                    </div>
                                    <EarningCard earningVrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.lightWidget ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex xl:flex-row lg:flex-col md:flex-row flex-col items-start gap-4">
    <div className="w-full space-y-4">
        <EarningCard earningHrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
        <EarningCard earningHrLight mainIcon={bitcoin} growIcon={trendUp} title={13600} subTitle={'Earnings'} growPercent={'+5%'}/>
    </div>
    <EarningCard earningVrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* DIFFERENT COLOR - WIDGETS */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Different Color - Widgets</h3>
                                <button type="button" onClick={()=>toggleCodeView('differWidget')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.differWidget ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.differWidget ? 'hidden':''}`}>
                                <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col items-start gap-4">
                                    <div className="w-full space-y-4">
                                        <EarningCard earningHrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
                                        <EarningCard earningHrLight mainIcon={bitcoin} growIcon={trendUp} title={13600} subTitle={'Earnings'} growPercent={'+5%'}/>
                                    </div>
                                    <EarningCard earningVrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.differWidget ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex xl:flex-row lg:flex-col md:flex-row flex-col items-start gap-4">
    <div className="w-full space-y-4">
        <EarningCard earningHrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
        <EarningCard earningHrLight mainIcon={bitcoin} growIcon={trendUp} title={13600} subTitle={'Earnings'} growPercent={'+5%'}/>
    </div>
    <EarningCard earningVrSolid mainIcon={bitcoin} growIcon={trendUp} title={13560} subTitle={'Earnings'} growPercent={'+5%'}/>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* SOCIAL MEDIA */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Social Media</h3>
                                <button type="button" onClick={()=>toggleCodeView('socialMedia')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.socialMedia ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.socialMedia ? 'hidden':''}`}>
                                <div className="divide-y divide-dashed dark:divide-dark-border-two *:py-6 first:*:pt-0">
                                    {/* Single Item */}
                                    <SocialList
                                    user
                                    title="Total User"
                                    subTitle="Social Channels"
                                    growAmount={13499}
                                    growPercent
                                    growIcon={(<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#D9FAF2] dark:bg-dark-icon text-[#01DDA5] leading-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#01DDA5" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
                                        <span className="text-xs font-bold">+4.6%</span>
                                    </div>)} 
                                    />
                                    {/* Single Item */}
                                    <SocialList
                                    tiktok
                                    title="Total User"
                                    subTitle="Social Channels"
                                    growAmount={13499}
                                    growPercent
                                    growIcon={(<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#FDEAEB] dark:bg-dark-icon text-[#F56F77] leading-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#F56F77" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
                                        <span className="text-xs font-bold">+4.6%</span>
                                    </div>)} 
                                    />
                                    {/* Single Item */}
                                    <SocialList
                                    facebook
                                    title="Total User"
                                    subTitle="Social Channels"
                                    growAmount={13499}
                                    growPercent
                                    growIcon={(<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#E7F1FF] dark:bg-dark-icon text-primary-500 leading-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#795DED" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
                                        <span className="text-xs font-bold">+4.6%</span>
                                    </div>)} 
                                    />
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.socialMedia ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="divide-y divide-dashed dark:divide-dark-border-two *:py-6 first:*:pt-0">
{/* Single Item */}
<SocialList
    user
    title="Total User"
    subTitle="Social Channels"
    growAmount={13499}
    growPercent
    growIcon={(<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#D9FAF2] dark:bg-dark-icon text-[#01DDA5] leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#01DDA5" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
        <span className="text-xs font-bold">+4.6%</span>
    </div>)} 
/>
{/* Single Item */}
<SocialList
    tiktok
    title="Total User"
    subTitle="Social Channels"
    growAmount={13499}
    growPercent
    growIcon={(<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#FDEAEB] dark:bg-dark-icon text-[#F56F77] leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#F56F77" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
        <span className="text-xs font-bold">+4.6%</span>
    </div>)} 
/>
{/* Single Item */}
<SocialList
    facebook
    title="Total User"
    subTitle="Social Channels"
    growAmount={13499}
    growPercent
    growIcon={(<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#E7F1FF] dark:bg-dark-icon text-primary-500 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 256 256"><path fill="#795DED" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
        <span className="text-xs font-bold">+4.6%</span>
    </div>)} 
/>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* DIFFERENT COLOR - WIDGETS */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Different Color Chart - Widgets</h3>
                                <button type="button" onClick={()=>toggleCodeView('chartWidget')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.chartWidget ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.chartWidget ? 'hidden':''}`}>
                                <Chart options={widgetStackedColumn.options} series={widgetStackedColumn.series} type="bar" height={260}/>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.chartWidget ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
                                        {`<div id="widgetStackedColumn" className="min-h-[430px]"></div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* Inbox Chat */}
                    <div className="col-span-full md:col-span-6 lg:col-span-4">
                        <ProgressCard icon={chatIcon} studentOne={student1} studentTwo={student2} studentThree={student3} title='My Inbox Chat' newNotify={3} totalFriends={1486}/>
                    </div>
                    {/* Progressing */}
                    <div className="col-span-full md:col-span-6 lg:col-span-4">
                        <ProgressCard icon={progressIcon} studentOne={student1} studentTwo={student2} studentThree={student3} title='In Progressing' newNotify={3} totalFriends={4.9}/>
                    </div>
                    {/* Whats App User */}
                    <div className="col-span-full md:col-span-6 lg:col-span-4">
                        <ProgressCard icon={whatsappIcon} studentOne={student1} studentTwo={student2} studentThree={student3} title='WhatsApp User' newNotify={3} totalFriends={1699}/>
                    </div>
                    {/* LIGHT COLOR VIDEO - WIDGETS pending.. */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Light Color Video - Widgets</h3>
                                <button type="button" onClick={()=>toggleCodeView('videoWidget')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.videoWidget ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.videoWidget ? 'hidden':''}`}>
                                <div>
                                    <div className="size-12 flex-center rounded-15 bg-[#EDE9FF] dark:bg-dark-icon">
                                        <img src={videoIcon} alt=""/>
                                    </div>
                                    <h6 className="text-heading card-title leading-none mt-6 mb-12">Course Video</h6>
                                    {/* Video Slider */}
                                    <div className="leading-none gap-x-3 range-wrapper">
                                        <div className="flex items-center leading-none gap-x-3 range-wrapper">
                                            <div className="w-full">
                                                <Slider
                                                    initialValue={73}
                                                    showTooltip={true}
                                                    onChange={(val) => console.log("Slider Value: ", val)}
                                                />
                                            </div>
                                            <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
                                                <span className="range-number">73</span> %
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.videoWidget ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`{/* Video Slider */}
<div className="leading-none gap-x-3 range-wrapper">
    <div className="flex items-center leading-none gap-x-3 range-wrapper">
        <div className="w-full">
            <Slider
                initialValue={73}
                showTooltip={true}
                onChange={(val) => console.log("Slider Value: ", val)}
            />
        </div>
        <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
            <span className="range-number">73</span> %
        </div>
    </div>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* LIGHT COLOR - WIDGETS */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Light Color - Widgets</h3>
                                <button type="button" onClick={()=>toggleCodeView('courseWidget')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.courseWidget ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.courseWidget ? 'hidden':''}`}>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <CompletedCourseCard primary title="complete course" amount="28" growAmount="+4.6%" date="last month" />
                                    <CompletedCourseCard secondary title="complete course" amount="28" growAmount="+4.6%" date="last month" />
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.courseWidget ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="flex flex-col md:flex-row gap-4">
    <CompletedCourseCard primary title="complete course" amount="28" growAmount="+4.6%" date="last month" />
    <CompletedCourseCard secondary title="complete course" amount="28" growAmount="+4.6%" date="last month" />
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* DIFFERENT COLOR PIE CHART - WIDGETS */}
                    <div className="col-span-full">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Different Color Pie Chart - Widgets</h3>
                                <button type="button" onClick={()=>toggleCodeView('pieChartWidget')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.pieChartWidget ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.pieChartWidget ? 'hidden':''}`}>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-full md:col-span-6 lg:col-span-4 bg-[#F6F4FE] dark:bg-dark-card-two p-6 rounded-15">
                                        <IncreasePieChart chart={pieDonutchart1} subtitle='Increase' mainAmount={'35199.00'} progress={progress}/>
                                    </div>
                                    <div className="col-span-full md:col-span-6 lg:col-span-4 bg-[#ECFAFF] dark:bg-dark-card-two p-6 rounded-15">
                                        <IncreasePieChart chart={pieDonutchart1} subtitle='Increase' mainAmount={'35199.00'} progress={progress}/>
                                    </div>
                                    <div className="col-span-full md:col-span-6 lg:col-span-4 bg-[#F2FCF0] dark:bg-dark-card-two p-6 rounded-15">
                                        <IncreasePieChart chart={pieDonutchart1} subtitle='Increase' mainAmount={'35199.00'} progress={progress}/>
                                    </div>
                                </div>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.pieChartWidget ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div className="grid grid-cols-12 gap-4">
    <div className="col-span-full md:col-span-6 lg:col-span-4 bg-[#F6F4FE] dark:bg-dark-card-two p-6 rounded-15">
        <IncreasePieChart chart={pieDonutchart1} subtitle='Increase' mainAmount={'35199.00'} progress={progress}/>
    </div>
    <div className="col-span-full md:col-span-6 lg:col-span-4 bg-[#ECFAFF] dark:bg-dark-card-two p-6 rounded-15">
        <IncreasePieChart chart={pieDonutchart1} subtitle='Increase' mainAmount={'35199.00'} progress={progress}/>
    </div>
    <div className="col-span-full md:col-span-6 lg:col-span-4 bg-[#F2FCF0] dark:bg-dark-card-two p-6 rounded-15">
        <IncreasePieChart chart={pieDonutchart1} subtitle='Increase' mainAmount={'35199.00'} progress={progress}/>
    </div>
</div>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* GROWTH CHART */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Growth Chart</h3>
                                <button type="button" onClick={()=>toggleCodeView('growthChart')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.growthChart ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.growthChart ? 'hidden':''}`}>
                                <div>
                                    <h6 className="text-3xl  font-semibold text-heading">Course Sales Status</h6>
                                    <p className="text-sm text-[#686E81]">Net course were <span className="text-base font-semibold text-primary-500">Up 70%</span> compared to the previous 14 days.</p>
                                </div>
                                <Chart options={doubleSplineArea.options} series={doubleSplineArea.series} type="area" height={300}/>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.growthChart ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div>
    <h6 className="text-3xl  font-semibold text-heading">Course Sales Status</h6>
    <p className="text-sm text-[#686E81]">Net course were <span className="text-base font-semibold text-primary-500">Up 70%</span> compared to the previous 14 days.</p>
</div>
<Chart options={doubleSplineArea.options} series={doubleSplineArea.series} type="area" height={300}/>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                    {/* GROWTH CHART SINGLE */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="card p-0">
                            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <h3 className="text-lg card-title leading-none">Growth Chart Single</h3>
                                <button type="button" onClick={()=>toggleCodeView('growthChartSignle')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                    <span className="shrink-0">View Code</span>
                                    <i className={`${showCode.growthChartSignle ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                                </button>
                            </div>
                            <div className={`p-6 ${showCode.growthChartSignle ? 'hidden':''}`}>
                                <div>
                                    <h6 className="text-3xl  font-semibold text-heading">Course Sales Status</h6>
                                    <p className="text-sm text-[#686E81]">Net course were <span className="text-base font-semibold text-[#76D466]">Up 70%</span> compared to the previous 14 days.</p>
                                </div>
                                <Chart options={widgetSplineArea.options} series={widgetSplineArea.series} type="area" height={300}/>
                            </div>
                            {/* Prism Code */}
                            <div className={`p-6 ${showCode.growthChartSignle ? '':'hidden'}`}>
                                <pre>
                                    <code className="language-markup">
{`<div>
    <h6 className="text-3xl  font-semibold text-heading">Course Sales Status</h6>
    <p className="text-sm text-[#686E81]">Net course were <span className="text-base font-semibold text-[#76D466]">Up 70%</span> compared to the previous 14 days.</p>
</div>
<Chart options={widgetSplineArea.options} series={widgetSplineArea.series} type="area" height={300}/>`}
                                    </code>
                                </pre>
                            </div>
                            {/* Prism Code */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}














// import React, { useEffect, useRef, useState } from "react";

// const RangeSlider = () => {
//   const rangeInputRef = useRef(null);
//   const rangeHandlerRef = useRef(null);
//   const rangeLineRef = useRef(null);
//   const [rangeValue, setRangeValue] = useState(73);

//   useEffect(() => {
//     const rangeInput = rangeInputRef.current;
//     const rangeHandler = rangeHandlerRef.current;
//     const rangeLine = rangeLineRef.current;

//     const rangeInputSlider = () => {
//       // Update number display
//       const tooltipPosition = rangeValue / rangeInput.max;
//       const space = rangeInput.offsetWidth - rangeHandler.offsetWidth;

//       rangeHandler.style.left = `${tooltipPosition * space}px`;
//       rangeLine.style.width = `${rangeValue}%`;
//     };

//     rangeInput.addEventListener("input", rangeInputSlider);
//     rangeInputSlider(); // Initial call

//     return () => {
//       rangeInput.removeEventListener("input", rangeInputSlider);
//     };
//   }, [rangeValue]);

//   const increment = () => {
//     setRangeValue((prev) => Math.min(prev + 1, 100));
//   };

//   const decrement = () => {
//     setRangeValue((prev) => Math.max(prev - 1, 0));
//   };

//   return (
//     <div className="flex-center leading-none gap-x-3 range-wrapper">
//       <div className="relative w-full max-w-full flex-center">
//         <div className="w-full h-2.5 bg-[#ECEBF0] rounded-full overflow-hidden">
//           <div
//             ref={rangeLineRef}
//             className="h-full bg-primary-500 range-line"
//             style={{ width: `${rangeValue}%` }}
//           ></div>
//         </div>
//         <div
//           ref={rangeHandlerRef}
//           className="size-[18px] bg-white border border-primary-500 rounded-full absolute range-handler"
//           style={{ left: `${rangeValue}%` }}
//         >
//           <div className="tooltip bg-primary-500 text-white">
//             <div>
//               <span>{rangeValue}</span>%
//             </div>
//           </div>
//         </div>
//         <input
//           ref={rangeInputRef}
//           type="range"
//           className="range-input"
//           min="0"
//           max="100"
//           value={rangeValue}
//           step="1"
//           onChange={(e) => setRangeValue(parseInt(e.target.value))}
//         />
//       </div>
//       <div className="w-8 leading-none inline-flex justify-end text-gray-500 dark:text-dark-text">
//         <span>{rangeValue}</span>%
//       </div>
//       <button onClick={decrement} className="range-decrement">
//         -
//       </button>
//       <button onClick={increment} className="range-increment">
//         +
//       </button>
//     </div>
//   );
// };

// export default RangeSlider;
