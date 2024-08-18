import Container from '@/components/common/container';
import { NavigateBreadcrumbs } from "@/components/navigate-breadcrumbs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CourseDetail } from '@/types/course';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

import CourseModules from '../components/CourseModule';
import CourseBanner from '../components/CourseBanner';
import RelatedCourses from '../components/RelatedCourses';

interface Props {
    course: CourseDetail;
}

const CourseDetailsSection = ({ course }: Props) => {
    const navigate = useNavigate();

    const links = [
        { href: "/", label: "Home" },
        { href: "/browse", label: "Browse" },
        { href: "/browse/courses", label: "Courses" },
        { label: course.title },
    ]

    const nextModule = course.modules.find((item) => item.id === course.nextModule);

    const handleCategoryClick = (categoryName: string) => {
        navigate(`/browse?category=${encodeURIComponent(categoryName)}`);
    };

    return (
        <>
            <Container>
                <NavigateBreadcrumbs items={links} />
                <div className="rounded-lg flex flex-col pt-4 gap-10">
                    <CourseBanner course={course} />

                    <div className='flex flex-wrap gap-2'>
                        <span className="text-xl font-bold whitespace-nowrap">Category:</span>
                        <div className="flex flex-wrap gap-2">
                            {course.categories.map((item) => (
                                <Badge
                                    key={item.id}
                                    onClick={() => handleCategoryClick(item.name)}
                                    className='bg-[#3b82f6] text-sm cursor-pointer items-center justify-center'
                                >
                                    {item.name}
                                </Badge>
                            ))}
                        </div>
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
                            <Button className="text-xl bg-[#3b82f6] hover:bg-[#3b83f672] rounded-none py-8">
                                Continue
                            </Button>
                        </div>
                    </div>

                    <RelatedCourses />
                </div>
            </Container>
            <Button className="md:hidden bg-[#3b82f6] hover:bg-[#3b83f672] text-3xl rounded-none py-8 w-full fixed bottom-0">
                Continue
            </Button>
        </>
    );
}

export default CourseDetailsSection;
