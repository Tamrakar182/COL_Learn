import { useParams, useNavigate } from 'react-router-dom';
import { CourseDetail } from '@/types/course';
import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import parse from 'html-react-parser';
import { NavigateBreadcrumbs } from '@/components/navigate-breadcrumbs';

import ModuleNotFound from '../components/ModuleNotFound';

interface Props {
    course: CourseDetail;
}

const CourseModulePage = ({ course }: Props) => {
    const { moduleId } = useParams<{ moduleId: string }>();
    const navigate = useNavigate();

    const module = course.modules.find((item) => item.id === moduleId);


    if (!module) {
        return <ModuleNotFound />;
    }

    const links = [
        { href: "/", label: "Home" },
        { href: "/browse", label: "Browse" },
        { href: "/browse/courses", label: "Courses" },
        { href: `/browse/courses/${course.id}`, label: course.title },
        { label: module.name },
    ]

    const handleContinue = () => {
        if (module.units.length > 0) {
            const firstUnit = module.units[0];
            navigate(`/browse/courses/${course.id}/module/${module.id}/unit/${firstUnit.id}`);
        }
    };

    return (
        <>
            <Container>
                <NavigateBreadcrumbs items={links} />

                <div className="flex flex-col gap-10 pt-8">
                    <h1 className="text-5xl font-bold text-blue-600">{module.name}</h1>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Module Description</h2>
                        <div className="renderedHTML prose max-w-none">
                            {parse(module.description)}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Units in this Module</h2>
                        <ul className="space-y-4">
                            {module.units.map((unit, index) => (
                                <li key={unit.id} className="flex items-center space-x-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    <span className="text-lg font-medium">{unit.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button
                        onClick={handleContinue}
                        className="text-xl hidden md:flex bg-[#3b82f6] hover:bg-blue-700 text-white rounded-lg py-8 transition duration-300 ease-in-out transform hover:scale-95"
                    >
                        Start First Unit
                    </Button>
                </div>
            </Container>
            <Button
                onClick={handleContinue}
                className="md:hidden bg-[#3b82f6] hover:bg-[#3b83f6e2] transition duration-300 ease-in-out transform hover:scale-95 text-3xl rounded-none py-8 w-full fixed bottom-0"
            >
                Start First Unit
            </Button>
        </>
    );
};

export default CourseModulePage;
