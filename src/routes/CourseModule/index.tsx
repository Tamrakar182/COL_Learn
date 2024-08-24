import { dummyCourseDetail } from "@/mock/data";
import CourseModuleSection from "@/sections/CourseSection/CourseModuleSection/layout";

export default function CourseModulePage() {
    return <CourseModuleSection course={dummyCourseDetail} />;
}