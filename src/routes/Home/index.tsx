import { Mock } from "@/assets";
import Button from "@/components/common/button";
import Container from "@/components/common/container"
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

interface CourseType {
    title: string;
    duration: string;
    teacher: string;
    image: string;
}

const dummyCourse: CourseType[] = [
    {
        title: "LokSewa Preparation 1",
        duration: "100 Hours",
        teacher: "Dr. Bailochan Tuladhar",
        image: Mock.mock2,
    },
    {
        title: "LokSewa Preparation 2",
        duration: "100 Hours",
        teacher: "Dr. Bailochan Tuladhar",
        image: Mock.mock3,
    },
    {
        title: "LokSewa Preparation 3",
        duration: "100 Hours",
        teacher: "Dr. Bailochan Tuladhar",
        image: Mock.mock4,
    },
    {
        title: "LokSewa Preparation 4",
        duration: "100 Hours",
        teacher: "Dr. Bailochan Tuladhar",
        image: Mock.mock4,
    }
]

const categories = [
    {
        title: "LokSewa Preparation",
        emoji: "🏢",
        courses: 10,
    },
    {
        title: "ILETS Preparation",
        emoji: "✈",
        courses: 10,
    },
    {
        title: "PTE Preparation",
        emoji: "🗺",
        courses: 10,
    },
    {
        title: "MERN Stack Course",
        emoji: "🐱‍💻",
        courses: 10,
    }
]

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

const Home = () => {
    return (
        <div className=" border-gray-200 dark:bg-white-900 top-0">
            <Container>
                <div className="min-h-screen flex items-center justify-center">
                    <img src={Mock.mock1} className="rounded min-h-screen w-full object-cover" />
                </div>
                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <p className="text-4xl font-bold">Start Learning with Free Courses</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyCourse.map((item) => (
                            <CourseCard key={item.title} course={item} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button>Show More</Button>
                        <Button>View All</Button>
                    </div>
                </div>

                <div className="py-12">
                    <p className="text-4xl font-bold">Top Categories</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
                        {categories.map((item) => (
                            <div key={item.title} className="flex gap-2 flex-row items-center p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <span className="text-6xl">{item.emoji}</span>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.courses} courses</p>
                                </div>

                            </div>
                        ))}
                        <div className="flex flex-row items-center p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <span className="text-6xl">🌎</span>
                                <div>
                                    <p>Show All</p>
                                </div>

                            </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Home