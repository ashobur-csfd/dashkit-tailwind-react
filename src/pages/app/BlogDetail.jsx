import blogImg from '@/assets/images/blog-details/details-1.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../../data/data'
import Button from '../../components/ui/Button'
export default function BlogDetail(){

    const [blog, setBlog] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        if (blogs) {
        const blogData = blogs.find((blog) => blog?.id === id);
        setBlog(blogData);
        }
    }, [id, blogs]);

    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card grid grid-cols-12 gap-6 p-0 sm:!p-6">
                {/* Start Blog Details */}
                <div className="col-span-full lg:col-span-8 order-2 lg:order-1 p-3 sm:p-0">
                    <figure>
                        <div className='w-full h-[500px]'>
                            <img src={blog?.image} alt="thumbnail" className="rounded-15 size-full object-cover"/>
                        </div>
                        <figcaption className="flex gap-3 mt-3">
                            <div className="flex items-center gap-1">
                                <i className="ri-user-3-line"></i>
                                <div className="leading-none font-medium text-gray-900 dark:text-dark-text mt-0.5">{blog?.meta?.category}</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <i className="ri-time-line"></i>
                                <div className="leading-none font-medium text-gray-900 dark:text-dark-text">{blog?.meta?.publishDate}</div>
                            </div>
                        </figcaption>
                    </figure>
                    <h2 className="text-2xl md:text-3xl xl:text-[42px] font-semibold text-heading !leading-[1.23] mt-2.5">
                        {blog?.title}
                    </h2>
                    <p className="text-gray-900 dark:text-dark-text whitespace-pre-line">
                        {blog?.description}
                    </p>
                    <div className="hidden sm:flex-center-between mt-8 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="text-xl font-semibold text-gray-500 dark:text-dark-text leading-none">Tags :</div>
                            <ul className="flex items-center flex-wrap gap-2">
                                {blog?.tags?.map((tag, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="badge badge-primary-light rounded-full">{tag}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-xl font-semibold text-gray-500 dark:text-dark-text leading-none">Share :</div>
                            <ul className="flex items-center gap-2">
                                <li>
                                    <a href={blog?.social?.twitter} className="size-10 flex-center dk-border-one rounded-50 hover:bg-primary-500 group/bs">
                                        <i className="ri-twitter-x-fill text-gray-500 dark:text-dark-text group-hover/bs:text-white"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={blog?.social?.facebook} className="size-10 flex-center dk-border-one rounded-50 hover:bg-primary-500 group/bs">
                                        <i className="ri-facebook-fill text-gray-500 dark:text-dark-text group-hover/bs:text-white"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={blog?.social?.linkedin} className="size-10 flex-center dk-border-one rounded-50 hover:bg-primary-500 group/bs">
                                        <i className="ri-linkedin-fill text-gray-500 dark:text-dark-text group-hover/bs:text-white"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={blog?.social?.behance} className="size-10 flex-center dk-border-one rounded-50 hover:bg-primary-500 group/bs">
                                        <i className="ri-behance-fill text-gray-500 dark:text-dark-text group-hover/bs:text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#F8F8F8] dark:bg-dark-card-two px-4 py-10 rounded-15 mt-10">
                        <h2 className="text-xl sm:text-3xl leading-[1.31] font-semibold text-heading">
                            Leave a Comment
                        </h2>
                        <p className="font-medium text-gray-500 dark:text-dark-text leading-normal mt-2">
                            Your email address remains confidential and won't be published.
                        </p>
                        <form action="#" method="post" className="mt-7 pt-0.5 grow">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                                <div className="col-span-full xl:col-auto leading-none">
                                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                                    <input type="text" id="fullName" placeholder="Type Name" className="form-input" required/>
                                </div>
                                <div className="col-span-full xl:col-auto leading-none">
                                    <label htmlFor="email" className="form-label">E-mail *</label>
                                    <input type="email" id="email" placeholder="Type Email" className="form-input" required/>
                                </div>
                                <div className="col-span-full">
                                    <label className="form-label">Comment *</label>
                                    <textarea rows="5" className="form-input h-auto" required></textarea>
                                    <div className="flex items-center gap-2 mt-3.5">
                                        <input type="checkbox" name="agreeTermCondition" id="agreeTermCondition" className="accent-primary-500"/>
                                        <label htmlFor="agreeTermCondition" className="form-label mb-0">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                </div>
                            </div>
                            <Button text={'Post Comment'} type="submit" className="btn b-solid btn-primary-solid btn-lg mt-5"/>
                        </form>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start Sidebar */}
                <div className="col-span-full lg:col-span-4 bg-[#F4F4F4] dark:bg-dark-card-two rounded-15 sm:p-4 order-1 lg:order-2">
                    <div className="bg-white dark:bg-dark-card p-4 rounded-15">
                        <div className="leading-none text-sm relative text-gray-900 dark:text-dark-text">
                            <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
                            </span>
                            <input type="text" name="header-search" placeholder="Search..." className="form-input pl-[36px] pr-12"/>
                            <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                                <i className="ri-command-line text-[12px]"></i><span>+</span><span>k</span>
                            </span>
                        </div>
                        <div className="mt-8">
                            <h6 className="card-title pb-4 mb-5 border-b border-gray-200 dark:border-dark-border">Recent Post</h6>
                            <ul className="divide-y divide-gray-200 dark:divide-dark-border-three space-y-3 *:pt-3">
                                {blogs?.slice(0, 4)?.map((blog, index)=>(
                                    (id !== blog?.id && <li key={index} className="first:pt-0">
                                        <a href={`/blog-detail/${blog?.id}`} className="flex items-center gap-3">
                                            <div className="size-16 rounded-md overflow-hidden shrink-0">
                                                <img src={blog?.image} alt="blog" className="size-full object-cover"/>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <i className="ri-calendar-line text-primary-500"></i>
                                                    <div className="leading-none font-medium text-gray-900 dark:text-dark-text mt-0.5">{blog?.meta?.publishDate}</div>
                                                </div>
                                                <h6 className="card-title text-[18px] mt-2 line-clamp-1">{blog?.title}</h6>
                                            </div>
                                        </a>
                                    </li>)
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h6 className="card-title pb-4 mb-5 border-b border-gray-200 dark:border-dark-border">Categories</h6>
                            <ul className="flex flex-col gap-2 ms-7 leading-none">
                                <li className="last-of-type:mb-0">
                                    <label htmlFor="category-1" className="relative font-spline_sans leading-[1.42] text-gray-500 dark:text-dark-text font-normal is-quiz-checked">
                                        <input type="checkbox" name="category" id="category-1" className="hidden"/>
                                        Brand Developments 
                                    </label>
                                </li>
                                <li className="last-of-type:mb-0">
                                    <label htmlFor="category-2" className="relative font-spline_sans leading-[1.42] text-gray-500 dark:text-dark-text font-normal is-quiz-checked">
                                        <input type="checkbox" name="category" id="category-2" className="hidden"/>
                                        UX/UI Design
                                    </label>
                                </li>
                                <li className="last-of-type:mb-0">
                                    <label htmlFor="category-3" className="relative font-spline_sans leading-[1.42] text-gray-500 dark:text-dark-text font-normal is-quiz-checked">
                                        <input type="checkbox" name="category" id="category-3" className="hidden"/>
                                        Development
                                    </label>
                                </li>
                                <li className="last-of-type:mb-0">
                                    <label htmlFor="category-4" className="relative font-spline_sans leading-[1.42] text-gray-500 dark:text-dark-text font-normal is-quiz-checked">
                                        <input type="checkbox" name="category" id="category-4" className="hidden"/>
                                        Business
                                    </label>
                                </li>
                                <li className="last-of-type:mb-0">
                                    <label htmlFor="category-5" className="relative font-spline_sans leading-[1.42] text-gray-500 dark:text-dark-text font-normal is-quiz-checked">
                                        <input type="checkbox" name="category" id="category-5" className="hidden"/>
                                        Marketing
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h6 className="card-title pb-4 mb-5 border-b border-gray-200 dark:border-dark-border">Tags</h6>
                            <ul className="flex items-center flex-wrap gap-2">
                                <li>
                                    <a href="#" className="badge badge-primary-light rounded-full">UI Design</a>
                                </li>
                                <li>
                                    <a href="#" className="badge badge-primary-light rounded-full">Research</a>
                                </li>
                                <li>
                                    <a href="#" className="badge badge-primary-light rounded-full">Figma</a>
                                </li>
                                <li>
                                    <a href="#" className="badge badge-primary-light rounded-full">Creative Idea</a>
                                </li>
                                <li>
                                    <a href="#" className="badge badge-primary-light rounded-full">Animation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
            </div>
        </div>
        </>
    )
}
