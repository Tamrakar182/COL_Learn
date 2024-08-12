import Container from "@/components/common/container"
import { dummyCourse } from "@/mock/data";
import { CourseType } from "@/types/course";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }: { course: CourseType }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/courseDetail")} className="flex flex-col p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={course.image} className="rounded w-full h-[200px] object-cover" />
            <div className="mt-4">
                <p className="text-2xl">{course.title}</p>

                <div className="flex flex-row gap-2 items-center">
                    <GoClockFill />
                    <p>{course.duration}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FaChalkboardTeacher />
                    <p>{course.teacher}</p>
                </div>
            </div>
        </div>
    )
}

const Course = () => {
    return (
        <div className=" border-gray-200 dark:bg-white-900 top-0">
            <Container>
                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <p className="text-4xl font-bold">Currently Available Courses</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyCourse.map((item) => (
                            <CourseCard key={item.title} course={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default Course