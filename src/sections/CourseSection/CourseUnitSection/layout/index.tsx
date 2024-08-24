import { useParams, useNavigate } from 'react-router-dom';
import { CourseDetail } from '@/types/course';
import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { NavigateBreadcrumbs } from '@/components/navigate-breadcrumbs';

import UnitNotFound from '../components/UnitNotFound';
import UnitDropDown from '../components/UnitDropDown';
import UnitContent from '../components/UnitContent';
import UnitVideo from '../components/UnitVideo';
import UnitQuiz from '../components/UnitQuiz';

interface Props {
    course: CourseDetail;
}

const CourseUnitSection = ({ course }: Props) => {
    const { courseId, moduleId, unitId } = useParams<{ courseId: string; moduleId: string; unitId: string }>();
    const navigate = useNavigate();

    const module = course.modules.find((item) => item.id === moduleId);
    const unit = module?.units.find((item) => item.id === unitId);

    if (!unit || !module || !courseId) {
        return <UnitNotFound />;
    }

    const links = [
        { href: "/", label: "Home" },
        { href: "/browse", label: "Browse" },
        { href: "/browse/courses", label: "Courses" },
        { href: `/browse/courses/${course.id}`, label: course.title },
        { href: `/browse/courses/${course.id}/module/${module.id}`, label: module.name },
        { label: unit.title },
    ]

    const getNextUnitId = () => {
        if (module) {
            const currentIndex = module.units.findIndex((u) => u.id === unitId);
            if (currentIndex >= 0 && currentIndex < module.units.length - 1) {
                return module.units[currentIndex + 1].id;
            }
        }
        return null;
    };

    const getPrevUnitId = () => {
        if (module) {
            const currentIndex = module.units.findIndex((u) => u.id === unitId);
            if (currentIndex > 0) {
                return module.units[currentIndex - 1].id;
            }
        }
        return null;
    }

    const handleNextUnit = () => {
        const nextUnitId = getNextUnitId();
        if (nextUnitId) {
            navigate(`/browse/courses/${courseId}/module/${moduleId}/unit/${nextUnitId}`);
        } else {
            navigate(`/browse/courses/${courseId}/module/${moduleId}/complete`);
        }
    };

    const handlePrevUnit = () => {
        const prevIndex = getPrevUnitId();
        if (prevIndex) {
            navigate(`/browse/courses/${courseId}/module/${moduleId}/unit/${prevIndex}`);
        } else {
            navigate(`/browse/courses/${courseId}/module/${moduleId}`);
        }
    }

    return (
        <>
            <Container>
                <NavigateBreadcrumbs items={links} />
            </Container>

            <div className="w-full bg-gray-200">
                <Container>
                    <div className="justify-center flex flex-row py-4 my-2 md:justify-between">
                        <Button
                            onClick={handlePrevUnit}
                            variant="ghost"
                            className="hidden md:flex text-xl rounded-none"
                        >
                            {getPrevUnitId() ? 'Go Back' : 'Back to Details'}
                            <ChevronRight className="h-4 w-4" />
                        </Button>

                        <UnitDropDown
                            courseId={courseId}
                            moduleId={module.id}
                            unitId={unit.id}
                            module={module}
                        />

                        <Button
                            onClick={handleNextUnit}
                            variant="ghost"
                            className="hidden md:flex text-xl rounded-none"
                        >
                            {getNextUnitId() ? 'Next Unit' : 'Finish Course'}
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col gap-2 mt-4'>
                        <span className="text-3xl font-bold">{unit.title}</span>
                        <span className="text-lg text-muted-foreground">{unit.time}</span>
                    </div>

                    <div className="renderedHTML">
                        {unit.type === 'content' && unit.content && <UnitContent content={unit.content} />}
                        {unit.type === 'video' && unit.videoId && <UnitVideo embedId={unit.videoId} />}
                        {unit.type === 'quiz' && unit.quiz && <UnitQuiz quiz={unit.quiz} />}
                    </div>

                </div>
                {getNextUnitId() && (
                    <>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="text-3xl font-bold mb-4">
                            Next Unit: {module.units.find((u) => u.id === getNextUnitId())?.title}
                        </div>
                    </>
                )}
                <Button
                    onClick={handleNextUnit}
                    className="hidden md:flex text-xl bg-[#3b82f6] hover:bg-[#3b83f672] my-8 py-8"
                >
                    {getNextUnitId() ? 'Next Unit' : 'Finish Course'}
                </Button>
            </Container >
            <Button
                onClick={handleNextUnit}
                className="md:hidden bg-[#3b82f6] hover:bg-[#3b83f672] text-3xl rounded-none py-8 w-full fixed bottom-0"
            >
                {getNextUnitId() ? 'Next Unit' : 'Finish Course'}
            </Button>
        </>
    );
};

export default CourseUnitSection;
