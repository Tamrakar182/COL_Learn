import { useParams } from 'react-router-dom';
import { dummyModules, dummyCourse } from '@/mock/data';
import CourseCompleted from '../components/CourseCompleted';
import ModuleCompleted from '../components/ModuleCompleted';

function CourseModuleCompleteSection() {
    const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();

    if (!moduleId || !courseId) {
        return null;
    }

    const currentCourse = dummyCourse.find((course) => course.id === courseId);
    const currentModule = dummyModules.find((module) => module.id === moduleId);

    if (!currentCourse || !currentModule) {
        return null;
    }

    const nextModule = dummyModules.find((module) => module.id === (parseInt(moduleId) + 1).toString());

    if (!nextModule) {
        return (
            <CourseCompleted
                currentCourse={currentCourse}
            />
        )
    }

    return (
        <ModuleCompleted
            currentCourse={currentCourse}
            currentModule={currentModule}
            nextModule={nextModule}
        />
    )
}

export default CourseModuleCompleteSection