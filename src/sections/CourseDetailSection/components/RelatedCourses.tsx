import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import CourseCard from "@/components/course-card"
import { cardVariants } from "@/config-global"
import { dummyCourse } from "@/mock/data"

const RelatedCourses = () => {
    const navigate = useNavigate();
    return (
        <div className="py-4 mt-8">
            <div className="flex flex-row items-center justify-between">
                <p className="md:text-4xl text-xl font-bold">Related Courses</p>
                <Button variant="outline" onClick={() => navigate("/browse/tests")}>View All</Button>
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

                        <CourseCard key={item.id} course={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default RelatedCourses