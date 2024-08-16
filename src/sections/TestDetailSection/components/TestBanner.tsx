import { TestDetailType } from '@/types/test'

interface Props {
    test: TestDetailType
}

const TestBanner = ({ test }: Props) => {
    return (
        <div className="relative rounded-lg overflow-hidden h-[35vh]">
            <img src={test.image} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-left text-white w-full px-4 py-2 flex flex-col justify-between">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">{test.name}</h1>
                    <div className="flex flex-col gap-2">
                        <div className='flex items-center gap-1'>
                            <p>Total Questions:</p>
                            <p className='text-sm md:text-base lg:text-lg'>{test.questions.length}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <p>Duration:</p>
                            <p className='text-sm md:text-base lg:text-lg'>{test.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestBanner;