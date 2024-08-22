import { TestDetailType } from "@/types/test"
import clsx from "clsx"

interface Props {
    testDetails: TestDetailType
    answers: (string | undefined)[]
    activeQuestion: number
    setActiveQuestion: (index: number) => void
}

function QuestionSelection({ testDetails, answers, activeQuestion, setActiveQuestion }: Props) {
    return (
        <div className=" flex flex-col border rounded max-h-96">
            <p className="px-4 pt-4 font-bold text-lg">
                {testDetails.name}
            </p>
            <div className="px-4">
                {testDetails.duration} • {testDetails.questions.length} Questions
            </div>

            <div className="bg-slate-200 py-4 my-2 w-full justify-evenly flex flex-row">
                <div className="flex items-center flex-col gap-2">
                    <p className="p-2 bg-green-400 rounded-full">
                        {answers.filter((answer) => answer !== undefined).length}
                    </p>
                    <p>Answered</p>
                </div>

                <div className="flex items-center flex-col gap-2">
                    <p className="p-2 bg-slate-300 rounded-full">
                        {answers.filter((answer) => answer === undefined).length}
                    </p>
                    <p>Unanswered</p>
                </div>
            </div>

            <div className="grid grid-cols-5 py-4 px-8 gap-4 overflow-y-scroll">
                {[...Array(testDetails.questions.length)].map((_, index) => (
                    <div
                        key={index}
                        className={clsx("p-2 border rounded flex items-center justify-center hover:bg-slate-200 cursor-pointer", {
                            "bg-slate-200": activeQuestion === index,
                            "border-green-500": answers[index] !== undefined
                        })}
                        onClick={() => setActiveQuestion(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionSelection