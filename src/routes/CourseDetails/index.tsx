import { dummyCourseDetail } from '@/mock/data'
import CourseDetailsSection from '@/sections/CourseDetailSection/layout'

export default function CourseDetailsPage() {
  return (
    <CourseDetailsSection course={dummyCourseDetail} />
  )
}