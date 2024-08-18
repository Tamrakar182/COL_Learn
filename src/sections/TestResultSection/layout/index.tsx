import { useLocation } from "react-router-dom";
import { dummyMockTestDetail, dummyMockTest } from "@/mock/data";
import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestCard from "@/components/test-card";
import { cardVariants } from "@/config-global";
import { useState } from "react";
import Solutions from "../components/Solutions";
import ExamSummary from "../components/ExamSummary";
import NoTestData from "../components/NoTestData";

const TestResultSection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showSolutions, setShowSolutions] = useState(false);

    const userAnswers = location.state?.answers;

    // iso timestamp
    const submitTimeStamp = location.state?.submitTimeStamp;
    const startTimeStamp = location.state?.startTimeStamp;

    if (!userAnswers || !submitTimeStamp || !startTimeStamp) {
        return (
            <NoTestData />
        );
    }

    // duration in time in seconds
    const examDuration = (new Date(submitTimeStamp).getTime() - new Date(startTimeStamp).getTime()) / 1000;

    const rightAnswers = dummyMockTestDetail.questions.map((question) => question.answer);

    const score = userAnswers.reduce((acc: number, answer: string, index: number) => {
        if (answer === rightAnswers[index]) return acc + 1;
        return acc;
    }, 0);

    const handleViewSolutions = () => {
        setShowSolutions(true);
    };

    const handleRetakeExam = () => {
        navigate("/browse/tests/" + dummyMockTestDetail.id + "/start");
    }

    return (
        <Container>
            <ExamSummary
                examDuration={examDuration}
                score={score}
                submitTimeStamp={submitTimeStamp}
                handleRetakeExam={handleRetakeExam}
                handleViewSolutions={handleViewSolutions}
            />

            {showSolutions && (
                <Solutions
                    questions={dummyMockTestDetail.questions}
                    userAnswers={userAnswers}
                />
            )}

            <div className="py-4 mt-8">
                <div className="flex flex-row items-center justify-between">
                    <p className="md:text-4xl text-xl font-bold">More Free Mock Tests</p>
                    <Button variant="outline" onClick={() => navigate("/browse/tests")}>View All</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                    {dummyMockTest.slice(0, 4).map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >

                            <TestCard key={item.id} test={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default TestResultSection;
