const BannerSection = () => {
    return (
        <div className="bg-[#3b82f6] my-4 w-full h-auto text-white font-bold flex justify-center py-8">
            <div className="max-w-screen-2xl w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl md:text-8xl">200+</h1>
                    <span className="text-xl mt-2">Courses</span>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl md:text-8xl">50+</h1>
                    <span className="text-xl mt-2">Mock Exams</span>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl md:text-8xl">20+</h1>
                    <span className="text-xl mt-2">Instructors</span>
                </div>
            </div>
        </div>
    )
}

export default BannerSection;