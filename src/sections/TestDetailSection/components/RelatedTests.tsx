import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import TestCard from "@/components/test-card"
import { cardVariants } from "@/config-global"
import { dummyMockTest } from "@/mock/data"

const RelatedTests = () => {
    const navigate = useNavigate();
    return (
        <div className="py-4 mt-8">
            <div className="flex flex-row items-center justify-between">
                <p className="md:text-4xl text-xl font-bold">Related Mock Tests</p>
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

                        <TestCard key={item.id} test={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default RelatedTests