import Container from "@/components/common/container"
import { dummyCourse, categories, dummyMockTest } from "@/mock/data";
import { useNavigate } from "react-router-dom";
import CourseCard from "@/components/course-card";
import TestCard from "@/components/test-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cardVariants } from "@/config-global";
import HeroSection from "../components/HeroSection";
import IconCloudSection from "../components/IconCloud";
import BannerSection from "../components/BannerSection";

const HomeSection = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName: string) => {
        navigate(`/browse?category=${encodeURIComponent(categoryName)}`);
    };

    return (
        <div className=" border-gray-200 dark:bg-white-900 top-0">
            <div className="screen-no-nav max-w-screen-2xl mx-auto px-6 flex items-center justify-center">
                <HeroSection />
            </div>

            <BannerSection />

            <Container>
                <IconCloudSection />
                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xl md:text-4xl font-bold">Start Learning with Free Courses</p>
                        <Button variant="outline" onClick={() => navigate("/browse/courses")}>View All</Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyCourse.slice(0, 4).map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <CourseCard course={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xl md:text-4xl font-bold">Give a Free Mock Test</p>
                        <Button variant="outline" onClick={() => navigate("/browse/tests")}>View All</Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyMockTest.slice(0, 4).map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <TestCard test={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="py-12">
                    <p className="text-xl md:text-4xl font-bold">Top Categories</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
                        {categories.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                onClick={() => handleCategoryClick(item.title)}
                                className="flex gap-2 flex-row items-center p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105"
                            >
                                <span className="text-3xl md:text-6xl">{item.emoji}</span>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.courses} courses</p>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => handleCategoryClick("")}
                            transition={{ duration: 0.5, delay: (categories.length + 1) * 0.2 }}
                            className="flex gap-2 flex-row items-center p-4 cursor-pointer bg-white hover:shadow-md rounded border overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >

                            <span className="text-3xl md:text-6xl">🌎</span>
                            <div>
                                <p>Show All</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </Container >
        </div >
    )
}

export default HomeSection