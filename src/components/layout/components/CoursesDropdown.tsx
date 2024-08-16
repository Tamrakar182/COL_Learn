import { Popover, Transition, PopoverButton, PopoverPanel } from "@headlessui/react"
import clsx from "clsx"
import React from "react"
import useDropdown from "@/context/useDropdown"
import { CiGrid41 } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom"
import Container from "@/components/common/container";
import CourseCard from "@/components/course-card";
import { dummyCourse } from "@/mock/data";

const CoursesDropdown = () => {
    const { coursesDropdown, handleCourses } = useDropdown()
    const navigate = useNavigate();
    return (
        <div
            onMouseEnter={() => handleCourses(true)}
            onMouseLeave={() => handleCourses(false)}
            className="h-full"
        >
            <div className="flex items-center h-full">
                <Popover className="h-full flex">
                    <>
                        <PopoverButton
                            className={clsx(
                                "relative h-full flex text-black items-center transition-all ease-out duration-200 focus:outline-none"
                            )}
                            onClick={() => navigate("/browse/courses")}
                        >
                            <div className='hidden h-full md:flex flex-row gap-2 items-center cursor-pointer'>
                                <CiGrid41 className='w-8 h-8' />
                                <p className='text-lg'>Courses</p>
                            </div>
                        </PopoverButton>

                        <Transition
                            show={coursesDropdown}
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <PopoverPanel
                                static
                                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
                            >
                                <div className="relative bg-white py-8">
                                    <Container>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-col flex-1 max-w-[30%]">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                    Course Categories
                                                </h3>
                                                <div className="flex items-start">
                                                    <ul
                                                        className="min-w-[152px] max-w-[250px] pr-4"
                                                    >
                                                        <div
                                                            className="pb-3"
                                                        >
                                                            <Link
                                                                to={`/browse/courses/${1}`}
                                                                onClick={() => handleCourses(false)}
                                                            >
                                                                LokSewa Preparation
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="pb-3"
                                                        >
                                                            <Link
                                                                to={`/browse/courses/${2}`}
                                                                onClick={() => handleCourses(false)}
                                                            >
                                                                ILETS Preparation
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="pb-3"
                                                        >
                                                            <Link
                                                                to={`/browse/courses/${3}`}
                                                                onClick={() => handleCourses(false)}
                                                            >
                                                                IT Courses
                                                            </Link>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                    Popular Courses
                                                </h3>
                                                <div className="flex flex-row gap-2">
                                                    {
                                                        dummyCourse.slice(0, 3).map((course) => (
                                                            <CourseCard
                                                                key={course.id}
                                                                onClick={() => handleCourses(false)}
                                                                course={course}
                                                                imageStyles="h-[120px] w-full" />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </>
                </Popover>
            </div>
        </div>
    )
}

export default CoursesDropdown
