import { TestQuestion } from "@/types/test";
import clsx from "clsx";

interface Props {
    questions: TestQuestion[];
    userAnswers: (string | undefined)[];
}

function Solutions({ questions, userAnswers }: Props) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                {questions.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const isCorrect = userAnswer === question.answer;
                    const isNotAnswered = userAnswer === undefined || userAnswer === '';

                    return (
                        <div key={index} className="p-4 border rounded-lg">
                            <p className="font-semibold mb-2">
                                Question {index + 1}: {question.question}
                            </p>
                            <p
                                className={clsx(
                                    "mb-2",
                                    isNotAnswered && "text-gray-500",
                                    isCorrect && "text-green-500",
                                    !isCorrect && !isNotAnswered && "text-red-500"
                                )}
                            >
                                Your Answer: {isNotAnswered ? 'Not answered' : userAnswer}
                            </p>
                            <p className="mb-2">Correct Answer: {question.answer}</p>
                            <p className="text-sm text-gray-600">
                                Explanation: {question.explanation || 'No explanation provided'}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Solutions;
