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
            <div className="bg-black p-4 rounded-lg text-white text-lg font-bold fixed top-4 right-5 z-[60] shadow-lg">
                <span className="mr-2">Time Left:</span>
                {formatTime(timeLeft)}
            </div>
            <Container className="py-8">
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h1 className="text-3xl font-bold mb-2">{testDetails.name}</h1>
                    <p className="text-gray-600">{testDetails.duration} • {testDetails.questions.length} Questions</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-2/3">
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold mb-4">Question No. {activeQuestion + 1}</h2>
                            <QuestionCard
                                activeQuestion={activeQuestion}
                                activeQuestionData={activeQuestionData}
                                answers={answers}
                                handleAnswerSelect={handleAnswerSelect}
                            />
                        </div>
                        <NavigationButtons
                            activeQuestion={activeQuestion}
                            handleQuestionSelect={handleQuestionSelect}
                            questionsLength={testDetails.questions.length}
                        />
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Question Overview</h3>
                            <QuestionSelection
                                activeQuestion={activeQuestion}
                                answers={answers}
                                setActiveQuestion={setActiveQuestion}
                                testDetails={testDetails}
                            />
                            <Button onClick={() => toggle()} className="w-full mt-6 bg-red-600 hover:bg-red-700">End Test</Button>
                        </div>
                    </div>
                </div>
                <ConfirmationDialog
                    answers={answers}
                    open={state}
                    toggle={toggle}
                    handleSubmit={handleSubmit}
                    testDetails={testDetails}
                />
            </Container>
        </>
    )
}

export default TestQuizSection