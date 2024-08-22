import { dummyCourseDetail } from '@/mock/data'
import CourseDetailsSection from '@/sections/CourseSection/CourseDetailSection/layout'

export default function CourseDetailsPage() {
  return (
    <CourseDetailsSection course={dummyCourseDetail} />
  )
}