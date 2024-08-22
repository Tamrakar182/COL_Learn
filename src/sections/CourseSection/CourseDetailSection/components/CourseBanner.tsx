import { CourseDetail } from '@/types/course'

interface Props {
    course: CourseDetail
}

function CourseBanner({ course }: Props) {
    return (
        <div className="relative rounded-lg overflow-hidden h-[35vh]">
            <img src={course.image} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-left text-white w-full px-4 py-2 flex flex-col justify-between">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">{course.title}</h1>
                    <div className="flex flex-col gap-2">
                        <div className='flex items-center gap-1'>
                            <p>Total Modules:</p>
                            <p className='text-sm md:text-base lg:text-lg'>{course.modules.length}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <p>Duration:</p>
                            <p className='text-sm md:text-base lg:text-lg'>{course.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseBanner