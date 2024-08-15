import Container from '@/components/common/container';
import CourseModules from '../components/CourseModule';
import { NavigateBreadcrumbs } from "@/components/navigate-breadcrumbs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CourseDetail } from '@/types/course';
import parse from 'html-react-parser';
import CourseBanner from '../components/CourseBanner';

interface Props {
    course: CourseDetail;
}

const CourseDetailsSection = ({ course }: Props) => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/", label: "Browse" },
        { href: "/browse/courses", label: "Courses" },
        { label: course.title },
    ]

    const nextModule = course.modules.find((item) => item.id === course.nextModule);

    return (
        <>
            <Container>
                <NavigateBreadcrumbs items={links} />
                <div className="rounded-lg flex flex-col pt-4 gap-10">
                    <CourseBanner course={course} />

                    <div className='flex flex-row gap-2'>
                        <span className="text-xl font-bold">Category:</span>
                        {course.categories.map((item) => (
                            <Badge className='cursor-pointer items-center justify-center'>
                                {item.name}
                            </Badge>
                        ))}
                    </div>

                    {/* description */}
                    <div className="renderedHTML">
                        {parse(course.description)}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-10">
                        <CourseModules modules={course.modules} />
                        <div className="md:flex flex-col hidden border h-fit p-4 mt-11 items-center justify-center">
                            <div className='flex flex-row gap-4'>
                                <span>Progress: </span>
                                <Badge className='bg-green-700 mb-2'>
                                    {course.completion}% Complete
                                </Badge>
                            </div>
                            {nextModule && (
                                <div className="text-center mb-4">
                                    <h2 className="text-xl">Next Course:</h2>
                                    <h2 className="text-xl font-bold">{nextModule.name}</h2>
                                    <p className="text-sm">Duration: {nextModule.time}</p>
                                </div>)}
                            <Button className="text-xl rounded-none py-8">
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <Button className="md:hidden text-3xl rounded-none py-8 w-full fixed bottom-0">
                Continue
            </Button>
        </>
    );
}

export default CourseDetailsSection;
