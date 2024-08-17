import Container from "@/components/common/container"
import { dummyMockTest } from "@/mock/data";
import { NavigateBreadcrumbs } from "@/components/navigate-breadcrumbs";
import { motion } from "framer-motion";
import TestCard from "@/components/test-card";
import { cardVariants } from "@/config-global";

const links = [
    { href: "/", label: "Home" },
    { href: "/browse", label: "Browse" },
    { label: "Tests" },
]

const BrowseTestSection = () => {
    return (
        <div className=" border-gray-200 dark:bg-white-900 top-0">
            <Container>
                <NavigateBreadcrumbs items={links} />
                <div className="py-12">
                    <p className="text-lg font-bold text-blue-500">100% Free</p>
                    <p className="text-4xl font-bold">Mock Tests Available</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {dummyMockTest.map((item, index) => (
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
            </Container>
        </div >
    )
}

export default BrowseTestSection