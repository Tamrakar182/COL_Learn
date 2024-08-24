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
            <div className="bg-slate-200 py-4 mb-2 w-full justify-evenly flex flex-row">
                <div className="flex items-center flex-col gap-2">
                    <span className="rounded-xl font-bold mb-1 px-2 py-1 bg-green-700 text-md align-middle text-white min-w-max max-w-max">
                        {answers.filter((answer) => answer !== undefined).length}
                    </span>
                    <p className="font-bold text-green-700">Answered</p>
                </div>

                <div className="flex items-center flex-col gap-2">
                    <span className="rounded-xl font-bold mb-1 px-2 py-1 bg-slate-400 text-md align-middle text-white min-w-max max-w-max">
                        {answers.filter((answer) => answer === undefined).length}
                    </span>
                    <p className="font-bold text-slate-400">Unanswered</p>
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