import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import mock from '@/assets/mock';
import Container from '@/components/common/container';
import { useNavigate } from 'react-router-dom';
import CourseCard from '@/components/course-card';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { dummyCourse } from '@/mock/data';
import { cardVariants } from '@/config-global';
import { CourseType } from '@/types/course';

interface Props {
    currentCourse: CourseType;
}

function CourseCompleted({ currentCourse }: Props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex relative min-h-[200px] flex-col items-center justify-center bg-background">
                <img
                    src={mock.mockSuccess}
                    className="absolute z-0 inset-0 w-full h-full object-cover"
                />
                <p className='text-white font-bold text-3xl z-20'>Great Job!!</p>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            </div>


            <Container>
                <div className="flex items-center justify-center my-8">
                    <Card className="max-w-lg">
                        <CardHeader>
                            <CardTitle>
                                🎉Course Completed!🎉
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg mt-4">
                                You have completed all the modules in {" "}
                                <span className='font-bold'>
                                    {currentCourse.title}{" "}
                                </span>
                                course.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <h1 className="text-lg font-bold">Don't lose your momentum, keep learning</h1>
                    <p className="text-lg">Below you will find recommended content to help you along your path!</p>
                </div>
                <div className="pt-12">
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
            </Container>
        </>
    )
}

export default CourseCompleted