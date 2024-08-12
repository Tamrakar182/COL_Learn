import Button from "@/components/common/button";
import Container from "@/components/common/container"
import { dummyCourse, categories } from "@/mock/data";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import HeroSection from "../components/HeroSection";
import IconCloudSection from "../components/IconCloud";

const HomeSection = () => {
    const navigate = useNavigate();
    return (
        <div className=" border-gray-200 dark:bg-white-900 top-0">
            <div className="screen-no-nav max-w-screen-2xl mx-auto px-6 flex items-center justify-center">
                <HeroSection />
            </div>

            <div className="bg-[#5046e6] my-4 w-full h-auto text-white font-bold flex justify-center py-8">
                <div className="max-w-screen-2xl w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-6xl md:text-8xl">200+</h1>
                        <span className="text-xl mt-2">Courses</span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-6xl md:text-8xl">50+</h1>
                        <span className="text-xl mt-2">Mock Exams</span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-6xl md:text-8xl">20+</h1>
                        <span className="text-xl mt-2">Instructors</span>
                    </div>
                </div>
            </div>


            <Container>
                <IconCloudSection />
                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <p className="text-4xl font-bold">Start Learning with Free Courses</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyCourse.slice(0, 4).map((item) => (
                            <CourseCard key={item.title} course={item} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button onClick={() => navigate("/courses")}>View All</Button>
                    </div>
                </div>

                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <p className="text-4xl font-bold">Give a Free Mock Test</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyCourse.slice(0, 4).map((item) => (
                            <CourseCard key={item.title} course={item} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button onClick={() => navigate("/courses")}>View All</Button>
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
                        <div
                            className="flex flex-row items-center p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
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

export default HomeSection