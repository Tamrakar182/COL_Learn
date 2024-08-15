import { TestType } from "@/types/test";
import clsx from "clsx";
import { useState } from "react";
import { FaBook } from "react-icons/fa";

const TestCard = ({ test }: { test: TestType }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-col h-full border rounded-xl overflow-hidden bg-gray-50 hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
            <div className="relative">
                <img src={test.image} alt={test.name} className="w-full h-32 object-cover" />
                <div className={clsx("absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded", { "bg-blue-500": !hover, "bg-black": hover })}>
                    {test.duration} min
                </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{test.name}</h2>
                <p className="text-sm text-gray-600 flex items-center gap-2"><FaBook size={16} />{test.questions} Questions</p>
            </div>
            <div className={clsx("px-4 py-2 text-white text-center text-sm font-medium", { "bg-blue-500": !hover, "bg-black": hover })}>
                Take Test
            </div>
        </div>
    );
};

export default TestCard;