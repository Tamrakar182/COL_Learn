import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { TestQuestion } from "@/types/test"

interface Props {
    activeQuestion: number
    activeQuestionData: TestQuestion
    answers: (string | undefined)[]
    handleAnswerSelect: (value: string) => void
}

interface AnswerGroupProps {
    options: string[]
    onSelect: (value: string) => void
    selectedAnswer: string | undefined
}

function AnswerGroup({ options, onSelect, selectedAnswer }: AnswerGroupProps) {
    return (
        <RadioGroup
            value={selectedAnswer}
            onValueChange={onSelect}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            {options.map((option) => (
                <div
                    key={option}
                    className="flex items-center w-full border cursor-pointer p-4 rounded hover:bg-slate-200 space-x-2"
                    onClick={() => onSelect(option)}
                >
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>
                        {option}
                    </Label>
                </div>
            ))}
        </RadioGroup>
    )
}


function QuestionCard({ activeQuestion, activeQuestionData, answers, handleAnswerSelect }: Props) {
    return (
        <Card className="w-full space-y-4">
            <CardHeader>
                <CardTitle className="text-xl font-bold italic text-gray-500">
                    Question No. {activeQuestion + 1}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xl font-bold pb-4">{activeQuestionData.question}</p>
                <AnswerGroup
                    options={activeQuestionData.options}
                    onSelect={handleAnswerSelect}
                    selectedAnswer={answers[activeQuestion]}
                />
            </CardContent>
        </Card>
    )
}

export default QuestionCard