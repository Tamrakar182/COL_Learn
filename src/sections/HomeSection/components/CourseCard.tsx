import { CourseType } from "@/types/course";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

const CourseCard = ({ course }: { course: CourseType }) => {
    return (
        <div className="flex flex-col p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105">
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

export default CourseCard;