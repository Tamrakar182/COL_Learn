import Container from "@/components/common/container"
import { dummyCourse } from "@/mock/data";
import { NavigateBreadcrumbs } from "@/components/navigate-breadcrumbs";
import CourseCard from "../components/CourseCard"

const links = [
    { href: "/", label: "Home" },
    { href: "/", label: "Browse" },
    { label: "Courses" },
]

const BrowseCoursesSection = () => {
    return (
        <div className=" border-gray-200 dark:bg-white-900 top-0">
            <Container>
                <NavigateBreadcrumbs items={links} />
                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <p className="text-4xl font-bold">Currently Available Courses</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyCourse.map((item) => (
                            <CourseCard key={item.id} course={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default BrowseCoursesSection