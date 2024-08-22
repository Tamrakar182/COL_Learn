import Container from "@/components/common/container"
import { TestDetailType } from "@/types/test"
import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import useToggleState from "@/hooks/useToggleState"
import { parseDuration, formatTime } from "@/utils/time"
import useTimer from "@/hooks/useTimer"
import NavigationButtons from "../components/NavigationButton"
import QuestionCard from "../components/QuestionCard"
import ConfirmationDialog from "../components/ConfirmationDialog"
import QuestionSelection from "../components/QuestionSelection"
import TestNotFound from "../components/TestNotFound"

interface Props {
    testDetails: TestDetailType
}

const TestQuizSection = ({ testDetails }: Props) => {
    const { state, toggle } = useToggleState();
    const navigate = useNavigate();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState<(string | undefined)[]>(Array(testDetails.questions.length).fill(undefined));
    const timeLeft = useTimer(parseDuration(testDetails.duration));

    const [startTimeStamp, setStartTimeStamp] = useState<string>('');

    const activeQuestionData = useMemo(() => testDetails.questions[activeQuestion], [activeQuestion, testDetails.questions]);

    useEffect(() => {
        const startTimeStamp = new Date().toISOString();
        setStartTimeStamp(startTimeStamp);
    }, []);


    const handleAnswerSelect = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[activeQuestion] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        toggle();
        const submitTimeStamp = new Date().toISOString();
        navigate(`/browse/tests/${testDetails.id}/result`, {
            state: {
                answers,
                submitTimeStamp,
                startTimeStamp
            }
        });
    };

    const handleQuestionSelect = (questionIndex: number) => {
        setActiveQuestion(questionIndex);
    };

    if (!testDetails) {
        return <TestNotFound />;
    }
    
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
                            <NavigationButtons
                                activeQuestion={activeQuestion}
                                handleQuestionSelect={handleQuestionSelect}
                                questionsLength={testDetails.questions.length}
                            />
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

export default TestQuizSection