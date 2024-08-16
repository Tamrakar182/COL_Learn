import Container from "@/components/common/container"
import { TestDetailType } from "@/types/test"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import useToggleState from "@/hooks/useToggleState"
import QuestionCard from "../components/QuestionCard"
import ConfirmationDialog from "../components/ConfirmationDialog"
import QuestionSelection from "../components/QuestionSelection"
import { parseDuration, formatTime } from "@/utils/time"

interface Props {
    testDetails: TestDetailType
}

const TestSection = ({ testDetails }: Props) => {
    const { state, toggle } = useToggleState();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState<(string | undefined)[]>(Array(testDetails.questions.length).fill(undefined));
    const [timeLeft, setTimeLeft] = useState(parseDuration(testDetails.duration));

    const activeQuestionData = testDetails.questions[activeQuestion];

    const handleAnswerSelect = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[activeQuestion] = answer;
        setAnswers(newAnswers);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime > 0) return prevTime - 1;
                clearInterval(timer);
                return 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = () => {
        console.log(answers);
        toggle();
    };

    return (
        <>
            <Container>
                <div className="screen-no-nav">
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                        <div className="col-span-2 items-center h-full">
                            <QuestionCard
                                activeQuestion={activeQuestion}
                                activeQuestionData={activeQuestionData}
                                answers={answers}
                                handleAnswerSelect={handleAnswerSelect}
                            />
                            <div className="flex flex-row justify-between mt-4">
                                <Button
                                    disabled={activeQuestion === 0}
                                    onClick={() => setActiveQuestion((prev) => Math.max(prev - 1, 0))}
                                >
                                    Prev
                                </Button>
                                <Button
                                    disabled={activeQuestion === testDetails.questions.length - 1}
                                    onClick={() => setActiveQuestion((prev) => Math.min(prev + 1, testDetails.questions.length - 1))}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-1 md:items-end flex flex-col gap-4 mb-4">
                            <QuestionSelection
                                activeQuestion={activeQuestion}
                                answers={answers}
                                setActiveQuestion={setActiveQuestion}
                                testDetails={testDetails}
                            />
                            <Button onClick={() => toggle()} className="bg-red-600">End Test</Button>
                        </div>
                    </div>
                    <ConfirmationDialog
                        answers={answers}
                        open={state}
                        toggle={toggle}
                        handleSubmit={handleSubmit}
                        testDetails={testDetails}
                    />
                </div>
            </Container>
            <div className="bg-black p-4 rounded-lg text-white text-lg font-bold fixed bottom-5 left-5">
                {formatTime(timeLeft)}
            </div>
        </>
    )
}

export default TestSection