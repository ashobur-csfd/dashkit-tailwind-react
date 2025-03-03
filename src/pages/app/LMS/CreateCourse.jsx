import FileUp from "../../../components/ui/FileUp";
import uploadFile from '@/assets/images/icons/upload-file.svg';
import Inputs from "../../../components/ui/Inputs";
import SelectInput from "../../../components/ui/SelectInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../../data/data";

export default function CreateCourse(){

    const categories = [
        { value: null, option: "Select category", disabled: true },
        { value: "science", option: "Science" },
        { value: "mathematics", option: "Mathematics" },
        { value: "engineering", option: "Engineering" },
        { value: "humanities", option: "Humanities" },
        { value: "social-sciences", option: "Social Sciences" },
        { value: "business", option: "Business" },
        { value: "computer-science", option: "Computer Science", selected: true },
        { value: "arts", option: "Arts" },
        { value: "health-sciences", option: "Health Sciences" },
        { value: "law", option: "Law" }
      ];
      
    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <form action="#">
                <div className="grid grid-cols-12 gap-x-4">
                    {/* Start Course Information */}
                    <div className="col-span-full lg:col-span-7 card">
                        <div className="p-1.5">
                            <h6 className="card-title">Add new course</h6>
                            <div className="mt-7 pt-0.5">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <Inputs basic labelId={'courseTitle'} labelText={'How about a course title'} placeholder={'Course Title'} className={'form-input'} type={'text'} name="courseTitle" />
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <Inputs basic labelId={'coursePrice'} labelText={'Course price'} placeholder={'$200.00'} className={'form-input'} type={'number'} name="coursePrice" />
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        {/* <label className="form-label">Courses category</label> */}
                                        <SelectInput labelText={'Courses category'} basic options={categories}/>
                                        {/* <select className="singleSelect">
                                            <option disabled>Select category</option>
                                            <option value="val">Science</option>
                                            <option value="val">Mathematics</option>
                                            <option value="val">Engineering</option>
                                            <option value="val">Humanities</option>
                                            <option value="val">Social Sciences</option>
                                            <option value="val">Business</option>
                                            <option selected value="val">Computer Science</option>
                                            <option value="val">Arts</option>
                                            <option value="val">Health Sciences</option>
                                            <option value="val">Law</option>
                                        </select> */}
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <SelectInput labelText={'Courses level'} basic options={categories}/>
                                        {/* <label className="form-label">Courses level</label>
                                        <select className="singleSelect">
                                            <option disabled>Select Label</option>
                                            <option selected value="val">Beginner</option>
                                            <option value="val">Intermediate</option>
                                            <option value="val">Advanced</option>
                                            <option value="val">Expert</option>
                                        </select> */}
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <Inputs basic labelId={'courseInstructor'} labelText={'Instructor'} placeholder={'Jhone Doe'} className={'form-input'} type={'text'} name="courseInstructor" />
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <SelectInput labelText={'Language'} basic options={categories}/>
                                        {/* <label className="form-label">Language</label>
                                        <select className="singleSelect">
                                            <option selected value="val">English</option>
                                            <option value="val">Spanish</option>
                                            <option value="val">Italian </option>
                                            <option value="val">Arabic</option>
                                        </select> */}
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <Inputs basic labelId={'courseDuration'} labelText={'Course duration'} placeholder={'2h 30m'} className={'form-input'} type={'text'} name="courseDuration" />
                                    </div>
                                    <div className="col-span-full xl:col-auto leading-none">
                                        <SelectInput labelText={'Courses Type'} basic options={categories}/>
                                        {/* <label className="form-label">Courses Type</label>
                                        <select className="singleSelect">
                                            <option selected disabled>Select Course Type</option>
                                            <option value="workshop">Workshop</option>
                                            <option value="seminar">Seminar</option>
                                            <option value="online">Online</option>
                                            <option value="hybrid">Hybrid</option>
                                            <option value="self-paced">Self-paced</option>
                                            <option value="certification">Certification</option>
                                            <option value="bootcamp">Bootcamp</option>
                                        </select> */}
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea id="description" rows="8" className="summernote form-input !h-[200px]" placeholder="Write your description here...">
                                            
                                        </textarea>
                                        <div className="flex items-center gap-2 mt-3.5">
                                            <input type="checkbox" name="agreeTermCondition" id="agreeTermCondition" className="accent-primary-500"/>
                                            <label htmlFor="agreeTermCondition" className="text-xs leading-none text-gray-500 dark:text-dark-text select-none">I am totally agree with your term & condition</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Course Information */}
        
                    {/* Start Course Media File */}
                    <div className="col-span-full lg:col-span-5 card">
                        <div className="p-1.5">
                            <h6 className="card-title">Add media files</h6>
                            <div className="mt-7 pt-0.5 flex flex-col gap-5">
                                <div className="col-span-full sm:col-span-4">
                                    {/* <p className="text-xs text-gray-500 dark:text-dark-text leading-none font-semibold mb-3">Thumbnail (548x234)</p> */}
                                    <div className="col-span-full sm:col-span-4">
                                        <p className="form-label">Thumbnail (400x250)</p>
                                        <FileUp advance thumbnail uploadFile={uploadFile}/>
                                    </div>
                                </div>
                                <div className="col-span-full sm:col-span-4">
                                    <p className="text-xs text-gray-500 dark:text-dark-text leading-none font-semibold mb-3">Main course file</p>
                                    <FileUp advance thumbnail uploadFile={uploadFile}/>
                                </div>
                                <div className="col-span-full sm:col-span-4">
                                    <p className="text-xs text-gray-500 dark:text-dark-text leading-none font-semibold mb-3">Introduction file</p>
                                    <FileUp advance thumbnail uploadFile={uploadFile}/>
                                </div>
                                <div className="flex-center justify-end">
                                    <button type="submit" className="btn b-solid btn-primary-solid btn-lg">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Course Media File */}
                </div>
            </form>
        </div>
        </>
    )
}