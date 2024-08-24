import { useState } from "react";
import { QuizType } from "@/types/module";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

interface AnswerGroupProps {
    options: string[];
    onSelect: (value: string) => void;
    selectedAnswer: string | undefined;
    correctAnswer: string;
}

function AnswerGroup({ options, onSelect, selectedAnswer, correctAnswer }: AnswerGroupProps) {
    return (
        <RadioGroup
            value={selectedAnswer}
            onValueChange={onSelect}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            {options.map((option) => {
                const isCorrect = option === correctAnswer;
                const isSelected = option === selectedAnswer;

                let borderColor = "border-gray-300";
                if (isSelected && isCorrect) {
                    borderColor = "border-green-500";
                } else if (isSelected && !isCorrect) {
                    borderColor = "border-red-500";
                }

                return (
                    <div
                        key={option}
                        className={`flex items-center w-full border-2 ${borderColor} cursor-pointer p-4 rounded hover:bg-slate-200 space-x-2`}
                        onClick={() => onSelect(option)}
                    >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option}>
                            {option}
                        </Label>
                    </div>
                );
            })}
        </RadioGroup>
    );
}

const UnitQuiz = ({ quiz }: { quiz: QuizType[] }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<(string | undefined)[]>(Array(quiz.length).fill(undefined));

    const handleAnswerSelect = (index: number, answer: string) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = answer;
        setSelectedAnswers(updatedAnswers);
    };

    return (
        <div className="quiz-container space-y-6">
            {quiz.map((quizItem, index) => (
                <Card key={index} className="w-full space-y-4">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold italic text-gray-500">
                            Question No. {index + 1}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl font-bold pb-4">{quizItem.question}</p>
                        <AnswerGroup
                            options={quizItem.options}
                            onSelect={(value) => handleAnswerSelect(index, value)}
                            selectedAnswer={selectedAnswers[index]}
                            correctAnswer={quizItem.correctAnswer}
                        />
                        {selectedAnswers[index] && (
                            <div className="mt-4">
                                <div className={clsx("text-gray-700", {
                                    "text-green-500": selectedAnswers[index] === quizItem.correctAnswer,
                                    "text-red-500": selectedAnswers[index] !== quizItem.correctAnswer
                                })}>
                                    Selected Answer: <span className="font-bold">{selectedAnswers[index]}</span>
                                </div>
                                {selectedAnswers[index] !== quizItem.correctAnswer && (
                                    <div className="text-green-500">
                                        Correct Answer: <span className="font-bold">{quizItem.correctAnswer}</span>
                                    </div>
                                )}
                                <div className="text-gray-700">
                                    Explanation: {quizItem?.explanation || "No explanation provided"}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default UnitQuiz;
