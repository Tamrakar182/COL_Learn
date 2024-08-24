import { dummyCourseDetail } from "@/mock/data";
import CourseUnitSection from "@/sections/CourseSection/CourseUnitSection/layout";

export default function CourseUnitPage() {
    return <CourseUnitSection course={dummyCourseDetail} />
}